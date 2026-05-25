import { AppSchema, TemplateDefinition } from "@/types/app";

export function instantiateSchema(
  template: TemplateDefinition,
  appName: string
): AppSchema {
  const schema = JSON.parse(JSON.stringify(template.schemaDefaults)) as AppSchema;
  
  schema.version = 1;
  
  schema.components = schema.components.map(comp => {
    return {
      ...comp,
      id: crypto.randomUUID(),
      name: `${appName} ${comp.name}`,
      fields: comp.fields.map(field => ({
        ...field,
        id: crypto.randomUUID()
      }))
    };
  });
  
  return schema;
}
