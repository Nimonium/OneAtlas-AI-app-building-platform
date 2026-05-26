"use client";

import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-alt font-body-md text-on-surface">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-border-subtle h-16 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-full max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold tracking-tight text-primary">OneAtlas</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-body-md font-medium text-primary border-b-2 border-primary pb-5 pt-5" href="/dashboard">Overview</Link>
            <Link className="font-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Apps</Link>
            <Link className="font-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Database</Link>
            <Link className="font-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Settings</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-medium hover:opacity-90 shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span> New App
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-border-subtle flex items-center justify-center font-bold text-xs text-primary">AL</div>
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto px-6 py-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="font-headline-lg text-headline-lg mb-1">Welcome back, Alex</h1>
            <p className="text-on-surface-variant text-sm">Here's what's happening in your workspace today.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-border-subtle rounded-lg text-sm font-medium hover:bg-surface-container-low">Last 7 days</button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">apps</span>
              <h3 className="font-medium text-sm">Active Apps</h3>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-display-md font-bold leading-none">12</span>
              <span className="text-accent-teal text-sm font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">arrow_upward</span> 2</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">api</span>
              <h3 className="font-medium text-sm">API Calls</h3>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-display-md font-bold leading-none">84.2k</span>
              <span className="text-accent-teal text-sm font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">arrow_upward</span> 14%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">group</span>
              <h3 className="font-medium text-sm">Active Users</h3>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-display-md font-bold leading-none">1,204</span>
              <span className="text-accent-purple text-sm font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">arrow_downward</span> 3%</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Apps */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-headline-sm text-headline-sm">Recent Apps</h2>
              <button className="text-primary text-sm font-medium hover:underline">View all</button>
            </div>
            <div className="bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4 font-medium">App Name</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Last Modified</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr className="hover:bg-surface-alt/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                          <p className="font-medium">Sales CRM</p>
                          <p className="text-xs text-on-surface-variant">Production</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal"></div> Live
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">2 hours ago</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-alt/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                          <span className="material-symbols-outlined">group</span>
                        </div>
                        <div>
                          <p className="font-medium">HR Onboarding</p>
                          <p className="text-xs text-on-surface-variant">Staging</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent-amber/10 text-amber-600 border border-amber-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Draft
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">1 day ago</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <h2 className="font-headline-sm text-headline-sm mb-4">Activity</h2>
            <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                  </div>
                  <div>
                    <p className="text-sm"><span className="font-medium">You</span> deployed <span className="font-medium">Sales CRM</span> to production.</p>
                    <p className="text-xs text-on-surface-variant mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </div>
                  <div>
                    <p className="text-sm"><span className="font-medium">Sarah Jenkins</span> edited the database schema in <span className="font-medium">HR Onboarding</span>.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Yesterday at 4:12 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </div>
                  <div>
                    <p className="text-sm"><span className="font-medium">You</span> created a new app <span className="font-medium">Inventory Tracker</span>.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Oct 12, 2024</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-sm font-medium text-on-surface-variant border border-border-subtle rounded-lg hover:bg-surface-container-low">View all activity</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
