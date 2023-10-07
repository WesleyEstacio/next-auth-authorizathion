import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import SessionProvider from '../components/SessionProvider';
import { NavMenu } from '../components/NavMenu';
import { Footer } from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth Authentication',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="mx-auto max-w-5xl flex flex-col h-screen">
            <NavMenu />
            <div className="flex-1 px-4">{children}</div>
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
