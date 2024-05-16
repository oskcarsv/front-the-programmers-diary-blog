import "./dashboardPage.css";
import communityGift from "../../assets/img/people-gift.gif";
import shareImg from "../../assets/img/watch.svg";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";

export const DashboardPage = () => {
  return (
    <>

      <Nav />

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

      <Footer />

    </>
  );
};
