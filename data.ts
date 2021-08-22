import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IProjet, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Intégration avec des Framwoks tel que Vue Js et React Js",
  },
  {
    Icon: FaServer,
    title: "Responsive Design",
    about:
      "Création de multiples interfaces : Ordinateur, Tablette, Smartphone",
  },
  {
    Icon: AiOutlineApi,
    title: "UI/UX designer",
    about:
      "Charte graphique unique des sites et applications",
  },
  // {
  //   Icon: MdDeveloperMode,
  //   title: "Competitive Coder",
  //   about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  // },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  // {
  //   Icon: BsCircleFill,
  //   name: "Python",
  //   level: "45",
  // },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  // {
  //   Icon: BsCircleFill,
  //   name: "Django",
  //   level: "80",
  // },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  // {
  //   Icon: BsCircleFill,
  //   name: "Figma",
  //   level: "85",
  // },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  // {
  //   Icon: BsCircleFill,
  //   name: "Framer",
  //   level: "45",
  // },
];

export const projets: IProjet[] = [

  { 
    name: "Site vitrine Coach",
    image_path: "/images/summer.jpg",
    deployed_url: "https://stoic-ramanujan-4d8b1c.netlify.app/",
  },
  { 
    name: "Calculateur FFMI",
    image_path: "/images/portfolio-img1.jpg",
    deployed_url: "/assets/Vue js/index.html",
  },
  {
    name: "Jeu de boxe",
    image_path: "/images/portfolio-img2.jpg",
    deployed_url: "/assets/Game/index.html",
  },

  {
    name: "Site e-commerce",
    image_path: "/images/ecommerce-2140604_960_720.webp",
    deployed_url: "https://eloquent-panini-e1743e.netlify.app/",
  },

  {
    name: "Calculateur de site",
    image_path: "/images/portfolio-img3.jpg",
    deployed_url: "/assets/Calculateur de site/dist/index.html",
  },
];
