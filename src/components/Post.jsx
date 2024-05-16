import useGetPost from "../shared/hooks/useGetPost";
import { CardPosts } from "./CardPosts";

export const Post = () => {
  const { posts, loading, error } = useGetPost();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="cards-container">
      {posts.map((post) => (
          <CardPosts
            key={post._id}
            title={post.title}
            img={post.img}
          />
      ))}
    </section>
  );
};
