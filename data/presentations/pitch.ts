import { Presentation } from '@/types/slide';

export const pitch: Presentation = {
  name: 'pitch',
  slides: [
    // Slide 1: Title
    {
      type: 'title',
      title: 'The Future of\nSoftware Development',
      subtitle: 'How AI Coding Agents are Changing Everything',
    },

    // Slide 2: About Me
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
            'Solopreneur & AI-Coding Coach',
            'Tech Co-Founder of Spryker and ROQ',
            'CTO of Rocket Internet and Project A',
          ],
        },
      ],
    },

    // Slide 3: The Disruption is Here
    {
      type: 'regular',
      headline: 'The Disruption is Here',
      sections: [
        {
          title: 'What people think',
          items: [
            'AI is just a chatbot you open, ask a question, and close',
            'Studies say AI hasn\'t changed the economy much',
            'No visible jumps, no big layoffs',
          ],
        },
        {
          title: 'The reality',
          items: [
            'That perception is wrong',
            'The disruption is happening NOW',
            'Most people just aren\'t seeing it yet',
          ],
        },
      ],
    },

    // Slide 4: StackOverflow is Dying
    {
      type: 'stats-chart',
      headline: 'StackOverflow is Dying',
      chartType: 'stackoverflow',
      insight: 'Developers stopped asking humans for help. They\'re asking AI.',
    },

    // Slide 5: The Industry Leaders Have Spoken
    {
      type: 'quotes-grid',
      headline: 'The Industry Leaders Have Spoken',
      intro: 'The people who built the tools we all use are saying this is real.',
      quotes: [
        {
          imageSrc: '/pitch/ryan_dahl.png',
          name: 'Ryan Dahl',
          title: 'Creator of Node.js & Deno',
        },
        {
          imageSrc: '/pitch/dhh.png',
          name: 'DHH',
          title: 'Creator of Ruby on Rails',
        },
        {
          imageSrc: '/pitch/uncle.png',
          name: 'Uncle Bob',
          title: 'Author of Clean Code',
        },
      ],
    },

    // Slide 6: What are Coding Agents?
    {
      type: 'agent-capabilities',
      headline: 'What are Coding Agents?',
      intro: 'An LLM in a loop - sounds harmless, right? But an agent can do everything a human can do on a computer.',
      capabilities: [
        { text: 'Open and write files' },
        { text: 'Web searches' },
        { text: 'Use websites' },
        { text: 'Query databases' },
        { text: 'Read log files' },
        { text: 'Run commands' },
      ],
      conclusion: 'And it does it with light speed, reliability, and human-level intelligence.',
    },

    // Slide 7: The Evolution of Development
    {
      type: 'evolution',
      headline: 'The Evolution of Development',
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
          title: 'AI writes code with developer',
          subtitle: 'Coding agents',
          description: 'AI leads, developer steers',
          isHighlighted: true,
        },
        {
          multiplier: '∞',
          title: 'AI writes code independently',
          subtitle: 'Fully autonomous',
          description: 'AI plans, builds, and runs everything',
        },
      ],
    },

    // Slide 8: We Are Still Early
    {
      type: 'image',
      headline: 'We Are Still Early',
      imageSrc: '/pitch/trends.png',
      caption: 'Google Trends: Claude Code vs WordPress',
      insight: 'Claude Code is still a fraction of mainstream tech. You are early. This is your window.',
    },

    // Slide 8b: The Speed of Execution
    {
      type: 'timeline',
      headline: 'The Speed of Execution',
      milestones: [
        { date: 'Feb 2024', label: 'Public Preview' },
        { date: 'Oct 2024', label: 'V1 Release' },
        { date: 'Jan 2025', label: 'Opus 4.5' },
      ],
      quoteSrc: '/pitch/sam.png',
      insight: 'The competition is accelerating. The window won\'t stay open forever.',
    },

    // Slide 9: We Are Early Adopters
    {
      type: 'adoption-curve',
      headline: 'We Are Early Adopters',
      currentPosition: 'Early Adopters',
      insight: 'You have a window of opportunity before this becomes table stakes.',
    },

    // Slide 10: The Productivity Curve
    {
      type: 'productivity-curve',
      headline: 'The Productivity Curve',
      insight: 'The upside from here is massive.',
    },

    // Slide 11: Consequences
    {
      type: 'two-paths',
      headline: 'Consequences',
      intro: 'AI Agents aren\'t just good at coding. They\'re good at ANY computer-based work.',
      examples: [
        'Data analysis',
        'Document processing',
        'Research',
        'Customer support',
        'Quality assurance',
      ],
      paths: [
        {
          title: 'Sequential & Predefined Work',
          items: [
            'Will be fully automated',
            'Taken over by agents',
            'No competitive advantage',
          ],
          style: 'neutral',
        },
        {
          title: 'Creative Work',
          items: [
            'Massively boosted',
            '10x faster development',
            'Competitive advantage',
          ],
          style: 'opportunity',
        },
      ],
    },

    // Slide 12: The Question Every Company Must Ask
    {
      type: 'choice',
      headline: 'The Question Every Company Must Ask',
      intro: 'How do we deal with this?',
      options: [
        {
          label: 'Ignore it',
          description: 'Wait and see what happens',
          dismissed: true,
        },
        {
          label: 'Learn it. Master it. Leverage it.',
          description: 'Use it for your competitive advantage',
          dismissed: false,
        },
      ],
      conclusion: 'Business models need adjusting. Some work simply doesn\'t make sense anymore.',
    },

    // Slide 13: What It Looks Like in Practice
    {
      type: 'agent-theory',
      headline: 'What It Looks Like in Practice',
    },

    // Slide 14: Getting Started is Easy... But
    {
      type: 'pillars',
      headline: 'Getting Started is Easy... But',
      pillars: [
        { title: 'Spec-Driven Development', description: 'Clear specifications prevent AI guesswork' },
        { title: 'Knowledge & Guardrails', description: 'Guide the AI with your conventions' },
        { title: 'Tools & MCPs', description: 'Enable interaction with your systems' },
      ],
      allActive: true,
    },

    // Slide 15: Call to Action
    {
      type: 'cta',
      headline: 'The Window is Open',
      subheadline: 'In 2 years, this will be table stakes. Will you be ahead or behind?',
      steps: [
        'Start experimenting today',
        'Identify your first use case',
        'Invest in learning the right patterns',
      ],
    },

    // Slide 16: Questions
    {
      type: 'contact',
      headline: 'Questions?',
      name: 'Fabian Wesner',
      imageSrc: '/img.png',
      linkedIn: 'https://www.linkedin.com/in/fabian-wesner/',
    },
  ],
};
