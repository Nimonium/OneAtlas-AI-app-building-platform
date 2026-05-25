export type TemplateComplexity = "Simple" | "Moderate" | "Advanced";

export type TemplateCategory =
  | "CRM & Sales"
  | "HR & People"
  | "Admin & Operations"
  | "Analytics"
  | "Inventory";

export interface TemplateDefinition {
  id: string;
  slug: string;
  name: string;
  category: TemplateCategory;
  complexity: TemplateComplexity;
  description: string;
  tags: string[];
  schemaDefaults: AppSchema;
}

export interface AppSchema {
  components: ComponentDefinition[];
  dataModel: DataModel;
  version: number;
}

export interface ComponentDefinition {
  id: string;
  type: "table" | "form" | "chart" | "kanban" | "calendar" | "stats";
  name: string;
  fields: FieldDefinition[];
  props?: Record<string, unknown>;
}

export interface FieldDefinition {
  id: string;
  name: string;
  type: "text" | "number" | "date" | "boolean" | "select" | "email" | "url";
  required?: boolean;
  options?: string[]; // for select type
}

export interface DataModel {
  tables: TableDefinition[];
}

export interface TableDefinition {
  name: string;
  fields: FieldDefinition[];
}

export interface GenerateRequest {
  prompt: string;
}

export interface GenerateResponse {
  appId: string;
  appName: string;
  schema: AppSchema;
  templateUsed: string;
  templateSlug: string;
  confidence: number;
  generatedName: string;
}

export interface GenerateError {
  error: string;
  code: "NO_MATCH" | "INVALID_PROMPT" | "SERVER_ERROR";
  suggestion?: string;
}
