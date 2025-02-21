import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Red_Hat_Display } from 'next/font/google';

const redHatDisplay = Red_Hat_Display({
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e0e8ff',
};

export const metadata: Metadata = {
  title: 'Arda Eker - Order summary component',
  description:
    'A mobile-friendly order summary card with comprehensive testing and SEO setup.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'Order summary component',
    'Order summary component solution',
    'Order summary component challenge',
    'Order summary component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('https://order-summary-component-woad-one.vercel.app/'),
  openGraph: {
    title: 'Arda Eker - Order summary component',
    description:
      'A mobile-friendly order summary card with comprehensive testing and SEO setup.',
    siteName: 'Arda Eker - Order summary component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://order-summary-component-woad-one.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHatDisplay.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
