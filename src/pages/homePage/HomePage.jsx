import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post";
import { Footer } from "../../components/Footer"
import "./homePage.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Post />
      <Footer />
    </div>
  );
};
