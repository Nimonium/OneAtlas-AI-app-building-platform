"use client";

import { useState } from "react";
import { useGenerationStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Loader2 } from "lucide-react";

const EXAMPLE_PROMPTS = [
  "CRM for sales team",
  "HR onboarding dashboard",
  "Product analytics workspace",
  "Inventory tracker"
];

const MAX_CHARS = 300;

export function GenerateForm() {
  const { prompt, setPrompt, setState, setResult, setError } = useGenerationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim() || prompt.length > MAX_CHARS) return;

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
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value.slice(0, MAX_CHARS))}
            onKeyDown={handleKeyDown}
            placeholder="e.g. Build me a CRM for managing leads and tracking the sales pipeline"
            className="min-h-[120px] text-lg p-4 pb-8 resize-none border-border-dark focus-visible:ring-primary shadow-sm"
          />
          <div className="absolute bottom-3 right-4 text-xs text-text-muted">
            {prompt.length} / {MAX_CHARS}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((ex) => (
            <Badge
              key={ex}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors py-1.5 px-3 text-xs font-medium"
              onClick={() => setPrompt(ex)}
            >
              {ex}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <Button 
            type="submit" 
            size="lg" 
            disabled={!prompt.trim() || isSubmitting}
            className="bg-primary hover:bg-brand-200 text-primary-foreground w-full sm:w-auto h-12 px-8 rounded-full shadow-md transition-all"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <>
                Generate App <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
