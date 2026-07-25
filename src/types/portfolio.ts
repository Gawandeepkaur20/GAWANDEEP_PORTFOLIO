

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "AI"
  | "Cloud"
  | "Databases"
  | "Languages"
  | "Tools"
  | "Soft Skills"
  | "Mobile Development"
;

export type Skill = {
  name: string;
  category: SkillCategory;
  level: "Exploring" | "Working" | "Confident" | "Advanced" | "Intermediate" ;
  icon: string;
};

export type ProjectCategory = "AI" | "MERN" | "Flutter" | "Python" | "Web" | "Mobile" | "Full Stack" |"Computer Vision" ;
export interface ProjectImage {
  src: string;
  title: string;
}
export type Project = {
  title: string;
  slug: string;
  image:ProjectImage[];
  categories: ProjectCategory[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  lessons: string[];
  futureScope: string[];
  metrics: string[];
  timeline: string;
  githubUrl: string;
  demoUrl: string;
};

export type Experience = {
  role: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
};

export type Certificate = {
  title: string;
  organization: string;
  issueDate: string;
  summary: string;
  image:string;
};
