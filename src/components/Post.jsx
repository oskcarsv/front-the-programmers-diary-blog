import useGetPost from "../shared/hooks/useGetPost";
import { CardPosts } from "./CardPosts";
// import { Link } from "react-router-dom";

export const Post = () => {
  const { posts, loading, error } = useGetPost();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="cards-container">
      {posts.map((post) => (
        // <Link to={`/postContent/${post._id}`} className="card">
          <CardPosts
            key={post._id}
            title={post.title}
            subTitle={post.subTitle}
            img={post.img}
          />
        // </Link>
      ))}
    </section>
  );
};
