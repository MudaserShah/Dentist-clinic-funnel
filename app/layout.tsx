import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HexaPicks Dental - 24/7 Complete Call Coverage for Dental Clinics',
  description: 'Every call answered. Every lead captured. Texted straight to you. 24/7 AI call answering and reception for dental practices.',
  openGraph: {
    title: 'HexaPicks Dental - 24/7 Complete Call Coverage for Dental Clinics',
    description: 'Every call answered. Every lead captured. Texted straight to you. 24/7 AI call answering and reception for dental practices.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HexaPicks Dental - 24/7 Complete Call Coverage for Dental Clinics',
    description: 'Every call answered. Every lead captured. Texted straight to you.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${montserrat.variable}`}>
      <body className="bg-[#121212] text-white antialiased font-sans min-h-screen selection:bg-[#a3e635] selection:text-black">
        {children}
      </body>
    </html>
  );
}



