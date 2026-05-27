"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // details toggle effect for FAQ
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
  }, []);

  return (
    <div className="bg-[#F5F5EE] min-h-screen text-[#111111] font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-[120px] pb-[120px] px-[20px] md:px-[32px] max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-[64px] items-center">
            {/* Left side: Typography & Prompt Box */}
            <div className="z-10">
              <h1 className="text-hero mb-[32px] text-[#111111]">
                Build Internal <br /> Apps with AI
              </h1>
              <p className="text-body mb-[48px] max-w-lg text-[#6B7280]">
                Describe your business workflow in plain English. OneAtlas generates production-ready internal tools, schemas, and dashboards instantly.
              </p>
              
              <div className="prompt-box mb-[32px] shadow-soft flex flex-col sm:flex-row items-center gap-[16px]">
                <span className="material-symbols-outlined text-[#9CA3AF] text-[24px]">chat_bubble</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full text-[18px] placeholder:text-[#9CA3AF] text-[#111111] outline-none" 
                  placeholder="Describe the app you want to build..." 
                  type="text" 
                />
                <Link href="/build" className="w-full sm:w-auto">
                  <button className="btn-primary w-full sm:w-auto">
                    Generate
                  </button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-[12px]">
                <span className="text-small-label flex items-center h-[32px]">Popular:</span>
                <button className="px-[16px] h-[32px] rounded-[8px] bg-white border border-[#E5E7EB] text-[13px] font-medium text-[#6B7280] hover:bg-[#FAFAFA] transition-colors">CRM</button>
                <button className="px-[16px] h-[32px] rounded-[8px] bg-white border border-[#E5E7EB] text-[13px] font-medium text-[#6B7280] hover:bg-[#FAFAFA] transition-colors">HR Dashboard</button>
                <button className="px-[16px] h-[32px] rounded-[8px] bg-white border border-[#E5E7EB] text-[13px] font-medium text-[#6B7280] hover:bg-[#FAFAFA] transition-colors">Inventory</button>
              </div>
            </div>

            {/* Right side: AI Workspace UI */}
            <div className="relative">
              <div className="rounded-[24px] bg-white border border-[#E5E7EB] shadow-soft overflow-hidden h-[500px] flex items-center justify-center relative">
                {/* Abstract simple mockup to avoid neon/glass */}
                <div className="absolute top-0 left-0 w-full h-[48px] border-b border-[#E5E7EB] flex items-center px-[24px] gap-[12px]">
                   <div className="w-[12px] h-[12px] rounded-full bg-[#E5E7EB]"></div>
                   <div className="w-[12px] h-[12px] rounded-full bg-[#E5E7EB]"></div>
                   <div className="w-[12px] h-[12px] rounded-full bg-[#E5E7EB]"></div>
                </div>
                <div className="absolute top-[48px] left-0 w-[200px] h-full border-r border-[#E5E7EB] p-[24px] hidden sm:block">
                  <div className="w-[80%] h-[12px] bg-[#F3F4F6] rounded-[4px] mb-[24px]"></div>
                  <div className="w-[60%] h-[12px] bg-[#F3F4F6] rounded-[4px] mb-[16px]"></div>
                  <div className="w-[70%] h-[12px] bg-[#F3F4F6] rounded-[4px] mb-[16px]"></div>
                  <div className="w-[50%] h-[12px] bg-[#F3F4F6] rounded-[4px] mb-[16px]"></div>
                </div>
                <div className="sm:ml-[200px] w-full p-[32px] h-full pt-[80px]">
                  <div className="w-[40%] h-[24px] bg-[#E5E7EB] rounded-[4px] mb-[32px]"></div>
                  <div className="grid grid-cols-3 gap-[16px] mb-[32px]">
                     <div className="h-[80px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA]"></div>
                     <div className="h-[80px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA]"></div>
                     <div className="h-[80px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA]"></div>
                  </div>
                  <div className="w-full h-[150px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section Style */}
        <section className="py-[120px] px-[20px] md:px-[32px] bg-white border-y border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-[80px]">
              <h2 className="text-section mb-[16px] text-[#111111]">Connect Everything</h2>
              <p className="text-body max-w-2xl mx-auto">
                Seamlessly connect your existing database, authentication, and third-party tools.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-[24px]">
              {/* Integration Cards */}
              {[
                { name: "PostgreSQL", icon: "database" },
                { name: "Stripe", icon: "payments" },
                { name: "Salesforce", icon: "cloud" },
                { name: "Slack", icon: "tag" },
                { name: "GitHub", icon: "code" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="w-[220px] h-[260px] rounded-[28px] bg-white border border-[#ECECEC] p-[32px] flex flex-col justify-between hover:-translate-y-[4px] hover:border-[#D1D5DB] transition-all duration-300 shadow-soft"
                >
                  <div className="w-[48px] h-[48px] rounded-[12px] border border-[#ECECEC] flex items-center justify-center text-[#6B7280]">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#111111] mb-[8px]">{item.name}</h4>
                    <p className="text-[14px] text-[#9CA3AF]">Native integration</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-[120px] px-[20px] md:px-[32px] max-w-[1280px] mx-auto">
          <div className="text-center mb-[80px]">
            <h2 className="text-section mb-[16px] text-[#111111]">Simple Pricing</h2>
            <p className="text-body max-w-2xl mx-auto">
              Start for free, upgrade when you need more power.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-[32px] max-w-[1000px] mx-auto">
            {/* Starter */}
            <div className="p-[40px] rounded-[24px] bg-white border border-[#E5E7EB] flex flex-col shadow-soft">
              <h4 className="text-card mb-[8px]">Starter</h4>
              <p className="text-[#6B7280] mb-[32px] h-[48px]">Perfect for exploring AI-generated tools.</p>
              <div className="mb-[40px]">
                <span className="text-[48px] font-bold tracking-tight text-[#111111]">₹0</span>
                <span className="text-[#6B7280]">/mo</span>
              </div>
              <ul className="space-y-[16px] mb-[40px] flex-grow text-[#4B5563]">
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> 3 Apps</li>
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> Community Support</li>
              </ul>
              <button className="btn-secondary w-full">Start for Free</button>
            </div>

            {/* Growth (Highlighted) */}
            <div className="p-[40px] rounded-[24px] bg-white border-[1.5px] border-[#FF6600] flex flex-col shadow-soft relative">
              <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-[#FF6600] text-white text-[12px] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h4 className="text-card mb-[8px]">Growth</h4>
              <p className="text-[#6B7280] mb-[32px] h-[48px]">For scaling teams building core operations.</p>
              <div className="mb-[40px]">
                <span className="text-[48px] font-bold tracking-tight text-[#111111]">₹3,999</span>
                <span className="text-[#6B7280]">/mo</span>
              </div>
              <ul className="space-y-[16px] mb-[40px] flex-grow text-[#4B5563]">
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> Unlimited Apps</li>
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> All Models</li>
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> Custom Domains</li>
              </ul>
              <button className="btn-primary w-full">Upgrade to Growth</button>
            </div>

            {/* Enterprise */}
            <div className="p-[40px] rounded-[24px] bg-white border border-[#E5E7EB] flex flex-col shadow-soft">
              <h4 className="text-card mb-[8px]">Enterprise</h4>
              <p className="text-[#6B7280] mb-[32px] h-[48px]">Security and controls for large organizations.</p>
              <div className="mb-[40px]">
                <span className="text-[48px] font-bold tracking-tight text-[#111111]">Custom</span>
              </div>
              <ul className="space-y-[16px] mb-[40px] flex-grow text-[#4B5563]">
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> SSO & RBAC</li>
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> Dedicated AI Instance</li>
                <li className="flex items-center gap-[12px]"><span className="material-symbols-outlined text-[18px] text-[#111111]">check</span> VPC Deployment</li>
              </ul>
              <button className="btn-secondary w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-[120px] px-[20px] md:px-[32px] bg-white border-t border-[#E5E7EB]">
          <div className="max-w-[1000px] mx-auto grid md:grid-cols-12 gap-[64px]">
            {/* Left: Category Nav */}
            <div className="md:col-span-4">
              <h2 className="text-[32px] font-semibold mb-[32px] text-[#111111]">FAQ</h2>
              <ul className="space-y-[16px]">
                <li><button className="text-[#111111] font-medium text-[16px]">General</button></li>
                <li><button className="text-[#9CA3AF] hover:text-[#111111] font-medium text-[16px] transition-colors">Pricing & Billing</button></li>
                <li><button className="text-[#9CA3AF] hover:text-[#111111] font-medium text-[16px] transition-colors">Security</button></li>
                <li><button className="text-[#9CA3AF] hover:text-[#111111] font-medium text-[16px] transition-colors">Technical</button></li>
              </ul>
            </div>
            
            {/* Right: Accordion List */}
            <div className="md:col-span-8">
              <div className="border-t border-[#ECECEC]">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer py-[24px] border-b border-[#ECECEC]">
                    <h5 className="text-[18px] font-medium text-[#111111]">Do I need to know how to code?</h5>
                    <span className="material-symbols-outlined text-[#9CA3AF] transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="py-[24px] text-[#6B7280] text-[16px] leading-relaxed border-b border-[#ECECEC]">
                    No. OneAtlas is designed for business operators, but it's powerful enough for engineers. You can describe your needs in plain English, and our AI handles the technical implementation.
                  </p>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer py-[24px] border-b border-[#ECECEC]">
                    <h5 className="text-[18px] font-medium text-[#111111]">Can I export the code?</h5>
                    <span className="material-symbols-outlined text-[#9CA3AF] transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="py-[24px] text-[#6B7280] text-[16px] leading-relaxed border-b border-[#ECECEC]">
                    Yes. Enterprise and Growth plans offer full code export options. The generated code is standard React and Node.js, so your team can maintain it anywhere.
                  </p>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer py-[24px] border-b border-[#ECECEC]">
                    <h5 className="text-[18px] font-medium text-[#111111]">Is my data secure?</h5>
                    <span className="material-symbols-outlined text-[#9CA3AF] transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="py-[24px] text-[#6B7280] text-[16px] leading-relaxed border-b border-[#ECECEC]">
                    Absolutely. We use enterprise-grade encryption for all data at rest and in transit. We are SOC2 Type II compliant and offer VPC deployments for Enterprise customers.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[120px] px-[20px] md:px-[32px] bg-[#F5F5EE]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[48px] font-semibold text-[#111111] mb-[24px] tracking-tight">Ready to build?</h2>
            <p className="text-[20px] text-[#6B7280] mb-[48px]">Join 10,000+ teams building the future of internal tools with OneAtlas.</p>
            <div className="flex flex-col sm:flex-row gap-[16px] justify-center">
              <Link href="/build">
                <button className="btn-primary w-full sm:w-auto h-[56px] px-[32px] text-[16px]">
                  Get Started for Free
                </button>
              </Link>
              <button className="btn-secondary w-full sm:w-auto h-[56px] px-[32px] text-[16px]">
                Book a Demo
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
