/* eslint-disable no-unused-vars */
import axios from "axios";
    

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/programmers-diary/v1",
  timeout: 5000,
});

export const getPosts = async () => {
    try {
        return await apiClient.get('/post');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPost = async (id) => {
    try {
        return await apiClient.get(`/post/getPostById/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const addPost = async (data) => {
    try {
        return await apiClient.post('/post/createPost', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const deletePost = async (id) => {
    try {
        return await apiClient.delete(`/post/deletePost/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};