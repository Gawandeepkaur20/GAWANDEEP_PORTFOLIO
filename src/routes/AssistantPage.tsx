import { useEffect, useRef, useState } from "react";
import { Bot, RotateCcw, Send } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MarkdownMessage } from "@/components/ui/MarkdownMessage";
import { askPortfolioAssistant, quickQuestions, type ChatMessage } from "@/services/assistant";
import { cn } from "@/utils/cn";

const storageKey = "gk-assistant-conversation";

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? (JSON.parse(saved) as ChatMessage[]) : [];
  });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || typing) return;
    setInput("");
    setTyping(true);

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString(),
    };
    setMessages((current) => [...current, userMessage]);

    const response = await askPortfolioAssistant(trimmed);
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.content,
          createdAt: new Date().toISOString(),
        },
      ]);
      setTyping(false);
    }, 480);
  };

  return (
    <PageTransition>
      <Seo title="AI Portfolio Assistant" description="Ask a local AI-style assistant about Gawandeep Kaur's portfolio." path="/assistant" />
      <section className="min-h-screen pt-32">
        <div className="container grid min-w-0 gap-6 lg:grid-cols-[0.75fr_minmax(0,1.25fr)]">
          <Card elevated className="h-fit min-w-0">
            <Bot className="h-6 w-6 text-primary" aria-hidden="true" />
            <h1 className="mt-5 font-display text-4xl font-semibold">AI Portfolio Assistant</h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Ask questions about Gawandeep's projects, skills, education, experience, achievements, and certifications. Answers are constrained to the local portfolio knowledge base.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {quickQuestions.map(({ question }) => (
                <Button
                  key={question}
                  size="sm"
                  variant="outline"
                  className="h-auto min-h-9 w-full whitespace-normal px-3 py-2 text-left leading-5"
                  onClick={() => void ask(question)}
                  disabled={typing}
                >
                  {question}
                </Button>
              ))}
            </div>
            <Button className="mt-6" variant="ghost" onClick={() => setMessages([])}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Clear Conversation
            </Button>
          </Card>

          <Card elevated className="flex min-h-[70vh] min-w-0 flex-col overflow-hidden p-0">
            <div className="border-b border-border p-4">
              <p className="font-semibold">Conversation</p>
              <p className="text-sm text-muted-foreground">Local retrieval mode with graceful API fallback support.</p>
            </div>
            <div className="min-w-0 flex-1 space-y-4 overflow-y-auto p-4">
              {messages.length === 0 && (
                <div className="rounded-lg border border-border bg-background/45 p-5 text-sm text-muted-foreground">
                  Try “Which project uses AI?” or “What leadership experience does she have?”
                </div>
              )}
              {messages.map((message) => (
                <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                  <article
                    className={cn(
                      "max-w-[88%] break-words rounded-lg p-4 text-sm leading-7",
                      message.role === "user" ? "bg-primary text-primary-foreground" : "border border-border bg-background/45",
                    )}
                  >
                    {message.role === "assistant" ? <MarkdownMessage content={message.content} /> : <p className="text-sm">{message.content}</p>}
                  </article>
                </div>
              ))}
              {typing && <div className="text-sm text-muted-foreground">Assistant is checking the knowledge base...</div>}
              <div ref={bottomRef} />
            </div>
            <form
              className="flex gap-2 border-t border-border p-4"
              onSubmit={(event) => {
                event.preventDefault();
                void ask(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="h-11 flex-1 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Ask about Gawandeep's portfolio"
              />
              <Button type="submit" disabled={typing}>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
