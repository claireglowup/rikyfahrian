/** @format */

export const getDataProject = (): CardDataInterface[] => [
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
    description: "Make a simple notes for a while",
    img: "/catatanmu.png",
    stack: ["React", "JavaScript", "Vite"],
  },
  {
    titleCard: "Puton Ecommerce",
    link: "https://puton-thrift.vercel.app",
    description: "Thrift store for my own thrift shop(ongoing development)",
    img: "/puton.PNG",
    stack: ["React", "TypeScript", "Vite"],
  },
];

export interface CardDataInterface {
  titleCard: string;
  link: string;
  description: string;
  img: string;
  stack: string[];
}
