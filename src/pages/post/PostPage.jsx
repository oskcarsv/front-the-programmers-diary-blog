import "./postPage.css";
import icon from "../assets/icon.svg";

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
            <h1 className="tittle-h1">The programmer's diary</h1>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="button">
            Posts
          </button>
          <button type="button" className="button">
            Home
          </button>
        </div>
      </nav>


      <footer className="footer">
        <div className="icon-text">
          <div className="icon">
            <img
              src={icon}
              alt="my icon"
              style={{ width: "35px", height: "35px" }}
            />{" "}
          </div>
          <div className="text-footer">
            <h1 className="tittle-h1-footer">The programmer's diary</h1>
          </div>
        </div>

        <div className="copyright-text">
          <p className="text-footer">©The programmer's diary 2024</p>
        </div>
      </footer>
    </div>
  );
};
