import { NavLink, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="toggle" className="menu-hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </div>
      <Link className="navbar-logo" to="/">
        <img src="buddy-writer.svg" alt="Buddy Writer" />
      </Link>
      <nav className="navbar">
        <ul className="navbar-options">
          <NavLink className="navbar-options__option" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-options__option" to="/about">
            About
          </NavLink>
          <NavLink className="navbar-options__option navbar-options__option--login" to="/login">
            Login
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
