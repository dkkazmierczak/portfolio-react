import "./App.css"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <footer>
          <div className="contact-links">
            <a href="mailto:dkl.kazmierczak@gmail.com">
              <i className="fas fa-envelope" title="Email Dominika"></i>
            </a>
            <a
              href="https://github.com/dkkazmierczak"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-github-square" title="GitHub Profile"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dkkazmierczak/"
              target="_blank"
              title="LinkedIn Profile"
              rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
