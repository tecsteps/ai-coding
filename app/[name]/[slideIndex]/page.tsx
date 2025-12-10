import { notFound } from 'next/navigation';
import { TitleSlide } from '@/components/slides/TitleSlide';
import { RegularSlide } from '@/components/slides/RegularSlide';
import { EvolutionSlide } from '@/components/slides/EvolutionSlide';
import { QuestionSlide } from '@/components/slides/QuestionSlide';
import { AgentTheorySlide } from '@/components/slides/AgentTheorySlide';
import { EasyStartSlide } from '@/components/slides/EasyStartSlide';
import { SpecGapSlide } from '@/components/slides/SpecGapSlide';
import { WaysSlide } from '@/components/slides/WaysSlide';
import { PillarsSlide } from '@/components/slides/PillarsSlide';
import { SddSlide } from '@/components/slides/SddSlide';
import { QualitySlide } from '@/components/slides/QualitySlide';
import { InteractionSlide } from '@/components/slides/InteractionSlide';
import { McpSlide } from '@/components/slides/McpSlide';
import { SlideNavigation } from '@/components/slides/SlideNavigation';
import { demo } from '@/data/presentations/demo';
import { Presentation } from '@/types/slide';

const presentations: Record<string, Presentation> = {
  demo,
};

interface Props {
  params: Promise<{
    name: string;
    slideIndex: string;
  }>;
}

export default async function SlidePage({ params }: Props) {
  const { name, slideIndex } = await params;
  const presentation = presentations[name];

  if (!presentation) {
    notFound();
  }

  const index = parseInt(slideIndex, 10);

  if (isNaN(index) || index < 0 || index >= presentation.slides.length) {
    notFound();
  }

  const slide = presentation.slides[index];

  return (
    <>
      <SlideNavigation
        presentationName={name}
        currentIndex={index}
        totalSlides={presentation.slides.length}
      />
      {slide.type === 'title' && <TitleSlide slide={slide} />}
      {slide.type === 'regular' && <RegularSlide slide={slide} />}
      {slide.type === 'evolution' && <EvolutionSlide slide={slide} />}
      {slide.type === 'question' && <QuestionSlide slide={slide} />}
      {slide.type === 'agent-theory' && <AgentTheorySlide slide={slide} />}
      {slide.type === 'easy-start' && <EasyStartSlide slide={slide} />}
      {slide.type === 'spec-gap' && <SpecGapSlide slide={slide} />}
      {slide.type === 'ways' && <WaysSlide slide={slide} />}
      {slide.type === 'pillars' && <PillarsSlide slide={slide} />}
      {slide.type === 'sdd' && <SddSlide slide={slide} />}
      {slide.type === 'quality' && <QualitySlide slide={slide} />}
      {slide.type === 'interaction' && <InteractionSlide slide={slide} />}
      {slide.type === 'mcp' && <McpSlide slide={slide} />}
    </>
  );
}
