import "./dashboardPage.css";
import icon from "../../assets/icon.svg";
import communityGift from "../../assets/people-gift.gif";
import shareImg from "../../assets/watch.svg";

export const DashboardPage = () => {
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

      <section className="section-community">
        <div className="icon">
          <img
            src={communityGift}
            alt="my icon"
            style={{ width: "350px", height: "350px" }}
          />{" "}
        </div>
        <div className="content">
          <h1 className="tittle-h1-section">Community</h1>
          <p className="text">
            A place where programmers can comment and provide feedback from
            comments.
          </p>
        </div>
      </section>

      <section className="section-share">
        <div className="content">
          <h1 className="tittle-h1-section">Community</h1>
          <p className="text">
            A place where programmers can comment and provide feedback from
            comments.
          </p>
        </div>
        <div className="icon">
          <img
            src={shareImg}
            alt="my icon"
            style={{ width: "350px", height: "350px" }}
          />{" "}
        </div>
      </section>

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
