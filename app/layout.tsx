import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneAtlas — AI-Native App Builder",
  description: "Generate and deploy internal business applications with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <header className="fixed top-0 w-full z-50 nav-blur border-b border-border-light">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <span className="text-xl font-bold tracking-tight text-brand-gradient">
              OneAtlas
            </span>
          </div>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
