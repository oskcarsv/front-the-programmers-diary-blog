import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/programmers-diary/v1",
    timeout: 10000,
});

export const getPublications = async () => {
    try {
        return await apiClient.get('/post/getPost');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const addPublication = async (data) => {
    try {
        return await apiClient.post('/post/createPost', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const getPublication = async (id) => {
    try {
        return await apiClient.get(`/post/getPostById/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const deletePublication = async (id) => {
    try {
        return await apiClient.delete(`/post/deletePost/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};