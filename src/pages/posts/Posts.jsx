import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Post } from "../../components/Post";
import { Footer } from "../../components/Footer";
export const Posts = () => {
  return (
    <>
      <Navbar />
      <Post />
      <Link to="/addPost" className="AddPostBtn">
        +
      </Link>
      <Footer />
    </>
  );
};
