import CardWidget from "../CardWidget/CardWidget";
import { Link, NavLink} from "react-router-dom";
import './NavBar.css'
import DropdownNavLink from "./Dropdown";

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

                  <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/"
                >
                    Home
              </NavLink>

                  </li>
                  <li className="nav-item">

                  <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/consolas"
                >
                    Consolas
              </NavLink>

                  </li>
                <DropdownNavLink/>

                  <li className="nav-item">

                  <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/accesorios"
                >
                    Accesorios
              </NavLink>


                  </li>
              </ul>
          </div>
          <form className="d-flex" role="search">
            <CardWidget cartCount={2} />
          </form>
          
      </nav>
  );
}