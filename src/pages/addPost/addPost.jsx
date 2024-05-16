import { useState } from "react";
import { AddPost } from "../../components/AddPost";
import { Navbar } from "../../components/nav";
import "./addPost.css";

export const AddPostPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="container">
        <Navbar />
        <AddPost loading={loading} setLoading={setLoading} />
      </div>
    </>
  );
};
