import {get, postJSON} from './request';

export const getPost = (data) => get('https://jsonplaceholder.typicode.com/posts', data);
export const getPostDetail = id => get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const newPost = data => postJSON('https://jsonplaceholder.typicode.com/posts', data);