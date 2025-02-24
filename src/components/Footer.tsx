/** @format */

import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="footer">
      <div className="icon">
        <a href="https://instagram.com/rikyfahrian" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/claireglowup" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/rikyfahrian" target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:rikyfhrian@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p>© 2025 Mohamad Riki Fahrian</p>
    </div>
  );
}
