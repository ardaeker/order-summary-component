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
  title: 'Frontend Mentor - Order summary component',
  description:
    'This website is a solution for the Order summary component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
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
    title: 'Frontend Mentor - Order summary component',
    description:
      'This website is a solution to the Order summary component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - Order summary component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://order-summary-component-woad-one.vercel.app',
  },
  icons: {
    icon: '/icon.png',
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
