"use client";

import { useGenerationStore } from "@/lib/store";
import { GenerateForm } from "@/components/GenerateForm";
import { GenerationLoader } from "@/components/GenerationLoader";
import { SchemaPreview } from "@/components/SchemaPreview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, RefreshCcw, LayoutTemplate } from "lucide-react";

export default function Home() {
  const { state, result, error, reset } = useGenerationStore();

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      {state === "IDLE" && (
        <div className="w-full max-w-3xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-heading">
              What will you <span className="text-brand-gradient">build today?</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Describe your app in plain English. OneAtlas generates a working schema in seconds.
            </p>
          </div>
          
          <div className="pt-8">
            <GenerateForm />
          </div>
        </div>
      )}

      {state === "LOADING" && (
        <div className="w-full animate-in fade-in zoom-in-95 duration-500">
          <GenerationLoader />
        </div>
      )}

      {state === "RESULT" && (
        <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          {error ? (
            <div className="w-full max-w-md mx-auto p-8 bg-card border border-destructive/20 rounded-2xl shadow-sm text-center space-y-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-heading">No matching template found</h3>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl mx-auto">
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-card border border-border-light rounded-2xl shadow-sm space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-text-heading">{result.generatedName}</h2>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="bg-bg-200">
                        Match confidence: {Math.round(result.confidence * 100)}%
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border-light">
                    <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Template Details</p>
                    <div className="flex items-center space-x-3">
                      <LayoutTemplate className="w-5 h-5 text-primary" />
                      <span className="font-medium text-text-body">{result.templateSlug}</span>
                    </div>
                  </div>

                  <div className="pt-6 space-y-3">
                    <Button className="w-full h-12 bg-primary hover:bg-brand-200 text-white shadow-md">
                      Open Builder &rarr;
                    </Button>
                    <Button variant="outline" onClick={reset} className="w-full h-12 text-text-body">
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
    </div>
  );
}
