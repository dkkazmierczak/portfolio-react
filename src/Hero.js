import profilePicture from "./images/profile.jpeg"

import "./App.css"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hero">
          <div className="row">
            <div className="col-md-6 p-0">
              <h2>Hi, I'm Dominika</h2>
              <h1>Front-End Developer</h1>
              <h3>Based in Halden, Norway</h3>
              <a href="/index.html#about" className="big">
                Learn more about me
              </a>
            </div>
            <div className="col-md-6 p-0">
              <img src={profilePicture} alt="Profile" />
            </div>
            <a href="/index.html#about" className="small">
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
