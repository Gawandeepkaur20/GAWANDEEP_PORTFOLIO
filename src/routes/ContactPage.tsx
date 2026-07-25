import { useState } from "react";
import type { FormEvent } from "react";
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";
import { siteConfig } from "@/constants/site";
import { sendContactMessage } from "@/services/contact";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialState: FormState = { name: "", email: "", subject: "", message: "", website: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const { pushToast } = useToast();

  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website) return;
    if (!form.name || !form.email.includes("@") || form.message.length < 20) {
      pushToast({ type: "error", title: "Check the form", description: "Use a valid email and a message of at least 20 characters." });
      return;
    }

    setLoading(true);
    const result = await sendContactMessage({
      name: form.name,
      email: form.email,
      subject: form.subject || "Portfolio inquiry",
      message: form.message,
    });
    setLoading(false);
    pushToast({ type: result.ok ? "success" : "error", title: result.ok ? "Message ready" : "Message not sent", description: result.message });
    if (result.ok) setForm(initialState);
  };

  return (
    <PageTransition>
      <Seo title="Contact" description="Contact Gawandeep Kaur for AI engineering and full stack development opportunities." path="/contact" />
      <section className="min-h-screen pt-32">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card elevated>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact System</p>
            <h1 className="mt-4 font-display text-4xl font-semibold">Start a thoughtful conversation.</h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              The form includes validation, honeypot spam protection, client rate limiting, loading states, and EmailJS integration via environment variables.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a className="flex items-center gap-3 rounded-md p-3 hover:bg-muted" href={siteConfig.social.email}>
                <Mail className="h-4 w-4 text-primary" /> gawandeep75@gmail.com
              </a>
              <a className="flex items-center gap-3 rounded-md p-3 hover:bg-muted" href={siteConfig.social.github}>
                <Github className="h-4 w-4 text-primary" /> GitHub
              </a>
              <a className="flex items-center gap-3 rounded-md p-3 hover:bg-muted" href={siteConfig.social.linkedin}>
                <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
              </a>
              <p className="flex items-center gap-3 rounded-md p-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> India
              </p>
            </div>
          </Card>

          <Card elevated>
            <form className="space-y-4" onSubmit={submit}>
              <input className="hidden" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium">
                  Name
                  <input value={form.name} onChange={(event) => update("name", event.target.value)} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Email
                  <input value={form.email} onChange={(event) => update("email", event.target.value)} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" />
                </label>
              </div>
              <label className="block space-y-2 text-sm font-medium">
                Subject
                <input value={form.subject} onChange={(event) => update("subject", event.target.value)} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block space-y-2 text-sm font-medium">
                Message
                <textarea value={form.message} onChange={(event) => update("message", event.target.value)} rows={8} className="w-full resize-none rounded-md border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <Button type="submit" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
