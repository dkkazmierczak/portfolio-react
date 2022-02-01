import FirstProject from "./Projects/FirstProject"
import SecondProject from "./Projects/SecondProject"
import { Container } from "react-bootstrap"

import "./App.css"

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container-projects">
        <Container>
          <h2 className="title-projects" id="projects">
            My projects
          </h2>
          <FirstProject />
          <SecondProject />
        </Container>
      </div>
    </div>
  )
}

export default Projects
