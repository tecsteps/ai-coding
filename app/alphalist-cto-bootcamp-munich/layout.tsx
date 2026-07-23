import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'alphalist CTO Bootcamp Munich',
  icons: {
    icon: [
      { url: '/alphalist/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/alphalist/apple-touch-icon.png',
  },
};

export default function AlphalistMunichLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
