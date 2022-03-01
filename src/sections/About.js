import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJsSquare,
  faReact,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./About.scss"

const About = () => {
  return (
    <div className="About">
      <div className="about" id="about">
        <ul className="row justify-content-around">
          <li className="col-md-4 skills">
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/dkkazmierczak/"
                target="_blank"
                title="LinkedIn Profile"
                rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="text">
              Junior Front-End Developer{" "}
              <a
                href="https://www.shecodes.io/certificates/bd5bfaa7853192a3624126cd77d00fde"
                className="link"
                target="_blank"
                rel="noreferrer">
                certificated
              </a>
              {""} by SheCodes
            </div>
          </li>
          <li className="col-md-4 skills">
            <div className="icons">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="text">
              Bachelor's degree in Mathematics and cryptology
            </div>
          </li>
        </ul>
        <ul className="row justify-content-around">
          <li className="col-md-4 skills">
            <div className="icons">
              <FontAwesomeIcon icon={faHtml5} className="text-danger" />
              <FontAwesomeIcon icon={faCss3Alt} className="text-primary" />
              <FontAwesomeIcon icon={faJsSquare} className="text-warning" />
              <FontAwesomeIcon icon={faReact} className="text-primary" />
            </div>
            <div className="text">
              Advanced knowledge about HTML, CSS, Java Script and React
            </div>
          </li>
          <li className="col-md-4 skills">
            <div className="icons">
              <FontAwesomeIcon icon={faBootstrap} className="icon-bootstrap" />
              <FontAwesomeIcon icon={faLaptopCode} className="text-info" />
            </div>
            <div className="text">
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
    </div>
  )
}

export default About
