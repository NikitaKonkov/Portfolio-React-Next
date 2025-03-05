import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikita\'s Portfolio',
  description: 'Portfolio website of Nikita Wagner, a fullstack developer specializing in various languages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add other head elements here if needed */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}