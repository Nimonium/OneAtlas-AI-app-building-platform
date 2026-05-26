"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Header() {
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    // Exact match for home, startsWith for other routes
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    
    if (isActive) {
      return "font-body-md text-body-md text-primary font-semibold border-b-2 border-primary hover:text-primary transition-colors duration-200 py-6";
    }
    return "font-body-md text-body-md text-on-surface-variant font-medium border-b-2 border-transparent hover:text-primary transition-colors duration-200 py-6";
  };

  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface/70 backdrop-blur-xl border-b border-border-subtle/50 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="font-headline-md text-headline-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-accent-teal">
            OneAtlas
          </Link>
          <nav className="hidden md:flex items-center gap-6 h-full mt-2">
            <Link className={getLinkClasses("/")} href="/">Product</Link>
            <Link className={getLinkClasses("/templates")} href="/templates">Templates</Link>
            <Link className={getLinkClasses("/enterprise")} href="/enterprise">Enterprise</Link>
            <Link className={getLinkClasses("/pricing")} href="/pricing">Pricing</Link>
            <Link className={getLinkClasses("/security")} href="/security">Security</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/build">
            <button className="hero-shine text-on-primary px-6 py-2.5 rounded-xl font-body-md font-semibold shadow-lg shadow-primary/20 active:opacity-80 active:scale-95 transition-all">
              Start Building
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
