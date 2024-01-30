import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>NZ Emporium</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nzemporium-navbar"
          aria-controls="nzemporium-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nzemporium-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>

            <li>
              <NavLink to="/products">CATÁLOGO</NavLink>
            </li>

            <li>
              <NavLink to="/admin">ADMIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
