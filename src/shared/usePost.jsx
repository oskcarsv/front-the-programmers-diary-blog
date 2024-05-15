/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import { getPost as getPostRequest } from "../services/api";


export const usePost = () => {

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPost = async () => {
        const postData = await getPostRequest();

        if (postData.error) {
            return toast.error(
                postData.e?.response?.data || 'An error occurred while fetching the post.'
            );
        }

        setPost(postData.data.post);
    };
};