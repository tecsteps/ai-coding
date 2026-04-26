# Input

The CTO Bootcamp is a 2-day workshop for tech leaders to discuss the challenges of introducing agentic engineering to their organisations. (It's not about running AI agents in production. And it's not a training workshop).

Presentation needs to contain three parts:
- Keynote (Timing: 45 minutes in total)

## Keynote structure (45 min)
- Keynote itself (which we brainstorm) - 20 min 
- Introducing hosts (5 minutes) - https://www.bootcamp.alphalist.com/berlin we need to put all this on one slide. I will not let them speak but quickly introduce. All we need is the image, the name, and a subtitle.
- House rules (no audio or video recordings, information stays here)
- What to expect, what to take with you (see notes in /Users/fabianwesner/Workspace/alphalistbootcamp/brainstorming-archive/day2/06-solutions-workshop.md). I actually want them to leave their place with more clarity about:
  - their next steps
  - how the future idealisation should look
  - how to apply it on their own idealisation
  - what kind of roadmap is ahead of them 
  - More clarity is a goal. There won't be final answers but clarity on these questions.
- Pre-survey result presentation read brainstorming-archive/day1/03-participant-round.md as context (5 minutes, just 2-3 slides with stats, see data in /Users/fabianwesner/Workspace/alphalistbootcamp/brainstorming-archive/day1/03-participant-round.md) - This is part of the next agenda point (see specs/keynote/data/agenda.png)

We also need:
- 2 slides for the live-demo (see brainstorming-archive/day1/06-live-demo.md) that shows what we build (very brief) and how we do it, see /Users/fabianwesner/Workspace/alphalistbootcamp/brainstorming-archive/day1/06-live-demo.md) - This is not part of the key note, but we need to prepare the slides


I wrote tons of posts about Atgetic engineering. You can have an overview here; you might pull some of them. I can also give you access to LinkedIn so you can see the images which I used. /Users/fabianwesner/Workspace/LinkedIn/agentic-engineering-posts.md just tell me which post you want to see and which image you need.

## My first thoughts on the content of the actual keynote: It's far too much for the time we have so let's sharpen it and make it a good flow overall. It needs to be inspiring and engaging.

Let's start with why the whole topic is important:
- Claude Opus 4.5 was released on November 24, 2025
- This was  the Turning Point. AI generated better code than the avg human developer (and cheaper&faster anyway). 
- As a consequence every organization had to adapt it because there was no point in letting humans write code anymore

Then we show the evolution http://localhost:3000/presentation/3 -
And explain that there is no self-adaption from "developer writes code with AI" to "AI writes code with a developer". There are probably emotional reasons:
- Developers do not want to substitute themselves.
- They are afraid.
- Need to go out of their comfort zone.
- Don't trust AI.
- Some are super skeptical. (Also read this post of mine: /Users/fabianwesner/Workspace/LinkedIn/posts/2026-03-01-adoption-of-agentic-engineering-does-not.md and this specs/keynote/data/self-adation.png)

We also need some time to understand the different techniques. There is AI-assisteded coding (tab-completions, in-context editing), there is vibe coding and finally agentic engineering. See my post: specs/keynote/data/taxonomy.png /Users/fabianwesner/Workspace/LinkedIn/posts/2025-12-28-over-the-last-months-developed-pretty.md

Now let's have a quick deep dive on agentic engineering, just one slide. http://localhost:3000/presentation/8 justification of what these things are. Just very light. We can assume TTLs know about it already but I want to make sure that everybody catches up here.

Introducing agentic engineering to the interiorisation is very hard. Starting is easy: you have a workshop which you do yourself or you book a trainer. People usually have the aha moment in these two days but then the action challenge comes. This is why we cast exactly this.


What we have so far is we're getting more and more clarity about the challenges that are ahead of us, but what's missing is solutions. There are no industry best practices yet and no handbook.

The challenges: I have a lot of them. I imagine this as kind of a tech cloud where we have all the challenges and I use the arrow keys to show them one after the other very quickly. I will not say anything about them, just show how many there are: Do we need to review our code? When developers are working spec-driven, what should product owners do then? Do we need separated front and backend developers? Is SCRUM still a thing? Where do we get the requirements from? For all our people, what do we do with the skeptical ones, with the resistance? How are we compliant with compliance? How do we test everything? What do we do with so many people? Which coding agent or license to buy? How much are the costs for tokens acceptable for a developer? Do we still need Jira if everything is using Jira via MCP anyway? What should junior developers do? How do we get the future senior developers when nobody is writing code anymore? How do we unify our skills and prompt techniques? How to do interviews? Should we use spec-kit? How do we deploy all the mini-apps that were created by Marketing, Sales, and other teams? How can developers be accountable for the result when they did not write the code? Do we need any external, like agencies or freelancers?

Introducing Argentic Engineering to an IT org is a massive organizational challenge that needs to happen at light speed, because not having it at all is a competitive disadvantage and being in the transition phase causes tension. However, this is just the start. In parallel, AI agents should be introduced to the rest of the organization, letting people in marketing, sales, HR, PR, etc. automate their work. This massively boosts their capability and sparks creativity. That's not the end. Using AI agents to boost workers' capabilities is the logical but very boring part. AI and especially AI agents must be used in real time and be embedded in the product.

Change of innovation outperforms structural changes.

How much of a productivity boost you can expect for your entire organization. If you just give a license and do not change anything else, then the boost will be super low, maybe 20-30%. It could be even negative because of the chaos it creates. There is no upper ceiling, as I show in my One-Shop-Shop-Challenge. The speedup of a Factor Million is possible with the current technologies in specific setups. What you get out of this, and that's important, is not predefined by technology or by some physical rules. It 100% depends on your capability and empowerment to adjust the organization, the architecture, the processes to squeeze out maximum productivity.

Code creation tends to be free. Verification is the new cost center.

It doesn't even end with introducing AI agents to the work of people. You can also use AI agents to improve the product itself see specs/keynote/data/posthog.png and specs/keynote/data/posthog.txt


The job of the software developer and actually most humans boils down to two things: intent and accountability.

# Brainstorming

---

## Q&A Round 1 (Claude)

I read the brainstorming notes, the four supporting images (`agenda.png`, `taxonomy.png`, `self-adation.png`, `posthog.png`), `posthog.txt`, the survey CSV, and the cross-repo references for `02-opening-keynote.md`, `03-participant-round.md`, `06-live-demo.md`, plus the two LinkedIn posts you cited. I also checked the existing slide components in this repo so I can map new slides to types you already have. Six questions before I draft. Reply freetext below each, or pick a letter.

### Q1: What lives inside the 20-min keynote vs around it?

The 45-min slot contains several things. I want to lock the order and the budget so I know what counts as "the keynote" and what counts as wrapping. Pick one:

- A) Hosts intro (5) -> House rules (1 slide, fast) -> What to expect (1 slide) -> Keynote (20) -> Pre-survey result readout (5). Total ~32-33 min, leaves 12-13 min buffer for transitions/applause.
- B) Keynote first (20) -> Hosts (5) -> House rules + expectations (2 slides) -> Pre-survey (5).
- C) Hosts (5) -> Keynote (20) -> Pre-survey (5) -> House rules + expectations at the end as a hand-off.
- D) Different order, please describe.

Keynote first (this should end soon and that's why we're here) - this is setting the scene (–30 min)
Then we look at the agenda (which fits the last statement of the keynote - this is the solution) (3 min)
Then what to expect from the whole thing here (3min)
Then the house rules (this makes clear that this is a private session. Things stay confidential) (3min)
Then the hosts (because small groups get individual Betreuung) (5min)
--- That's the end of the keynote session and we immediately go to the next session, the participant round
Which starts with a very quick look at the survey results (+5 minutes; part of the next session)

**A1:** 

### Q2: Which beats are in, which are out?

You named ~14 beats. 20 min means roughly 8 to 10 slides at 1.5-2 min each if we want it to breathe. Mark each beat as MUST / CUT / MAYBE so I can compose the spine.

- [x] 1. Turning point anchor (Opus 4.5, Nov 24 2025, code now better than the average dev) - ____
- [x] 2. Evolution slide: dev writes code -> dev with AI -> AI with dev (reuse `EvolutionSlide`) - ____
- [x] 3. The "no self-adoption" gap between stage 2 and stage 3 (use `self-adation.png` as the visual) - ____
- [x] 4. Emotional reasons devs resist (fear, comfort zone, trust, skepticism) - ____
- [x] 5. Taxonomy of techniques: AI-assisted vs vibe coding vs agentic engineering (use `taxonomy.png`) - ____
- [x] 6. One-slide deep dive on the 3 pillars of agentic engineering (SDD, Knowledge+Guardrails, Tools+MCPs) - ____
- [x] 7. "Workshop is easy, the action challenge after the aha moment is hard, no playbook" - ____
- [x] 8. Tag cloud of org challenges, rapid-fire arrow-key reveal, no commentary - ____
- [x] 9. AI agents beyond IT: marketing, sales, HR, PR build their own apps - ____
- [x] 10. AI agents embedded in the product itself (PostHog self-improving loop) - ____
- [This is should be the last slide -> Cliffhanger to Agenda] 11. "Change of innovation outperforms structural changes" - ____
- [x] 12. Productivity range: +20-30% (license only) vs factor million (One-Shop-Shop) and "no upper ceiling, depends on your org capability" - ____
- [This is "the new challenges". We need to discuss where to put it] 13. "Code creation is free. Verification is the new cost center." - ____
- [x - We need to move it somewhere else where it logically fits] 14. Closing: "Intent and accountability is what's left for humans." - ____

**A2:** 

### Q3: Sharp or measured opening line?

Your raw note: *"there was no point in letting humans write code anymore"*. Three flavors for the opening beat:

- [x] A) Sharp / provocative as written. "There is no point in letting humans write code anymore." Land it cold, let the room squirm.
- [ ] B) Honest-uncomfortable. "Since November 24, agents write better code than the average human developer. Cheaper, faster, better. The economic case closes itself."
- [ ] C) Hybrid. Open softer (B) and escalate to the literal sharp claim (A) one slide later.

**A3:** 

### Q4: Which line is the leave-with-this takeaway?

Every keynote needs one sentence the audience tweets. I see four candidates in your notes. Pick one (or propose your own):

- [x] A) "Code creation is free. Verification is the new cost center."
- [x] B) "The job of the developer, and most humans, boils down to two things: intent and accountability."
- [x] C) "Your productivity ceiling is not set by the technology. It is set by your capability and empowerment to reshape the org."
- [x] D) "Change of innovation outperforms structural changes." (Note: I'm not sure I parse this one the way you do. If you pick D, drop one sentence on what you mean exactly.)

All four are great. Let's make sure that they all four are highlighted. The entire keynote should not be about detailed slides. More about bold statements and way of thought.

**A4:** 

### Q5: Visual style and slide reuse

This repo has 50+ slide components built for the developer talk (dark mode, neon accents, terminal aesthetic, big animated transitions). The new build will live under `/alphalist-cto-bootcamp`.

- [ ] A) Reuse the existing visual language end-to-end. I will write `keynote-slides.md` using the existing slide types (`title`, `evolution`, `pillars`, `vs`, `question`, `regular`, `quotes`, `transition`, etc.) so the build is mostly wiring.
- [x] B) Same palette, but I describe layouts freely (big quotes, big numbers, charts, stage-friendly typography for a CTO audience), and you pick which existing types to wire vs which to build new.
- [ ] C) Different style, describe.

The existing ones are also interactive. I can use up and down arrows to show things piece by piece on a slide. Let's keep this also as an approach

**A5:** 

### Q6: Pre-survey readout: which 3 dimensions?

The CSV has 16 columns. For 2-3 slides in 5 min, I would pick the dimensions that make the room feel seen and tee up the keynote. Mark up to 3:

- [ ] a) Maturity distribution (L0-L4) - ____
- [ ] b) Non-tech departments using AI agents (marketing/sales/HR/legal/exec) - ____
- [ ] c) The new bottleneck (review, qa, specs, too_early, ...) - ____
- [ ] d) Who resists (juniors / mid_level / seniors / staff_plus) - ____
- [ ] e) Governance stage (none / informal / documented / enforced) - ____
- [ ] f) Top-N anonymized verbatim quotes from the `challenge` free-text field - ____
- [ ] g) Headcount distribution of the room - ____

Based on the data I want you to make precise proposals with explanation. Let's pick based on what's exciting and interesting to the audience. 

**A6:** 

### Bonus: small things I will assume unless you say otherwise

- [x hosts1.png and hosts2.png in data dir] "Hosts intro" slide = single slide, photo + name + one-liner per host, pulled from bootcamp.alphalist.com/berlin (I will fetch the page when drafting).
- [x] "House rules" slide = Chatham House rule + no audio/video recording + info stays in this room, three lines, no decoration.
- [x] "What to expect" slide = 4 clarity outcomes you listed (next steps / future ideal state / how to apply it / roadmap ahead), framed as "you will not leave with answers, you will leave with sharper questions and a peer network".
- [x] "Live demo slides" (2 slides, prepared but not in keynote): slide 1 = what we build (Bootcamp Feedback Tool, deployed and used tomorrow morning), slide 2 = how (spec -> roadmap -> phased build, using prepared environment). I will draft these in the same file under a clearly delimited section.

If any of these assumptions is wrong, flag it.

---

## Q&A Round 2 (Claude)

Round 1 answers locked. New time budget: keynote ~30 min (not 20), then agenda 3 min, expectations 3 min, house rules 3 min, hosts 5 min = ~44 min. Survey readout (5 min) sits at the start of the next session. All 14 beats stay (with #13 and #14 needing placement, #11 as the cliffhanger to agenda). All four takeaway lines must be highlighted as bold statements. Visual style: same dark/neon palette, free layouts, step-by-step arrow-key reveals where useful.

Six follow-ups. New round, but smaller. Tick boxes or write freetext.

One correction. Viszually we need to mimic the look&feel of this: https://www.bootcamp.alphalist.com/ (also the wave and correct alhalist logo). This page was done with simple AI skills so we do not need to take exactly this look and feel. Let's make it better and less "AI-made". However the corporate design is to stay so the wave and the Alphalist logo and the green and red highlight colors.

### Q7: Where does "Verification is the new cost center" land? (beat #13)

This line is the punchline of the "what changes" half of the keynote. It needs to sit somewhere it can do work. Options:

- [x] a) Right after the productivity range slide (#12). Logic: "no upper ceiling, but the gain only shows up if you reorganize, and the new cost center is verification, not creation." Hard pivot from speed to quality.
- [ ] b) Right after the tag cloud (#8). Logic: tag cloud overwhelms with org-level questions, this slide names the single biggest one underneath them all.
- [ ] c) As an opener for the second half of the keynote, immediately after the agentic-engineering deep-dive (#6). Logic: "now that you know the technique, here is the economic flip you need to internalize."
- [ ] d) Other / describe.

**Recommendation: (a).** It pairs the two ceilings: technical ceiling (no upper limit on productivity) and economic ceiling (verification is what now costs you). The room hears "I can grow infinitely fast" and immediately the next slide tells them where the new bill comes from. Strong one-two punch and it sets the agenda for the second half.

### Q8: Where does "Intent and accountability" land? (beat #14)

Three plausible homes:

- [ ] a) Right before the productivity range (#12). Logic: "here is what the human job collapses to. From there, the productivity ceiling depends entirely on how empowered humans are to use intent and accountability well." It then runs naturally into #12 -> #13 -> tag cloud -> #11.
- [x] b) Right before "Change of innovation outperforms structural changes" (#11). Logic: closing 1-2 punch. Intent/accountability is the human takeaway, then change of innovation is the org takeaway, both back to back, then hand off to agenda.
- [ ] c) Earlier, as the bridge between the emotional-resistance slide (#4) and the taxonomy (#5). Logic: reframes the anxiety positively before introducing techniques.
- [ ] d) Other / describe.

**Recommendation: (b).** This becomes the keynote's emotional climax. Last two slides: "your job collapses to intent and accountability" (the human takeaway), then "change of innovation outperforms structural changes" (the org takeaway), then cut to agenda as the structural answer. The audience leaves with one line for themselves and one line for their org.

### Q9: "Change of innovation outperforms structural changes" - I want to make sure I'm reading this right.

I have two readings. Which is yours?

- [ ] a) Innovating *how you work* (new processes, new tools, new architectures, new agentic workflows) creates more value than restructuring (org charts, reporting lines, role definitions). So: stop reorganizing, start innovating.
- [x] b) The *pace of innovation enabled by AI* outpaces the *pace of structural change a company can absorb*, and the org that wins is the one that lets innovation drive the structure (not vice versa).
- [ ] c) Something else. Drop one sentence.

I need this clear because it's the cliffhanger before the agenda slide.

**Recommendation: (a).** It is the more actionable read for a CTO. It tells them not to start with re-orgs ("we'll spend Q3 redesigning teams"), but to change the way work gets done, and let the structure follow. It also fits naturally as the bridge into the agenda: "we did not gather you here to redraw your org chart, we gathered you here to change how the work gets done." If your meaning is closer to (b), say so and I'll re-thread it.

### Q10: Survey readout - 3 slides, my picks with reasoning (N=19 so far)

Top three picks based on what's most surprising and most useful for tee-ing up the keynote messages:

- [x] **Slide 1 - "Where the room actually is" (Maturity).** L1=10, L2=5, L0=2, L3=2, L4=0. Hook: "Most of you self-report L1. The click moment lives at L3 and above. Two of you are there. The point of these two days is to close that gap." Direct setup for the "no self-adoption" beat (#3).
- [x] **Slide 2 - "It already escaped IT" (non-tech departments).** 18/19 already have non-IT teams using agents. Top: marketing (16), executive (15), customer support (12), operations (11), HR (10). Hook: "While we are still arguing about how to roll this out to engineering, your marketing teams already shipped." Validates and amplifies beat #9.
- [x] **Slide 3 - "Where the new bottleneck shows up" (new_bottleneck).** 11/19 say "too early to tell", but the rest cluster on review (7), qa (6), specs (5). Hook: "When you do see a bottleneck, it is verification. Code creation is solved. Verification is not." Direct setup for beat #13.

Alternative slide candidates if you want to swap one:

- [x] **Alt A - "Resistance is not where you expected."** Surprising stat: 10/19 say nobody resists. Of the rest, seniors (7) > mid_level (5) > juniors (2). Counters the conventional "juniors will lead the change" narrative.
- [ ] **Alt B - "Governance: 13 of 19 are flying blind."** ad_hoc=8, none=5, documented=5, enforced=1. Strong "no playbook" reinforcement.
- [ ] **Alt C - 6 verbatim anonymized quotes from the `challenge` field.** Makes the room feel seen. Examples I'd pull: Felix "shadow IT will explode in 12 months", Mathias "uncertain about the best way to develop tech orgs", Stan "still unclear how governance for agentic should look", Olena "scaling production-safe agents on fragmented data while upskilling people", Andrew "ruthlessly evaluating, prioritizing, organizing - because faster building does not mean we should build everything", Moritz "resolve the PR bottleneck without it we could 10x speed".

Pick exactly 3. Default if you say nothing: my main three (Maturity, Non-tech, Bottleneck).

Let's use the three top pics

**Recommendation: main three (Maturity, Non-tech, Bottleneck).** Each one ties to a specific keynote beat, so the readout feels like a callback rather than a separate section. If you want to swap one out for warmth, replace Slide 1 (Maturity) with Alt C (verbatim quotes) so the room feels heard before the keynote intellectualizes their problem. But I would not swap more than one.

### Q11: Tag cloud (#8) - keep the long list verbatim or sharpen?

Your raw list has ~20 questions, some with very specific phrasing ("Is SCRUM still a thing?", "Should we use spec-kit?"). For an arrow-key rapid reveal that lands as overwhelm-not-detail, density matters more than clarity per item.

- [ ] a) Keep all ~20, verbatim. Maximum overwhelm. The audience cannot read them all and that is the point.
- [x] b) Sharpen to 14-16 punchy 4-6 word questions, evenly distributed across the slide, so each one is legible for half a second as it appears.
- [ ] c) Two-pass: first reveal 14 sharp ones, then a final flash that adds the remaining ~6 small ones to fill the screen.

If b or c, I will rewrite each question to its punchiest form (e.g. "Do we still need Jira if everything talks via MCP?" -> "Still need Jira?", "Should we use spec-kit?" -> "Spec-kit yes/no?"). I will keep the technical jargon (MCP, spec-kit, Scrum, CRUD-not-SCRUM) since the audience is CTOs.

**Recommendation: (b).** Half a second of legibility is the sweet spot. Verbatim is too long to scan; CTOs hate "you can't even read this slide" tricks because they read fast and feel cheated. Sharpened keeps the overwhelm effect (still 14-16 questions, still no commentary, still arrow-key fire) while letting them grab one or two that hit them personally. I will keep two or three of your most opinionated phrasings (e.g. "Is SCRUM still a thing?") because they get a laugh.

### Q12: Hosts slide - order and subtitle accuracy

From `hosts1.png` and `hosts2.png` I read 6 people. Confirm the order and the subtitle for each (one-liner under the name). Default subtitles below are pulled from the screenshots.

- [x] 1. Benedikt Stemmildt - CTO & Co-Lead, Agentic Software Engineering Advocate
- [x] 2. Björn Rochel - Engineering Leader, Agentic Tooling Practitioner
- [x] 3. Denis Turkov - Agentic Engineering Trainer & Consultant, Founder
- [x] 4. Fabian Wesner - Agentic Engineering Trainer & Coach, Co-Founder & MD
- [x] 5. Tereza Iofciu - Data & AI Leadership Coach, Head Coach Data Science
- [x] 6. Tim Niemeier - Co-Founder & MD

Tick if accurate. If you want a different order (e.g. you and Tobias first because you're hosting day 1), say so. If subtitles need editing, paste the new ones.

(Side note: Tobias Schlottke is mentioned in the alphalistbootcamp docs as your potential co-host but I do not see him in `hosts1.png` / `hosts2.png`. Did he move out of the host list, or is there a third image?)

Tobias won't show

**Recommendation: keep the order as-is (alphabetical first name) and ship without Tobias.** Alphabetical avoids any "who matters more" politics and is the convention on the bootcamp.alphalist.com site. The current subtitles are lifted directly from the public host page, so they're already on-brand. If Tobias is a host, send a third screenshot and I'll insert him in alphabetical position (between Tereza and Tim).

---

After this round I will draft the full slide-by-slide spine and run it past you once before writing `keynote-slides.md`.

---

## Round 3 (Claude): Full slide spine for approval

All Q&A locked. I'll thread Q9b ("pace of AI innovation outpaces pace of structural change a company can absorb, so let innovation drive structure") into the closer.

Visual constraint: bootcamp.alphalist.com look-and-feel, the wave, the alphalist logo, green and red highlight colors. Less "AI-made", on-brand.

Below is every slide in order, with a one-liner of content and the visual treatment. Tick the box if the slide is approved. Strike through or freetext below if you want it cut, replaced, or moved.

### KEYNOTE (~30 min, 16 slides)

- [x] **K01 - Title.** "The Impact of Agentic Engineering" + "From writing code to steering systems" + alphalist wave + Fabian's name. Static.
- [x] **K02 - The Turning Point.** Big date: "November 24, 2025. Claude Opus 4.5." Then: "There is no point in letting humans write code anymore." Cold sharp open per Q3a. Step-by-step reveal: date first, then the line, after a beat.
- [x] **K03 - Evolution.** Three stages, left to right: (1) Developer writes code, (2) Developer writes code with AI, (3) AI writes code with the developer. Reuses `EvolutionSlide` style. Arrow-key reveal stage by stage.
- [x] **K04 - The self-adoption gap.** Same three stages with a green "Self-adoption" arrow from 1->2 and a red "No self-adoption" arrow from 2->3. Subtitle below stage 3: "Agentic Engineering, 10x productivity". Visual mirrors `self-adation.png`. Why it matters: this gap is the entire reason the room is here.
- [x] **K05 - Why developers don't cross the gap.** Five emotional reasons, revealed one at a time via arrow keys: don't want to substitute themselves / fear / comfort zone / don't trust AI / skeptical. No commentary needed beyond reading them. Anchor: "this is not a tooling problem. It is a human problem."
- [x] **K06 - Three techniques (taxonomy).** AI-assisted (tab-completions, in-context editing, +30%) / Vibe coding (prompts, intent, +50%) / Agentic engineering (specs, knowledge, tools, 10x). Reuses `taxonomy.png` shape. Productivity arrow at the bottom. Arrow-key reveal column by column.
- [x] **K07 - Three pillars of agentic engineering.** Spec-Driven Development / Knowledge & Guardrails / Tools & MCPs. Reuses `PillarsSlide`. One sentence per pillar, no deeper drill-down. "I assume most of you know this, but we all need to be on the same page for the rest of the morning."
- [x] **K08 - Easy to start, hard to finish.** Two columns. Left (green): "Workshop, trainer, the aha moment." Right (red): "And then?". Subtitle on the right: "no industry best practice, no handbook." This is why the room exists.
- [x] **K09 - The cloud of open questions.** Tag cloud, arrow-key rapid reveal of 14 to 16 sharpened questions. Working list (you can edit):
  - "Do we still review code?"
  - "Where do POs fit in?"
  - "Frontend vs backend, still a thing?"
  - "Is SCRUM still a thing?"
  - "Where do specs come from?"
  - "What about the skeptics?"
  - "Compliance how?"
  - "How do we test all this?"
  - "Which agent? Which license?"
  - "What is an acceptable token bill?"
  - "Still need Jira?"
  - "What do juniors do?"
  - "Where do future seniors come from?"
  - "How do we hire?"
  - "Spec-kit, yes or no?"
  - "Who deploys all the marketing apps?"
  - "Who is accountable when no one wrote it?"
  - "Do we still need agencies?"
  No commentary. Land the overwhelm.
- [x] **K10 - It does not stop at engineering.** Big text: "Marketing. Sales. HR. PR. Finance. They all build now." Step-by-step reveal of department names. Subtitle: "the boring half. The faster half is next."
- [x] **K11 - Agents in the product itself.** PostHog-style loop diagram: app -> analytics -> agent -> PR -> app. Caption: "Self-improving product. The user behavior is the spec." Static visual, single beat.
- [x] **K12 - The productivity range.** Horizontal bar from "Just buy licenses: -10% to +30%" up through "+50%" up to "Factor 1,000,000 (One-Shop-Shop)". Reveals stage by stage. Closing line: "There is no upper ceiling. There is no lower floor either. The number depends 100% on your capability and empowerment to reshape the org."
- [x] **K13 - Verification is the new cost center.** Single big quote slide: **"Code creation is free. Verification is the new cost center."** Subtitle small: "the bottleneck moved. Plan accordingly."
- [x] **K14 - Intent and accountability.** Single big quote slide: **"The job of the developer, and most humans, collapses to two things: Intent. Accountability."** Step-by-step: first the question "what is left for humans?", then the answer.
- [x] **K15 - Innovation pace beats structural pace.** Closer (Q9b reading). Big quote: **"AI-driven innovation moves faster than any org can restructure itself."** Then below: "stop trying to keep up with re-orgs. Let innovation drive structure." This is the cliffhanger that hands directly to the agenda.
- [x] **K16 - Hand-off.** Half a beat. "We did not bring you here for answers. We brought you here to share the questions." Cut to agenda.

The flow is good now. Now I need to see the draft of these slides

### POST-KEYNOTE (~14 min, 4 slides)

- [x] **P01 - Agenda.** The two-day flow, today highlighted. Reuses `agenda.png` content but rebuilt as a slide. Mark today's blocks. Anchor: "this is how we work the questions you just saw."
- [Remove (4); it's redundant] **P02 - What you take with you.** 4 outcomes: (1) clarity on next steps / (2) clarity on the future ideal state / (3) clarity on how to apply it to your org / (4) clarity on the roadmap ahead. Subtitle: "you will not leave with answers. You will leave with sharper questions and 47 peers who carry the same ones."
- [x] **P03 - House rules.** Three lines, no decoration: "Chatham House rule. / No audio or video recording. / What is said here stays here." Maybe a small alphalist wave at the bottom for warmth.
- [x] **P04 - Hosts.** 6 photos in two rows of three, name + subtitle below each. Order alphabetical: Benedikt, Björn, Denis, Fabian, Tereza, Tim. Footer: "and small group support all day."

### NEXT SESSION (Survey readout, 5 min, 3 slides)

- [x] **S01 - Where the room actually is (Maturity).** Bar chart, L0 to L4, with the room's actual numbers (L1=10, L2=5, L0=2, L3=2, L4=0). Caption: "53% of you self-report L1. The click moment lives at L3+. Two of you are there. The rest of today is about closing that gap."
- [x] **S02 - It already escaped IT.** Horizontal bars: marketing 16, executive 15, customer support 12, operations 11, HR 10, finance 9, sales 8, legal 5. Caption: "18 of 19 of you have non-technical departments using agents. While we argue about engineering rollout, your marketing teams already shipped."
- [x] **S03 - The new bottleneck.** Stacked bar or pie: too_early (11), review (7), qa (6), specs (5), integration (2), still_code_gen (1). Caption: "When you do see a bottleneck, it is verification. Code creation is solved. Verification is not."

### LIVE DEMO (separate, 2 slides, 13:30 slot)

- [x - you can use it right after the session.] **D01 - What we build.** Big title: "Bootcamp Feedback Tool". Subtitle: "deployed today. You use it tomorrow morning." Three bullet bullets: anonymous per-session feedback / overall feedback / private organizer dashboard. Footer: "we feed it `agenda.md` and `participants.md`. The tool is built from your own context."
- [x - we will use Codex with fast mode not Spark. ] **D02 - How we build.** Four-step horizontal flow: Spec -> Roadmap -> Phased build -> Deploy. Below each step: one tool/skill (e.g. Spec: Codex Spark + prepared skill | Roadmap: agent generates phased plan | Build: agent codes phase by phase, human steers | Deploy: Vercel preview, QR code on screen). Caption: "the agent does the typing. I do the steering. The prepared environment does half the work."

Comment:
- We'll build this with Laravel and deploy to a Hetzner with Forge

---

### Three small things I still need from you before I write the file

- [Both are bad. Propose new ones based on actual content] **Title preferred wording.** "The Impact of Agentic Engineering" (from the alphalistbootcamp doc) or your own line? Sub-line "From writing code to steering systems" lifted from `agenda.png` Day 1 banner. OK?
- [#OneShotShop - see https://agentic-engineers.dev/] **One-Shop-Shop or One-Shop-Shop-Challenge.** What is the canonical name and is there a result number to put on K12 (e.g. "Factor 1,000,000")? Want to be precise.
- [keep the original sentense. Innovation cannot drive structure. Just because coding ages are getting better and better doesn't mean that organization will change. This is the actual problem. Coding agents get so much better and CTOs have to change their organization, which is hard because humans have to change behavior. That's the whole point.] **Are you OK with K15 reflecting the Q9b reading explicitly?** I framed it as: AI innovation pace > org restructuring pace, so let innovation drive structure. If you'd rather keep the original raw line "Change of innovation outperforms structural changes" verbatim on the slide and let the spoken explanation do the work, mark this and I will adjust.

Once these three are confirmed I will write `keynote-slides.md` with full visual descriptions, ASCII layouts where it helps, and animation/reveal notes for every slide.

---

## Round 4 (Claude): Title proposals + final locks

### Locked from your edits

- P02 ("What you take with you") removed.
- D01: tool is used by participants right after the session, not "tomorrow morning". Updated.
- D02: Codex with fast mode (not Spark). Build stack: Laravel + Hetzner + Forge. Updated.
- K15: keep original sentence verbatim. The point you clarified: AI keeps getting better, but org change does not happen automatically. Models race ahead, structure does not. CTOs in the room are the only mechanism that closes that gap. I will use the original sentence as the headline and add a one-line subtitle that lands your point.
  - Final K15 wording: **"Change of innovation outperforms structural changes."** Subtitle small: "The agents keep getting better. Your org will not, unless you change it. That is the work."
- #OneShotShop: confirmed (one prompt, complete shop, multiple builds at agentic-engineers.dev). I will use **"Factor 1,000,000"** as the rhetorical anchor on K12 since that is the framing in your raw notes. Easy to swap to a real measured number later.

### Q13: Title - 5 fresh options based on actual keynote content

- [ ] a) **"Code Got Cheap. Your Org Didn't."** Captures the entire arc in one beat. Hooks economic framing, sets CTO as the protagonist, sounds nothing like a vendor talk.
- [ ] b) **"The Bottleneck Moved."** Minimal and evocative. Audience leans in to ask "where to?". The keynote spends 30 minutes answering: verification, org, human role.
- [ ] c) **"Faster Than You Can Restructure."** Anchors the K15 thesis as the through-line. Direct to the audience: AI is racing, your org will not catch up by waiting.
- [ ] d) **"There Is No Playbook."** Names the shared anxiety in the room, validates why they are here, leaves space for the keynote to argue what to do anyway.
- [ ] e) **"Steering, Not Coding."** Captures the role shift in two words. Ties cleanly to the K14 intent/accountability beat. Possibly too quiet for an opening keynote.

**Recommendation: (a) "Code Got Cheap. Your Org Didn't."** It pairs the two halves of the keynote (Acts 1-2 = code got cheap, Acts 3-5 = your org has to catch up) and lands as a sentence a CTO can repeat to their board on Monday. Subtitle line: "The Impact of Agentic Engineering on Your IT Organization."

If none of these land, write your own and I will use it.

I will proceed and write `keynote-slides.md` using (a) as the working title. If you pick a different one before I deliver, easy swap.

---

## Round 5 (Claude): Missing "What can you expect?" + impact of agentic engineering

Fabian's note: "I'm missing the 'What can you expect?' slide and overall I feel we didn't answer the impact of agentic engineering."

### Where we are right now

The deck talks *around* impact but never lands a concrete "this is what changes for you" slide.

- **K12 — Productivity range** (http://localhost:3000/alphalist-cto-bootcamp/10). Eyebrow: "Is it worth the effort?". Title: "What's in it for me?". Three numbers stacked: +30% (orange) / 3 – 10× (green) / ∞ (black).
- **K13 — Verification is the new cost center** (http://localhost:3000/alphalist-cto-bootcamp/22). Currently parked at the very end of the deck, divorced from K12.
- **K14 — Intent / Steering / Verification / Accountability** (http://localhost:3000/alphalist-cto-bootcamp/11). Talks about the human role.
- **K15 — Innovation outperforms structural change** (http://localhost:3000/alphalist-cto-bootcamp/12). Talks about org change.

### Two gaps, in order of importance

1. **K12 isn't doing the work it promises.** "What's in it for me?" sets up a concrete answer, then delivers three multipliers floating in space. A CTO can't act on that. They need to see what 3–10× means in their terms: time-to-market, scope, parallelism, cost structure, what their team can attempt that they couldn't before.
2. **K13 is orphaned at the end.** It belongs right after K12 per the original Q7 plan. The one-two punch (no ceiling on speed → here's where the new bill shows up) was the whole point of pairing them.

No, we keep these slides where they are

### Q14: How do we fix the impact arc?

Three options. Tick one or write your own.

- [ ] **A) Keep K12 as the multiplier slide, add K12b "What this actually buys you".** Concrete before/after pairs (e.g. "8-week feature → 2 days", "3 engineers → 1 engineer + 5 agents", "ideas killed because of capacity → now shippable"). Then move K13 back to follow K12b.
- [ ] **B) Replace K12's multipliers with dimensions of impact.** Speed, scope, cost shape, role, org boundary. Each revealed one by one. Drop the tier numbers entirely.
- [ ] **C) Keep K12, but give it a punchline.** Add a final reveal that names the consequence of "no ceiling": you can now attempt things that weren't on the roadmap. Then K13 follows.

**Recommendation: A.** Multipliers are good as a hook, but they need a concrete follow-up slide that translates them into CTO language. And move K13 back to where it belongs.

**A14:**

### Q15: When you say "impact of agentic engineering" — which lens?

The answer changes which slide we build.

- [ ] a) Impact on the **engineer's day** (what their week looks like).
- [ ] b) Impact on the **product / business** (time-to-market, scope, cost structure).
- [ ] c) Impact on the **org structure** (roles, headcount, boundaries between IT and the rest).
- [ ] d) All three, one slide each.

**A15:**

### Q16: Move K13 (Verification is the new cost center) back to its planned slot?

Currently at the very end. The original Round 2 plan put it directly after the productivity slide.

- [ ] a) Yes, move K13 to slot directly after K12 (or K12b).
- [ ] b) No, leave it at the end as a closing punch.
- [ ] c) Drop K13 entirely if K12b already covers cost-shape change.

**A16:**

