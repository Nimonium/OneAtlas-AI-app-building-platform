import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[24px] px-[20px] md:px-[32px] py-[64px] max-w-[1280px] mx-auto">
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
          <Link className="text-[18px] font-bold text-[#111111] mb-[24px] block" href="/">OneAtlas</Link>
          <p className="text-[14px] text-[#9CA3AF] mb-[32px]">© 2026 OneAtlas AI. All rights reserved. Built for the future of intelligence.</p>
        </div>
        <div>
          <h6 className="text-small-label mb-[24px]">Product</h6>
          <ul className="space-y-[16px] text-[14px] text-[#9CA3AF]">
            <li><Link className="hover:text-[#111111] transition-colors" href="#">Docs</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="#">Blog</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-small-label mb-[24px]">Support</h6>
          <ul className="space-y-[16px] text-[14px] text-[#9CA3AF]">
            <li><Link className="hover:text-[#111111] transition-colors" href="/security">Security</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="/enterprise">Enterprise</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="#">Community</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-small-label mb-[24px]">Developers</h6>
          <ul className="space-y-[16px] text-[14px] text-[#9CA3AF]">
            <li><Link className="hover:text-[#111111] transition-colors" href="#">GitHub</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="#">Discord</Link></li>
            <li><Link className="hover:text-[#111111] transition-colors" href="#">Status</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
