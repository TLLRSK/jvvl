import type { Metadata } from "next";
import { Orienta, Comme } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "@/components/navbar/Navbar";

const orienta = Orienta({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-orienta',
  display: 'swap',
});

const comme = Comme({
  subsets: ['latin'],
  variable: '--font-comme',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jvvl",
  description: "First quality original hand tailored jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${orienta.variable} ${comme.variable} 
        font-sans antialiased [&>section]:mt-[61px]
      `}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
