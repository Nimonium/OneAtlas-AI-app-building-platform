"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DeploymentsPage() {
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href || (href !== "/build" && pathname.startsWith(href));
    return isActive
      ? "font-body-md text-body-md font-medium text-primary border-b-2 border-primary pb-1"
      : "font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors";
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-border-subtle docked full-width top-0 z-50 sticky w-full">
        <div className="flex justify-between items-center w-full px-margin-desktop h-16 max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold tracking-tight text-primary">OneAtlas AI</Link>
          <div className="hidden md:flex items-center gap-8 h-full pt-1">
            <Link className={getLinkClasses("/build")} href="/build">Dashboard</Link>
            <Link className={getLinkClasses("/projects")} href="/projects">Projects</Link>
            <Link className={getLinkClasses("/deployments")} href="/deployments">Deployments</Link>
            <Link className={getLinkClasses("/documentation")} href="/documentation">Documentation</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-primary">
              <Link href="/notifications" className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all flex items-center justify-center"><span className="material-symbols-outlined">notifications</span></Link>
              <Link href="/settings" className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all flex items-center justify-center"><span className="material-symbols-outlined">settings</span></Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-display-sm text-display-md mb-2">Deployments</h1>
            <p className="text-on-surface-variant">Monitor and manage your active application deployments.</p>
          </div>
        </div>

        <div className="bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container-low text-on-surface-variant">
              <tr>
                <th className="px-6 py-4 font-medium">Deployment</th>
                <th className="px-6 py-4 font-medium">Environment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Age</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              <tr className="hover:bg-surface-alt/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-primary">v2.4.1 (Production)</div>
                  <div className="text-xs text-on-surface-variant font-mono">Commit: 8f3b2a1</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-container-high text-on-surface">Production</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal"></div> Active
                  </span>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">2 days</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">open_in_new</span></button>
                </td>
              </tr>
              <tr className="hover:bg-surface-alt/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-primary">v2.5.0-rc1 (Staging)</div>
                  <div className="text-xs text-on-surface-variant font-mono">Commit: c4a90b2</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent-amber/10 text-amber-700 border border-amber-500/20">Staging</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal"></div> Active
                  </span>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">4 hours</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">open_in_new</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
