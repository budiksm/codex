import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hi Sa - Bukber Yuk',
  description: 'Undangan bukber playful dengan gaya jendela macOS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
