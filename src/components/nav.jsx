import icon from "../assets/img/icon.svg";
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="icon-text">
        <div className="icon">
          <img
            src={icon}
            alt="my icon"
            style={{ width: "50px", height: "50px" }}
          />{" "}
        </div>
        <div className="text">
          <h1 className="tittle-h1">The programmers diary</h1>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="button">
          <Link to="/post">Posts</Link>
        </button>
      </div>
    </nav>
  );
};
