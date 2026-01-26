import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RevalidateButton } from "@/components/revalidate-button";
import { Suspense } from "react";
import { HeavySidebar } from "@/components/heavy-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Cache Components Demo",
  description: "Demo pokazujące możliwości cache components w Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-gray-950 text-gray-100 font-sans">
          <Suspense
            fallback={<div className="w-64 bg-gray-900 animate-pulse" />}
          >
            <HeavySidebar />
          </Suspense>

          <main className="flex-1 p-8 overflow-y-auto">
            <header className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                  Next.js 16 Performance Demo
                </h1>
                <p className="text-gray-400 mt-2">
                  Porównanie: Realtime Rendering vs. &quot;use cache&quot;
                </p>
              </div>

              <RevalidateButton />
            </header>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
