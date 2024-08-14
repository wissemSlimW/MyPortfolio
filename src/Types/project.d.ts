interface Project {
  title: string;
  description: string[];
  technologies: SkillName[];
  contributions: string[];
  id: ProjectNames;
  mainImage: string;
  mainSmall: string;
  githubLink?: string;
  liveDemoLink?: string;
  logo: string;
}

type ProjectNames =
  | "apia"
  | "fooddelivery"
  | "jupiter"
  | "omegup"
  | "school"
  | "naqdiApp"
  | "taskManager"
  | "bevioo"
  | "dsf";
