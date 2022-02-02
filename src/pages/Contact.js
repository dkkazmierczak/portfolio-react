import { Container } from "react-bootstrap"
import "../App.css"

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container-contact">
        <Container>
          <div className="contact" id="contact">
            Let's work together!
            <div className="contact-email">
              Contact me by email{" "}
              <a href="mailto:dkl.kazmierczak@gmail.com" title="Email Dominika">
                dkl.kazmierczak@gmail.com
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default Contact
