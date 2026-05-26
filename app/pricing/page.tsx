"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-alt/30 pt-24 pb-32 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-display-lg text-display-lg mb-6 tracking-tight">Pricing that scales with your team</h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Simple, predictable pricing. Start for free, upgrade when you need more power and team collaboration features.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="p-10 rounded-3xl bg-white border border-border-subtle flex flex-col">
              <h4 className="font-headline-sm text-headline-sm mb-2">Starter</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-display-md font-bold">₹0</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <p className="text-on-surface-variant mb-8">Perfect for exploring AI-generated tools.</p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> 3 Apps</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> GPT-4o Mini Access</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Community Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Start for Free</button>
            </div>
            
            <div className="p-10 rounded-3xl bg-white border-2 border-primary flex flex-col relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[12px] font-bold rounded-full uppercase tracking-widest">Most Popular</div>
              <h4 className="font-headline-sm text-headline-sm mb-2">Growth</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-display-md font-bold">₹3,999</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <p className="text-on-surface-variant mb-8">For scaling teams building core operations.</p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Unlimited Apps</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> All Models (Claude/GPT-4)</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Custom Domains</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Priority Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">Go Growth</button>
            </div>
            
            <div className="p-10 rounded-3xl bg-white border border-border-subtle flex flex-col">
              <h4 className="font-headline-sm text-headline-sm mb-2">Enterprise</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-display-md font-bold">Custom</span>
              </div>
              <p className="text-on-surface-variant mb-8">Security and controls for large organizations.</p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> SSO &amp; RBAC</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Dedicated AI Instance</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> On-prem deployment</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-teal">check_circle</span> 24/7 Account Manager</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-on-surface text-on-surface font-bold hover:bg-on-surface/5 transition-colors">Contact Sales</button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 border border-border-subtle shadow-sm text-center">
            <h3 className="font-headline-md text-headline-md mb-8">Compare Features</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="py-4 font-bold text-on-surface">Feature</th>
                    <th className="py-4 font-bold text-on-surface">Starter</th>
                    <th className="py-4 font-bold text-primary">Growth</th>
                    <th className="py-4 font-bold text-on-surface">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-on-surface-variant">
                  <tr>
                    <td className="py-4">Active Apps</td>
                    <td className="py-4">3</td>
                    <td className="py-4 font-bold text-primary">Unlimited</td>
                    <td className="py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4">AI Models</td>
                    <td className="py-4">Basic</td>
                    <td className="py-4 font-bold text-primary">Advanced</td>
                    <td className="py-4">Custom/Dedicated</td>
                  </tr>
                  <tr>
                    <td className="py-4">SSO / SAML</td>
                    <td className="py-4"><span className="material-symbols-outlined text-outline/50">close</span></td>
                    <td className="py-4"><span className="material-symbols-outlined text-outline/50">close</span></td>
                    <td className="py-4"><span className="material-symbols-outlined text-accent-teal">check</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
