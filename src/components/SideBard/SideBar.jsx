import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-box">
        <div className="image-container">
          <img src="buddy-writer.svg" alt="Buddy Writer" />
        </div>
        <ul className="list-options">
          <li>
            <NavLink to="/home" className="list-options-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="list-options-item"  to="/documentation">
              Generate Documentation
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
