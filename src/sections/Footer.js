import { Container } from "react-bootstrap"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <footer>
          <div className="contact-links">
            <a href="mailto:dkl.kazmierczak@gmail.com">
              <i className="fas fa-envelope" title="Email Dominika"></i>
            </a>
            <a
              href="https://github.com/dkkazmierczak"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-github-square" title="GitHub Profile"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dkkazmierczak/"
              target="_blank"
              title="LinkedIn Profile"
              rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
