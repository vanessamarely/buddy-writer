import "./Header.css";

const Header = () => {
  return (
    <header>
      <a className="navbar-logo" href="#home">
        <img src="buddy-writer.svg" alt="Buddy Writer" />
      </a>
      <nav className="navbar">
        <ul className="navbar-options">
          <li className="navbar-options__option">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-options__option">
            <a href="#about">About</a>
          </li>
          <li className="navbar-options__option">
            <a href="#contact">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
