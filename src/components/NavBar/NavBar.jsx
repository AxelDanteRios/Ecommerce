import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";


export default function NavBar({title}) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid w-auto">
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

                  <li className="nav-item">
                      <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                  </li>
              </ul>
          </div>
          <CardWidget cartCount={2} />
      </nav>
  );
}