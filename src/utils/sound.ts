// Click sound for UI accents (language switch, hero/footer links, the name
// trigger).
//
// Deliberately Web Audio rather than `new Audio(src)`: an HTMLAudioElement
// only starts fetching when it's first played, so the very first click or
// hover had to wait on a network round-trip plus MP3 decode before making
// any sound — silent right after a page load, and audibly late afterwards
// (Safari especially, whose media-element pipeline adds its own latency).
// Here the clip is fetched and decoded once, up front, and each play is
// just a buffer source firing off an already-decoded buffer: no I/O, no
// decode, no seek.

const CLIP_URL = '/audio/click-mouse.mp3';
const VOLUME = 0.5;

type AudioContextCtor = typeof AudioContext;

let context: AudioContext | undefined;
let gain: GainNode | undefined;
let buffer: AudioBuffer | undefined;
let currentSource: AudioBufferSourceNode | undefined;
let loadStarted = false;

function getContextCtor(): AudioContextCtor | undefined {
  if (typeof window === 'undefined') return undefined;
  return (
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: AudioContextCtor }).webkitAudioContext
  );
}

function getContext(): AudioContext | undefined {
  if (context) return context;

  const Ctor = getContextCtor();
  if (!Ctor) return undefined;

  try {
    context = new Ctor();
    gain = context.createGain();
    gain.gain.value = VOLUME;
    gain.connect(context.destination);
    return context;
  } catch {
    // AudioContext construction can throw in restricted contexts.
    return undefined;
  }
}

/**
 * Fetch + decode the clip ahead of time. Neither step needs a user gesture,
 * so by the time anything is hovered the buffer is ready and playback is
 * instant.
 */
function preload(): void {
  if (loadStarted) return;
  loadStarted = true;

  const ctx = getContext();
  if (!ctx) return;

  void fetch(CLIP_URL)
    .then((response) => response.arrayBuffer())
    .then((data) => ctx.decodeAudioData(data))
    .then((decoded) => {
      buffer = decoded;
    })
    .catch(() => {
      // Missing/undecodable audio shouldn't break anything — just stay silent.
    });
}

/**
 * Browsers start an AudioContext suspended and only allow it to be resumed
 * from a real user gesture — and a hover is not one. Resuming on the first
 * gesture of any kind means that by the time the user hovers something
 * noisy, the context is already running.
 *
 * This replaces the old "play muted, then unmute" priming trick, which
 * Safari does not reliably honour.
 */
function unlock(): void {
  const ctx = getContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') void ctx.resume().catch(() => {});
}

if (typeof document !== 'undefined') {
  preload();

  // Capture phase, so the context is running before any handler that wants
  // to make a sound during this same gesture.
  const options = { capture: true, passive: true } as const;
  document.addEventListener('pointerdown', unlock, options);
  document.addEventListener('touchstart', unlock, options);
  document.addEventListener('keydown', unlock, options);
}

export function playClickSound(): void {
  const ctx = getContext();
  if (!ctx || !gain || !buffer) return;

  // Only ever play into a running context. Starting a source on a suspended
  // one does not fail — it *queues* the sound against a clock that isn't
  // moving, so every hover made before the first click piles up and then
  // fires together the moment the context resumes. That backlog is what
  // produced the doubled sound on the first click (the queued hovers plus
  // the click's own sound) and the late, out-of-sync playback. Dropping the
  // trigger instead costs at most the very first sound of the session,
  // which the browser was never going to let through anyway.
  if (ctx.state !== 'running') {
    void ctx.resume().catch(() => {});
    return;
  }

  // Restart rather than layer: sweeping the pointer across several links in
  // quick succession should retrigger one click, not stack overlapping ones.
  if (currentSource) {
    try {
      currentSource.stop();
    } catch {
      // Already finished — nothing to stop.
    }
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(gain);
  source.onended = () => {
    if (currentSource === source) currentSource = undefined;
  };
  source.start();
  currentSource = source;
}
