import { AppSchema } from "@/types/app";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SchemaPreviewProps {
  schema: AppSchema;
  templateName: string;
}

export function SchemaPreview({ schema, templateName }: SchemaPreviewProps) {
  return (
    <Card className="w-full h-full max-h-[800px] overflow-y-auto border-border-light shadow-sm">
      <CardHeader className="border-b border-border-light sticky top-0 bg-card z-10 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-text-heading">
            Schema Preview
          </CardTitle>
          <Badge variant="outline" className="text-xs bg-bg-100 text-text-muted">
            v{schema.version}
          </Badge>
        </div>
        <p className="text-sm text-text-muted">Generated from {templateName}</p>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-text-muted">Components</h3>
          {schema.components.map((comp) => (
            <div key={comp.id} className="p-4 rounded-xl bg-bg-100 border border-border-light space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-text-heading">{comp.name}</h4>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none capitalize shadow-none">
                  {comp.type}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {comp.fields.map((field) => (
                  <div
                    key={field.id}
                    className="flex items-center space-x-1.5 px-2 py-1 rounded-md bg-white border border-border-light text-xs"
                  >
                    <span className="font-medium text-text-body">{field.name}</span>
                    <span className="text-text-muted">({field.type})</span>
                    {field.required && (
                      <span className="text-accent-pink font-bold">*</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-text-muted border-t border-border-light pt-6">Data Model</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {schema.dataModel.tables.map((table, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-border-light bg-card flex justify-between items-center">
                <span className="font-medium text-text-body">{table.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {table.fields.length} fields
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
