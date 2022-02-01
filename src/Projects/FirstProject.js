import ReactWeatherPicture from "../images/react-weather-app.png"
import "../App.css"
import React from "react"

const FirstProject = () => {
  return (
    <div className="FirstProject">
      <div className="row projects">
        <div className="col-lg-6 d-lg-none d-block">
          <img src={ReactWeatherPicture} alt="Weather project preview" />
        </div>
        <div className="col-lg-6">
          <h2>React Weather App</h2>
          <p className="projects-p">
            React Weather App is a responsive website, showing current weather
            and forecast for many cities in the world. Website was built in
            React.
            <br />
            Website was built during 8 week workshop SheCodes React 👩🏼‍💻
          </p>
          <p className="projects-credit">
            Design & Development - Dominika Kaźmierczak
          </p>
          <a
            href="https://lucid-wescoff-1faf55.netlify.app/"
            className="projects-link"
            target="_blank"
            title="Weather project"
            rel="noreferrer">
            See the website
          </a>
        </div>
        <div className="col-lg-6 d-lg-block d-none">
          <img src={ReactWeatherPicture} alt="Weather project preview" />
        </div>
      </div>
    </div>
  )
}
export default FirstProject
