import { Container } from "react-bootstrap"
import "../App.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Container>
          <a
            className="navbar-brand nav-home"
            href="/index.html"
            title="Homepage">
            Dominika Kaźmierczak
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/index.html#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/index.html#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/index.html#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar
