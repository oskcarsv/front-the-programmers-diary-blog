/* eslint-disable no-unused-vars */
import icon from "../../assets/img/icon.svg";
import { Link } from "react-router-dom";
import { Post } from "../../components/Post";
import "./postPage.css";
import { Footer } from "../../components/footer";

export const PostPage = () => {
  return (
    <div className="container">
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
            <Link to="/">Home</Link>
          </button>
        </div>
      </nav>

      <section className="section-post">
        <Post />
      </section>

      <Footer />  

    </div>
  );
};
