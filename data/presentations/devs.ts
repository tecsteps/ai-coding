import { Presentation } from '@/types/slide';

export const devs: Presentation = {
    name: 'devs',
    slides: [
        // S1 - Intro + title
        {
            type: 'title',
            title: 'Agentic\nEngineering',
            subtitle: '',
        },

        // S2 - Quick intro round (NEW)
        {
            type: 'intro-round',
            headline: 'Quick round',
            bullets: [
                'Your name and current stack',
                'AI tool you use most today for coding',
                'One thing you want to leave with',
            ],
            footer: '30 seconds each - we have a lot to cover',
        },



        // S4 - Evolution (reuse from demo.ts)
        {
            type: 'evolution',
            headline: 'Evolution',
            stages: [
                {
                    multiplier: '1x',
                    title: 'Developer writes code',
                    subtitle: 'IDE',
                    description: 'Fully manual development',
                },
                {
                    multiplier: '1.3x',
                    title: 'Developer writes code with AI',
                    subtitle: 'Tab completion',
                    description: 'AI assists inside the editor',
                },
                {
                    multiplier: '10x',
                    title: 'AI writes code with the developer',
                    subtitle: 'Coding agents and SDD',
                    description: 'AI leads, developer steers',
                    isHighlighted: true,
                },
            ],
        },

        // S5 - Walking vs driving (NEW)
        {
            type: 'walking-driving',
            headline: 'Walking vs driving',
            subtitle: 'Same destination. Same outcome.',
            walking: {
                label: 'Walking',
                value: '100 km / 1 week',
            },
            driving: {
                label: 'Driving',
                value: '100 km / 1 hour',
            },
            punchline: 'If your time is valuable, you take the car.',
        },

        // S6 - Not a personal choice anymore (NEW)
        {
            type: 'not-a-choice',
            headline: 'Not a personal choice anymore',
            points: [
                'Productivity boost = new normal. Expected, not optional.',
                'Mid-term nobody gets paid for hand-typing code.',
                "Don't adapt = out of the market.",
            ],
        },

        // S7 - Innovation Adoption Lifecycle (reuse from pitch.ts)
        {
            type: 'adoption-cycle',
            headline: 'Innovation Adoption Lifecycle',
            segments: [
                { label: 'Innovators', percentage: '2.5%' },
                { label: 'Early Adopters', percentage: '13.5%' },
                { label: 'Early Majority', percentage: '34%' },
                { label: 'Late Majority', percentage: '34%' },
                { label: 'Laggards', percentage: '16%' },
            ],
            currentSegmentIndex: 1,
        },

        // S8 - Exponential rise / learning curve (reuse from pitch.ts)
        {
            type: 'performance-graph',
            headline: 'The Exponential Rise of AI Agents',
            xLabel: 'Time',
            yLabel: 'Performance',
            currentMarker: 'We are here',
            futureNote: 'Most is yet to come',
        },

        // S9 - Single-stack identity is over (NEW)
        {
            type: 'single-stack',
            headline: 'The era of single-stack identity is over',
            subtitle: 'Agents collapse the specialisation moat.',
            stacks: [
                { role: 'Frontend', example: 'React' },
                { role: 'Backend', example: 'Java' },
                { role: 'Data', example: 'Python' },
                { role: 'DevOps', example: 'Docker' },
            ],
            newBaseline: [
                'Full-stack',
                '+ Product & Business Sense',
                '+ Human Taste & Intent',
            ],
        },

        // S10 - The developer at end of 2026 (NEW)
        {
            type: 'dev-2026',
            headline: 'The developer, end of 2026',
            terminalLabels: [
                'agent #1 feature A',
                'agent #2 tests',
                'agent #3 spec',
                'agent #4 review',
                'agent #5 migration',
                'agent #6 docs',
            ],
            skills: [
                'Abstraction: intent, specs, constraints',
                'Speed: you are the bottleneck',
                'Multi-tasking: many agents in parallel',
            ],
            punchline: 'You conduct a team of agents',
        },

        // S11 - Vibe-Coding vs SDD (reuse from demo.ts)
        {
            type: 'ways',
            headline: 'Vibe-Coding vs SDD*',
            ways: [
                {
                    title: 'Vibe-Coding',
                    description: 'Developer still develops. AI just "types" the code.',
                    prompt: 'Change the Save button color to green',
                    pros: ['Good for small adjustments with visual confirmation'],
                    cons: ['Bad for complex features', 'Brain-rot (exhausting after a few hours)'],
                    highlight: 'I vibe-coded this entire presentation!',
                },
                {
                    title: 'Spec Driven Development',
                    description: 'Focus on specification. Agent does full implementation.',
                    prompt: "Let's brainstorm the user registration",
                    pros: ['Great for complex features', 'Maintains architecture coherence'],
                    cons: ['Requires more upfront effort'],
                    highlight: "We'll practice this today!",
                },
            ],
        },
        {
            type: 'pillars',
            headline: 'The Three Pillars of Agentic Engineering',
            pillars: [
                {title: 'Spec-Driven Development'},
                {title: 'Knowledge & Guardrails'},
                {title: 'Tools & MCPs'},
            ],
            focusIndex: 0,
        },
        {
            type: 'ways',
            headline: 'Vibe-Coding vs SDD*',
            ways: [
                {
                    title: 'Vibe-Coding',
                    description: 'Developer still develops. AI just "types" the code.',
                    prompt: 'Change the Save button color to green',
                    pros: ['Good for small adjustments with visual confirmation'],
                    cons: ['Bad for complex features', 'Brain-rot (exhausting after a few hours)'],
                    highlight: 'I vibe-coded this entire presentation!',
                },
                {
                    title: 'Spec Driven Development',
                    description: 'Focus on specification. Agent does full implementation.',
                    prompt: "Let's brainstorm the user registration",
                    pros: ['Great for complex features', 'Maintains architecture coherence'],
                    cons: ['Requires more upfront effort'],
                    highlight: "We'll practice this today!",
                },
            ],
        },
        {
            type: 'sdd',
            headline: 'Spec Driven Development (SDD)',
            steps: [
                {
                    title: 'Brainstorm with the Coding Agent',
                    description: 'Have a collaborative Q&A session to explore requirements, edge cases, and architectural decisions.',
                },
                {
                    title: 'Generate a Technical Specification',
                    description: 'The agent creates a detailed spec with checkboxes for every requirement - nothing ambiguous.',
                },
                {
                    title: 'Iterative Implementation',
                    description: 'Implement phase by phase. Each phase is validated before moving to the next.',
                },
            ],
            footer: "We're doing this without additional tools today, but there are popular ones like",
            footerLink: {url: 'https://github.com/github/spec-kit', label: 'github/spec-kit'},
        },
        {
            type: 'pillars',
            headline: 'The Three Pillars of Productive Agentic Engineering',
            pillars: [
                {title: 'Spec-Driven Development'},
                {title: 'Knowledge & Guardrails'},
                {title: 'Tools & MCPs'},
            ],
            focusIndex: 1,
        },
        {
            type: 'quality',
            headline: 'How to ensure quality?',
            goal: 'Generate production-ready code',
            checks: [
                'Features are complete and correct',
                'Architecture stays consistent',
                'Code conventions are obeyed',
                'Zero code duplications',
                'Code is tested',
                'Documentation is accurate',
            ],
        },
        {
            type: 'guidance',
            headline: 'Provide Guidance',
            intro: 'Make sure the agent "knows" what it needs to know',
            points: [
                'Full documentation of your systems',
                'Schema, Architecture, Technologies',
                'Your code conventions',
            ],
            examples: [
                {
                    title: 'No Magic Strings',
                    bad: "if ($status === 'pending')",
                    good: 'if ($status === Status::PENDING)',
                },
                {
                    title: 'Use DTOs, Not Associative Arrays',
                    bad: "return ['name' => $name, 'url' => $url];",
                    good: 'return new CompanyData(name: $name, url: $url);',
                },
            ],
        },
        {
            type: 'guardrails',
            headline: 'Provide Guardrails',
            intro: 'Provide tools which allow the agent to check its results',
            points: [
                "Check for code errors via the IDE's IntelliSense (e.g. JetBrains MCP)",
                'Enable writing & executing tests (incl. security tests)',
                'Use skeptical sub-agents to do reviews',
            ],
            subAgents: [
                {
                    name: 'Architecture Guardian',
                    description: 'Knows all your conventions and checks the code critically',
                },
                {
                    name: 'Spec Checker',
                    description: 'Checks specifications for gaps, logical issues, and completeness',
                },
                {
                    name: 'Result Inspector',
                    description: 'Verifies implementation is compliant to specs - nothing forgotten, nothing added',
                },
            ],
            bottomStatement: 'When something goes wrong, fix it and make sure it never happens again!',
        },
        {
            type: 'pillars',
            headline: 'The Three Pillars of Productive Agentic Engineering',
            pillars: [
                {title: 'Spec-Driven Development'},
                {title: 'Knowledge & Guardrails'},
                {title: 'Tools & MCPs'},
            ],
            focusIndex: 2,
        },
        {
            type: 'interaction',
            headline: 'Blind Coding leads to Low Accuracy',
            problem: 'Without feedback, the agent cannot validate its work or self-correct. It writes code blindly, likely to fail.',
            capabilities: [
                {
                    icon: 'eye',
                    title: 'Try it out',
                    description: 'Browser automation to verify UI changes',
                },
                {
                    icon: 'database',
                    title: 'Query the Database',
                    description: 'Validate data persistence and integrity',
                },
                {
                    icon: 'log',
                    title: 'Read Logs',
                    description: 'Analyze errors and debug issues',
                },
                {
                    icon: 'script',
                    title: 'Use Scripts',
                    description: 'Run custom validation commands',
                },
                {
                    icon: 'search',
                    title: 'Do Research',
                    description: 'Access docs and external knowledge',
                },
                {
                    icon: 'test',
                    title: 'Run Tests',
                    description: 'Execute test suites for verification',
                },
            ],
        },
        {
            type: 'mcp',
            headline: 'Extending Agent Capabilities',
            definition: 'A standard protocol that allows AI agents to connect with external tools and data sources.',
            items: [
                {
                    name: 'Bash',
                    description: 'Shell command execution',
                    enables: 'Run scripts, system commands',
                    builtIn: true,
                },
                {
                    name: 'WebSearch',
                    description: 'Search the web',
                    enables: 'Access current information',
                    builtIn: true,
                },
                {
                    name: 'WebFetch',
                    description: 'Fetch web content',
                    enables: 'Read documentation, APIs',
                    builtIn: true,
                },
                {
                    name: 'Playwright',
                    description: 'Browser automation',
                    enables: 'See the result, interact with UI',
                    builtIn: false,
                },
                {
                    name: 'JetBrains',
                    description: 'IDE integration',
                    enables: 'Code analysis, refactoring',
                    builtIn: false,
                },
                {
                    name: 'Laravel Boost',
                    description: 'Laravel framework tools',
                    enables: 'Database, Artisan commands, docs',
                    builtIn: false,
                },
            ],
            footer: 'Depending on your IDE and technology stack, other MCPs might be better suited.',
        },
        {
            type: 'pillars',
            headline: 'The Three Pillars of Productive Agentic Engineering',
            pillars: [
                {title: 'Spec-Driven Development'},
                {title: 'Knowledge & Guardrails'},
                {title: 'Tools & MCPs'},
            ],
            allActive: true,
        },

        // S16 - Prime Directive (reuse from demo.ts)
        {
            type: 'prime-directive',
            headline: 'Prime Directive',
            directives: [
                'The developer is fully accountable for the outcome.',
                'Work produced by a Coding Agent is treated exactly like human-written code.',
                'AI carries no blame and no accountability when things go wrong.',
            ],
        },

        // S17 - Prompting Guidelines (reuse from demo.ts)
        {
            type: 'prompting-guidelines',
            headline: 'Prompting Guidelines',
            guidelines: [
                {
                    title: 'Share Intent, Not Instructions',
                    bad: 'Do X',
                    good: "I want X. Let's discuss how.",
                },
                {
                    title: 'Let the Agent Validate Results',
                    bad: 'Implement!',
                    good: 'Implement, validate, and fix if needed',
                },
                {
                    title: 'Guide Continuously',
                    bad: 'Fix this!',
                    good: 'Fix this, then update your skills so it never happens again',
                },
            ],
        },

        // S18 - The click moment, now you try (reuse BigStatementSlide)
        {
            type: 'big-statement',
            lines: [
                "You don't get it by watching.",
                'You get it by doing.',
            ],
            highlighted: 'Open your laptop.',
            subtitle: '',
        },
    ],
};
