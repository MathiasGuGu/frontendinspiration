import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/Navbar/Navbar";
import QueryProvider from "@/provider/QueryProvider";
import Footer from "./_components/Footer/Footer";
import ClerkProvider from "../provider/ClerkProvider";
import Clerk from "../provider/ClerkProvider";

export const metadata: Metadata = {
  title: "Frontinspo | Inspiring front-end developers",
  description: "Get all front-end inspiration in one place.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${SpaceGrotesk.variable} ${SpaceGrotesk.className}`}
    >
      <body>
        <Clerk>
          <QueryProvider>
            <TRPCReactProvider>
              <Navbar />
              {children}
              <Footer />
            </TRPCReactProvider>
          </QueryProvider>
        </Clerk>
      </body>
    </html>
  );
}
