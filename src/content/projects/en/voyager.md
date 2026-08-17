---
title: "Voyager — modular chat system"
summary: "A reusable messaging module for banking documents that reduced support calls and accelerated future launches."
year: "2024"
order: 5
role: "Sole product designer"
---
## Overview

Product: Voyager — a web app for currency and cross-border trade operations (Bank Saint Petersburg).

It started with one sentence from the business side: *"We need a chat in export requests."* Two weeks of research later, it had turned into a different one: *"We need a messaging system we can drop into any document in a sprint, not a quarter."*

The distance between those two sentences is what this case study is about.
![Cover](../../../assets/voyager/v_1.webp)


## The problem

I started with interviews and walkthroughs of real requests alongside currency control officers and client managers. The same picture came back from person to person.

**The conversation was scattered across four channels.** Email, phone, messengers, and occasionally a courier with paper. To find out where a request stood, someone would open the system, then their inbox, then hunt for the right email thread, then pick up the phone.

**Context died in the handoff.** When someone went on vacation, the history went with them. Their replacement would open a request, see the status "returned for revision," and find no trace of *why* it was returned or what had already been discussed.

**Clients were left guessing.** A request sits there, no visible reason, and the only way to find out is to call support. A meaningful share of those calls weren't problems at all — just "what's happening with my request?"

Taken one at a time, each of these looks like a minor annoyance. Together they added up to days of delay on deals where delay costs real money.

## The decision: module

The most important call I made on this project didn't happen in Figma. It happened in a room with product and engineering.

I asked one question: *where else, besides export requests, are people going to need to have this conversation?* Everyone in the room answered immediately — import requests, contracts, deal passports, currency control. Basically everywhere.

That reframed the brief. We weren't designing a screen. We were designing **a component that would have to live in a dozen different contexts.** Which bought us three things:

**A new document type stops being a new project.** Adding messaging to the next document became a configuration task instead of a full design → build → test cycle. This was the argument that won stakeholders over faster than any other: shipping the feature in the next section takes a fraction of the time.

**One consistent experience across the product.** A currency control officer works in requests *and* in contracts. If messaging behaves differently in each, they learn it twice and make mistakes twice as often. A single module removes that tax.

**Predictability for engineering.** One codebase instead of five near-identical implementations means fewer bugs and materially cheaper maintenance. In a bank, where a mistake inside a financial document is expensive, that's a risk argument, not an aesthetic one.

"Modular system" sounds like an engineering decision. It was really a product one: invest once so you don't have to invest five times.
![Chat](../../../assets/voyager/v_2.webp)

## Designing for competing roles

The hard part wasn't technical. It was that a single request brings together people with very different permissions and very different goals — the client, the client manager, and the back office.
![Cover](../../../assets/voyager/v_3.webp)

That's where the defining piece of the interface came from: **private messages.** Staff can switch the composer into internal mode, and the message goes to an internal thread instead of to the client.
![Private messages](../../../assets/voyager/v_4.webp)

This is a place where design is really about the cost of a mistake. One private message accidentally sent to a client is a reputational incident, and sometimes a regulatory one. So privacy isn't a checkbox tucked into a corner — flipping it **changes the state of the entire composer**: the background, the label, and the color of the outgoing message all shift. Missing it is close to impossible.
![Chat](../../../assets/voyager/v_5.webp)


Everything else followed from how people actually work with these documents:

- **Reply to a message** — long threads on a single request lose the thread without quoting.
- **Move a message to another request** — the most "banking" feature here. Clients routinely write in the wrong place, and before this it meant retyping the whole exchange by hand.
- **Pinning** — bank details and agreed terms shouldn't sink under a hundred messages.
- **Tags and "mark as important"** — fast navigation through long threads.
- **Search** — across text, file names, and tags, with its own flow for stepping through matches and a result counter.
- **Attachments** with previews, because 90% of this conversation is about documents.

I worked every scenario down to its states: empty thread, sending, send failure, retry, long message, message with an attachment, search with no results.
![Chat](../../../assets/voyager/v_6.webp)


## Process

**Research.** I looked at how messaging is built into Tinkoff, Sber, and Alfa-Bank — and, more usefully, at how it works in operational tools where the conversation is attached to an *object* rather than to a person. The second group taught me more: bank chats are mostly support, and what we needed was a conversation around a document.

**Concepts.** Five integration approaches, from a full-screen tab to a floating widget. I took the two strongest into testing: a tab inside the request, and a widget overlay.

**Validation.** An interactive Figma prototype, tested with actual bank staff. The hybrid won: a full "Messages" tab inside the document, plus a compact widget for quick access elsewhere. Same module, two wrappers — exactly the thing modularity was for.

**Design system.** Twelve new components in total, with documentation and an integration guide for new sections — so the next team could ship messaging without me.

## Results

- **−40% time to resolve a question on a request.** The conversation that used to run through email and phone calls now happens where the document is.
- **−35% support calls about request status.** Clients stopped calling just to find out what was going on.
- **78% of users used messaging in the first month.** For a B2B tool with a conservative audience, that's high — we never had to sell the feature internally.
- **CSAT for the request handling process: 6.2 → 8.7.**

Alongside those: completed request conversion +15%, staff processing speed +20%, unfinished requests −18%.

And the payoff modularity was built for: subsequent messaging scenarios in other sections shipped roughly 60% faster, with fewer bugs, because the components were already there.
