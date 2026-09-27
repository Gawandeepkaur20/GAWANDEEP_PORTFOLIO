import { Badge } from "@/components/ui/Badge";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function MarkdownMessage({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-3 overflow-hidden text-sm leading-7 text-muted-foreground">
      {lines.map((line, index) => {
        if (!line.trim()) return null;
        if (line.startsWith("### ")) {
          return (
            <h3 key={`${line}-${index}`} className="font-display text-xl font-semibold text-foreground">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("```")) {
          return (
            <pre key={`${line}-${index}`} className="overflow-x-auto rounded-md bg-background p-4 font-mono text-xs">
              <code>{line.replaceAll("```", "")}</code>
            </pre>
          );
        }
        if (line === "---") {
          return <div key={`${line}-${index}`} className="h-px bg-border" />;
        }
        if (line.startsWith("- ")) {
          return (
            <p key={`${line}-${index}`} className="break-words pl-3 leading-7">
              {renderInline(line)}
            </p>
          );
        }
        return (
          <p key={`${line}-${index}`} className="break-words leading-7 text-pretty">
            {renderInline(line)}
          </p>
        );
      })}
      <Badge className="mt-2">Local knowledge base</Badge>
    </div>
  );
}
