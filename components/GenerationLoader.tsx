"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

export function GenerationLoader() {
  const steps = [
    { label: "Matching your idea to a template...", duration: 800 },
    { label: "Building your schema...", duration: 1200 },
    { label: "Almost ready...", duration: 600 }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSteps = () => {
      if (currentStep < steps.length) {
        timeoutId = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, steps[currentStep].duration);
      }
    };

    runSteps();

    return () => clearTimeout(timeoutId);
  }, [currentStep, steps]);

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-card border border-border-light rounded-2xl shadow-sm">
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isFuture = index > currentStep;

          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                {isCompleted && (
                  <CheckCircle2 className="w-6 h-6 text-accent-green" />
                )}
                {isCurrent && (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                )}
                {isFuture && (
                  <Circle className="w-5 h-5 text-border-dark" />
                )}
              </div>
              <span
                className={`text-sm font-medium transition-colors ${
                  isCompleted
                    ? "text-text-body"
                    : isCurrent
                    ? "text-text-heading font-semibold"
                    : "text-text-muted"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
