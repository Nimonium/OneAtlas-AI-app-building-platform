import { NextRequest, NextResponse } from "next/server";
import { matchTemplate } from "@/lib/templateMatcher";
import { instantiateSchema } from "@/lib/schemaInstantiator";
import { prisma } from "@/lib/prisma";
import { GenerateResponse, GenerateError } from "@/types/app";

export async function POST(req: NextRequest) {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      const error: GenerateError = {
        code: "INVALID_PROMPT",
        error: "Prompt must be a non-empty string.",
      };
      return NextResponse.json({ error, meta: { timestamp, requestId } }, { status: 400 });
    }

    const match = matchTemplate(prompt);

    if (!match) {
      const error: GenerateError = {
        code: "NO_MATCH",
        error: "No matching template found for your prompt.",
        suggestion: "Try including keywords like 'CRM', 'HR', 'Analytics', 'Admin', or 'Inventory'.",
      };
      return NextResponse.json({ error, meta: { timestamp, requestId } }, { status: 422 });
    }

    // Generate appName from the prompt (take first 4 meaningful words, title case)
    const words = prompt
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 2)
      .slice(0, 4)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      
    const generatedName = words.length > 0 ? words.join(" ") : match.template.name;
    const appName = generatedName;
    const appSlug = `${appName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${crypto.randomUUID().slice(0, 6)}`;

    const schema = instantiateSchema(match.template, appName);

    // DB Operations
    const templateRecord = await prisma.template.upsert({
      where: { slug: match.template.slug },
      update: {},
      create: {
        slug: match.template.slug,
        name: match.template.name,
        category: match.template.category,
        complexity: match.template.complexity,
        description: match.template.description,
        tags: match.template.tags,
        schemaDefaults: match.template.schemaDefaults as any,
      }
    });

    const app = await prisma.app.create({
      data: {
        name: appName,
        slug: appSlug,
        templateId: templateRecord.id,
      },
    });

    await prisma.runtimeSchema.create({
      data: {
        appId: app.id,
        version: 1,
        schema: schema as any,
        isCurrent: true,
      },
    });

    const data: GenerateResponse = {
      appId: app.id,
      appName: app.name,
      schema,
      templateUsed: match.template.id,
      templateSlug: match.template.slug,
      confidence: match.confidence,
      generatedName: app.name,
    };

    return NextResponse.json({ data, meta: { timestamp, requestId } });
  } catch (err: any) {
    console.error("Generate API Error:", err);
    const error: GenerateError = {
      code: "SERVER_ERROR",
      error: "An unexpected error occurred while generating the app.",
    };
    return NextResponse.json({ error, meta: { timestamp, requestId } }, { status: 500 });
  }
}
