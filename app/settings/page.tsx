"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsPage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("profile");

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
              <Link href="/settings" className="p-2 bg-surface-container-low rounded-lg transition-all flex items-center justify-center"><span className="material-symbols-outlined">settings</span></Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-12">
        <aside className="w-64 flex-shrink-0">
          <h1 className="font-display-sm text-display-sm mb-6">Settings</h1>
          <div className="space-y-1">
            <button onClick={() => setActiveTab("profile")} className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-3 ${activeTab === 'profile' ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
              <span className="material-symbols-outlined text-[20px]">person</span> Profile
            </button>
            <button onClick={() => setActiveTab("workspace")} className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-3 ${activeTab === 'workspace' ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
              <span className="material-symbols-outlined text-[20px]">domain</span> Workspace
            </button>
            <button onClick={() => setActiveTab("billing")} className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-3 ${activeTab === 'billing' ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
              <span className="material-symbols-outlined text-[20px]">credit_card</span> Billing
            </button>
            <button onClick={() => setActiveTab("api")} className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-3 ${activeTab === 'api' ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
              <span className="material-symbols-outlined text-[20px]">key</span> API Keys
            </button>
          </div>
        </aside>

        <div className="flex-1 max-w-2xl bg-white border border-border-subtle rounded-2xl p-8 shadow-sm">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="font-headline-sm text-xl border-b border-border-subtle pb-4 mb-6">Profile Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary-fixed border-2 border-white flex justify-center items-center text-2xl font-bold text-primary shadow-sm">JD</div>
                  <button className="px-4 py-2 bg-surface-alt border border-border-subtle rounded-lg text-sm font-medium hover:bg-surface-container transition-colors">Change Avatar</button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 rounded-lg border border-border-subtle focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Email Address</label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2.5 rounded-lg border border-border-subtle focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="pt-4">
                  <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">Save Changes</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workspace' && (
            <div className="space-y-6">
              <h2 className="font-headline-sm text-xl border-b border-border-subtle pb-4 mb-6">Workspace Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Workspace Name</label>
                  <input type="text" defaultValue="Acme Corp" className="w-full px-4 py-2.5 rounded-lg border border-border-subtle focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Workspace Slug</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-border-subtle bg-surface-alt text-on-surface-variant text-sm">oneatlas.com/</span>
                    <input type="text" defaultValue="acme-corp" className="flex-1 px-4 py-2.5 rounded-r-lg border border-border-subtle focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="pt-4">
                  <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">Update Workspace</button>
                </div>
              </div>
            </div>
          )}
          
          {(activeTab === 'billing' || activeTab === 'api') && (
            <div className="py-12 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant/30 mb-4">construction</span>
              <h3 className="font-semibold text-lg mb-2">Coming Soon</h3>
              <p className="text-on-surface-variant text-sm">This section is currently under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
