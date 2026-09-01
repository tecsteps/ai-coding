import {Presentation} from '@/types/slide';

export const demo: Presentation = {
    name: 'demo',
    slides: [
        {
            type: 'title',
            title: 'Agentic\nEngineering',
        },
        {
            type: 'regular',
            headline: 'About me',
            profile: {
                name: 'Fabian Wesner',
                title: 'CTO & Entrepreneur',
                imageSrc: '/img.png',
                linkedIn: 'https://www.linkedin.com/in/fabian-wesner/',
            },
            sections: [
                {
                    title: 'Career',
                    items: [
                        'Solopreneur & Agentic Engineering Coach',
                        'Tech Co-Founder of Spryker and ROQ',
                        'CTO of Rocket Internet and Project A',
                    ],
                },
            ],
        },
        {
            type: 'regular',
            headline: "Today's Agenda",
            layout: 'cards',
            activeSection: 0,
            sections: [
                {
                    title: 'Short presentation',
                    text: 'Setting the scene for Agentic-Engineering',
                    icon: 'presentation',
                },
                {
                    title: 'Hands-on workshop',
                    text: "We'll build a full project together. You'll learn how I do it, so you can take inspiration.",
                    icon: 'code',
                },
                {
                    title: 'Ongoing Q&A',
                    text: "I am here to answer all your questions about using Agentic Engineering for your daily work. Don't hesitate to ask me at any time.",
                    icon: 'question',
                },
            ],
        },
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
        {
            type: 'easy-start',
            headline: 'Starting is very easy!',
        },
        {
            type: 'spec-gap',
            headline: 'But doing it *right* is hard.',
            points: [
                'The AI will fill specification gaps.',
                'Leads to frustration (*AI isn\'t doing what I want...*)',
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
            skillsDefinition: 'Packaged, reusable instructions the agent loads for a specific kind of task.',
            skills: [
                {
                    name: 'Code Review',
                    description: 'Checklist and process for reviewing changes',
                    enables: 'Consistent quality bar',
                },
                {
                    name: 'Spec Writer',
                    description: 'Template and steps for writing a technical spec',
                    enables: 'Faster, complete specs',
                },
                {
                    name: 'Deploy Runbook',
                    description: 'Step-by-step deployment and rollback procedure',
                    enables: 'Safe, repeatable releases',
                },
            ],
            footer: 'MCPs connect the agent to tools & data. Skills teach it your process. Both are equally important.',
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
        {
            type: 'ai-failures',
            headline: 'AI Failures',
            intro: 'When AI fails, it\'s typically due to',
            reasons: [
                {
                    percentage: 95,
                    label: 'Missing clear instructions',
                    description: 'SDD + Knowledge + Guardrails + Checks',
                },
                {
                    percentage: 5,
                    label: 'Non-deterministic behavior',
                },
            ],
            conclusion: 'The last 5% are still a challenge!',
            footnote: 'Percentage values are based on my experience',
        },

        {
            type: 'prime-directive',
            headline: 'Prime Directive',
            directives: [
                'The developer is fully accountable for the outcome.',
                'Work produced by a Coding Agent is treated exactly like human-written code.',
                'AI carries no blame and no accountability when things go wrong.',
            ],
        },
        {
            type: 'mental-model',
            headline: 'Mental Model',
            intro: 'While building software, the developer also builds a mental model of it. That model is just as important as the code. If a company loses the person who holds it, the software often becomes far less maintainable.',
            warning: 'When using Coding Agents, there is a risk of losing the mental model!',
            tips: [
                "Don't let the AI decide anything!",
                'Never commit code, you don\'t understand!',
                'Enforce "your" architecture!',
            ],
        },
        {
            type: 'jobs',
            headline: 'Role of the Developer',
            before: {
                title: 'Traditional',
                items: [
                    {task: 'Technical specifications'},
                    {task: 'Programming'},
                    {task: '(Unit) testing'},
                    {task: 'Validation of results'},
                ],
            },
            after: {
                title: 'With AI Coding Agent',
                items: [
                    {task: 'Technical specifications', percentage: 45},
                    {task: 'Validation of results', percentage: 45},
                    {task: 'Defining Guardrails, Guidance & Tooling/MCPs', percentage: 5},
                    {task: 'Coding', percentage: 5},
                ],
            },
            footnote: 'Percentage values are based on my experience',
        },
        {
            type: 'vs',
            headline: 'Which Coding Agent to use?',
            tools: [
                {
                    name: 'Claude Code',
                    logos: ['/claudecode2.png'],
                    pros: [
                        'Most advanced coding agent',
                        'Semi-flatrate pricing (e.g. 100EUR/month per "premium" seat)',
                    ],
                    cons: [
                        'Learning curve'
                    ],
                },
                {
                    name: 'Codex',
                    logos: ['/codex-logo.png'],
                    pros: [
                        'Maintained by OpenAI',
                        'Strong reasoning models (GPT-5.x)',
                    ],
                    cons: [
                        'Smaller ecosystem of extensions',
                    ],
                },
                {
                    name: 'Cursor',
                    logos: ['/cursor-icon.png', '/grok-logo.png'],
                    pros: [
                        'Amazing UX',
                        'All LLMs available** (now incl. Grok, after the merger)',
                    ],
                    cons: [
                        'API-based billing',
                    ],
                    highlight: 'main reason to use it',
                },
            ],
            infoBox: "Capability level of LLMs and harnesses is so high today, it's mostly a taste question. Private use: try them all, incl. open-weight models via OpenCode. Company: mostly a purchase decision, as team seats are expensive.",
            footnotes: [
                '* There is a nice VSCode plugin available',
                '** Claude Code can also be used with other LLMs',
            ],
        },
        {
            type: 'agent-theory',
            headline: 'How Claude Code Works',
        },
        {
            type: 'glossary',
            headline: 'The Vocabulary of Agentic Engineering',
            terms: [
                {
                    term: 'Prompt engineering',
                    description: 'Designing the instruction for a single agent run.',
                },
                {
                    term: 'Context engineering',
                    description: 'Controlling which files, rules, history and evidence the agent sees at each step.',
                },
                {
                    term: 'Harness engineering',
                    description: 'Engineering the repository, tools, sandbox, policies and feedback surrounding the model. Described as making the codebase legible and enforceable for agents.',
                    source: 'OpenAI',
                },
                {
                    term: 'Workflow',
                    description: 'A predefined sequence such as issue → plan → implement → test → review. Distinguished from agents, which choose their own path.',
                    source: 'Anthropic',
                },
                {
                    term: 'Loop engineering',
                    description: 'Designing an autonomous cycle that repeatedly assigns work, validates the result and decides the next action until a stopping condition is met.',
                    source: 'Addy Osmani',
                },
                {
                    term: 'Graph engineering',
                    description: 'Connecting multiple agents or steps through branches, parallel execution, gates, shared state and feedback edges. A loop is the simplest possible graph.',
                    source: 'LangChain',
                },
                {
                    term: 'Gauntlet Loop',
                    description: 'A multi-agent pattern: builders produce components, independent critics compare them against a concrete quality bar, and failed components return for improvement.',
                    source: 'Matt Shumer',
                },
                {
                    term: 'AI Software Factory',
                    description: 'An always-on operating system for the entire SDLC: signals enter, agents triage, plan, build, test, review, ship and monitor, generating new feedback. Contains many workflows, loops and graphs.',
                    source: 'Factory.ai',
                },
            ],
        },
        {
            type: 'term-demystify',
            headline: 'Loop Engineering, Demystified',
            term: 'Loop Engineering',
            prompt: 'Implement, then test, if broken fix; repeat until done',
        },
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
        {
            type: 'big-quote',
            quote: 'Use it yourself. As much as possible.',
        },
        {
            type: 'hands-on',
            headline: "Let's get our hands dirty!",
            projectDescription: '...',
            procedureItems: [
                'I will build it in front of you',
                'You are doing it in parallel locally',
                'Use whatever technology you like',
            ],
            techNote: 'We need UI, some business logic, and a database (e.g. SQLite)',
        },
        {
            type: 'existing-codebase-step',
            headline: 'Explore the Code Base',
            stepNumber: 1,
            totalSteps: 7,
            icon: 'search',
            description: 'Let the agent document what it finds. This becomes its memory.',
            points: [
                'Architecture, technologies, dependencies (incl. versions)',
                'Workflows and CI/CD pipelines',
                'Write into docs/*.md, add visualizations',
            ],
            prompt: 'Explore the existing code base. Write documentation into docs/*.md. Cover: architecture, technologies, dependencies (incl. versions), workflows. Add visualizations when useful.',
        },
        {
            type: 'existing-codebase-step',
            headline: 'Code Conventions',
            stepNumber: 3,
            totalSteps: 7,
            icon: 'code',
            description: 'Prevents the agent from introducing inconsistencies.',
            points: [
                'If linter exists: provide rules as guidance in CLAUDE.md',
                'If not: reverse-engineer conventions from the code',
            ],
            prompt: 'Reverse-engineer code conventions from the existing code base. Write to docs/code-conventions.md and link from CLAUDE.md. Ask me questions if things are uncertain.',
        },
        {
            type: 'existing-codebase-step',
            headline: 'Unit Tests',
            stepNumber: 4,
            totalSteps: 7,
            icon: 'test',
            description: 'Tests are the agent\'s feedback loop for self-correction.',
            points: [
                'Run existing tests, check coverage',
                'Add missing tests for critical paths',
                'Document test commands in CLAUDE.md',
            ],
            prompt: 'Run all tests and check coverage. Add missing tests for uncovered critical paths. Document test commands in CLAUDE.md.',
        },
        {
            type: 'existing-codebase-step',
            headline: 'Run & Verify',
            stepNumber: 5,
            totalSteps: 7,
            icon: 'play',
            description: 'Without this, the agent is coding blind.',
            points: [
                'Agent must be able to start the app',
                'Verify results (e.g. via Playwright MCP)',
                'Seed data / fixtures for local dev',
            ],
            prompt: 'Make sure you can run the application locally. Verify you can see results of your changes. Document the start command in CLAUDE.md.',
        },
        {
            type: 'existing-codebase-step',
            headline: 'Provide Access',
            stepNumber: 6,
            totalSteps: 7,
            icon: 'key',
            description: 'The agent needs to interact with the same systems a developer would.',
            points: [
                'Logs and error tracking',
                'Database',
                'External services and APIs',
            ],
            tip: 'Be careful when connecting to business critical systems!',
        },
    ],
};
