import { notFound } from 'next/navigation';
import { TitleSlide } from '@/components/slides/TitleSlide';
import { RegularSlide } from '@/components/slides/RegularSlide';
import { EvolutionSlide } from '@/components/slides/EvolutionSlide';
import { AgentTheorySlide } from '@/components/slides/AgentTheorySlide';
import { PillarsSlide } from '@/components/slides/PillarsSlide';
import { ImageSlide } from '@/components/slides/ImageSlide';
import { QuotesGridSlide } from '@/components/slides/QuotesGridSlide';
import { StatsChartSlide } from '@/components/slides/StatsChartSlide';
import { AdoptionCurveSlide } from '@/components/slides/AdoptionCurveSlide';
import { ProductivityCurveSlide } from '@/components/slides/ProductivityCurveSlide';
import { TimelineSlide } from '@/components/slides/TimelineSlide';
import { TwoPathsSlide } from '@/components/slides/TwoPathsSlide';
import { ChoiceSlide } from '@/components/slides/ChoiceSlide';
import { CTASlide } from '@/components/slides/CTASlide';
import { AgentCapabilitiesSlide } from '@/components/slides/AgentCapabilitiesSlide';
import { ContactSlide } from '@/components/slides/ContactSlide';
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
      {slide.type === 'regular' && <RegularSlide slide={slide} />}
      {slide.type === 'evolution' && <EvolutionSlide slide={slide} />}
      {slide.type === 'agent-theory' && <AgentTheorySlide slide={slide} />}
      {slide.type === 'pillars' && <PillarsSlide slide={slide} />}
      {slide.type === 'image' && <ImageSlide slide={slide} />}
      {slide.type === 'quotes-grid' && <QuotesGridSlide slide={slide} />}
      {slide.type === 'stats-chart' && <StatsChartSlide slide={slide} />}
      {slide.type === 'adoption-curve' && <AdoptionCurveSlide slide={slide} />}
      {slide.type === 'productivity-curve' && <ProductivityCurveSlide slide={slide} />}
      {slide.type === 'timeline' && <TimelineSlide slide={slide} />}
      {slide.type === 'two-paths' && <TwoPathsSlide slide={slide} />}
      {slide.type === 'choice' && <ChoiceSlide slide={slide} />}
      {slide.type === 'cta' && <CTASlide slide={slide} />}
      {slide.type === 'agent-capabilities' && <AgentCapabilitiesSlide slide={slide} />}
      {slide.type === 'contact' && <ContactSlide slide={slide} />}
      <SlideHints slideIndex={index} slideType={slide.type} />
      <LaserPointer />
    </SlideContainer>
  );
}
