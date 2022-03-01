import FirstProject from "../Projects/FirstProject"
import SecondProject from "../Projects/SecondProject"
import ThirdProject from "../Projects/ThirdProject"
import { Container } from "react-bootstrap"

import "./Projects.scss"

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container-projects">
        <Container>
          <h2 className="title-projects" id="projects">
            My projects
          </h2>
          <ThirdProject />

          <SecondProject />
          <FirstProject />
        </Container>
      </div>
    </div>
  )
}

export default Projects
