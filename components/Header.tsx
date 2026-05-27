"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClasses = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-[15px] font-medium transition-colors duration-200 ${
      isActive ? "text-[#111111]" : "text-[#4B5563] hover:text-[#111111]"
    }`;
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 h-[72px] ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-8 md:px-[32px] max-w-[1280px] mx-auto h-full">
        <div className="flex items-center gap-[32px] h-full">
          <Link href="/" className="text-[22px] font-bold text-[#111111]">
            OneAtlas
          </Link>
          <nav className="hidden md:flex items-center gap-[32px] h-full">
            <Link className={getLinkClasses("/")} href="/">Product</Link>
            <Link className={getLinkClasses("/templates")} href="/templates">Templates</Link>
            <Link className={getLinkClasses("/enterprise")} href="/enterprise">Enterprise</Link>
            <Link className={getLinkClasses("/pricing")} href="/pricing">Pricing</Link>
            <Link className={getLinkClasses("/security")} href="/security">Security</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/build">
            <button className="btn-primary">
              Start Building
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
