import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'alphalist CTO Bootcamp · Code got cheap. Your org didn’t.',
  icons: {
    icon: [
      { url: '/alphalist/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/alphalist/apple-touch-icon.png',
  },
};

export default function AlphalistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
