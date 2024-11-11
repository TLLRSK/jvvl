import "./globals.css";
import Footer from "@/components/global/Footer";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import GlobalProvider from "@/context/GlobalContext";

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
    <ClerkProvider dynamic>
      <html lang="en">
        <body className="font-sans antialiased [&>section]:mt-[57px]">
          <GlobalProvider>
            <Providers>
              <NavbarWrapper />
              {children}
              <Footer />
            </Providers>
          </GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
