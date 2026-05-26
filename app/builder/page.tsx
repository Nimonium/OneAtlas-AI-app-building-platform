"use client";

import React from "react";
import Link from "next/link";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-surface-alt flex flex-col font-body-md overflow-hidden">
      {/* Topbar */}
      <header className="h-14 border-b border-border-subtle bg-white flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <div className="h-4 w-[1px] bg-border-subtle"></div>
          <div className="font-semibold text-sm">CRM Workspace</div>
          <span className="text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">Draft</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded hover:bg-surface-alt">History</button>
          <button className="text-sm font-medium text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded hover:bg-surface-alt flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">play_arrow</span> Preview
          </button>
          <button className="text-sm font-medium bg-primary text-white px-4 py-1.5 rounded shadow-sm hover:opacity-90">Publish</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Components) */}
        <aside className="w-64 border-r border-border-subtle bg-white flex flex-col">
          <div className="p-3 border-b border-border-subtle flex gap-2">
            <button className="flex-1 pb-2 border-b-2 border-primary text-primary font-medium text-xs">Components</button>
            <button className="flex-1 pb-2 border-b-2 border-transparent text-on-surface-variant font-medium text-xs hover:text-on-surface">Data</button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="mb-6">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">Layout</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-border-subtle rounded p-2 text-center text-xs text-on-surface-variant hover:border-primary hover:text-primary cursor-grab bg-surface-alt">Container</div>
                <div className="border border-border-subtle rounded p-2 text-center text-xs text-on-surface-variant hover:border-primary hover:text-primary cursor-grab bg-surface-alt">Grid</div>
                <div className="border border-border-subtle rounded p-2 text-center text-xs text-on-surface-variant hover:border-primary hover:text-primary cursor-grab bg-surface-alt">Stack</div>
                <div className="border border-border-subtle rounded p-2 text-center text-xs text-on-surface-variant hover:border-primary hover:text-primary cursor-grab bg-surface-alt">Tabs</div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">Elements</h4>
              <div className="space-y-2">
                <div className="border border-border-subtle rounded p-2 text-xs flex items-center gap-2 cursor-grab hover:border-primary">
                  <span className="material-symbols-outlined text-[16px]">text_fields</span> Text
                </div>
                <div className="border border-border-subtle rounded p-2 text-xs flex items-center gap-2 cursor-grab hover:border-primary">
                  <span className="material-symbols-outlined text-[16px]">smart_button</span> Button
                </div>
                <div className="border border-border-subtle rounded p-2 text-xs flex items-center gap-2 cursor-grab hover:border-primary">
                  <span className="material-symbols-outlined text-[16px]">table_chart</span> Data Grid
                </div>
                <div className="border border-border-subtle rounded p-2 text-xs flex items-center gap-2 cursor-grab hover:border-primary">
                  <span className="material-symbols-outlined text-[16px]">image</span> Image
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Canvas (Center) */}
        <main className="flex-1 bg-surface-alt p-8 overflow-y-auto flex justify-center">
          <div className="w-full max-w-4xl bg-white border border-border-subtle rounded-xl shadow-sm min-h-[600px] flex flex-col">
            <div className="h-10 border-b border-border-subtle bg-surface-container-lowest rounded-t-xl flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-8">
              {/* Canvas Content Preview */}
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center text-on-surface-variant hover:bg-primary/5 transition-colors cursor-pointer flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">add_circle</span>
                <p>Drag and drop components here</p>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Properties) */}
        <aside className="w-72 border-l border-border-subtle bg-white flex flex-col">
          <div className="p-4 border-b border-border-subtle font-semibold text-sm">
            Properties
          </div>
          <div className="p-4 flex-1 overflow-y-auto text-sm text-on-surface-variant flex items-center justify-center">
            Select an element to edit its properties.
          </div>
        </aside>
      </div>
    </div>
  );
}
