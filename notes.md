# Title slide
## Content

AI-Coding

## Instructions:

(this slide has no headine)

# About me

## Content
Fabian Wesner
CTO & Entrepreneur

Career:
- Solopreneur & AI-Coding Coach
- Tech Co-Founder of Spryker and ROQ
- CTO of Rocket Internet and Project A

https://www.linkedin.com/in/fabian-wesner/

# Today's Agenda

## Content:

(1) Short presentation to set the scenes

(2) Hands-on workshop.

We'll build a full project together. You'll lean how I do it, so you can take inspiration.

(Ongoing): Q&A

I am here to answer all your questions about using AI-coding for your daily work. So don't hesitate to ask me at any time,




# Evolution

## Content (drafted)

- Developer writes code (1x)
- Developer writes code with AI (1,3x) - Tab-completions / In-context editing
- AI writes code with developer (10x) - Coding Agents

## Instructions:

Make it look stunning!!!

# Question 1

## Content

Who of you have experience with
(A) Cursor
(B) Claude Code
(C) Other?

## Instructions

Use the "Who of you have experience with" as headline, not "Question 1"

Improve my copy

None of them is highlighted. But when I use up/down arrows, I can set a highlight-cursor. When I press "SPACE" then I can count (show nicely with a Magic component). Rember the counts in localStorage, so they are not lost for this session.

# Question2

## Content

Who of you have experience with
(A) MCPs
(B) Sub-Agents
(C) Planning-Mode

## Instructions

Same as above


# Agent theory

## Instructions

Visually explain how Claude Code works (basics)
Re-Act / Orchestrator



# Starting is very easy!

## Instructions

Show a basic prompt example, like adding a button

# But doing it "right" is hard.

## Content

=> The AI will fill specification-gaps.
=> Leads to frustration (AI isn't doing what I want....)

## Instructions



(show the open specifications gap of the button, like what color, size, action, double-click ....)


(Optimize my copy and make it visually stunning)




# Ways how to use it (feel free to improve the copy)

## Content

(1) Prompt very specfic commands 
"Do this, do that" (<- often called "vibe coding")
+ Good for fine-tuning (ideally with visual confirmation)
- Bad for building complex features (leds to brain rot)

(2) Brainstorm with AI
Do a full brainstorming session with the coding agent. Result is a very detailed "prompt" with hundrets or thousands of lines. 

## Instructions

Present it wisly

# The three pillars of productive AI-Coding 

## Content (Drafted)

(1) Plan complex features with AI

(2) Provide the right tools

(3) Define guardrails

## Instructions
This checklist will be shown multiple times, and we'll add items
For now add a focus marker on (1) Not movable. This is the next section


# Spec Driven Development (SDD)

## Content

* Brainstorm the feature with the Coding Agent
* ....



## Instructions

Create the content of the slide. We are not doing SDD by the books. Instead we are using it like described in these two Claude Code commands (don't mention them; just for context)

Add a footnote, that we are doing it without additional tools today, but there are popular ones like spec-kit from Github (link to https://github.com/github/spec-kit)




# Interaction

## Instructions

Create this slide based on my thoughts:
Coding Agent creates a code but when it's not able to try out things and see the consequences, it cannot improve itself. So it's very likely to fail. That's why we need to give it to it so Coding Agent can
- "see" the result
- query the database
- read logs
- use scripts
- do research
- run tests



# MCP

## Content (draft)

MCP = Model Context Protocol

Laravel Boost | ...
Playwright | 
Jetbrains |

Footnote: Depending on your IDE and technology stack, other MCPs might be better.

## Instructions

Show MCP = Model Context Protocol in a box. Add a short description what is.

Show the MCPs as table. Add a short description for each and what it enables (see see slide http://localhost:3000/demo/13)
Mark thoses that are ootb (Claude Code)


# How to ensure quality?

## Content (draft)

The goal is to generate production-ready code. What does that mean?

- Features are complete and correct
- Architecture stays consistent
- Code conventions are obeyed
- Existing libraries are used
- Code is tested

## Instructions

Optimizy the content (did I miss something fundamental?)


# Provide Guidance

## Content

1. Make sure the agent "knows" what it needs to know 
- Full documentation of your systems
- Schema, Architecture, Technologies
- Your code conventions

Example (for COde Conventions):
3. **No Magic Strings:**
    - NEVER use string literals for constants, statuses, types, etc.
    - ALWAYS use class constants or enums
    - ❌ BAD: `if ($status === 'pending')`
    - ✅ GOOD: `if ($status === Status::PENDING)`

4. **Use DTOs, Not Associative Arrays:**
    - NEVER pass associative arrays between layers
    - ALWAYS create typed DTO classes for data transport
    - DTOs should have typed properties and clear structure
    - ❌ BAD: `return ['name' => $name, 'url' => $url];`
    - ✅ GOOD: `return new CompanyData(name: $name, url: $url);`

## Instructions

Show examples as code

Make examples open when I press down arrow

# Provide Guardrails

## Content

Provide tools which allows the agent to check the results
* Check for code errors by giving access to the IDEs Intelisense (e.g. with Jetbrains MCP)
* Enable to write & execute tests (incl. security tests)
* Use skeptical sub-agents to do reviews

Examples for sub-agents:
- Architecture Guarding - Knows all your conventions and checks the code critically
- Spec Checker - Checks specification for gaps, logicak hickups and completness
- Result Inspector - Checks the implementation is compliant to the specs (nothing forgotten, nothing added) 

## Instructions
Use people icon for the sub-agents. Show ony by one when I press down arrow






# Claude Code vs Cursor

## Content

Claude Code
+ Most advanced coding agent
+ Maintained by Anthropic
+ "Flaterate" pricing
+ Works with JetBrains
- Learning curve
- Raw CLI tool*

Cursor
+ Amazing UX (main reason to use it)
+ All LLMs available
- Limited to VSCode

## Footnote
* There is a nice VSCode plugin available
** Claude Code can also be used with other LLMs

## Instructions

Show the (main reason to use it) not as regular text, more as hint

Show company logo for Cursor
Show ascii art for Claude COde (using the right colors)

 ▐▛███▜▌
▝▜█████▛▘
  ▘▘ ▝▝




# Prime Directive

## Content

* The developer is fully responsible for the outcome.
* Work produced by a Coding Agent is treated exactly like human-written code.
* AI carries no blame and no accountability when things go wrong.

## Instructions

Present as a prime directive


# Mental Model

## Content

While building software, the developer also builds a mental model of it. That model is just as important as the code. If a company loses the person who holds it, the software often becomes far less usable.

When using Coding Agents, there is a risk of loosing the mental model!

So to keep the mental model:
- Don't let the AI decide anything!
- Always check the results!
- Enforce "your" architecture!


# AI failures

## Content

When AI makes a "mistake" then it's
- 95% missing clear instructions (-> SDD + Knowledge + Guardrails + Checks)
- 5% Non deterministic behavior

The last 5% are still a challenge!

## Footnote
Percentage values are based on my experience


# Jobs of the developer

## Content

Before (simplified)
* Technical specifications
* Programming
* (Unit) testing
* Validation of results

With AI Coding Agent:
* Technical specifications (80%)
* Validation of results (10%)
* Perfectionizing the setup for the Coding Agent (5%)
* Coding (5%)



# Let's get our hands dirty!

## Content

What We're Building
A small app for damage reporting for courier operations. Drivers upload photos of damaged packages, and the system automatically assesses severity and generates professional reports.

Procedure:
- I will build it in front of you
- You are doing it in parallel locally.
- Use whatever technology you like (we need UI, some business logic and a database (e.g. SQLite)).