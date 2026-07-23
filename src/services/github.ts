export type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

export type GitHubProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
};

export type GitHubDashboardData = {
  profile: GitHubProfile | null;
  repositories: GitHubRepository[];
  languageBreakdown: Array<{ language: string; count: number }>;
  totalStars: number;
  totalForks: number;
  fromCache: boolean;
};

const cacheKey = "gk-github-dashboard";
const cacheMs = 1000 * 60 * 20;

function getCachedData(): GitHubDashboardData | null {
  const raw = window.localStorage.getItem(cacheKey);
  if (!raw) return null;
  const parsed = JSON.parse(raw) as { createdAt: number; data: GitHubDashboardData };
  if (Date.now() - parsed.createdAt > cacheMs) return null;
  return { ...parsed.data, fromCache: true };
}

function setCachedData(data: GitHubDashboardData) {
  window.localStorage.setItem(cacheKey, JSON.stringify({ createdAt: Date.now(), data }));
}

export async function getGitHubDashboard(username = import.meta.env.VITE_GITHUB_USERNAME ?? ""): Promise<GitHubDashboardData> {
  const cached = getCachedData();
  if (cached) return cached;

  if (!username) {
    return { profile: null, repositories: [], languageBreakdown: [], totalStars: 0, totalForks: 0, fromCache: false };
  }

  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`),
  ]);

  if (!profileResponse.ok || !reposResponse.ok) {
    throw new Error("GitHub API request failed.");
  }

  const profile = (await profileResponse.json()) as GitHubProfile;
  const repositories = (await reposResponse.json()) as GitHubRepository[];
  const languageMap = repositories.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});

  const data: GitHubDashboardData = {
    profile,
    repositories,
    languageBreakdown: Object.entries(languageMap)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count),
    totalStars: repositories.reduce((total, repo) => total + repo.stargazers_count, 0),
    totalForks: repositories.reduce((total, repo) => total + repo.forks_count, 0),
    fromCache: false,
  };
  setCachedData(data);
  return data;
}
