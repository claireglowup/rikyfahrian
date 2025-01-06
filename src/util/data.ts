/** @format */

export const getDataProject = (): CardDataInterface[] => [
  {
    titleCard: "Puton E-commerce",
    link: "https://puton-thrift.vercel.app",
    description: "Thrift store (WIP)",
    img: "/puton.PNG",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    titleCard: "Type of Skater",
    link: "https://typeofskater.vercel.app",
    description: "Website for looking skater style",
    img: "/type.PNG",
    stack: ["React", "TypeScript"],
  },
  {
    titleCard: "Rest API cart E-commerce",
    link: "https://hub.docker.com/r/rikyfahrian1/synapsis-backendintern",
    description: "Rest API cart ecommerce with sandbox midtrans",
    img: "/ds.jpg",
    stack: ["Go", "Echo", "PostgreSQL"],
  },
  {
    titleCard: "CatatanMu",
    link: "https://catatanmu-byr.vercel.app",
    description: "Make a simple notes",
    img: "/catatanmu.png",
    stack: ["React", "JavaScript", "Vite"],
  },
];

export interface CardDataInterface {
  titleCard: string;
  link: string;
  description: string;
  img: string;
  stack: string[];
}
