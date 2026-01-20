import { notFound } from 'next/navigation';
import { TitleSlide } from '@/components/slides/TitleSlide';
import { BigStatementSlide } from '@/components/slides/BigStatementSlide';
import { ChatbotMentalModelSlide } from '@/components/slides/ChatbotMentalModelSlide';
import { SafetyChecklistSlide } from '@/components/slides/SafetyChecklistSlide';
import { AgentLoopSlide } from '@/components/slides/AgentLoopSlide';
import { AgentCapabilitiesSlide } from '@/components/slides/AgentCapabilitiesSlide';
import { HumansVsAgentsSlide } from '@/components/slides/HumansVsAgentsSlide';
import { MultiplierSlide } from '@/components/slides/MultiplierSlide';
import { QuotesSlide } from '@/components/slides/QuotesSlide';
import { TrendSlide } from '@/components/slides/TrendSlide';
import { SplitQuestionSlide } from '@/components/slides/SplitQuestionSlide';
import { WrongReactionSlide } from '@/components/slides/WrongReactionSlide';
import { PracticeImplicationSlide } from '@/components/slides/PracticeImplicationSlide';
import { TransitionSlide } from '@/components/slides/TransitionSlide';
import { ClosingSlide } from '@/components/slides/ClosingSlide';
import { ScreenshotSlide } from '@/components/slides/ScreenshotSlide';
import { PerformanceGraphSlide } from '@/components/slides/PerformanceGraphSlide';
import { SlideNavigation } from '@/components/slides/SlideNavigation';
import { SlideHints } from '@/components/slides/SlideHints';
import { LaserPointer } from '@/components/slides/LaserPointer';
import { SlideContainer } from '@/components/slides/SlideContainer';
import { pitch } from '@/data/presentations/pitch';

interface Props {
  params: Promise<{
    slideIndex: string;
  }>;
}

export default async function PitchSlidePage({ params }: Props) {
  const { slideIndex } = await params;
  const presentation = pitch;

  const index = parseInt(slideIndex, 10);

  if (isNaN(index) || index < 0 || index >= presentation.slides.length) {
    notFound();
  }

  const slide = presentation.slides[index];

  return (
    <SlideContainer>
      <SlideNavigation
        currentIndex={index}
        totalSlides={presentation.slides.length}
        basePath="/pitch"
      />
      {slide.type === 'title' && <TitleSlide slide={slide} />}
      {slide.type === 'big-statement' && <BigStatementSlide slide={slide} />}
      {slide.type === 'chatbot-mental-model' && <ChatbotMentalModelSlide slide={slide} />}
      {slide.type === 'safety-checklist' && <SafetyChecklistSlide slide={slide} />}
      {slide.type === 'agent-loop' && <AgentLoopSlide slide={slide} />}
      {slide.type === 'agent-capabilities' && <AgentCapabilitiesSlide slide={slide} />}
      {slide.type === 'humans-vs-agents' && <HumansVsAgentsSlide slide={slide} />}
      {slide.type === 'multiplier' && <MultiplierSlide slide={slide} />}
      {slide.type === 'quotes' && <QuotesSlide slide={slide} />}
      {slide.type === 'trend' && <TrendSlide slide={slide} />}
      {slide.type === 'split-question' && <SplitQuestionSlide slide={slide} />}
      {slide.type === 'wrong-reaction' && <WrongReactionSlide slide={slide} />}
      {slide.type === 'practice-implication' && <PracticeImplicationSlide slide={slide} />}
      {slide.type === 'transition' && <TransitionSlide slide={slide} />}
      {slide.type === 'closing' && <ClosingSlide slide={slide} />}
      {slide.type === 'screenshot' && <ScreenshotSlide slide={slide} />}
      {slide.type === 'performance-graph' && <PerformanceGraphSlide slide={slide} />}
      <SlideHints slideIndex={index} slideType={slide.type} />
      <LaserPointer />
    </SlideContainer>
  );
}
