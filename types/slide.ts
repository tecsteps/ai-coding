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

export type Slide = TitleSlide | RegularSlide | EvolutionSlide | QuestionSlide | AgentTheorySlide | EasyStartSlide | SpecGapSlide;

export interface Presentation {
  name: string;
  slides: Slide[];
}
