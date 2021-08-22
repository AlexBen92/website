import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProjet {
  name: string;
  image_path: string;
  deployed_url: string;
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
