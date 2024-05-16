/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useGetPostById } from "../shared/hooks";
import { useEffect } from "react";
import "../styles/InfoPost.css";

export const InfoPost = ({ id }) => {
  const { post, loading, error, fetchPostById } = useGetPostById(id);
  console.log("this is the id " + id);
  useEffect(() => {
    fetchPostById();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="title">{post.title}</h1>
      <img className="image" src={post.img} alt={post.title} />
      <div>
        <p className="author">Author: {post.author}</p>
      </div>
      <p className="content">{post.content}</p>
    </div>
  );
};
