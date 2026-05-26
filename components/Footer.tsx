import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="full-width bg-surface-alt border-t border-border-subtle shadow-sm mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-gutter px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
          <Link className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6 block" href="/">OneAtlas</Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant/70 mb-8">© 2024 OneAtlas AI. All rights reserved. Built for the future of intelligence.</p>
        </div>
        <div>
          <h6 className="font-label-caps text-label-caps uppercase text-on-surface mb-6">Product</h6>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant/70">
            <li><Link className="hover:text-primary transition-colors" href="#">Docs</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Blog</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-label-caps text-label-caps uppercase text-on-surface mb-6">Support</h6>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant/70">
            <li><Link className="hover:text-primary transition-colors" href="/security">Security</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/enterprise">Enterprise</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Community</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-label-caps text-label-caps uppercase text-on-surface mb-6">Developers</h6>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant/70">
            <li><Link className="hover:text-primary transition-colors" href="#">GitHub</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Discord</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Status</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
