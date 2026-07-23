import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/constants/site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function Seo({ title, description = siteConfig.description, path = "/" }: SeoProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.role}`;
  const canonical = new URL(path, siteConfig.url).toString();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: siteConfig.role,
          url: siteConfig.url,
          description,
          sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
          knowsAbout: ["Artificial Intelligence", "Full Stack Development", "React", "TypeScript", "Cloud", "Automation"],
        })}
      </script>
    </Helmet>
  );
}
