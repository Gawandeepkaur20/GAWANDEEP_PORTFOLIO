import { useEffect, useMemo, useState } from "react";
import { Github, RefreshCw, Search, Star } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getGitHubDashboard, type GitHubDashboardData } from "@/services/github";

export default function GitHubDashboardPage() {
  const [data, setData] = useState<GitHubDashboardData | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      setData(await getGitHubDashboard());
    } catch (err) {
      setError(err instanceof Error ? err.message : "GitHub data could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const repos = useMemo(() => {
    const normalized = query.toLowerCase();
    return (data?.repositories ?? []).filter((repo) => `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""}`.toLowerCase().includes(normalized));
  }, [data?.repositories, query]);

  return (
    <PageTransition>
      <Seo title="GitHub Dashboard" description="GitHub repository dashboard for Gawandeep Kaur." path="/github" />
      <section className="min-h-screen pt-32">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">GitHub Dashboard</p>
              <h1 className="mt-3 font-display text-4xl font-semibold">Repository intelligence and technology signals.</h1>
            </div>
            <Button onClick={load} disabled={loading} variant="outline">
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Refresh
            </Button>
          </div>

          {loading && <Card className="animate-pulse">Loading GitHub profile and repositories...</Card>}
          {error && <Card className="border-destructive/40">{error}</Card>}
          {!loading && !error && !data?.profile && (
            <Card>
              Add `VITE_GITHUB_USERNAME` to `.env` to enable live GitHub data. The dashboard is ready for profile, repository, language, stars, forks, and activity views.
            </Card>
          )}

          {data?.profile && (
            <div className="space-y-6">
              <Card elevated className="grid gap-6 md:grid-cols-[auto_1fr]">
                <img src={data.profile.avatar_url} alt="" className="h-24 w-24 rounded-lg" loading="lazy" />
                <div>
                  <h2 className="font-display text-3xl font-semibold">{data.profile.name ?? data.profile.login}</h2>
                  <p className="mt-2 text-muted-foreground">{data.profile.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{data.profile.followers} followers</Badge>
                    <Badge>{data.profile.following} following</Badge>
                    <Badge>{data.profile.public_repos} repos</Badge>
                    <Badge>{data.totalStars} stars</Badge>
                    <Badge>{data.totalForks} forks</Badge>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                <Card>
                  <h3 className="font-display text-xl font-semibold">Top Technologies</h3>
                  <div className="mt-4 space-y-3">
                    {data.languageBreakdown.map((item) => (
                      <div key={item.language} className="flex items-center justify-between rounded-md bg-background/45 p-3">
                        <span>{item.language}</span>
                        <Badge>{item.count} repos</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-md border border-border/70 bg-background/45 p-4 text-sm text-muted-foreground">
                    Contribution heatmap placeholder: connect a third-party contribution graph service or GitHub GraphQL token when ready.
                  </div>
                </Card>
                <Card>
                  <label className="relative block">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Search repositories"
                    />
                  </label>
                  <div className="mt-4 grid gap-3">
                    {repos.slice(0, 12).map((repo) => (
                      <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="rounded-md border border-border/70 bg-background/45 p-4 transition hover:bg-muted">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold">{repo.name}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{repo.description ?? "No description provided."}</p>
                          </div>
                          <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {repo.language && <Badge>{repo.language}</Badge>}
                          <Badge><Star className="h-3 w-3" /> {repo.stargazers_count}</Badge>
                          <Badge>{repo.forks_count} forks</Badge>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
