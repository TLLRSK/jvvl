import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "@/components/navbar/Navbar";


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
      <body className="font-sans antialiased [&>section]:mt-[61px]">
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
