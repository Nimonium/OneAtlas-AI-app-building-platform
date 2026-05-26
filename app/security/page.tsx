"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface">
        <section className="py-24 px-margin-desktop text-center relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-30"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="font-display-lg text-display-lg mb-6 tracking-tight">
              Security built into the <span className="text-primary">core</span> of AI
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Your data is your data. OneAtlas is designed with zero-trust architecture, ensuring that your enterprise information never leaks into public models.
            </p>
          </div>
        </section>

        <section className="py-24 px-margin-desktop max-w-container-max mx-auto border-t border-border-subtle">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-accent-teal mb-4">verified_user</span>
              <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">SOC2 Type II</h3>
              <p className="text-on-surface-variant">Audited and certified by independent third parties to ensure maximum data protection.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-accent-purple mb-4">enhanced_encryption</span>
              <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">End-to-End Encryption</h3>
              <p className="text-on-surface-variant">AES-256 encryption at rest and TLS 1.3 in transit across all environments.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border-subtle bg-white shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">gpp_good</span>
              <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">Zero Data Retention</h3>
              <p className="text-on-surface-variant">LLM providers do not train on your proprietary prompts or generated schemas.</p>
            </div>
          </div>
        </section>

        <section className="py-32 px-margin-desktop bg-surface-alt">
          <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display-md text-display-md mb-6 text-on-surface">Zero-Trust Infrastructure</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Every request goes through rigorous authentication. Access to your generated applications is strictly governed by your Identity Provider (IdP) via SAML or OIDC.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Multi-Factor Authentication (MFA)</li>
                <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Audit Logs &amp; Activity Monitoring</li>
                <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-accent-teal">check_circle</span> Custom Data Residency</li>
              </ul>
            </div>
            <div className="bg-white border border-border-subtle rounded-3xl p-12 shadow-sm aspect-square flex items-center justify-center">
              <div className="flex flex-col items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div className="h-16 w-[1px] bg-border-subtle relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-surface-container-low text-[10px] text-on-surface-variant border border-border-subtle rounded">SSO Auth</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent-teal">dns</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
