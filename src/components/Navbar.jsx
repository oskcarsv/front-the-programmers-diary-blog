import { Link } from "react-router-dom";

import icon from "../assets/img/logo.svg";
import "../styles/navbar.css";
import "../styles/variables.css";

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
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div className="button">
          <Link to="/posts" className="link">
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};
