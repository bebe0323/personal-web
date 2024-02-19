import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionProvider from "@/components/SessionProvider";
import { getSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belgutei",
  description: "Belgutei's personal website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <div className="flex">
            <div className="w-1/12"></div>
            <div className="font-mono flex-1">
              <Navbar />
              {children}
            </div>
            <div className="w-1/12"></div>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
