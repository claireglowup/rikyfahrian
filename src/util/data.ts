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
];

export interface CardDataInterface {
  titleCard: string;
  link: string;
  description: string;
  img: string;
  stack: string[];
}
