import { useState } from 'react';
import { getPost } from '../../services/api';

export const useGetPostById = (id) => {
    const [posts, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPostById = async () => {
        try {
            const { data } = await getPost(id);
            console.log(data);
            setPost(data.posts);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    return { posts, loading, error, fetchPostById };
};