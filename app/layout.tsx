import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/i18n/I18nContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ALLAHRA DIONADJI GILCHRIST',
  description: 'Portfolio of ALLAHRA DIONADJI GILCHRIST, Control & Intelligent Systems Engineer.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
