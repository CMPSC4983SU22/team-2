import axios from 'axios';

export const mockApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
});