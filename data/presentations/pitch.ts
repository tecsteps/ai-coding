import {Presentation} from '@/types/slide';

export const pitch: Presentation = {
    name: 'pitch',
    slides: [
        // Slide 1 - Title
        {
            type: 'title',
            title: 'Total Disruption',
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
            loopSteps: ['Think', 'Act', 'Observe'],
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

        // Slide 10 - Proof: What Industry Leaders Are Saying
        {
            type: 'quotes',
            headline: 'What Industry Leaders Are Saying',
            quotes: [
                {
                    text: 'The era of humans writing code is over.',
                    author: 'Ryan Dahl',
                    imageSrc: '/ryan_dahl.png',
                },
                {
                    text: 'The speed-up is undeniable.',
                    author: 'DHH',
                    imageSrc: '/dhh.png',
                },
                {
                    text: 'Watching this execute is astonishing.',
                    author: 'Sam Altman',
                    imageSrc: '/sam.png',
                },
            ],
        },

        // Slide 11 - Signals in the Ecosystem
        {
            type: 'trend',
            headline: 'Signals in the Ecosystem',
            subtitle: 'Attention is shifting even before the impact is visible',
            imageSrc: '/trends.png',
            annotation: 'Last 12 months',
        },

        // Slide 12 - This Is Not Just a Tech Question
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
            items: ['Ignore it', 'Delay it', 'Hope it "goes away"'],
            direction: 'fading',
        },

        // Slide 14 - The Only Viable Strategy
        {
            type: 'wrong-reaction',
            headline: 'The Only Viable Strategy',
            items: ['Learn it', 'Master it', 'Leverage it', 'Use it for your own advantage'],
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
            preText: 'Tomorrow:',
            headline: 'How to use coding agents to your own advantage',
        },

        // Slide 18 - Closing
        {
            type: 'closing',
            line1: 'You can\'t stop it.',
            line2: 'You can master it.',
        },
    ],
};
