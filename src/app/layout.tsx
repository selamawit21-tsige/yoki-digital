import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// 1. The Metadata (SEO) part
export const metadata = {
  title: {
    default: 'Yoki Digital | Premium Digital Experience Studio',
    template: '%s | Yoki Digital'
  },
  description: 'Bespoke digital solutions for high-end restaurants, luxury events, and elite professionals. 48-hour delivery guaranteed.',
  openGraph: {
    title: 'Yoki Digital | Premium Digital Experience Studio',
    description: 'Bespoke digital solutions for high-end brands.',
    url: 'https://yokidigital.com', 
    siteName: 'Yoki Digital',
    locale: 'en_US',
    type: 'website',
  },
};

// 2. The Default Export (The part that was missing)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}