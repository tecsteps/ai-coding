# Keynote Slides — CTO Bootcamp, Day 1, 09:30

**Working title:** Code Got Cheap. Your Org Didn't.
**Working subtitle:** The Impact of Agentic Engineering on Your IT Organization.
**Speaker:** Fabian Wesner
**Slot:** 45 min total (Keynote ~30, Agenda 3, House rules 3, Hosts 5, hand-off to participant round)
**Visual language:** alphalist corporate design. White/dark canvas with the alphalist wave (green/red gradient), alphalist logo, green for go/positive, red for friction/blocker. Typography: clean German-tech sans (Inter/Geist). Less "AI-made" than the public bootcamp.alphalist.com page. Generous whitespace, big quotes, sparse bullet points.
**Reveal pattern:** most slides use arrow-key (right) to reveal pieces one at a time. Annotated below per slide.

Slide index:

- Keynote: K01 → K16
- Post-keynote: P01, P03, P04 (P02 cut)
- Pre-survey readout (next session): S01, S02, S03
- Live demo (separate slot, 13:30): D01, D02

---

## KEYNOTE (K01 → K16)

### K01 — Title

**Type:** title
**Content:**

- Headline: **Code Got Cheap.** \ **Your Org Didn't.**
- Subhead (smaller, below): The Impact of Agentic Engineering on Your IT Organization.
- Bottom-left: Fabian Wesner • CTO Bootcamp • Berlin • 2026
- Bottom-right: alphalist logo

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|                                                              |
|              CODE GOT CHEAP.                                 |
|              YOUR ORG DIDN'T.                                |
|                                                              |
|              The Impact of Agentic Engineering               |
|              on Your IT Organization.                        |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
|  Fabian Wesner • CTO Bootcamp • Berlin            [alphalist]|
|  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
|         (alphalist wave: green to red gradient)              |
+--------------------------------------------------------------+
```

**Animation:** static. The wave at the bottom animates subtly (slow horizontal drift, 12s loop).

---

### K02 — The Turning Point

**Type:** big-statement (new component or reuse `BigStatementSlide`)
**Content:**

- Step 1 (right arrow): big date, centered. **November 24, 2025.**
- Step 2 (right arrow): smaller line below: Claude Opus 4.5.
- Step 3 (right arrow, after a beat): the line, in red accent. **"There is no point in letting humans write code anymore."**

**Layout (final state):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|              NOVEMBER 24, 2025.                              |
|                                                              |
|              Claude Opus 4.5.                                |
|                                                              |
|                                                              |
|              There is no point in                            |
|              letting humans write code                       |
|              anymore.                                        |
|                                                              |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** three reveals on right-arrow. Beat ~2 seconds between step 2 and step 3 so the room sits with the date before the punch.
**Speaker note:** land cold. Do not soften. Pause after the third reveal.

---

### K03 — Evolution

**Type:** evolution (reuses existing `EvolutionSlide`)
**Content:** three stages, left to right.

- Stage 1: **Developer writes code.** Subtitle: IDE.
- Stage 2: **Developer writes code with AI.** Subtitle: Tab completion. In-context editing.
- Stage 3: **AI writes code with the developer.** Subtitle: Coding agents. SDD.

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|   [Developer]      [Developer]+[AI]      [AI]+[Developer]    |
|   writes code      writes code with AI   writes code with    |
|                                          the developer       |
|                                                              |
|   IDE              Tab completion        Coding agents       |
|                    In-context editing    SDD                 |
|                                                              |
|   ────────────────────────────────────────────────►          |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** reveal stage by stage on right arrow.
**Speaker note:** "Read this from left to right. We have all lived through stages 1 and 2. Most of us are stuck before stage 3."

---

### K04 — The Self-Adoption Gap

**Type:** evolution-with-arrows (new variant of evolution)
**Content:** same three stages from K03, with arrows above:

- Green arrow stage 1 → stage 2 labeled **"Self-adoption"**.
- Red arrow stage 2 → stage 3 labeled **"No self-adoption"**.
- Below stage 2 in small grey: "+30% productivity"
- Below stage 3 in small grey: **"Agentic Engineering. 10x productivity."**

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|       Self-adoption ✓        No self-adoption ✗              |
|       ──────────►            ──────────►                     |
|       (green)                 (red)                          |
|                                                              |
|   [Developer]   [Developer + AI]      [AI + Developer]       |
|   writes code   writes code with AI   writes code with dev   |
|                                                              |
|                 +30% productivity     10x productivity       |
|                                       Agentic Engineering    |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** stage 1 visible. Right arrow: green arrow appears + stage 2 reveals. Right arrow: red arrow appears + stage 3 reveals.
**Speaker note:** "Stage 1 to 2 happened on its own. Anyone with a Cursor license is here. Stage 2 to 3 does not happen on its own. That gap is why this room exists."

---

### K05 — Why Developers Don't Cross the Gap

**Type:** bullet-reveal (new or reuse a list slide)
**Content:** five reasons, revealed one by one.

- Headline: **"This is not a tooling problem. It is a mindset problem."**
- 1. They do not want to substitute themselves.
- 2. They are afraid.
- 3. They have to leave their comfort zone.
- 4. They do not trust AI.
- 5. Some are simply skeptical.

**Layout (ASCII, final):**

```
+--------------------------------------------------------------+
|                                                              |
|   This is not a tooling problem.                             |
|   It is a human problem.                                     |
|   ──────────────────────────────────────                     |
|                                                              |
|   1.  They do not want to substitute themselves.             |
|   2.  They are afraid.                                       |
|   3.  They have to leave their comfort zone.                 |
|   4.  They do not trust AI.                                  |
|   5.  Some are simply skeptical.                             |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** headline first. Arrow keys reveal each numbered line. No commentary needed beyond reading them aloud.
**Speaker note:** "Memorize this list. You will see one of these in every developer who refuses adoption. You cannot solve it with a license."

---

### K06 — Three Techniques (Taxonomy)

**Type:** taxonomy (new component, mirrors `taxonomy.png`)
**Content:** tree structure, three columns under "AI Coding".

- Top node: **AI Coding**
- Two branches:
  - Left: **Developer implements with AI**
    - Children: In-Context Editing, Tab-Completions
    - Caption below: "Code is the artifact"
  - Right: **AI implements with Developer**
    - Children: **Vibe-Coding** (caption: "Prompts / intent"), **Agentic Software Engineering** (sub-bullets: Spec-Driven Development, Knowledge & Guardrails, Tools & MCPs)
- Productivity arrow at bottom: +30% (left) → +50% (vibe) → 10x (agentic).

**Layout (ASCII):**

```
+----------------------------------------------------------------------+
|                                                                      |
|                          [ AI Coding ]                               |
|                          /            \                              |
|         [Developer impl. AI]        [AI impl. Developer]             |
|         /              \            /                  \             |
|   [In-Context Edit][Tab Compl.] [Vibe-Coding]   [Agentic SWE]        |
|                                                  ├ SDD               |
|         "Code is the artifact"   "Prompts/intent"├ Knowledge & GR   |
|                                                  └ Tools & MCPs      |
|                                                                      |
|   Productivity ────────────────────────────────────────────►         |
|                +30%               +50%               10x             |
|                                                                      |
+----------------------------------------------------------------------+
```

**Animation:** left subtree first. Right arrow: vibe coding column. Right arrow: agentic column with its three sub-bullets. The productivity arrow at the bottom fills in stages.
**Speaker note:** "Three families. Different productivity ceilings. Most of you are at +30%. The rest of today is about what is on the right."

---

### K07 — Three Pillars of Agentic Engineering

**Type:** pillars (reuses `PillarsSlide`)
**Content:** three columns.

- Pillar 1: **Spec-Driven Development.** One-liner: "Spec is the primary artifact. Code is generated and reviewed."
- Pillar 2: **Knowledge & Guardrails.** One-liner: "The agent knows your system and your conventions, or it does not."
- Pillar 3: **Tools & MCPs.** One-liner: "The agent reaches into your stack like a developer would."

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|   AGENTIC ENGINEERING                                        |
|                                                              |
|   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         |
|   │ Spec-Driven │  │ Knowledge & │  │ Tools &     │         |
|   │ Development │  │ Guardrails  │  │ MCPs        │         |
|   └─────────────┘  └─────────────┘  └─────────────┘         |
|                                                              |
|   Spec is the     The agent knows  The agent reaches         |
|   primary         your system,     into your stack           |
|   artifact.       or it does not.  like a developer.         |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** all three pillars fade in together. Sub-captions reveal on right arrow.
**Speaker note:** "I assume most of you know this. We need it on screen so the rest of the keynote has a shared vocabulary."

---

### K08 — Easy to Start. Hard to Finish.

**Type:** vs (reuses `VsSlide`)
**Content:** two columns.

- Left (green tinted): **The easy part.** Bullets: workshop, trainer, the aha moment, the click.
- Right (red tinted): **And then?** Bullets: no industry best practice. No handbook. No reference org.
- Bottom centered: "That is why this room exists."

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|       THE EASY PART       │       AND THEN?                  |
|       (green)             │       (red)                      |
|                           │                                  |
|       • Workshop          │       • No industry standard     |
|       • Trainer           │       • No handbook              |
|       • Aha moment        │       • No reference org         |
|       • The click         │                                  |
|                                                              |
|             That is why this room exists.                    |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** left column fills first. Right arrow: right column. Right arrow: bottom line in alphalist green.
**Speaker note:** "Hiring a trainer is the simplest part of this. The hard part starts the day after."

---

### K09 — The Cloud of Open Questions

**Type:** tag-cloud (new component, supports rapid arrow-key reveal)
**Content:** 17 questions, fired in rapid succession on right arrow. No commentary. Sharpened to short legible phrasings. Some are intentionally cheeky.

```
1.  Do we still review code?
2.  Where do POs fit in?
3.  Frontend vs backend, still a thing?
4.  Is SCRUM still a thing?
5.  Where do specs come from?
6.  What about the skeptics?
7.  Compliance how?
8.  How do we test all this?
9.  Which agent? Which license?
10. What is an acceptable token bill?
11. Still need Jira?
12. What do juniors do?
13. Where do future seniors come from?
14. How do we hire?
15. Spec-kit, yes or no?
16. Who deploys all the marketing apps?
17. Who is accountable when no one wrote it?
```

**Layout (ASCII, all revealed):**

```
+----------------------------------------------------------------------+
|                                                                      |
|     Do we still review     What do juniors do?    Compliance how?    |
|     code?                                                            |
|                       Is SCRUM still a thing?                        |
|                                          Spec-kit, yes or no?        |
|     Where do POs fit in?                                             |
|                  Where do future                                     |
|                  seniors come from?     How do we test all this?     |
|                                                                      |
|     Frontend vs backend,   Which agent? Which license?               |
|     still a thing?                            Still need Jira?       |
|                                                                      |
|     Where do specs come from?         What is an acceptable          |
|                                       token bill?                    |
|     What about the skeptics?                                         |
|                          Who deploys all the marketing apps?         |
|                                                                      |
|     How do we hire?         Who is accountable when no one           |
|                             wrote it?                                |
|                                                                      |
+----------------------------------------------------------------------+
```

Layout note: scatter the questions across the canvas at varied font sizes (smallest 14pt, largest 28pt) and slight rotations (max ±4°). Each question fades in over ~250ms when triggered. Color: 80% white, 20% in alphalist red for emphasis questions ("Who is accountable when no one wrote it?", "Is SCRUM still a thing?", "What is an acceptable token bill?").

**Animation:** each right-arrow press fires the next question. Press them as fast as a teleprompter. Aim for the full reveal in under 30 seconds. No spoken commentary during the firing.
**Speaker note:** silent during the reveal. After the last question, look at the room and say one line: "Pick the one that keeps you up at night. We will get to it before tomorrow evening."

---

### K10 — It Does Not Stop at Engineering.

**Type:** big-statement
**Content:**

- Headline (big): **It does not stop at engineering.**
- Sub-line builds word by word on right-arrow:
  - **Marketing.**
  - **Sales.**
  - **HR.**
  - **PR.**
  - **Finance.**
  - **They all build now.**
- Footer (smaller): "the boring half. The faster half is next."

**Layout (ASCII, final):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|       IT DOES NOT STOP AT ENGINEERING.                       |
|                                                              |
|       Marketing. Sales. HR. PR. Finance.                     |
|       They all build now.                                    |
|                                                              |
|                                                              |
|       (the boring half. The faster half is next.)            |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** headline first. Each department appears on right-arrow. Then "They all build now." in alphalist green. Then the footer.
**Speaker note:** "While we are still arguing about how to roll this out to your engineers, your marketing team already shipped four agents. Survey data after the break confirms it."

---

### K11 — Agents in the Product Itself

**Type:** loop-diagram (new component, mirrors `posthog.png`)
**Content:** four nodes in a clockwise loop, with curved arrows.

- App (mockup of a webpage, top-left).
- Analytics (heatmap/PostHog icon, top-right).
- Agent (small robot icon, bottom-right).
- GitHub (octocat icon, bottom-center).
- Loop direction: App → Analytics → Agent → GitHub → App.
- Caption (centered below): **"Self-improving product."**
- Sub-caption: "User behavior is the spec."

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|       [App] ─────────────────────► [Analytics]               |
|         ▲                                │                   |
|         │                                ▼                   |
|       [GitHub] ◄───────────────────── [Agent]                |
|                                                              |
|             SELF-IMPROVING PRODUCT.                          |
|             User behavior is the spec.                       |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** static reveal. Optionally: a small dot travels around the loop continuously to suggest motion (8s cycle).
**Speaker note:** "PostHog stream goes to a coding agent. Agent opens PRs. You review, you merge, the product gets better. The loop runs while you sleep."

---

### K12 — The Productivity Range

**Type:** range-bar (new component)
**Content:** horizontal range chart with three labeled stops.

- Left end: **License-only adoption.** Range: -10% to +30%. Caption: "Buy a license, change nothing else, sometimes net negative because of chaos."
- Middle: **Vibe + AI-assisted.** Anchor: **+50%**.
- Right end: **#OneShotShop.** Anchor: **Factor 1,000,000.** Caption: "Possible today, in specific setups."
- Below the bar, big text reveal at the end: **"There is no upper ceiling. There is no lower floor. Your number depends on your capability and empowerment to reshape the org."**

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|   THE PRODUCTIVITY RANGE                                     |
|                                                              |
|   -10% .. +30%       +50%                Factor 1,000,000    |
|     │                  │                       │             |
|     ●━━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━━━●             |
|     │                  │                       │             |
|   "Just buy        "Vibe + AI-          "#OneShotShop"       |
|   licenses"        assisted"                                 |
|                                                              |
|                                                              |
|   No upper ceiling. No lower floor.                          |
|   Your number depends on your capability and empowerment     |
|   to reshape the org.                                        |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** bar appears empty. Right arrow: left anchor + caption. Right arrow: middle anchor. Right arrow: right anchor (Factor 1,000,000 in alphalist red, big). Right arrow: the bottom line fades in.
**Speaker note:** "I am not making this number up. The OneShotShop is a public challenge: a complete shop, generated from a single prompt. The cost is around 100 dollars. The bill of building Shopify is much higher. The number is rhetorical, the order of magnitude is real."

---

### K13 — Verification Is the New Cost Center

**Type:** big-quote
**Content:**

- Big headline (centered): **"Code creation is free. Verification is the new cost center."**
- Subtitle small (below): "The bottleneck moved. Plan accordingly."

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|                                                              |
|       "Code creation is free.                                |
|        Verification is the new                               |
|        cost center."                                         |
|                                                              |
|                                                              |
|       The bottleneck moved.                                  |
|       Plan accordingly.                                      |
|                                                              |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** headline reveals in two parts. First half: "Code creation is free." (green). Beat. Second half: "Verification is the new cost center." (red). Then subtitle.
**Speaker note:** "Reread your job description with that in your head. If you spent the last 10 years optimizing dev capacity, you optimized the wrong constraint."

---

### K14 — Intent and Accountability

**Type:** big-quote with build
**Content:**

- Step 1: question, big and centered. **What is left for humans?**
- Step 2: answer in alphalist green, two large words stacked. **Intent.** then **Accountability.**
- Step 3: small line below. "The job of the developer, and most humans, collapses to these two."

**Layout (ASCII, final):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|       What is left for humans?                               |
|                                                              |
|                                                              |
|       INTENT.                                                |
|                                                              |
|       ACCOUNTABILITY.                                        |
|                                                              |
|                                                              |
|       The job of the developer, and most humans,             |
|       collapses to these two.                                |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** question first. Right arrow: INTENT (green). Right arrow: ACCOUNTABILITY (green). Right arrow: the small line.
**Speaker note:** "If a task does not require either, ask yourself why a human is in the loop."

---

### K15 — Change of Innovation Outperforms Structural Changes

**Type:** big-quote with subtitle (closer / cliffhanger to agenda)
**Content:**

- Headline (big, centered): **"Change of innovation outperforms structural changes."**
- Subtitle in red: "The agents keep getting better. Your org will not, unless you change it."
- Tag line under subtitle: "That is the work."

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|                                                              |
|       "Change of innovation outperforms                      |
|        structural changes."                                  |
|                                                              |
|                                                              |
|       The agents keep getting better.                        |
|       Your org will not, unless you change it.               |
|                                                              |
|       ── That is the work. ──                                |
|                                                              |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** headline first. Beat. Subtitle reveals. Beat. Tag line.
**Speaker note:** "AI is racing. No re-org keeps up by waiting. The room you sit in is the only mechanism that closes the gap. So let's get on with it."

---

### K16 — Hand-Off

**Type:** transition
**Content:**

- Centered single line, big: **"We did not bring you here for answers."**
- Below, smaller: "We brought you here to share the questions."
- Footer (small): "Here is the day."
- Cut to K-end → P01 (Agenda).

**Layout (ASCII):**

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|                                                              |
|       We did not bring you here for answers.                 |
|                                                              |
|       We brought you here to share the questions.            |
|                                                              |
|                                                              |
|                                                              |
|       Here is the day. ↓                                     |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** two lines reveal in sequence. Then a soft downward arrow that pulses once, signaling the cut to the agenda.
**Speaker note:** half a beat. Then click into the agenda.

---

## POST-KEYNOTE (P01, P03, P04 — P02 cut)

### P01 — Agenda

**Type:** agenda-list (new component, mirrors `agenda.png` content)
**Content:** Day 1 + Day 2 in two columns. Today's blocks highlighted with the alphalist green stripe on the left edge of each row.

```
+----------------------------------------------------------------------+
|                                                                      |
|   //DAY 01 — UNDERSTANDING THE SHIFT     //DAY 02 — DESIGNING THE    |
|                                            FUTURE ORG                |
|                                                                      |
|  ▌09:00  Arrival & Coffee                  09:00  CTO Breakfast       |
|  ▌09:30  Opening Keynote                   09:30  Fireside Chat 1     |
|  ▌10:15  Participant Round  ◄ NEXT         10:30  Peer Rotations      |
|   11:00  Live Demo                         11:30  Fireside Chat 2     |
|   12:00  Lunch                             12:00  Lunch               |
|   13:00  War Stories from CTOs             13:00  Solutions Workshop  |
|   14:30  Arthur Viegers @ Cursor           15:00  Closing Discussion  |
|   15:30  Breakouts                                                   |
|   19:00  Dinner & Networking                                         |
|                                                                      |
|   This is how we work the questions you just saw.                    |
|                                                                      |
+----------------------------------------------------------------------+
```

**Animation:** Day 1 column fades in. Right arrow: Day 2 column. The "▌" left-edge marker on rows 09:00–10:15 is alphalist green; "◄ NEXT" tag pulses softly.
**Speaker note:** "10:15 we go into the participant round. 11:00 you watch me build a feedback tool live, which we then use after this session."

---

### P03 — House Rules

**Type:** simple-list (large type, no decoration)
**Content:** three lines, big, centered.

```
+--------------------------------------------------------------+
|                                                              |
|                                                              |
|                                                              |
|       Chatham House rule.                                    |
|                                                              |
|       No audio or video recording.                           |
|                                                              |
|       What is said here stays here.                          |
|                                                              |
|                                                              |
|       ~~~~ alphalist wave ~~~~                               |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** three lines reveal one at a time on right arrow. The wave at the bottom is the only graphic.
**Speaker note:** "Quick. So you know the rules of the room."

---

### P04 — Hosts

**Type:** photo-grid (new component, 2 rows × 3 cols)
**Content:** six host cards. Each card: square photo, name (bold), one-liner subtitle.

```
+----------------------------------------------------------------------+
|                                                                      |
|   YOUR HOSTS                                                         |
|                                                                      |
|   ┌─────────┐  ┌─────────┐  ┌─────────┐                              |
|   │ [photo] │  │ [photo] │  │ [photo] │                              |
|   │ Benedikt│  │ Björn   │  │ Denis   │                              |
|   │ Stemmildt│  │Rochel  │  │ Turkov  │                              |
|   │ CTO &   │  │Engineer │  │ Trainer │                              |
|   │ Co-Lead │  │  Leader │  │ &       │                              |
|   │ Agentic │  │ Agentic │  │ Founder │                              |
|   │  SE Adv.│  │ Tooling │  │         │                              |
|   └─────────┘  └─────────┘  └─────────┘                              |
|                                                                      |
|   ┌─────────┐  ┌─────────┐  ┌─────────┐                              |
|   │ [photo] │  │ [photo] │  │ [photo] │                              |
|   │ Fabian  │  │ Tereza  │  │ Tim     │                              |
|   │ Wesner  │  │ Iofciu  │  │ Niemeier│                              |
|   │ Trainer │  │ Data &  │  │ Co-Found│                              |
|   │ & Coach │  │ AI Lead.│  │ er & MD │                              |
|   │ MD      │  │ Coach   │  │         │                              |
|   └─────────┘  └─────────┘  └─────────┘                              |
|                                                                      |
|   …and small-group support all day.                                  |
|                                                                      |
+----------------------------------------------------------------------+
```

Final card text:

| # | Name | Subtitle |
|---|------|----------|
| 1 | Benedikt Stemmildt | CTO & Co-Lead, Agentic Software Engineering Advocate |
| 2 | Björn Rochel | Engineering Leader, Agentic Tooling Practitioner |
| 3 | Denis Turkov | Agentic Engineering Trainer & Consultant, Founder |
| 4 | Fabian Wesner | Agentic Engineering Trainer & Coach, Co-Founder & MD |
| 5 | Tereza Iofciu | Data & AI Leadership Coach, Head Coach Data Science |
| 6 | Tim Niemeier | Co-Founder & MD |

**Animation:** six cards reveal in two passes (top row, then bottom row, on right arrow).
**Speaker note:** brief. One sentence per host max. The point is "if you have a tough question today, here is your shortlist of who to grab."

---

## PRE-SURVEY READOUT (S01, S02, S03 — start of next session, 10:15)

### S01 — Where the Room Actually Is

**Type:** bar-chart (new component)
**Content:** L0–L4 maturity bar chart. Numbers from the survey (N=19 at draft time; will refresh on the morning of).

```
+--------------------------------------------------------------+
|                                                              |
|   WHERE THE ROOM ACTUALLY IS                                 |
|                                                              |
|   L0  ██░░░░░░░░░░░░░░░░░░  2                                |
|   L1  ██████████░░░░░░░░░░  10  ◄ majority                   |
|   L2  █████░░░░░░░░░░░░░░░  5                                |
|   L3  ██░░░░░░░░░░░░░░░░░░  2   ◄ click moment lives here    |
|   L4  ░░░░░░░░░░░░░░░░░░░░  0                                |
|                                                              |
|   53% of you self-report L1.                                 |
|   The click moment lives at L3+. Two of you are there.       |
|   Today is about closing that gap.                           |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** bars draw left-to-right (1.2s, staggered). Annotations fade in last.
**Speaker note:** "Let me tell you what you told me. Most of you say L1. Two of you say L3. Today's job is for the L3s to teach the L1s, and for the L1s to be honest about where they actually are."

---

### S02 — It Already Escaped IT

**Type:** horizontal-bar-chart
**Content:** non-tech departments using agents.

```
+--------------------------------------------------------------+
|                                                              |
|   IT ALREADY ESCAPED IT                                      |
|                                                              |
|   Marketing       ████████████████  16                       |
|   Executive       ███████████████   15                       |
|   Customer Supp.  ████████████      12                       |
|   Operations      ███████████       11                       |
|   HR              ██████████        10                       |
|   Finance         █████████         9                        |
|   Sales           ████████          8                        |
|   Legal           █████             5                        |
|                                                              |
|   18 of 19 of you have non-technical departments using       |
|   agents. While we argue about engineering rollout, your     |
|   marketing team already shipped.                            |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** bars draw in descending order, ~150ms apart.
**Speaker note:** "Marketing leads, executive second. Marketing is using agents at 84% of companies in this room. Engineering is not. Take that home."

---

### S03 — The New Bottleneck

**Type:** stacked-bar or pie (pie reads cleaner here)
**Content:** new_bottleneck distribution.

```
+--------------------------------------------------------------+
|                                                              |
|   THE NEW BOTTLENECK                                         |
|                                                              |
|              ┌──────────────────────┐                        |
|              │     too_early (11)   │                        |
|              ├──────────────────────┤                        |
|              │     review (7)       │ ◄ verification         |
|              ├──────────────────────┤                        |
|              │     qa (6)           │ ◄ verification         |
|              ├──────────────────────┤                        |
|              │     specs (5)        │ ◄ verification         |
|              ├──────────────────────┤                        |
|              │     integration (2)  │                        |
|              ├──────────────────────┤                        |
|              │     still_code_gen(1)│                        |
|              └──────────────────────┘                        |
|                                                              |
|   When you do see a bottleneck, it is verification.          |
|   Code creation is solved. Verification is not.              |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** segments reveal top-to-bottom. The three "verification" tags (review, qa, specs) get the alphalist green stripe and a small "◄ verification" tag.
**Speaker note:** "Eleven of you say it is too early to tell. The rest say verification: review, QA, specs. Same thing said three different ways. Hold this thought for the breakouts."

---

## LIVE DEMO (D01, D02 — separate slot, 13:30, 2 slides only)

### D01 — What We Build

**Type:** product-card
**Content:**

```
+--------------------------------------------------------------+
|                                                              |
|   BOOTCAMP FEEDBACK TOOL                                     |
|   Deployed today. You use it right after this session.       |
|                                                              |
|   ┌────────────────────────────────────────────────┐         |
|   │                                                │         |
|   │   • Anonymous per-session feedback (1–5 + text)│         |
|   │   • Optional overall feedback at the end       │         |
|   │   • Private organizer dashboard                │         |
|   │                                                │         |
|   └────────────────────────────────────────────────┘         |
|                                                              |
|   Inputs: agenda.md + participants.md                        |
|   Stack: Laravel • Hetzner • Forge                           |
|   Deploy target: feedback.bootcamp.alphalist.com             |
|                                                              |
|   [QR code] ◄ scan to open                                   |
|                                                              |
+--------------------------------------------------------------+
```

**Animation:** title, then card, then the inputs/stack/deploy lines. QR code appears at the very end of the build, not now.
**Speaker note:** "We are not going to vote on what to build. We build this. We deploy it. You use it five minutes after the demo ends."

---

### D02 — How We Build

**Type:** four-step horizontal flow
**Content:**

```
+----------------------------------------------------------------------+
|                                                                      |
|   HOW WE BUILD                                                       |
|                                                                      |
|   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐          |
|   │  SPEC   │ ─► │ ROADMAP │ ─► │  PHASED │ ─► │ DEPLOY  │          |
|   │         │    │         │    │  BUILD  │    │         │          |
|   └─────────┘    └─────────┘    └─────────┘    └─────────┘          |
|                                                                      |
|   Codex (fast)   Agent gen.     Agent codes,   Forge deploy          |
|   + prepared     phased plan    Fabian steers  to Hetzner            |
|   skill                         phase by phase                       |
|                                                                      |
|   "The agent does the typing.                                        |
|    I do the steering.                                                |
|    The prepared environment does half the work."                     |
|                                                                      |
+----------------------------------------------------------------------+
```

**Animation:** four boxes appear left-to-right, arrows last. The closing quote builds line-by-line.
**Speaker note:** "Watch the steering, not the typing. The typing is fast and boring. The steering is where the lesson lives."

---

## Build notes for the engineer wiring this in `/alphalist-cto-bootcamp`

- Reuse existing components from `coding-slides/components/slides/` where possible: `TitleSlide`, `EvolutionSlide`, `PillarsSlide`, `VsSlide`, `BigStatementSlide`, `QuotesSlide`, `TransitionSlide`.
- New components needed:
  - **TaxonomySlide** (K06): tree diagram with productivity arrow.
  - **TagCloudSlide** (K09): scattered text, arrow-key staggered reveal, mixed sizes/rotations.
  - **LoopDiagramSlide** (K11): four-node clockwise loop with optional traveling dot.
  - **RangeBarSlide** (K12): horizontal range with three labeled stops.
  - **AgendaSlide** (P01): two-column day layout with green left-edge highlight.
  - **HostsGridSlide** (P04): 2×3 photo card grid.
  - **BarChartSlide** (S01): vertical bars with annotations.
  - **HBarChartSlide** (S02): horizontal bars with right-aligned numbers.
  - **PieOrStackedSlide** (S03): segmented stack with annotation tags.
  - **ProductCardSlide** (D01): title + bullet card + stack/QR row.
  - **FlowSlide** (D02): n-step horizontal flow with arrows.
- Visual tokens: alphalist green (#2ED47A or whichever the corp palette uses), alphalist red (#E63946), the alphalist wave SVG, alphalist logo lockup.
- Keyboard: right-arrow advances reveals within a slide, then advances to next slide. Left-arrow reverses. Same as the existing demo deck.
- Survey numbers (S01-S03): hard-code from the CSV at draft time; refresh the morning of by re-running a small aggregator over the latest survey export.
