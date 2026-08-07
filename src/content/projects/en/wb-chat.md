---
title: "WB chat. Storing favorites"
summary: "Placeholder summary — replace with the real case study write-up."
year: "2026"
order: 1
role: "Product design, feature from zero to one"
---


## Context and problem

WB Chat is a messenger with [X] DAU / [Y] MAU. A power user carries 100+ chats, channels, and groups: work threads, personal DMs, news channels, bots.

Important things arrive scattered across all of it — files, links, commitments, tasks, account details. There was no built-in way to set any of it aside. Users coming from Telegram and WhatsApp read the absence of a Saved Messages equivalent as a missing table-stakes feature.

Then interviews surfaced a detail that reframed the entire brief.

Users who *do* have a saved-messages feature in other apps call it a **junk drawer** — a place they can't find anything in. So the baseline feature is already built everywhere, and it already doesn't work. What actually saves them are workarounds: pinning messages inside a single chat (capped, and stuck in that one thread), or leaving the app entirely for notes apps, screenshots, and forwarding things to themselves somewhere else.

What's actually broken, specifically:
- Saving is free and instant; retrieving is expensive. That asymmetry compounds for months.
- A flat reverse-chronological feed. Six months in, finding something means scrolling until you hit it.
- Context evaporates. A saved "yeah, Thursday works" means nothing a month later.
- Disposable and permanent live side by side — a one-time SMS code next to account details someone needs for years.
- There's no "done" state. The section has no floor, only accumulation.
- Pinning doesn't scale as a workaround: it lives inside one chat and runs into a cap.

**The core problem: saved messages don't have a storage problem, they have a retrieval problem.** "Junk drawer" isn't about volume — it's the name for a place things go into and never come out of.

## Framing the problem

Before moving to solutions, I pushed back on the brief itself.

The obvious answer: if it's a junk drawer, give it structure. Folders, tags, categories, collections. That's what Instagram, LINE, and X all do. On paper, it fixes the problem.

But there's a trap in that logic. Every one of those solutions moves the work to **the moment of saving**: pick a folder, apply a tag, name a collection. And people save precisely so they *don't* have to think right now — they're mid-conversation, they're moving fast, saving is an act of deferring a decision. We'd be asking for a decision at the exact second someone is running from one.

Which gives us the fork:

**Are we fixing the storage interface, or fixing retrieval itself?**

Checking that fork against the market confirms the worry. On X, bookmarks are one long undifferentiated list, and folders sit behind a paid subscription. The result: bookmark organization became one of the most-requested features on the platform, and an entire cottage industry of third-party AI tools grew up around the gap. Structure alone didn't close it — and even where folders are free (Instagram, LINE), only a minority of users ever set one up.

So I ran the main line of work on proactive retrieval rather than storage organization — while keeping structure in the hypothesis set as its own testable track, not as a given.

**Goal.** Give people a place they trust for the things that matter → remove the fear of losing information → increase trust and return frequency → keep users inside the product instead of defaulting to outside notes apps and screenshots.

**Audience.** Two segments with different jobs:
- *Work:* files, tasks, commitments, account details. Value = fast, precise retrieval.
- *Personal:* links, memes, keepsakes, shopping lists. Value = low-commitment and lightweight.

**Success criteria:**
- **Retrieval rate** — the share of saved items a user comes back to at least once. This is the headline metric: it's what separates a library from a junk drawer.
- Share of users who save at least one message in their first 7/30 days (adoption).
- Return frequency to the section after saving.
- Retention of the "used Saved" cohort vs. control (adjusted for self-selection — engaged users save more to begin with).
- Reduction in "how do I save this / where did my message go" support contacts.
- Qualitative signal: the phrase "junk drawer" disappearing from how users describe their own section in follow-up interviews.

Guardrail: **volume of saves is explicitly not a success metric.** A junk drawer performs beautifully on that number.

## Discovery and research

I benchmarked along two tracks: direct competitors (messengers) and adjacent categories solving the same job on different content.

**Messengers.** Telegram: a feed/by-chat toggle, emoji tags, a Saved tab inside each chat — with multi-tagging gated behind Premium. WhatsApp: minimal, no multi-select, but it filters by chat and jumps you back to the original with surrounding context. LINE Keep: folder-style Collections plus a cross-cutting Favorites star layered on top — a two-tier model. VK: splits the self-chat and the type-based bookmark library into two separate places entirely.

**Adjacent categories.** Instagram: collections are free for everyone, plus collaborative collections since 2022. X: folders behind a paywall — the cautionary tale that spawned a third-party tool market. Google Maps: default lists out of the box, notes attached to each saved item, and shareable lists others can follow via link. Pocket and Raindrop: tagging *is* the product, not a side feature.

**Key takeaways:**
- The baseline (save, search, private, synced) is table stakes. There's no winning there.
- Manual organization is a solved problem that doesn't work. Everyone shipped it; a minority uses it.
- **No major messenger has made retrieval proactive.** Saved content sits and waits to be come back for. That's the open lane.
- None of the comparables manage the lifecycle of saved content — everything is stored forever and stored identically.
- Sharing a personal collection is a proven pattern (Google Maps, Instagram) that no messenger has picked up.

## Hypotheses

Written in a consistent format so they read as testable, not as a wish list.

**H1 · Retrieval over storage: contextual resurfacing.** Saved content comes to the user instead of waiting. Open your thread with Elena and a bar reads "3 saved messages from this chat." Search for an address and saved items blend into results. *Why:* it sidesteps the organization problem entirely, because there's nothing left to go looking for. *Measure:* retrieval rate; share of returns initiated by the system rather than the user. *Kill:* if the bar's CTR is under 3%, it's reading as noise.

**H2 · Saving as a deferred decision, not a filing decision.** At save time we ask *when to bring it back*, not *where to put it*: tonight / this weekend / next month / keep forever. One tap. *Why:* people rarely know the category in that moment, but they almost always know the urgency. *Measure:* share of saves with a timeframe set; retrieval rate for timed vs. untimed saves. *Kill:* if fewer than 20% set a timeframe, even one tap is too much friction.

**H3 · Expiration by default: entropy instead of accumulation.** Invert the default. Today: keep forever, delete manually. Proposed: anything not returned to within N days quietly moves to an Archive. *Why:* a junk drawer is physically impossible in a system that has outflow. *Guardrail:* nothing is ever permanently deleted, only moved, with notice before it goes. *Measure:* size of the active layer at 3 and 6 months; restore-from-archive rate. *Kill:* if restores exceed 15%, the heuristic is wrong too often and it corrodes trust.

**H4 · Reason for saving, instead of category.** One tap: *to read* / *to do* / *to reference* / *to keep*. This isn't a folder — it's a lifecycle. "To read" expires, "to do" nudges you, "to reference" lives forever and gets indexed first, "to keep" flows into a separate memories feed. *Why:* a single micro-action feeds H2, H3, and task conversion all at once. *Measure:* share of saves with a reason set; retrieval rate broken out by reason. *Kill:* if it adds more than a second to the save action — the base flow matters more.

**H5 · Scarcity instead of unlimited (the anti-feature).** A hard cap on a top "Important" tier — say 20 slots. Adding a 21st means choosing what gets bumped. *Why:* a junk drawer requires infinite capacity; a cap forces curation without asking anyone to build a single folder. *Important:* this applies only to the top tier, not to Saved overall, which stays unlimited — otherwise it collides with the unlimited-storage promise. *Measure:* retrieval rate inside the capped tier vs. the general pool. *Kill:* if the cap reads as artificial scarcity engineered to sell a subscription — watch complaints and store reviews.

**H6 · Save the context, not the message.** What lands in Saved isn't a bare line ("yeah, Thursday works") but a card: the message plus one or two surrounding turns, author, date, source. *Why:* the main reason saved content is useless later is lost context, not missing folders. Cheap to build — the metadata already exists. *Measure:* share of returns that end in a jump back to the source chat (this should *fall* — the answer was already there). *Kill:* if cards stretch the feed enough to slow scanning.

**H7 · Passive curation: importance is inferred from behavior.** No manual priority. Things you opened, forwarded, or searched for rise. Things you never came back to sink. Sorting by demonstrated usefulness instead of by date. *Why:* users don't want to manage a list, but their behavior has already annotated it. *Measure:* retrieval rate of the top 10 items; time-to-find. *Kill:* if users report that "the order keeps changing" or something "disappeared" — predictability beats accuracy here.

**H8 · A cleanup ritual instead of forced filing.** Once a week: "Saved review" — five cards, swipe keep or drop, 30 seconds. Cleanup as a micro-ritual rather than an evening project. Side effect: a retention loop with a legitimate reason to come back. *Measure:* digest open rate, volume reviewed, effect on retrieval rate. *Kill:* if open rate drops below 10% by week three, the ritual didn't land — it doesn't move to MMP.

**H9 · Saved as raw material, not a warehouse.** One action turns a set of saved items into an artifact: a shopping list, a meeting agenda, a link roundup to send a colleague. *Why:* it changes the meaning of the section from "where things sit" to "where things come from." A junk drawer is, by definition, a place that produces nothing. *Measure:* share of users who create at least one artifact; outbound shares as a viral channel. *Monetization link:* assembly and export are a natural premium candidate.

**H10 · A hidden tier behind biometrics.** Part of the junk drawer is stuff people don't want in the main list and don't want visible over their shoulder. A separate private tier. *Why:* an unobvious but real reason people never tidy up is that they're uncomfortable even looking at part of the contents. *Measure:* tier activation rate. *Risk:* complicates the privacy model and needs its own recovery-access design.

**H11 · Loss framing for cleanup.** "12 saved links you've never opened — clear them?" instead of "tidy up your saved items." *Why:* loss framing typically motivates more strongly. *But:* it edges toward pressuring someone inside their own private space. Mandatory guardrail on CSAT and complaint volume. *Kill:* if complaints about pushiness rise — in a personal storage space, the cost of that mistake is higher than in a promo context.

**H0 · Anti-hypothesis: the junk drawer is fine.** It's possible people *call* it a junk drawer while using it exactly as intended, and that genuine suffering is limited to a minority. Tested before any development: a prototype with excellent search and no structure at all, usability-tested with 10–15 users. If the complaint disappears once search is fast, the entire structure track is unnecessary and MVP resource goes fully into search and H1. **This is tested first, because it can invalidate half the list.**

### Prioritization

Hypotheses run through RICE (Reach × Impact × Confidence ÷ Effort). The MVP selection logic: H6, H1, and H7 require **zero new actions from the user** and hit retrieval directly. Anything that asks the user to choose or file something (H2, H4, H8) moves to MMP — we need to prove baseline retrieval works first.

## Solution

In the MVP:

- **Baseline parity** — one-action save, multi-select, search, jump to source, sync, privacy. Non-negotiable groundwork.
- **Context cards instead of bare lines** — saved content stays legible a month later.
- **Contextual resurfacing in the source chat** — saved items announce themselves where they're relevant.
- **Behavior-based ranking instead of chronology** — what you came back to sits on top.
- **Automatic grouping by source and type** — free from the user's perspective: the metadata already exists and no action is required.
- **Edge states** — first run, empty tabs, single item, very large collections, load failure, offline.
- **Empty-state copy as one system** — a prompt toward the first action instead of a recital of technical limits.

**Deliberately not in the MVP: manual folders and tags.** Rationale — they solve organization at the cost of an action at the worst possible moment, and the market shows only a minority ever gets there. We revisit them only if retrieval rate doesn't move on the MVP work.

## Target metrics and measurement plan

The feature is in development. Targets and measurement methods below; this section gets replaced with actuals at release.

The qualitative bar I hold as equal to the numbers: in follow-up interviews two to three months post-launch, users shouldn't be describing their own section as a junk drawer. If they are, the MVP didn't solve the problem — no matter what adoption looks like.
