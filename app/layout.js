import Navbar from "@components/Navbar";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
 
const inter = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: "MaryCrochet",
  description: "Gallery for my crochets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
