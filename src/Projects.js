import WeatherAppPicture from "./images/weatherapp.png"

import "./App.css"

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container container-projects">
        <h2 className="title-projects" id="projects">
          My projects
        </h2>
        <div className="row projects">
          {/* <!--Picture for small devices--> */}
          <div className="col-lg-6 d-lg-none d-block">
            <img src={WeatherAppPicture} alt="Weather project preview" />
          </div>
          <div className="col-lg-6">
            <h2>Weather app</h2>
            <p className="projects-p">
              Weather-app is a responsive website, showing current weather and
              forecast for many cities in the world. So go ahead and type your
              city!
              <br />
              <span className="d-md-block d-none">
                You can check the weather at your loction by pressing the
                location button.
                <br />
              </span>
              If you are polish, just click the button "PL" to go to the website
              in polish version.
              <br />
              Website was built during 8 week workshop SheCodes Plus 👩🏼‍💻
            </p>
            <p className="projects-credit">
              Design & Development - Dominika Kaźmierczak
            </p>
            <a
              href="https://peaceful-bell-2f5896.netlify.app/"
              className="projects-link"
              target="_blank"
              title="Weather project"
              rel="noreferrer">
              See the website
            </a>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <img src={WeatherAppPicture} alt="Weather project preview" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
