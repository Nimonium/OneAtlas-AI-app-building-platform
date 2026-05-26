"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotificationsPage() {
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
              <Link href="/notifications" className="p-2 bg-surface-container-low rounded-lg transition-all flex items-center justify-center"><span className="material-symbols-outlined">notifications</span></Link>
              <Link href="/settings" className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all flex items-center justify-center"><span className="material-symbols-outlined">settings</span></Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-display-sm text-display-md mb-2">Notifications</h1>
            <p className="text-on-surface-variant">Stay updated on your workspace activities.</p>
          </div>
          <button className="text-primary text-sm font-medium hover:underline">Mark all as read</button>
        </div>

        <div className="bg-white border border-border-subtle rounded-2xl shadow-sm divide-y divide-border-subtle">
          {[
            { title: "Deployment Successful", desc: "v2.4.1 (Production) is now live.", time: "2 hours ago", icon: "rocket_launch", color: "text-accent-teal" },
            { title: "New Team Member", desc: "Alex joined the 'Internal Tooling' workspace.", time: "5 hours ago", icon: "person_add", color: "text-primary" },
            { title: "Schema Generated", desc: "Your 'CRM Pipeline' schema has been generated and is ready for review.", time: "1 day ago", icon: "auto_awesome", color: "text-accent-purple" },
            { title: "Billing Update", desc: "Your invoice for May is now available.", time: "3 days ago", icon: "receipt_long", color: "text-on-surface-variant" }
          ].map((notif, i) => (
            <div key={i} className={`p-6 flex gap-4 hover:bg-surface-alt/50 transition-colors ${i < 2 ? 'bg-surface-alt/20' : ''}`}>
              <div className={`w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                <span className="material-symbols-outlined">{notif.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-on-surface">{notif.title}</h4>
                  <span className="text-xs text-on-surface-variant">{notif.time}</span>
                </div>
                <p className="text-body-sm text-on-surface-variant">{notif.desc}</p>
              </div>
              {i < 2 && <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
