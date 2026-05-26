"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-margin-desktop text-center border-b border-border-subtle bg-surface-alt">
          <h1 className="font-display-md text-display-md mb-6 tracking-tight">
            Start from a <span className="text-primary">proven template</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Don't start from scratch. Clone a production-ready template and customize it instantly using natural language.
          </p>
          <div className="max-w-xl mx-auto glass-panel rounded-full flex items-center px-4 py-2 border border-border-subtle focus-within:ring-2 ring-primary/20">
            <span className="material-symbols-outlined text-outline">search</span>
            <input 
              type="text" 
              placeholder="Search templates (e.g., CRM, Dashboard, Tracker)..." 
              className="bg-transparent border-none focus:ring-0 w-full ml-2 font-body-md"
            />
          </div>
        </section>

        <section className="py-12 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="space-y-8 sticky top-24">
              <div>
                <h4 className="font-headline-sm text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4">Categories</h4>
                <ul className="space-y-3 font-body-sm text-on-surface-variant">
                  <li><Link href="#" className="flex justify-between hover:text-primary font-medium text-primary"><span>All Templates</span> <span>124</span></Link></li>
                  <li><Link href="#" className="flex justify-between hover:text-primary transition-colors"><span>Operations</span> <span>42</span></Link></li>
                  <li><Link href="#" className="flex justify-between hover:text-primary transition-colors"><span>HR & Recruiting</span> <span>18</span></Link></li>
                  <li><Link href="#" className="flex justify-between hover:text-primary transition-colors"><span>Sales & CRM</span> <span>31</span></Link></li>
                  <li><Link href="#" className="flex justify-between hover:text-primary transition-colors"><span>Finance</span> <span>12</span></Link></li>
                  <li><Link href="#" className="flex justify-between hover:text-primary transition-colors"><span>Engineering</span> <span>21</span></Link></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline-md text-headline-md">Featured Templates</h2>
              <div className="flex gap-2">
                <select className="bg-white border border-border-subtle rounded-lg px-3 py-1.5 text-body-sm text-on-surface">
                  <option>Most Popular</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Template Cards */}
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="group rounded-2xl border border-border-subtle bg-white overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[4/3] bg-surface-container-low overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-sm">
                      <button className="bg-primary text-white font-bold px-6 py-2 rounded-xl">Use Template</button>
                    </div>
                    <img 
                      src={`https://lh3.googleusercontent.com/aida-public/AB6AXuCA7S-QGYwUUa_2S0I1BzbwBDPxbezWvACVvRWTS3QZJ0cmoATEiRSdO3q1T2zG9_CuXCn9uYGz87fpeo_sRJmhsXb3Of0I2UbWVC-oaD_QjN8GekcTcB4yme_03d4ZuJ4Ta-XDH-Zpq9je0l9XOlGJFwCRbpmjTjPNi4QBrJWoRGGSbG_QbE317Wuwv0QZDd_zCkWFNyLF4zFBm0nd2LXDZDcEuvoZXvzL57q9VZd9BFq_TH6uVBa--XVHJGmMcvHKzXqpOR4yop5J`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="Template" 
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-sm">Operations</span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] mb-1">Advanced CRM Workspace</h3>
                    <p className="text-body-sm text-on-surface-variant line-clamp-2">Complete pipeline management with automated follow-ups and AI-driven lead scoring.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
