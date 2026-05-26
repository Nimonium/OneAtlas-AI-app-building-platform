"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGenerationStore } from "@/lib/store";

export default function ProjectsPage() {
  const pathname = usePathname();
  const projects = useGenerationStore((state) => state.projects);

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
            <h1 className="font-display-sm text-display-md mb-2">Projects</h1>
            <p className="text-on-surface-variant">Manage your AI-generated applications and workspaces.</p>
          </div>
          <Link href="/build" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-medium hover:opacity-90 shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span> New Project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white border border-border-subtle rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px]">folder_off</span>
            </div>
            <h3 className="font-headline-sm text-lg mb-2">No projects yet</h3>
            <p className="text-on-surface-variant mb-6 max-w-sm mx-auto">You haven't generated any applications yet. Head over to the Builder to create your first app.</p>
            <Link href="/build" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add</span> Create App
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={project.appId} className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">folder</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-container-low text-on-surface-variant">
                    Just now
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg mb-1">{project.generatedName || project.appName}</h3>
                <p className="text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                  Generated from {project.templateSlug} template.
                </p>
                
                <div className="flex justify-between items-center border-t border-border-subtle pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed border-2 border-white flex justify-center items-center text-xs font-bold text-primary">JD</div>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">View Project</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
