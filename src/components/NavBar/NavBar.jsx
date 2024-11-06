import CardWidget from "../CardWidget/CardWidget"


export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid w-auto">
             <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Consolas</a>
                  </li>

            
                  <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                      <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Juegos</a>
                          <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Sega</a></li>
                            <li><a className="dropdown-item" href="#">Nes</a></li>
                            <li><a className="dropdown-item" href="#">Atari</a></li> 
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Accesorios</a>
                  </li>
            </ul>
        </div>
            <CardWidget/>
        </nav>
    )
}