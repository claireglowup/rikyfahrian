import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="container-profile">
        <div className="container-header">
          <img
            className="profile-pict"
            src="https://avatars.githubusercontent.com/u/167708452?s=400&u=2f2540e6d327f1e9fb3316e9aa4310b7c152ae05&v=4"
            alt="profile"
          />
          <div className="title">
            <h1 className="name">Mohamad Riki Fahrian</h1>
            <p className="webdev">Web Developer</p>
            <h1 className="description">
              Stay curious. Backend or Frontend? <br />I think i love both!
            </h1>
            <img src="/arrow.png" alt="ya" className="rounded" />
            <a href="mailto:rikyfhrian@gmail.com" className="interest">
              Interested in working together? Email me!
            </a>
          </div>
        </div>
      </div>
      <div className="latest-project">
        <h1 className="header-lp">Latest Project 📂</h1>
        <div className="card-cover">
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
        </div>
      </div>
    </>
  );
}

export default App;
