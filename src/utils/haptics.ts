/**
 * Fires a very short "tap" vibration on devices/browsers that support the
 * Vibration API and are using a coarse (touch) pointer. Desktop pointers and
 * browsers without the API (notably Safari/iOS, which relies on the native
 * `switch` input for haptics instead) are silently skipped — never throws.
 */
export function triggerHaptic(): void {
  try {
    if (
      typeof navigator !== 'undefined' &&
      'vibrate' in navigator &&
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches
    ) {
      navigator.vibrate(10);
    }
  } catch {
    // Vibration can throw in some restricted/embedded contexts — ignore.
  }
}
