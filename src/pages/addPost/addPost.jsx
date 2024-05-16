import { useState } from "react";
import { AddPost } from "../../components/AddPost";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import "./addPost.css";
import "../homePage/homePage.css";

export const AddPostPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      <AddPost loading={loading} setLoading={setLoading} />
      <Footer />
    </>
  );
};
