import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const DropdownNavLink = () => {
  // Estado para controlar si el dropdown está abierto o cerrado
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para cambiar el estado del dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Abre o cierra el dropdown
  };

  // Función para cerrar el dropdown cuando se haga clic en una opción
  const closeDropdown = () => {
    setIsDropdownOpen(false); // Cierra el dropdown
  };

  return (
    <li className="nav-item dropdown">
      <NavLink
        className={({ isActive }) =>
          isActive || isDropdownOpen ? "ActiveOption" : "Option"
        }
        to="/category/juegos"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={toggleDropdown} // Cambia el estado del dropdown al hacer clic
      >
        Juegos
      </NavLink>

      <ul
        className={`dropdown-menu dropdown-menu-dark ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="navbarDropdown"
      >
        <li>
          <Link
            className="dropdown-item"
            to="/category/juegos"
            onClick={closeDropdown} // Cierra el dropdown al hacer clic en "Sega"
          >
            Sega
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="/category/juegos"
            onClick={closeDropdown} // Cierra el dropdown al hacer clic en "Nes"
          >
            Nes
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="/category/juegos"
            onClick={closeDropdown} // Cierra el dropdown al hacer clic en "Atari"
          >
            Atari
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default DropdownNavLink;
