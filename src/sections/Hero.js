import profilePicture from "../images/profile.jpeg"

import "./Hero.scss"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="row">
        <header className="col-md-6 text">
          <h2>Hi, I'm Dominika</h2>
          <h1>Front-End Developer</h1>
          <h3>Based in Halden, Norway</h3>
          <a href="/index.html#about" className="big">
            Learn more about me
          </a>
        </header>
        <div className="col-md-6">
          <img src={profilePicture} alt="Profile" />
        </div>
        <a href="/index.html#about" className="small">
          Learn more about me
        </a>
      </div>
    </div>
  )
}

export default Hero
