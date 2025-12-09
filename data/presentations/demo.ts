import { Presentation } from '@/types/slide';

export const demo: Presentation = {
  name: 'demo',
  slides: [
    {
      type: 'title',
      title: 'AI-Coding',
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
            'Solopreneur & AI-Coding Coach',
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
          text: 'Setting the scene for AI-assisted development',
          icon: 'presentation',
        },
        {
          title: 'Hands-on workshop',
          text: "We'll build a full project together. You'll learn how I do it, so you can take inspiration.",
          icon: 'code',
        },
        {
          title: 'Ongoing Q&A',
          text: "I am here to answer all your questions about using AI-coding for your daily work. So don't hesitate to ask me at any time.",
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
          subtitle: 'Tab-completions',
          description: 'Traditional coding with basic autocomplete',
        },
        {
          multiplier: '1.3x',
          title: 'Developer writes code with AI',
          subtitle: 'In-context editing',
          description: 'AI assists within your editor',
        },
        {
          multiplier: '10x',
          title: 'AI writes code with developer',
          subtitle: 'Coding Agents',
          description: 'AI takes the lead, you guide',
          isHighlighted: true,
        },
      ],
    },
    {
      type: 'question',
      headline: 'Who has experience with...',
      storageKey: 'question-1-counts',
      options: [
        { label: 'A', text: 'Cursor' },
        { label: 'B', text: 'Claude Code' },
        { label: 'C', text: 'Other AI coding tools' },
      ],
    },
    {
      type: 'question',
      headline: 'Who has experience with...',
      storageKey: 'question-2-counts',
      options: [
        { label: 'A', text: 'MCPs (Model Context Protocol)' },
        { label: 'B', text: 'Sub-Agents' },
        { label: 'C', text: 'Planning Mode' },
      ],
    },
    {
      type: 'agent-theory',
      headline: 'How Claude Code Works',
    },
  ],
};
