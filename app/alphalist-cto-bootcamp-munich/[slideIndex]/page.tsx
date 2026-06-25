import { notFound } from 'next/navigation';
import { alphalistSlides } from '@/components/alphalist/slides';
import { SlideContainer } from '@/components/slides/SlideContainer';
import { SlideNavigation } from '@/components/slides/SlideNavigation';
import { LaserPointer } from '@/components/slides/LaserPointer';

const munichSlides = [
  ...alphalistSlides.slice(2, 21),
  alphalistSlides[1],
];

interface Props {
  params: Promise<{ slideIndex: string }>;
}

export default async function Page({ params }: Props) {
  const { slideIndex } = await params;
  const index = parseInt(slideIndex, 10);

  if (isNaN(index) || index < 0 || index >= munichSlides.length) {
    notFound();
  }

  const Slide = munichSlides[index].component;

  return (
    <SlideContainer>
      <SlideNavigation
        currentIndex={index}
        totalSlides={munichSlides.length}
        basePath="/alphalist-cto-bootcamp-munich"
      />
      <Slide index={index} total={munichSlides.length} />
      <LaserPointer />
    </SlideContainer>
  );
}

export function generateStaticParams() {
  return munichSlides.map((_, i) => ({ slideIndex: String(i) }));
}
