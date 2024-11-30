import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export function Card() {
  return (
    <div className="card">
      <div className="flex-link">
        <h2 className="title-card">Type of Skater</h2>
        <a href="https://typeofskater.vercel.app" target="blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <p className="description-card">Website for looking skater style</p>
      <img src="/type.PNG" alt="skater web" />
      <div className="stack">
        <p>React</p>
        <p>TypeScript</p>
      </div>
    </div>
  );
}
