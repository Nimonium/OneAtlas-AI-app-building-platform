"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const shineRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // details toggle effect
    const details = document.querySelectorAll("details");
    details.forEach((el) => {
      el.addEventListener("toggle", () => {
        if (el.open) {
          details.forEach((other) => {
            if (other !== el && other.open) other.open = false;
          });
        }
      });
    });

    // magnetic shine effect
    const buttons = document.querySelectorAll(".hero-shine");
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const btn = mouseEvent.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    };

    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="mesh-gradient">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden px-margin-desktop max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="font-label-caps text-label-caps uppercase tracking-wider">AI-Native App Generation</span>
              </div>
              <h1 className="font-display-lg text-display-lg mb-6 leading-[1.1] tracking-tight">
                Build Internal <br /><span className="text-primary">Apps with AI</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Describe your business workflow in plain English. OneAtlas generates production-ready internal tools, schemas, and dashboards instantly.
              </p>
              <div className="glass-panel p-2 rounded-2xl border border-border-subtle shadow-2xl mb-6 group transition-all focus-within:ring-2 focus-within:ring-primary/20">
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full font-body-md placeholder:text-on-surface-variant/40" placeholder="Describe the app you want to build..." type="text" />
                  <Link href="/build">
                    <button className="hero-shine text-on-primary px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
                      Generate
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-10">
                <button className="px-4 py-1.5 rounded-full bg-surface-alt border border-border-subtle text-body-sm font-medium hover:bg-surface-container transition-colors">CRM for sales team</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-alt border border-border-subtle text-body-sm font-medium hover:bg-surface-container transition-colors">HR onboarding dashboard</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-alt border border-border-subtle text-body-sm font-medium hover:bg-surface-container transition-colors">Inventory tracker</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-alt border border-border-subtle text-body-sm font-medium hover:bg-surface-container transition-colors">Product analytics</button>
              </div>
              <div className="flex items-center gap-8">
                <button className="text-on-surface font-semibold flex items-center gap-2 group">
                  Explore Templates
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">east</span>
                </button>
              </div>
            </div>
            <div className="relative h-[600px] lg:h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-container-low h-[600px] lg:h-auto">
                <img alt="Hero Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7S-QGYwUUa_2S0I1BzbwBDPxbezWvACVvRWTS3QZJ0cmoATEiRSdO3q1T2zG9_CuXCn9uYGz87fpeo_sRJmhsXb3Of0I2UbWVC-oaD_QjN8GekcTcB4yme_03d4ZuJ4Ta-XDH-Zpq9je0l9XOlGJFwCRbpmjTjPNi4QBrJWoRGGSbG_QbE317Wuwv0QZDd_zCkWFNyLF4zFBm0nd2LXDZDcEuvoZXvzL57q9VZd9BFq_TH6uVBa--XVHJGmMcvHKzXqpOR4yop5J" />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-12 -left-8 w-64 animate-float shadow-2xl rounded-xl border border-white/50 overflow-hidden">
                <img alt="Floating card 1" className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsx371BOJZVbmggQ1ow6OH0jM8T56bIU6xMnQNglilfmI6jirbltaadomn2S0olvsbeFrz4269411ba0tIaeibWY0oepei9T_bZj5tbsfQxiZYtCefknEyueanbqvmR73rZGsRJwvcQc9z6psRoEyXx3auGbpdRTvtWHcJhVt6i3F3Leh--x8haztejbH2K7oOgjTT3t8Mgh9aLOE-LywKM6OpgcOani02morXF93BVvC50SnW29lSO2113Dr6CAThbCwhe-Edywuq" />
              </div>
              <div className="absolute top-1/4 -right-12 w-72 animate-float-delayed shadow-2xl rounded-xl border border-white/50 overflow-hidden">
                <img alt="Floating card 2" className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKH5F0ATm4ccNF7wquL9tI_D9nGwnq1TFuMmYePm-3RbI7eK01ngA_BUQJtbTD-rxN0eOZYZ-XUTm7uzyap1ULzE3yBR9kNZSPCtiY9hP1C0A4-JGJezcXT7Sxoy7pEJfK2LHPUUOHFWV2rP91oxx_VsG4Gnv3o891X5v5n1PG2liSQY3cB_Yn5M2YuNpx6qRAAtW-btsgY6zWy78fmqC0BHl85SQeFi7-QLOEzfs8IVTPH2fbb_uE55nVNCOK9XHgt6zM-B4dmNav" />
              </div>
              <div className="absolute -bottom-8 left-1/4 w-80 animate-float-slow shadow-2xl rounded-xl border border-white/50 overflow-hidden">
                <img alt="Floating card 3" className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcIgtefKTo6jWwPbXTlbXcqcgQU97vsFakQOn7WCGMium5bsfgRGPnEo2KQvhFhkEINpH_QvurpBf-yX5YN6lP5kD625hUsR3WxeSjC2dPmwPZzIN-EanW_HUDTo9a3p9bfFYlh1Vh3uj78YjrCeMq-FfAvpwkfdmUfGgLeBEedr5dzbobUDWONTy0sJ1sc2PIetGDNNsYYnmltiC6CHDH_n_y3Qf4_taY_nk3WyfNPgzfNQN-r6IBN6j-RtIjBZFenApeZi_U2yTa" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">How It Works</h2>
            <p className="text-on-surface-variant">From idea to deployment in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative p-8 rounded-2xl bg-surface-container-lowest border border-border-subtle group hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-3">1. Describe your app</h3>
              <p className="text-on-surface-variant text-body-md">Simply type what you need. AI understands context, workflows, and business logic.</p>
              <div className="absolute -top-4 -right-4 text-display-md font-bold opacity-5 pointer-events-none">01</div>
            </div>
            <div className="relative p-8 rounded-2xl bg-surface-container-lowest border border-border-subtle group hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center mb-6 group-hover:bg-accent-purple group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">auto_fix_high</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-3">2. AI generates schema + UI</h3>
              <p className="text-on-surface-variant text-body-md">OneAtlas creates the database schema, API endpoints, and a pixel-perfect React frontend.</p>
              <div className="absolute -top-4 -right-4 text-display-md font-bold opacity-5 pointer-events-none">02</div>
            </div>
            <div className="relative p-8 rounded-2xl bg-surface-container-lowest border border-border-subtle group hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6 group-hover:bg-accent-teal group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-3">3. Deploy instantly</h3>
              <p className="text-on-surface-variant text-body-md">Hit publish and your app is live on a secure, scalable cloud infrastructure.</p>
              <div className="absolute -top-4 -right-4 text-display-md font-bold opacity-5 pointer-events-none">03</div>
            </div>
          </div>
        </section>

        {/* AI Models Marquee */}
        <section className="py-16 bg-surface-alt/50 overflow-hidden">
          <div className="marquee-container relative">
            <div className="flex gap-16 animate-scroll whitespace-nowrap items-center">
              {/* Set 1 */}
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">GPT-4 <div className="w-2 h-2 rounded-full bg-primary/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Claude 3.5 <div className="w-2 h-2 rounded-full bg-accent-purple/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Gemini Pro <div className="w-2 h-2 rounded-full bg-accent-teal/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">DeepSeek <div className="w-2 h-2 rounded-full bg-accent-amber/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Mistral Large <div className="w-2 h-2 rounded-full bg-accent-coral/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Llama 3 <div className="w-2 h-2 rounded-full bg-indigo-vivid/30"></div></span>
              {/* Set 2 */}
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">GPT-4 <div className="w-2 h-2 rounded-full bg-primary/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Claude 3.5 <div className="w-2 h-2 rounded-full bg-accent-purple/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Gemini Pro <div className="w-2 h-2 rounded-full bg-accent-teal/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">DeepSeek <div className="w-2 h-2 rounded-full bg-accent-amber/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Mistral Large <div className="w-2 h-2 rounded-full bg-accent-coral/30"></div></span>
              <span className="text-headline-md font-bold text-on-surface-variant/40 flex items-center gap-4">Llama 3 <div className="w-2 h-2 rounded-full bg-indigo-vivid/30"></div></span>
            </div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">Start with a template</h2>
              <p className="text-on-surface-variant">Clone and customize production-grade templates.</p>
            </div>
            <button className="flex items-center gap-2 font-semibold text-primary">
              View Library <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-surface-container border border-border-subtle cursor-pointer h-[500px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="CRM Workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7S-QGYwUUa_2S0I1BzbwBDPxbezWvACVvRWTS3QZJ0cmoATEiRSdO3q1T2zG9_CuXCn9uYGz87fpeo_sRJmhsXb3Of0I2UbWVC-oaD_QjN8GekcTcB4yme_03d4ZuJ4Ta-XDH-Zpq9je0l9XOlGJFwCRbpmjTjPNi4QBrJWoRGGSbG_QbE317Wuwv0QZDd_zCkWFNyLF4zFBm0nd2LXDZDcEuvoZXvzL57q9VZd9BFq_TH6uVBa--XVHJGmMcvHKzXqpOR4yop5J" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary px-3 py-1 rounded-full text-[12px] font-bold text-white uppercase tracking-widest">Featured</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-2">Advanced CRM Workspace</h3>
                <p className="text-white/70 max-w-sm">Full-featured sales pipeline, customer profiles, and automated follow-ups.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-border-subtle cursor-pointer aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="HR Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsx371BOJZVbmggQ1ow6OH0jM8T56bIU6xMnQNglilfmI6jirbltaadomn2S0olvsbeFrz4269411ba0tIaeibWY0oepei9T_bZj5tbsfQxiZYtCefknEyueanbqvmR73rZGsRJwvcQc9z6psRoEyXx3auGbpdRTvtWHcJhVt6i3F3Leh--x8haztejbH2K7oOgjTT3t8Mgh9aLOE-LywKM6OpgcOani02morXF93BVvC50SnW29lSO2113Dr6CAThbCwhe-Edywuq" />
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-on-surface px-6 py-2 rounded-xl font-bold shadow-xl">Use Template</button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md">
                <h4 className="font-headline-sm text-[18px]">HR Dashboard</h4>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white border border-border-subtle cursor-pointer aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Analytics Suite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKH5F0ATm4ccNF7wquL9tI_D9nGwnq1TFuMmYePm-3RbI7eK01ngA_BUQJtbTD-rxN0eOZYZ-XUTm7uzyap1ULzE3yBR9kNZSPCtiY9hP1C0A4-JGJezcXT7Sxoy7pEJfK2LHPUUOHFWV2rP91oxx_VsG4Gnv3o891X5v5n1PG2liSQY3cB_Yn5M2YuNpx6qRAAtW-btsgY6zWy78fmqC0BHl85SQeFi7-QLOEzfs8IVTPH2fbb_uE55nVNCOK9XHgt6zM-B4dmNav" />
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-on-surface px-6 py-2 rounded-xl font-bold shadow-xl">Use Template</button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md">
                <h4 className="font-headline-sm text-[18px]">Analytics Suite</h4>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white border border-border-subtle cursor-pointer aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Inventory Control" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcIgtefKTo6jWwPbXTlbXcqcgQU97vsFakQOn7WCGMium5bsfgRGPnEo2KQvhFhkEINpH_QvurpBf-yX5YN6lP5kD625hUsR3WxeSjC2dPmwPZzIN-EanW_HUDTo9a3p9bfFYlh1Vh3uj78YjrCeMq-FfAvpwkfdmUfGgLeBEedr5dzbobUDWONTy0sJ1sc2PIetGDNNsYYnmltiC6CHDH_n_y3Qf4_taY_nk3WyfNPgzfNQN-r6IBN6j-RtIjBZFenApeZi_U2yTa" />
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-on-surface px-6 py-2 rounded-xl font-bold shadow-xl">Use Template</button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md">
                <h4 className="font-headline-sm text-[18px]">Inventory Control</h4>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white border border-border-subtle cursor-pointer aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-surface-variant to-primary-container flex items-center justify-center p-8">
                <span className="material-symbols-outlined text-primary text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md">
                <h4 className="font-headline-sm text-[18px]">Custom Workspace</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Why OneAtlas Comparison */}
        <section className="py-32 bg-on-surface text-surface px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-20">
              <h2 className="font-display-md text-display-md mb-6">Designed for the <br /><span className="text-accent-teal">AI-Native Era</span></h2>
              <p className="text-surface-variant/60 max-w-xl text-body-lg">Legacy tools are "no-code." OneAtlas is "AI-code"—the speed of drag-and-drop with the power of professional engineering.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center border border-accent-teal/20">
                    <span className="material-symbols-outlined text-accent-teal" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm mb-2">AI-Native Runtime</h4>
                    <p className="text-surface-variant/60">Instead of static logic, our runtime uses LLMs to interpret business rules and adapt workflows on the fly.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20">
                    <span className="material-symbols-outlined text-accent-purple" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm mb-2">Auto Schema Generation</h4>
                    <p className="text-surface-variant/60">Upload a CSV or describe a process, and OneAtlas builds a perfectly normalized database schema automatically.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center border border-primary-fixed-dim/20">
                    <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm mb-2">Conversational Editing</h4>
                    <p className="text-surface-variant/60">Change layouts, add buttons, or connect new APIs just by talking to the interface. No drag-and-drop fatigue.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface/5 rounded-3xl border border-white/10 p-10 backdrop-blur-xl">
                <h4 className="font-headline-sm text-headline-sm mb-8">Competitive Edge</h4>
                <table className="w-full text-left">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="py-4 font-label-caps text-surface-variant/40">Feature</th>
                      <th className="py-4 font-label-caps text-accent-teal">OneAtlas</th>
                      <th className="py-4 font-label-caps text-surface-variant/40">Legacy Tools</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-6">Creation Speed</td>
                      <td className="py-6 text-accent-teal font-bold">Seconds</td>
                      <td className="py-6 text-surface-variant/60">Days/Weeks</td>
                    </tr>
                    <tr>
                      <td className="py-6">Customization</td>
                      <td className="py-6 text-accent-teal font-bold">Unlimited (AI)</td>
                      <td className="py-6 text-surface-variant/60">Fixed Components</td>
                    </tr>
                    <tr>
                      <td className="py-6">Backend</td>
                      <td className="py-6 text-accent-teal font-bold">Auto-Gen API</td>
                      <td className="py-6 text-surface-variant/60">Manual Setup</td>
                    </tr>
                    <tr>
                      <td className="py-6">Multi-Model Routing</td>
                      <td className="py-6 text-accent-teal font-bold">Native</td>
                      <td className="py-6 text-surface-variant/60">Third-party only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Atlas for Teams */}
        <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">Atlas for Teams</h2>
            <p className="text-on-surface-variant">Empower every department with custom software.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-primary transition-all cursor-default">
              <span className="material-symbols-outlined text-primary mb-3 text-[32px]">hub</span>
              <h5 className="font-semibold">Operations</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-accent-purple transition-all cursor-default">
              <span className="material-symbols-outlined text-accent-purple mb-3 text-[32px]">payments</span>
              <h5 className="font-semibold">Sales</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-accent-teal transition-all cursor-default">
              <span className="material-symbols-outlined text-accent-teal mb-3 text-[32px]">groups</span>
              <h5 className="font-semibold">HR</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-accent-amber transition-all cursor-default">
              <span className="material-symbols-outlined text-accent-amber mb-3 text-[32px]">lightbulb</span>
              <h5 className="font-semibold">Founders</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-indigo-vivid transition-all cursor-default">
              <span className="material-symbols-outlined text-indigo-vivid mb-3 text-[32px]">analytics</span>
              <h5 className="font-semibold">Analytics</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-subtle text-center hover:border-accent-coral transition-all cursor-default">
              <span className="material-symbols-outlined text-accent-coral mb-3 text-[32px]">support_agent</span>
              <h5 className="font-semibold">Support</h5>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 px-margin-desktop bg-surface-alt/30">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg mb-4">Pricing Plans</h2>
              <p className="text-on-surface-variant">Simple, predictable pricing for teams of all sizes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-margin-desktop max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-2xl bg-white border border-border-subtle p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="font-headline-sm text-[18px]">Do I need to know how to code?</h5>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">No. OneAtlas is designed for business operators, but it's powerful enough for engineers. You can describe your needs in plain English, and our AI handles the technical implementation.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-border-subtle p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="font-headline-sm text-[18px]">Can I export the code?</h5>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">Yes. Enterprise and Growth plans offer full code export options. The generated code is standard React and Node.js, so your team can maintain it anywhere.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-border-subtle p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="font-headline-sm text-[18px]">Is my data secure?</h5>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">Absolutely. We use enterprise-grade encryption for all data at rest and in transit. We are SOC2 Type II compliant and offer VPC deployments for Enterprise customers.</p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-margin-desktop">
          <div className="max-w-5xl mx-auto rounded-[3rem] hero-shine p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-display-md text-display-md text-white mb-6">Build your first app today</h2>
              <p className="text-white/80 text-body-lg mb-10 max-w-lg mx-auto">Join 10,000+ teams building the future of internal tools with OneAtlas.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/build">
                  <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-headline-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                    Get Started for Free
                  </button>
                </Link>
                <button className="bg-primary/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-headline-sm hover:bg-primary/30 transition-colors">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
