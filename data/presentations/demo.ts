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
    {
      type: 'easy-start',
      headline: 'Starting is very easy!',
    },
    {
      type: 'spec-gap',
      headline: 'But doing it "right" is hard.',
      points: [
        'The AI will fill specification gaps.',
        'Leads to frustration ("AI isn\'t doing what I want...")',
      ],
    },
    {
      type: 'pillars',
      headline: 'The Three Pillars of Productive AI-Coding',
      pillars: [
        { title: 'Plan complex features with AI' },
        { title: 'Provide the right tools' },
        { title: 'Define guardrails' },
      ],
      focusIndex: 0,
    },
    {
      type: 'ways',
      headline: 'Vibe-Coding vs SDD*',
      footer: '*Spec Driven Development (SDD)',
      ways: [
        {
          title: 'Prompt-by-Prompt',
          badge: 'Vibe-Coding',
          description: 'Developer still develops. AI just "types" the code.',
          prompt: 'Change the Save button color to green',
          pros: ['Good for fine-tuning', 'Ideal with visual confirmation'],
          cons: ['Bad for complex features', 'Brain-rot (exhausting after a few hours)'],
          highlight: 'I vibe-coded this entire presentation!',
        },
        {
          title: 'Autonomous Development',
          badge: 'SDD',
          description: 'Developer does a full brainstorming session with the coding agent, then lets it implement.',
          prompt: "Let's discuss how we build the user registration",
          pros: ['Great for complex features', 'Maintains architecture coherence'],
          cons: ['Requires more upfront effort', 'Can lead to losing the mental model'],
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
      footer: "We're doing this without additional tools today, but there are popular ones like spec-kit from GitHub:",
      footerLink: { url: 'https://github.com/github/spec-kit', label: 'github/spec-kit' },
    },
    {
      type: 'pillars',
      headline: 'The Three Pillars of Productive AI-Coding',
      pillars: [
        { title: 'Plan complex features with AI' },
        { title: 'Provide the right tools' },
        { title: 'Define guardrails' },
      ],
      focusIndex: 1,
    },
    {
      type: 'interaction',
      headline: 'Blind Coding leads to Low Accuracy',
      problem: 'Without feedback, the agent cannot validate its work or self-correct. It writes code blindly, likely to fail.',
      capabilities: [
        {
          icon: 'eye',
          title: 'See the Result',
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
          enables: 'Database queries, Artisan commands, Documentation',
          builtIn: false,
        },
      ],
      footer: 'Depending on your IDE and technology stack, other MCPs might be better suited.',
    },
    {
      type: 'pillars',
      headline: 'The Three Pillars of Productive AI-Coding',
      pillars: [
        { title: 'Plan complex features with AI' },
        { title: 'Provide the right tools' },
        { title: 'Define guardrails' },
      ],
      focusIndex: 2,
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
  ],
};
