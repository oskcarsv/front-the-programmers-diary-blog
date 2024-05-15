/* eslint-disable no-unused-vars */
import axios from "axios";
    

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/programmers-diary/v1",
  timeout: 5000,
});

export const getPost = async () => {
    try {
        return await apiClient.get('/post');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}