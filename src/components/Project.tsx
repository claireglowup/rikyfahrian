import { CardDataInterface, getDataProject } from "../util/data";
import { Card } from "./Card";

export const ProjectCard = () => {
  const dataProjectCard: CardDataInterface[] = getDataProject();

  return (
    <div className="latest-project">
      <h1 className="header-lp">Latest Project 📂</h1>
      <div className="card-cover">
        {dataProjectCard.map((data, index) => (
          <Card
            titleCart={data.titleCard}
            link={data.link}
            description={data.description}
            img={data.img}
            stack={data.stack}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
