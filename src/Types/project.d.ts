interface Project {
  title: string;
  description: string[];
  technologies: SkillName[];
  contributions: string[];
  id: ProjectNames;
  mainImage: string;
  githubLink?: string;
  liveDemoLink?: string;
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
