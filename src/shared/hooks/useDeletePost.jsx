import { useState } from "react";
import { deletePost } from "../../services/api";

export const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePostById = async (id) => {
    try {
      setLoading(true);
      await deletePost(id);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  return { loading, error, deletePostById };
};
