import { Helmet } from "react-helmet-async";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

interface ProjectSeoProps {
  project: Project;
}

export function ProjectSeo({ project }: ProjectSeoProps) {
  const url = `https://carboni-hospitality.netlify.app/projects/${project.slug}`;

  const allKeywords = [
    ...project.keywords,
    ...project.targetRoles,
    ...project.skills,
    ...project.tools,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: "https://carboni-hospitality.netlify.app",
    },
    dateCreated: project.dateCreated,
    keywords: allKeywords.join(", "),
    url,
    inLanguage: "en",
    about: project.topics.map((t) => ({ "@type": "Thing", name: t })),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "targetRoles",
        value: project.targetRoles.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "coreSkills",
        value: project.skills.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "professionalTools",
        value: project.tools.join(", "),
      },
    ],
  };

  return (
    <Helmet>
      <title>{project.seoTitle}</title>
      <meta name="description" content={project.seoDescription} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={project.seoTitle} />
      <meta property="og:description" content={project.seoDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
