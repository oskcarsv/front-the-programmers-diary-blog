import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Content } from "../../components/Content";
import "../../styles/content.css";
import "../../styles/variables.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};
