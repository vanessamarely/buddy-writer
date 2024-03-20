import "./TopBar.css";
import { useNavigate } from "react-router-dom";

import { auth } from "./../../firebase";
import { signOut } from "firebase/auth";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__search">
          <div className="search-container">
            <input className="search" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="top-bar__user">
          <div className="user-container">
            <img src="user.svg" alt="User" />
          </div>
          <button
            className="logout-button"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
