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
- This was  the Wendepunkt. AI generated better code than the avg human developer (and cheaper&faster anyway). 
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

The challenges: I have a lot of them. I imagine this as kind of a tech cloud where we have all the challenges and I use the arrow keys to show them one after the other very quickly. I will not say anything about them, just show how many there are: Do we need to review our code? When developers are working spec-driven, what should product owners do then? Do we need separated front and backend developers? Is CRUMP still a thing? Where do we get the requirements from? For all our people, what do we do with the skeptical ones, with the resistance? How are we compliant with compliance? How do we test everything? What do we do with so many people? Which coding agent or license to buy? How much are the costs for tokens acceptable for a developer? Do we still need Jira if everything is using Jira via MCP anyway? What should junior developers do? How do we get the future senior developers when nobody is writing code anymore? How do we unify our skills and prompt techniques? How to do interviews? Should we use spec-kit? How do we deploy all the mini-apps that were created by Marketing, Sales, and other teams? How can developers be accountable for the result when they did not write the code? Do we need any external, like agencies or freelancers?

Introducing Argentic Engineering to an IT org is a massive organizational challenge that needs to happen at light speed, because not having it at all is a competitive disadvantage and being in the transition phase causes tension. However, this is just the start. In parallel, AI agents should be introduced to the rest of the organization, letting people in marketing, sales, HR, PR, etc. automate their work. This massively boosts their capability and sparks creativity. That's not the end. Using AI agents to boost workers' capabilities is the logical but very boring part. AI and especially AI agents must be used in real time and be embedded in the product.

Change of innovation outperforms structural changes.

How much of a productivity boost you can expect for your entire organization. If you just give a license and do not change anything else, then the boost will be super low, maybe 20-30%. It could be even negative because of the chaos it creates. There is no upper ceiling, as I show in my One-Shop-Shop-Challenge. The speedup of a Factor Million is possible with the current technologies in specific setups. What you get out of this, and that's important, is not predefined by technology or by some physical rules. It 100% depends on your capability and empowerment to adjust the organization, the architecture, the processes to squeeze out maximum productivity.

Code creation tends to be free. Verification is the new cost center.

It doesn't even end with introducing AI agents to the work of people. You can also use AI agents to improve the product itself see specs/keynote/data/posthog.png and specs/keynote/data/posthog.txt


The job of the software developer and actually most humans boils down to two things: intent and accountability.






# Prompt

Let's brainstorm the content of the presentation. See my notes in brainstorming-archive/keynote/keynote-brainstorming.md
The presentation will be built afterwards (as /alphalist-cto-bootcamp), we just focus on the content of the slides (textual and visual).

I want you to ask me some relevant questions upfront to build up your understanding. You can show options and let me select; or let me answer freetext. We need to ensure we have a logical flow of thoughts and it fits to the context. We can do multiple rounds of Q&A. Only append to this file (except I tell you to do otherwise).
When we are all done, write a file keynote-slides.md with every slide (textual content and visualization as ASCII and (if needed) animations).