import { Container } from "react-bootstrap"
import "./App.css"

const About = () => {
  return (
    <div className="About">
      <Container>
        <div className="about" id="about">
          <ul className="row justify-content-around">
            <li className="col-md-4 about-skills">
              <div className="about-icons">
                <a
                  href="https://www.linkedin.com/in/dkkazmierczak/"
                  target="_blank"
                  title="LinkedIn Profile"
                  rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="skills-paragraph">
                Junior Front-End Developer{" "}
                <a
                  href="https://www.shecodes.io/certificates/bd5bfaa7853192a3624126cd77d00fde"
                  className="skills-link"
                  target="_blank"
                  rel="noreferrer">
                  certificated
                </a>
                {""} by SheCodes
              </div>
            </li>
            <li className="col-md-4 about-skills">
              <div className="about-icons">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="skills-paragraph">
                Bachelor's degree in Mathematics and cryptology
              </div>
            </li>
          </ul>
          <ul className="row justify-content-around">
            <li className="col-md-4 about-skills">
              <div className="about-icons">
                <i className="fab fa-html5 text-danger"></i>
                <i className="fab fa-css3-alt text-primary"></i>
                <i className="fab fa-js-square text-warning"></i>
              </div>
              <div className="skills-paragraph">
                Advanced knowledge about HTML, CSS and Java Script
              </div>
            </li>
            <li className="col-md-4 about-skills">
              <div className="about-icons">
                <i className="fab fa-bootstrap icon-bootstrap"></i>
                <i className="fas fa-laptop-code text-info"></i>
              </div>
              <div className="skills-paragraph">
                I make responsive websites using Bootstrap or Media Query
              </div>
            </li>
          </ul>

          {/* In the free time I like to horse ride. I am an equestrian.
        <hr />
        I love as well to sign and in the free time I learn as well how to play a guitar.
        <hr />
        I am a vegetarian, I love food and I strive to live the healthiest life possible in 80/20 rule. Check out my
        recipies here
        <hr />
        I like to workout, do sports to stay healthy and in shape! */}
        </div>
      </Container>
    </div>
  )
}

export default About
