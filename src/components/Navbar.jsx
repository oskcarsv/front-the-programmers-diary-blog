import { Link } from "react-router-dom";
import postsIcon from "../assets/img/postIcon.png";
import homeIcon from "../assets/img/homeIcon.png";
export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/" className="linkNavbar">
          <li>
            <img src={homeIcon} />
            Home Page
          </li>
        </Link>
        <Link to="/posts" className="linkNavbar">
          <li>
            <img src={postsIcon} />
            Posts
          </li>
        </Link>
      </ul>
    </nav>
  );
};
