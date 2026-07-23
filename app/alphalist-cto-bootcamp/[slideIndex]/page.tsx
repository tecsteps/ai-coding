import { notFound } from 'next/navigation';
import { alphalistSlides } from '@/components/alphalist/slides';
import { SlideContainer } from '@/components/slides/SlideContainer';
import { SlideNavigation } from '@/components/slides/SlideNavigation';
import { LaserPointer } from '@/components/slides/LaserPointer';

interface Props {
  params: Promise<{ slideIndex: string }>;
}

export default async function Page({ params }: Props) {
  const { slideIndex } = await params;
  const index = parseInt(slideIndex, 10);

  if (isNaN(index) || index < 0 || index >= alphalistSlides.length) {
    notFound();
  }

  const Slide = alphalistSlides[index].component;

  return (
    <SlideContainer>
      <SlideNavigation
        currentIndex={index}
        totalSlides={alphalistSlides.length}
        basePath="/alphalist-cto-bootcamp"
      />
      <Slide index={index} total={alphalistSlides.length} />
      <LaserPointer />
    </SlideContainer>
  );
}

export function generateStaticParams() {
  return alphalistSlides.map((_, i) => ({ slideIndex: String(i) }));
}
