"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocumentationPage() {
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
      
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex gap-12">
        <aside className="w-64 flex-shrink-0 hidden md:block">
          <div className="space-y-6 sticky top-24">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-3">Getting Started</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-primary font-medium">Quickstart</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary">Core Concepts</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary">Architecture</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-3">API Reference</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-on-surface-variant hover:text-primary">Authentication</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary">Endpoints</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary">Webhooks</Link></li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex-1 max-w-3xl">
          <h1 className="font-display-sm text-display-md mb-6">Quickstart Guide</h1>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Learn how to build and deploy your first AI-generated application with OneAtlas in under 5 minutes.
          </p>
          
          <div className="prose prose-indigo max-w-none">
            <h3 className="font-headline-sm text-xl mb-4 mt-8">1. Describe your app</h3>
            <p className="text-on-surface-variant mb-4">
              Navigate to the Dashboard and type a natural language prompt describing the app you want to build. Our AI engine will automatically provision the database schema, UI components, and API routes.
            </p>
            <div className="bg-surface-container-low p-4 rounded-xl border border-border-subtle font-mono text-sm text-on-surface mb-8">
              "Build a customer support ticketing system with a Kanban board and automated email parsing."
            </div>

            <h3 className="font-headline-sm text-xl mb-4 mt-8">2. Review the Schema</h3>
            <p className="text-on-surface-variant mb-4">
              Before deployment, you can review and modify the generated Prisma schema and database relations in the Schema Editor.
            </p>

            <h3 className="font-headline-sm text-xl mb-4 mt-8">3. Deploy</h3>
            <p className="text-on-surface-variant mb-4">
              Hit publish. Your app will be containerized and deployed to our managed infrastructure instantly. You'll receive a live URL.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
