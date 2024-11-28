import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar({title}) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/">
        <img src="../../src/assets/retroreplay.jpeg" alt="Logo" className="logo" />
      </Link>
          <div className="container-fluid w-50 h-100">
              <Link className="navbar-brand" to="/">
                  {title}
              </Link>
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/category/consolas">Consolas</Link>
                  </li>

                  <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Juegos
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/category/juegos">Sega</Link></li>
                          <li><Link className="dropdown-item" to="/category/juegos">Nes</Link></li>
                          <li><Link className="dropdown-item" to="/category/juegos">Atari</Link></li>
                      </ul>
                  </li>

                  {/* <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
                <a className="nav-link" href="/contacto">Contacto</a>
              </li> */}
                  <li className="nav-item">
                      <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                  </li>
              </ul>
          </div>
          <form className="d-flex" role="search">
            <CardWidget cartCount={2} />
          </form>
          
      </nav>
  );
}