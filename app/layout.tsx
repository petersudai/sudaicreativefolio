import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Peter Sudai — Creative Developer',
  description: 'Premium portfolio websites for DJs, photographers and artists. Nairobi-based, working worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
