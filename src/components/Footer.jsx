import icon from "../assets/img/logo.svg"
import "../styles/footer.css"
import "../styles/variables.css";

export const Footer = () => {
  return (
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
          <h1 className="tittle-h1-footer">The programmers diary</h1>
        </div>
      </div>

      <div className="copyright-text">
        <p className="text-footer">©The programmers diary 2024</p>
      </div>
    </footer>
  );
};