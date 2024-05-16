import { Link } from "react-router-dom";

import icon from "../assets/img/icon.svg";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="icon-text">
        <img
          className="icon"
          src={icon}
          style={{ width: "90px", height: "90px" }}
        />
        <h1 className="tittle-h1">Programmers Diary</h1>
      </div>

      <div className="buttons">
        <div className="button">
          <Link to="/">Home</Link>
        </div>
        <div className="button">
          <Link to="/posts">Posts</Link>
        </div>
      </div>
    </nav>
  );
};
