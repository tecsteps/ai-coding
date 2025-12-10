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

export type Slide = TitleSlide | RegularSlide | EvolutionSlide | QuestionSlide | AgentTheorySlide | EasyStartSlide | SpecGapSlide | WaysSlide | PillarsSlide | SddSlide | QualitySlide | InteractionSlide | McpSlide | GuidanceSlide | GuardrailsSlide | VsSlide | PrimeDirectiveSlide | MentalModelSlide | AiFailuresSlide | JobsSlide;

export interface Presentation {
  name: string;
  slides: Slide[];
}
