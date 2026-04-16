# Martin / Finanzfluss Keynote - Brainstorm

**Session:** ~1h keynote + ~2h build-along, remote, vormittag ~09:30 to 12:30.
**Venue:** Martin's Katzeburg country house (fat fiber confirmed).
**Audience:** ~12 Finanzfluss engineers. Most still on Copilot. Some on API-base Claude Code. Mixed adoption.
**Delivered:** Fabian remote, Martin in the room.

## Overall Idea

Martin explicitly said the existing two pitches don't fit:

- `data/presentations/pitch.ts` - agency disruption talk (Jan). Wrong addressee. Institutional threat, not individual.
- `data/presentations/demo.ts` - agentic engineering workshop intro. Right foundation, but assumes the audience already wants to learn. It doesn't wake anyone up.

**This third pitch = `demo.ts` + a Wachrüttel block in front of it.**

The room has a click-moment problem, not an information problem. The keynote's job is to make every dev privately admit: *"I have to change how I work, starting today."* The build-along then delivers the click.

Story frame: **open and close on the same idea: "adoption doesn't happen automatically, but there's a click moment that changes everything."**

## Shape

```
09:30 - 10:30  KEYNOTE       1h, 18 slides, 3 acts
10:30 - 10:45  Break + setup Claude Code + scaffolds ready
10:45 - 12:15  BUILD-ALONG   (scoped separately, not covered here)
12:15 - 12:30  Wrap + Q&A
```

## Slide-by-Slide

Legend: **NEW** = write fresh, **demo.ts** = pull from existing workshop deck, **pitch.ts** = pull from agency deck. Each new slide names the LinkedIn post(s) it should draw from. ASCII mockups only for NEW or ADJUSTED slides.

### ACT 1 - WACHRÜTTEL (~22 min, 10 slides)

**S1. Intro + agenda** - *NEW*
- *Change:* unchanged from previous round.
- Keywords: who I am, one line. Morning plan. 60 sec.

```
+-----------------------------------------+
|                                         |
|   Agentic Engineering @ Finanzfluss     |
|                                         |
|   Fabian Wesner (remote)                |
|                                         |
|   1h keynote  >  break  >  2h build     |
|                                         |
+-----------------------------------------+
```

**S2. Brief intro round** - *NEW (adjusted)*
- *Change:* replaced the demo.ts "who uses what" poll with a light intro round. Goal: Fabian learns who is in the room.
- Keywords: name + stack, tool used most today, one hope for the morning.

```
+-----------------------------------------+
|  Quick round                            |
|                                         |
|   > Name and current stack              |
|   > AI Tool you use most today for coding             |
|   > One thing you want to leave with    |
|                                         |
+-----------------------------------------+
```

**S3. "Adoption doesn't happen automatically"** - *NEW*
- *Change:* unchanged from previous round.
- Source: `2026-03-01-adoption-of-agentic-engineering-does-not.md`
- Keywords: not seniority, mindset. That's why you're here. Frame for the day.

```
+-----------------------------------------+
|  Adoption doesn't happen automatically  |
|                                         |
|   Not a seniority problem.              |
|   A mindset problem.                    |
|                                         |
|   That's why we're here this morning.   |
+-----------------------------------------+
```

Let's make this more specific. "Mindset" is offensive; make it more real and use notes from the related LinkedIn post. But we really must not offend them. It's more like, hey, it's totally fine but now let's improve.

**S4. The three stages of AI coding** - *reuse demo.ts `/presentation/3` (Evolution)*
- *Change:* no longer marked NEW. Use the existing Evolution slide verbatim.

**S5. Walking vs driving** - *NEW*
- *Change:* unchanged from previous round.
- Source: `2026-01-10-if-you-are-getting-paid-as.md`
- Keywords: 100km, 1 week vs 1 hour. Same outcome. If time is valuable, you take the car.

```
+-----------------------------------------+
|                                         |
|   Walking           Driving             |
|   100 km / 1 week   100 km / 1 h        |
|                                         |
|   Same destination. Same outcome.       |
|                                         |
|   If your time is valuable,             |
|   you take the car.                     |
+-----------------------------------------+
```

**S6. Not a personal choice anymore** - *NEW (adjusted)*
- *Change:* dropped the "10x team ships 10x more or cuts headcount" line (too threatening, devs can't influence the backlog). Reframed to: productivity boost is the new normal and will be expected; nobody pays a dev for hand-typing code; not adapting = out of the market.
- Source: `2026-01-27-many-developers-still-think-that-letting.md`

```
+-----------------------------------------+
|  Not a personal choice anymore          |
|                                         |
|   Productivity boost = new normal       |
|   Expected, not optional                |
|                                         |
|   Mid-term nobody will get paid for writting code by hand        |
|   Not adapting = out of the market      |
+-----------------------------------------+
```

**S7. Innovation Adoption Lifecycle** - *reuse pitch.ts `/pitch/17`*
- *Change:* NEW INSERTION after S6. The good-news pivot: still early, start now = still an early adopter. Flips the mood from threat to opportunity.

**S8. Exponential rise / learning curve** - *reuse pitch.ts `/pitch/16`*
- *Change:* NEW INSERTION after S7. Keywords for delivery: tools are not mature yet, improving daily, earlier start = compounding advantage.

**S9. Single-stack identity is over** - *NEW*
- *Change:* unchanged from previous round. Visual direction added below.
- Source: `2026-01-02-ive-worked-with-many-developers-who.md`
- Keywords: "React dev", "Laravel dev", "CSS dev". Agents collapse the specialisation moat. Full-stack + product sense is the new baseline.
- Visual direction: left column of framed stack labels fading / crossed out; right side a single generalist icon beside an agent icon. Low density, strong contrast.

```
+-------------------------------------------------+
|  The era of single-stack identity is over       |
|                                                 |
|   [React dev]  ~~~\                             |
|   [Laravel]    ~~~ \                            |
|   [Python]  ~~~  > ---->  [Full-stack +      |
|   [TYPO3]      ~~~ /          product sense +   |
|   [CSS dev]    ~~~/           architecture]     |
|                                                 |
|   fading                     new baseline       |
+-------------------------------------------------+
```

Replace with:
Frontend (e.g. React)
Backend (e.g. Java)
Data (e.g. Python)
Devops (e.g. Docker)

**S10. The developer at end of 2026** - *NEW*
- *Change:* unchanged from previous round. Renumbered from S9.
- Sources: `2026-01-09-so-what-are-the-most-important.md` + `2025-12-08-one-of-claude-codes-most-advanced.md`
- Keywords: human = bottleneck, orchestrator not author, polite sub-agents, skills = abstraction / speed / multi-tasking, 6 terminals. Pre-sells the build-along.

```
+-------------------------------------------------+
|  The developer, end of 2026                     |
|                                                 |
|   [term] [term] [term]                          |
|   [term] [term] [term]   <- you, orchestrating  |
|                                                 |
|   You = bottleneck                              |
|   Skills: abstraction, speed, multi-tasking     |
|   Output: features that used to be a sprint     |
+-------------------------------------------------+
```

### ACT 2 - THE PRACTICE (~30 min, 7 slides, heavy reuse from demo.ts)

**S11. Vibe coding vs Agentic Engineering** - *reuse demo.ts*
- *Change:* use as-is, no edit.

**S12. Three Pillars** - *reuse demo.ts*

**S13. Pillar 1: Spec-Driven Development** - *reuse demo.ts*

**S14. Pillar 2: Knowledge & Guardrails** - *reuse demo.ts*

**S15. Pillar 3: Tools & MCPs** - *reuse demo.ts*

**S16. Prime Directive** - *reuse demo.ts*
- *Change:* previously paired with the 95% failure-analysis slide. Skip the 95% slide, keep Prime Directive standalone.

**S17. Prompting guidelines** - *reuse demo.ts*

(Jobs table traditional vs agentic: *removed* from previous plan.)

### ACT 3 - BRIDGE (~5 min, 1 slide)

**S18. The click moment, now you try** - *NEW*
- *Change:* unchanged from previous round.
- Callback to `2026-03-01-adoption-of-agentic-engineering-does-not.md`.
- Keywords: you don't get it by watching. Open your laptop.

```
+-----------------------------------------+
|                                         |
|         The click moment                |
|                                         |
|   You don't get it by watching.         |
|   You get it by doing.                  |
|                                         |
|         Open your laptop.               |
+-----------------------------------------+
```

## Post Usage Summary

| LinkedIn post | Used on slide |
|---|---|
| 2026-03-01 adoption-doesnt-happen-automatically | S3, S18 (frame bookend) |
| 2026-01-10 walking-vs-driving | S5 |
| 2026-01-27 not-a-personal-choice | S6 |
| 2026-01-02 single-stack-identity | S9 |
| 2026-01-09 most-important-skills | S10 |
| 2025-12-08 sub-agents-polite-orchestrator | S10 |

Dropped vs previous round: 2025-12-12 three-stages (now sourced from existing demo.ts slide), 2026-02-20 burned-tokens (whole slide skipped), 2025-12-28 vibe-vs-agentic (slide used as-is from demo.ts).

## Reuse Map

| Source | Slides |
|---|---|
| `data/presentations/demo.ts` | S4, S11 to S17 (8 slides, the practice backbone + Evolution) |
| `data/presentations/pitch.ts` | S7 (Adoption Lifecycle), S8 (Exponential rise) |
| LinkedIn posts | S3, S5, S6, S9, S10, S18 (6 new slides) |
| Brand new | S1 (intro), S2 (intro round) |

## Open Questions

1. S9 visual: is the "fading stack labels to generalist" direction right, or should it be a logo grid with strikethroughs?
2. S18 close: hard hand-off ("open your laptop now") or a 2-min breather + Q&A before the build?
3. Optional extra slide between S10 and S11 on the darker career framing (source: `2026-01-12-our-beloved-profession-of-building-software.md`). High impact, risk of tipping the room into resignation instead of action.

## Files to Produce

- `specs/martin.md` - this file.
- `data/presentations/martin.ts` - the actual deck. Pattern: copy `demo.ts` structure, prepend Act 1, keep the middle, swap the ending for S18.
- No changes to `pitch.ts` or `demo.ts`.

## Verification

- `npm run dev`, click through the 18 slides, time each act. Target: Act 1 at 20 to 24 min, Act 2 at 28 to 32 min, Act 3 at 3 to 5 min. Total under 60.
- Dry-run Act 1 out loud. If S3, S5, S6, S9, S10 feel preachy or generic, rewrite before the day. These carry the whole emotional weight.
