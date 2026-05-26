"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGenerationStore } from "@/lib/store";
import { GenerationLoader } from "@/components/GenerationLoader";
import { SchemaPreview } from "@/components/SchemaPreview";
import { AlertCircle, RefreshCcw, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BuildPage() {
  const pathname = usePathname();
  const { prompt, setPrompt, state, setState, setResult, setError, result, error, reset } = useGenerationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href || (href !== "/build" && pathname.startsWith(href));
    return isActive
      ? "font-body-md text-body-md font-medium text-primary border-b-2 border-primary pb-1"
      : "font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors";
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim() || prompt.length > 300) return;

    setIsSubmitting(true);
    setState("LOADING");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
      } else {
        setResult(json.data);
      }
    } catch (err) {
      setError({
        code: "SERVER_ERROR",
        error: "Failed to connect to the generation server."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/20">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-border-subtle docked full-width top-0 z-50 fixed w-full">
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
      
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid lg:grid-cols-12 gap-gutter items-center min-h-[calc(100vh-64px)]">
        
        {state === "IDLE" && (
          <>
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6 font-medium text-body-sm">
                <span className="material-symbols-outlined scale-75">auto_awesome</span>
                v2.0 Architecture is here
              </div>
              <h1 className="font-display-md text-display-md md:font-display-lg md:text-display-lg mb-4 tracking-tight leading-tight">
                What will you <span className="shimmer-text">build today?</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
                Describe your application, workflow, or data model. OneAtlas AI transforms your natural language into production-ready software in seconds.
              </p>
              <div className="w-full max-w-3xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-3xl blur opacity-25 group-focus-within:opacity-100 transition duration-500"></div>
                <div className="relative">
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value.slice(0, 300))}
                    onKeyDown={handleKeyDown}
                    className="w-full h-48 bg-white border border-border-subtle rounded-3xl p-6 text-body-lg font-body-lg focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all shadow-xl shadow-primary/5 resize-none placeholder:text-outline/50" 
                    placeholder="Build a CRM for a real estate agency with automated follow-ups and a client portal..."
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <span className="text-body-sm text-on-surface-variant font-mono-sm">Press Enter to generate</span>
                    <button 
                      onClick={() => handleSubmit()}
                      disabled={isSubmitting || !prompt.trim()}
                      className="cta-gradient text-on-primary font-headline-sm px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? "Generating..." : "Generate App"}
                      {!isSubmitting && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="text-body-sm text-on-surface-variant font-medium py-2">Try these:</span>
                <button onClick={() => setPrompt("HR Management Dashboard")} className="bg-surface-alt hover:bg-surface-container-low border border-border-subtle text-on-surface-variant px-4 py-2 rounded-full text-body-sm transition-all hover:-translate-y-1">
                  HR Management Dashboard
                </button>
                <button onClick={() => setPrompt("Inventory Tracker with AI Insights")} className="bg-surface-alt hover:bg-surface-container-low border border-border-subtle text-on-surface-variant px-4 py-2 rounded-full text-body-sm transition-all hover:-translate-y-1">
                  Inventory Tracker with AI Insights
                </button>
                <button onClick={() => setPrompt("Personal Finance Pipeline")} className="bg-surface-alt hover:bg-surface-container-low border border-border-subtle text-on-surface-variant px-4 py-2 rounded-full text-body-sm transition-all hover:-translate-y-1">
                  Personal Finance Pipeline
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
              <div className="absolute top-0 right-0 w-80 glass-panel p-4 rounded-2xl shadow-2xl floating-preview" style={{ animationDelay: "0s" }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Pipeline</h3>
                  <span className="material-symbols-outlined text-outline">more_horiz</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl border border-border-subtle shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-10 h-1 bg-accent-teal rounded-full"></div>
                      <span className="text-xs text-on-surface-variant font-medium">Active</span>
                    </div>
                    <div className="font-medium text-sm">Acme Corp Rebrand</div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-primary-fixed border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-primary border-2 border-white"></div>
                      </div>
                      <span className="text-xs text-on-surface-variant font-mono-sm">$33.8k</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-border-subtle shadow-sm opacity-50">
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-10 h-1 bg-accent-purple rounded-full"></div>
                    </div>
                    <div className="font-medium text-sm">Beta Industries CRM</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {state === "LOADING" && (
          <div className="lg:col-span-12 w-full flex justify-center animate-in fade-in zoom-in-95 duration-500 py-12">
            <GenerationLoader />
          </div>
        )}

        {state === "RESULT" && (
          <div className="lg:col-span-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
            {error ? (
              <div className="w-full max-w-md mx-auto p-8 bg-card border border-destructive/20 rounded-2xl shadow-sm text-center space-y-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-heading">Generation Failed</h3>
                  <p className="text-text-muted">{error.error}</p>
                  {error.suggestion && (
                    <p className="text-sm font-medium text-text-body mt-2">{error.suggestion}</p>
                  )}
                </div>
                <Button onClick={reset} variant="outline" className="w-full h-12">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Try a Different Prompt
                </Button>
              </div>
            ) : result ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
                <div className="lg:col-span-4 space-y-6">
                  <div className="p-6 bg-card border border-border-subtle rounded-2xl shadow-sm space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-on-surface">{result.generatedName}</h2>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" className="bg-surface-variant text-on-surface">
                          Match confidence: {Math.round(result.confidence * 100)}%
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border-subtle">
                      <p className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Template Details</p>
                      <div className="flex items-center space-x-3">
                        <LayoutTemplate className="w-5 h-5 text-primary" />
                        <span className="font-medium text-on-surface">{result.templateSlug}</span>
                      </div>
                    </div>

                    <div className="pt-6 space-y-3">
                      <Button className="w-full h-12 bg-primary hover:bg-brand-200 text-white shadow-md rounded-xl">
                        Open Builder &rarr;
                      </Button>
                      <Button variant="outline" onClick={reset} className="w-full h-12 text-on-surface rounded-xl">
                        Try a Different Prompt
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <SchemaPreview schema={result.schema} templateName={result.templateSlug} />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </main>
    </div>
  );
}
