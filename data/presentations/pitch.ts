import {Presentation} from '@/types/slide';

export const pitch: Presentation = {
    name: 'pitch',
    slides: [
        // Slide 1 - Title
        {
            type: 'title',
            title: 'Massive Disruption',
            subtitle: 'Welcome to the Era of AI Agents',
        },

        // Slide 2 - The Common Mental Model of AI
        {
            type: 'chatbot-mental-model',
            headline: 'The Common Mental Model of AI',
            quote: 'AI is a chatbot',
            steps: ['Open', 'Ask', 'Answer', 'Close'],
            tagline: 'Harmless. Contained. Optional.',
        },

        // Slide 3 - Why People Feel Safe
        {
            type: 'safety-checklist',
            headline: 'No big effects yet',
            items: [
                {text: 'No big layoffs', icon: 'briefcase'},
                {text: 'No visible productivity shock', icon: 'graph'},
                {text: 'Daily life feels unchanged', icon: 'calendar'},
                {text: 'Studies say: "No major economic impact"', icon: 'document'},
            ],
        },

        // Slide 4 - The Hidden Shift
        {
            type: 'big-statement',
            lines: ['This perception is wrong.', 'The real shift is not chatbots.'],
            crossedOut: 'Chatbots',
            highlighted: 'Agents',
        },

        // Slide 5 - What an Agent Actually Is
        {
            type: 'agent-loop',
            headline: 'What an Agent Actually Is',
            description: 'An LLM in a loop with tools and autonomy',
            loopSteps: ['Reason', 'Act', 'Observe'],
            tools: [
                {name: 'File system', icon: 'file'},
                {name: 'Browser', icon: 'browser'},
                {name: 'Database', icon: 'database'},
                {name: 'Terminal', icon: 'terminal'},
            ],
        },

        // Slide 6 - Agents Can Do Human Computer Work
        {
            type: 'agent-capabilities',
            headline: 'What an Agent can do',
            capabilities: [
                'Read and write files',
                'Browse the web',
                'Use software and websites',
                'Query databases',
                'Monitor systems and logs',
                'Run tasks autonomously',
            ],

            footer: 'Agents can do everything a human can do at a computer.',
        },

        // Slide 7 - The Key Realization
        {
            type: 'big-statement',
            lines: ['Agents are not tools.', 'Agents are workers.'],
            subtitle: 'Always on. Extremely cheap. Increasingly reliable.',
        },

        // Slide 8 - Humans vs Agents
        {
            type: 'humans-vs-agents',
            headline: 'Humans vs/with Agents',
            automated: ['Step-by-step work', 'Compliance over judgment', 'Execution at scale'],

            boosted: ['Intent and vision', 'Problem framing', 'System thinking'],

        },

        // Slide 9 - Development as the First Shockwave
        {
            type: 'multiplier',
            headline: 'Development as the First Shockwave',
            from: '1x',
            to: '10x',
            statement: 'Development can be 10x faster',
            subStatement: 'An order of magnitude.',
        },


        // Slide A - The Math Your Clients Will Do
        {
            type: 'cost-comparison',
            headline: 'The Math Your Clients Will Do',
            oldModel: {
                label: 'Old Model',
                items: ['8 developers', '6 months', '300,000 EUR'],
            },
            newModel: {
                label: 'New Reality',
                items: ['2 engineers + agents', '6 weeks', '~50,000 EUR'],
            },
            punchline: 'Same output.',
            subPunchline: '(but same sales effort)',
        },

        // Slide B - The Competitor You Don't See Coming
        {
            type: 'big-statement',
            lines: [
                'A 3-person team with agents',
                'will outbid your 40-person agency.',
            ],
            subtitle: '',
        },

        // Slide C - What's Actually Valuable?
        {
            type: 'value-comparison',
            headline: 'What\'s Actually Valuable?',
            zeroValue: {
                label: 'Zero Value',
                items: ['Code', 'Hours', 'Team size'],
            },
            highValue: {
                label: 'High Value',
                items: [
                    'Understanding the client',
                    'Knowing WHAT to build',
                    'Measuring business impact',
                    'Envisioning AI solutions',
                    'Domain expertise',
                ],
            },
            rule: 'If AI can do it = zero value. If AI can\'t = extremely valuable.',
        },

        // Slide D1 - Help Clients Introduce AI Agents
        {
            type: 'agency-opportunity',
            headline: 'Help Clients Introduce AI Agents',
            subtitle: 'Help clients introduce AI agents to their offerings and operations',
            points: [
                'Replace human labor with agents at scale',
                'Building agent orgs is a distributed systems challenge',
                'Non-deterministic behavior requires real engineering',
            ],
        },

        // Slide D2 - Challenge the Client's Portfolio
        {
            type: 'agency-opportunity',
            headline: 'Challenge the Client\'s Portfolio',
            subtitle: 'Their business model is under attack too',
            points: [
                'Envision solutions clients can\'t see yet',
                'Most humans don\'t know what agents can do',
                'Almost every company must transform - or competition will eat them',
            ],
            footer: '',
        },

        // Slide E - Code Is an Implementation Detail
        {
            type: 'implementation-detail',
            headline: 'Code Is an Implementation Detail',
            matters: [
                {
                    title: 'Know what to build',
                    bullets: ['What increases revenue?', 'What decreases costs?'],
                },
                {
                    title: 'Translate into requirements',
                    bullets: ['Functional + technical specs', 'Clear success criteria'],
                },
                {
                    title: 'Measure the business effect',
                    bullets: ['Think it through in advance', 'Make success measurable', 'Show it to the customer'],
                },
            ],
            punchlines: [],
        },

        // Slide F - Moats Matter More Than Ever
        {
            type: 'moats-story',
            headline: 'Moats Matter More Than Ever',
            story: [
                'I built a full product as a solo engineer.',
                'Competitor monitoring. Working. Ready to launch.',
                'I didn\'t launch. Why? No moat.',
                'Anyone could clone it in weeks.',
            ],
            moats: ['Patents', 'Hardware', 'Private Data', 'Land', 'Financing', 'Relationships'],
            punchline: 'Everything else? Zero value.',
        },

        // Slide 13 - Performance Graph
        {
            type: 'performance-graph',
            headline: 'The Exponential Rise of AI Agents',
            xLabel: 'Time',
            yLabel: 'Performance',
            currentMarker: 'We are here',
            futureNote: 'Most is yet to come',
        },

        // Slide 14 - Adoption Cycle
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

        // Slide 15 - This Is Not Just a Tech Question
        {
            type: 'split-question',
            headline: 'This Is Not Just a Tech Question',
            leftLabel: 'A personal question',
            leftBullets: ['As a Sales Rep...', 'As a Marketer...', 'As an Analyst...'],
            rightLabel: 'A company question',
            rightBullets: ['Offering', 'Pricing', 'Execution'],
        },

        // Slide 13 - The Wrong Reaction
        {
            type: 'wrong-reaction',
            headline: 'The Wrong Reaction',
            items: ['Ignore it', 'Debate it', 'Hope it "goes away"'],
            direction: 'fading',
        },

        // Slide 14 - The Only Viable Strategy
        {
            type: 'wrong-reaction',
            headline: 'The Only Viable Strategy',
            items: ['Learn it', 'Master it', 'Use it for your own advantage'],
            direction: 'growing',
        },

        // Slide 15 - What This Means in Practice
        {
            type: 'practice-implication',
            lines: [
                'Stop doing work',
                'that agents do better',
                'faster',
                'cheaper',
            ],
        },

        // Slide 16 - Why We Start With Coding
        {
            type: 'transition',
            headline: 'Coding is just the beginning.',
            subtitle: 'AI agents are the new default',
        },

        // Slide 17 - Workshop Transition
        {
            type: 'transition',
            preText: 'Deepdive Workshop:',
            headline: 'Agentic Engineering',
        },

    ],
};
