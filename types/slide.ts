export interface TitleSlide {
  type: 'title';
  title: string;
  subtitle?: string;
}

export interface ContentSection {
  title?: string;
  items?: string[];
  text?: string;
  link?: { url: string; label: string };
  icon?: 'presentation' | 'code' | 'question' | 'rocket' | 'lightbulb' | 'target';
}

export interface ProfileInfo {
  name: string;
  title: string;
  imageSrc?: string;
  linkedIn?: string;
}

export interface RegularSlide {
  type: 'regular';
  headline: string;
  sections: ContentSection[];
  profile?: ProfileInfo;
  layout?: 'default' | 'cards';
  activeSection?: number;
}

export interface EvolutionStage {
  multiplier: string;
  title: string;
  subtitle: string;
  description: string;
  isHighlighted?: boolean;
}

export interface EvolutionSlide {
  type: 'evolution';
  headline: string;
  stages: EvolutionStage[];
}

export interface QuestionOption {
  label: string;
  text: string;
}

export interface QuestionSlide {
  type: 'question';
  headline: string;
  storageKey: string;
  options: QuestionOption[];
}

export interface AgentTheorySlide {
  type: 'agent-theory';
  headline: string;
}

export interface EasyStartSlide {
  type: 'easy-start';
  headline: string;
}

export interface SpecGapSlide {
  type: 'spec-gap';
  headline: string;
  points: string[];
}

export interface WayToUse {
  title: string;
  badge?: string;
  description?: string;
  prompt?: string;
  pros?: string[];
  cons?: string[];
  highlight?: string;
}

export interface WaysSlide {
  type: 'ways';
  headline: string;
  ways: WayToUse[];
  footer?: string;
}

export interface Pillar {
  title: string;
  description?: string;
}

export interface PillarsSlide {
  type: 'pillars';
  headline: string;
  pillars: Pillar[];
  focusIndex?: number;
  allActive?: boolean;
}

export interface SddStep {
  title: string;
  description: string;
}

export interface SddSlide {
  type: 'sdd';
  headline: string;
  steps: SddStep[];
  footer?: string;
  footerLink?: { url: string; label: string };
}

export interface QualitySlide {
  type: 'quality';
  headline: string;
  goal: string;
  checks: string[];
}

export interface InteractionCapability {
  icon: 'eye' | 'database' | 'log' | 'script' | 'search' | 'test';
  title: string;
  description: string;
}

export interface InteractionSlide {
  type: 'interaction';
  headline: string;
  problem: string;
  capabilities: InteractionCapability[];
}

export interface McpItem {
  name: string;
  description: string;
  enables: string;
  builtIn?: boolean;
}

export interface McpSlide {
  type: 'mcp';
  headline: string;
  definition: string;
  items: McpItem[];
  footer?: string;
}

export interface CodeExample {
  title: string;
  bad: string;
  good: string;
}

export interface GuidanceSlide {
  type: 'guidance';
  headline: string;
  intro: string;
  points: string[];
  examples: CodeExample[];
}

export interface SubAgent {
  name: string;
  description: string;
}

export interface GuardrailsSlide {
  type: 'guardrails';
  headline: string;
  intro: string;
  points: string[];
  subAgents: SubAgent[];
  bottomStatement?: string;
}

export interface VsTool {
  name: string;
  pros: string[];
  cons: string[];
  highlight?: string;
}

export interface VsSlide {
  type: 'vs';
  headline: string;
  tools: [VsTool, VsTool];
  footnotes?: string[];
}

export interface PrimeDirectiveSlide {
  type: 'prime-directive';
  headline: string;
  directives: string[];
}

export interface MentalModelSlide {
  type: 'mental-model';
  headline: string;
  intro: string;
  warning: string;
  tips: string[];
}

export interface FailureReason {
  percentage: number;
  label: string;
  description?: string;
}

export interface AiFailuresSlide {
  type: 'ai-failures';
  headline: string;
  intro: string;
  reasons: FailureReason[];
  conclusion: string;
  footnote?: string;
}

export interface JobItem {
  task: string;
  percentage?: number;
}

export interface JobsSlide {
  type: 'jobs';
  headline: string;
  before: {
    title: string;
    items: JobItem[];
  };
  after: {
    title: string;
    items: JobItem[];
  };
  footnote?: string;
}

export interface HandsOnSlide {
  type: 'hands-on';
  headline: string;
  projectDescription: string;
  procedureItems: string[];
  techNote?: string;
}

// Image slide for showing screenshots, tweets, charts
export interface ImageSlide {
  type: 'image';
  headline: string;
  imageSrc: string;
  caption?: string;
  insight?: string;
}

// Quotes grid for showing multiple industry leader quotes
export interface QuoteItem {
  imageSrc: string;
  name: string;
  title: string;
}

export interface QuotesGridSlide {
  type: 'quotes-grid';
  headline: string;
  intro?: string;
  quotes: QuoteItem[];
}

// Stats chart for visualizing data like StackOverflow decline
export interface StatsChartSlide {
  type: 'stats-chart';
  headline: string;
  chartType: 'stackoverflow';
  insight: string;
}

// Technology adoption curve
export interface AdoptionCurveSlide {
  type: 'adoption-curve';
  headline: string;
  currentPosition: string;
  insight?: string;
}

// Productivity/exponential curve
export interface ProductivityCurveSlide {
  type: 'productivity-curve';
  headline: string;
  insight: string;
}

// Timeline with quote
export interface TimelineMilestone {
  date: string;
  label: string;
}

export interface TimelineSlide {
  type: 'timeline';
  headline: string;
  milestones: TimelineMilestone[];
  quoteSrc?: string;
  quoteText?: string;
  insight?: string;
}

// Two paths/consequences slide
export interface PathOption {
  title: string;
  items: string[];
  style: 'neutral' | 'opportunity' | 'warning';
}

export interface TwoPathsSlide {
  type: 'two-paths';
  headline: string;
  intro?: string;
  examples?: string[];
  paths: [PathOption, PathOption];
}

// Choice slide (ignore vs learn)
export interface ChoiceSlide {
  type: 'choice';
  headline: string;
  intro?: string;
  options: [
    { label: string; description?: string; dismissed: boolean },
    { label: string; description?: string; dismissed: boolean }
  ];
  conclusion?: string;
}

// CTA slide
export interface CTASlide {
  type: 'cta';
  headline: string;
  subheadline?: string;
  steps: string[];
  footer?: string;
}

// Agent capabilities slide
export interface AgentCapability {
  text: string;
}

export interface AgentCapabilitiesSlide {
  type: 'agent-capabilities';
  headline: string;
  intro?: string;
  capabilities: AgentCapability[];
  conclusion?: string;
}

// Contact/Questions slide
export interface ContactSlide {
  type: 'contact';
  headline: string;
  name?: string;
  linkedIn?: string;
  imageSrc?: string;
}

export type Slide = TitleSlide | RegularSlide | EvolutionSlide | QuestionSlide | AgentTheorySlide | EasyStartSlide | SpecGapSlide | WaysSlide | PillarsSlide | SddSlide | QualitySlide | InteractionSlide | McpSlide | GuidanceSlide | GuardrailsSlide | VsSlide | PrimeDirectiveSlide | MentalModelSlide | AiFailuresSlide | JobsSlide | HandsOnSlide | ImageSlide | QuotesGridSlide | StatsChartSlide | AdoptionCurveSlide | ProductivityCurveSlide | TimelineSlide | TwoPathsSlide | ChoiceSlide | CTASlide | AgentCapabilitiesSlide | ContactSlide;

export interface Presentation {
  name: string;
  slides: Slide[];
}
