import { TemplateDefinition } from "@/types/app";
import { templates } from "@/data/templates";

export interface MatchResult {
  template: TemplateDefinition;
  confidence: number;
  matchedKeywords: string[];
}

export function matchTemplate(prompt: string): MatchResult | null {
  const lowercasePrompt = prompt.toLowerCase();
  
  let bestMatch: MatchResult | null = null;
  
  for (const template of templates) {
    let matchedKeywords: string[] = [];
    let matchCount = 0;
    
    for (const tag of template.tags) {
      if (lowercasePrompt.includes(tag.toLowerCase())) {
        matchedKeywords.push(tag);
        matchCount++;
      }
    }
    
    let confidence = matchCount / template.tags.length;
    
    if (lowercasePrompt.includes(template.name.toLowerCase())) {
      confidence += 0.1;
    }
    
    if (confidence >= 0.05) {
      if (!bestMatch || confidence > bestMatch.confidence) {
        bestMatch = {
          template,
          confidence,
          matchedKeywords
        };
      }
    }
  }
  
  return bestMatch;
}
