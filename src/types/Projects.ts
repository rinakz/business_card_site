import { ReactNode } from "react";

export type ProjectType = {
  name: string;
  link: string;
  color: string;
  technologies: string[];
  sphere: string;
  task: string;
  icon: ReactNode;
};
