
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FrameShift — Video Editor & Visual Storyteller',
  description: 'A timeline-driven portfolio for a video editor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
