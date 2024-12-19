import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  titleCart: string;
  link: string;
  description: string;
  img: string;
  stack: string[];
}

export const Card: React.FC<CardProps> = ({
  titleCart,
  link,
  description,
  img,
  stack,
}) => {
  return (
    <div className="card">
      <div className="flex-link">
        <h2 className="title-card">{titleCart}</h2>
        <a href={link} target="blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <p className="description-card">{description}</p>
      <img src={img} alt={titleCart} height={210} />
      <div className="stack">
        {stack.map((s) => (
          <p>{s}</p>
        ))}
      </div>
    </div>
  );
};
