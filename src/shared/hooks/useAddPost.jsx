import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { addPost as addPostRequest } from '../../services'
import toast from 'react-hot-toast';


export const useAddPost = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addPost = async (title, content, author, img) => {
        setLoading(true);

        const response = await addPostRequest({
            title,
            content,
            author,
            img
        });
        if (response.error) {
            toast.error('Error adding publication, probably one or more fields are empty or invalid');
        } else {
            toast.success('Post added successfully');
            navigate('/posts');
        }
        setLoading(false);
    };

    return { addPost, loading };
};