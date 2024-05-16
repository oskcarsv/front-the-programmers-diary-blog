/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useGetPostById } from "../shared/hooks";
import { useEffect } from "react";
import "../styles/InfoPost.css";

export const InfoPost = ({ id }) => {
  const { posts, loading, error, fetchPostById } = useGetPostById(id);
  console.log("this is the id " + id);
  useEffect(() => {
    fetchPostById();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container">
      <h1 className="title">{posts.title}</h1>
      <img className="image" src={posts.img} alt={posts.title} />
      <div>
        <p className="author">Author: {posts.author}</p>
        <p className="date">
          Date: {formatDate(posts.createdAt)}
        </p>
      </div>
      <p className="content">{posts.content}</p>
    </div>
  );
};
