import { notFound } from 'next/navigation';
import { TitleSlide } from '@/components/slides/TitleSlide';
import { BigStatementSlide } from '@/components/slides/BigStatementSlide';
import { EvolutionSlide } from '@/components/slides/EvolutionSlide';
import { WaysSlide } from '@/components/slides/WaysSlide';
import { PillarsSlide } from '@/components/slides/PillarsSlide';
import { SddSlide } from '@/components/slides/SddSlide';
import { GuardrailsSlide } from '@/components/slides/GuardrailsSlide';
import { GuidanceSlide } from '@/components/slides/GuidanceSlide';
import { QualitySlide } from '@/components/slides/QualitySlide';
import { InteractionSlide } from '@/components/slides/InteractionSlide';
import { McpSlide } from '@/components/slides/McpSlide';
import { PrimeDirectiveSlide } from '@/components/slides/PrimeDirectiveSlide';
import { PromptingGuidelinesSlide } from '@/components/slides/PromptingGuidelinesSlide';
import { AdoptionCycleSlide } from '@/components/slides/AdoptionCycleSlide';
import { PerformanceGraphSlide } from '@/components/slides/PerformanceGraphSlide';
import { IntroRoundSlide } from '@/components/slides/IntroRoundSlide';
import { AdoptionWakeSlide } from '@/components/slides/AdoptionWakeSlide';
import { WalkingDrivingSlide } from '@/components/slides/WalkingDrivingSlide';
import { NotAChoiceSlide } from '@/components/slides/NotAChoiceSlide';
import { SingleStackSlide } from '@/components/slides/SingleStackSlide';
import { Dev2026Slide } from '@/components/slides/Dev2026Slide';
import { SlideNavigation } from '@/components/slides/SlideNavigation';
import { SlideHints } from '@/components/slides/SlideHints';
import { LaserPointer } from '@/components/slides/LaserPointer';
import { SlideContainer } from '@/components/slides/SlideContainer';
import { devs } from '@/data/presentations/devs';

interface Props {
  params: Promise<{
    slideIndex: string;
  }>;
}

export default async function DevsSlidePage({ params }: Props) {
  const { slideIndex } = await params;
  const presentation = devs;

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
        basePath="/devs"
      />
      {slide.type === 'title' && <TitleSlide slide={slide} />}
      {slide.type === 'big-statement' && <BigStatementSlide slide={slide} />}
      {slide.type === 'evolution' && <EvolutionSlide slide={slide} />}
      {slide.type === 'ways' && <WaysSlide slide={slide} />}
      {slide.type === 'pillars' && <PillarsSlide slide={slide} />}
      {slide.type === 'sdd' && <SddSlide slide={slide} />}
      {slide.type === 'guardrails' && <GuardrailsSlide slide={slide} />}
      {slide.type === 'guidance' && <GuidanceSlide slide={slide} />}
      {slide.type === 'quality' && <QualitySlide slide={slide} />}
      {slide.type === 'interaction' && <InteractionSlide slide={slide} />}
      {slide.type === 'mcp' && <McpSlide slide={slide} />}
      {slide.type === 'prime-directive' && <PrimeDirectiveSlide slide={slide} />}
      {slide.type === 'prompting-guidelines' && <PromptingGuidelinesSlide slide={slide} />}
      {slide.type === 'adoption-cycle' && <AdoptionCycleSlide slide={slide} />}
      {slide.type === 'performance-graph' && <PerformanceGraphSlide slide={slide} />}
      {slide.type === 'intro-round' && <IntroRoundSlide slide={slide} />}
      {slide.type === 'adoption-wake' && <AdoptionWakeSlide slide={slide} />}
      {slide.type === 'walking-driving' && <WalkingDrivingSlide slide={slide} />}
      {slide.type === 'not-a-choice' && <NotAChoiceSlide slide={slide} />}
      {slide.type === 'single-stack' && <SingleStackSlide slide={slide} />}
      {slide.type === 'dev-2026' && <Dev2026Slide slide={slide} />}
      <SlideHints slideIndex={index} slideType={slide.type} />
      <LaserPointer />
    </SlideContainer>
  );
}
