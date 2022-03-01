import Dictionary from "../images/dictionary.jpeg"

const ThirdProject = () => {
  return (
    <div className="ThirdProject">
      <div className="row projects">
        <div className="col-lg-6 d-lg-block">
          <img src={Dictionary} alt="Weather project preview" />
        </div>
        <div className="col-lg-6">
          <h2>Dictionary</h2>
          <p className="projects-p">
            Dictionary is a responsive website made in React, where you can
            search up any word. It's gonna show you pictures, part of speech,
            definisions, meanings, phonetics, examples and synonyms of that
            word.
            <br />
            Website was built during the 8 weeks long workshop SheCodes React 👩🏼‍💻
          </p>
          <p className="projects-credit">
            Design & Development - Dominika Kaźmierczak
          </p>
          <a
            href="https://lucid-cori-e1c7fa.netlify.app/"
            className="projects-link"
            target="_blank"
            title="Dictionary project"
            rel="noreferrer">
            See the website
          </a>
        </div>
      </div>
    </div>
  )
}
export default ThirdProject
