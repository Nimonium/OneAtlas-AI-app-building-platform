"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EnterprisePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface">
        {/* Hero */}
        <section className="py-24 px-margin-desktop text-center bg-surface-alt border-b border-border-subtle relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6 font-medium text-body-sm">
              <span className="material-symbols-outlined scale-75">shield_locked</span>
              Enterprise Grade
            </div>
            <h1 className="font-display-lg text-display-lg mb-6 tracking-tight">
              AI App Infrastructure for <span className="text-primary">Enterprise Teams</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Deploy custom AI applications securely on your own VPC. Get SOC2 Type II compliance, advanced RBAC, and dedicated support.
            </p>
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
              Contact Sales
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-accent-teal mb-4">admin_panel_settings</span>
              <h3 className="font-headline-sm text-headline-sm mb-2">Role-Based Access Control</h3>
              <p className="text-on-surface-variant">Granular permissions for every table, endpoint, and UI component across your organization.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-accent-purple mb-4">cloud_done</span>
              <h3 className="font-headline-sm text-headline-sm mb-2">VPC Deployment</h3>
              <p className="text-on-surface-variant">Deploy OneAtlas securely within your own AWS, GCP, or Azure Virtual Private Cloud.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">memory</span>
              <h3 className="font-headline-sm text-headline-sm mb-2">Dedicated AI Models</h3>
              <p className="text-on-surface-variant">Zero data retention policies. Train and fine-tune models specifically on your private company data.</p>
            </div>
          </div>
        </section>

        {/* Architecture Diagram Area */}
        <section className="py-24 px-margin-desktop bg-surface-container-low border-y border-border-subtle">
          <div className="max-w-container-max mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg mb-12">Enterprise Architecture</h2>
            <div className="bg-white border border-border-subtle rounded-3xl p-12 shadow-xl aspect-video flex items-center justify-center text-on-surface-variant">
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-[64px] text-primary/40">account_tree</span>
                <p className="font-medium text-lg">Secure API Gateway &rarr; VPC Hosting &rarr; Private DB Cluster</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
