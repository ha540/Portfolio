import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0d14',
};

export const metadata: Metadata = {
  title: 'EDIT VISUALS — Alex Carter | Video Editor & Storyteller',
  description:
    'I turn raw footage into compelling stories. Creative video editing, smooth transitions, cinematic visuals and storytelling that makes an impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&family=Caveat:wght@600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0d14] text-white selection:bg-[#ff5500] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
