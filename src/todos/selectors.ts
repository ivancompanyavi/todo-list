import { NAME } from './constants';

export const getPosts = (state: any) => state[NAME].posts
export const getSelectedPost = (state: any) => state[NAME].selectedPost;
