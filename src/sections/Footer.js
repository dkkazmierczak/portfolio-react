import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="contact-links">
          <a href="mailto:dkl.kazmierczak@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} title="Email Link" />
          </a>
          <a
            href="https://github.com/dkkazmierczak"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} title="GitHub Profile" />
          </a>
          <a
            href="https://www.linkedin.com/in/dkkazmierczak/"
            target="_blank"
            title="LinkedIn Profile"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} title="LinkedIn Profile" />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
