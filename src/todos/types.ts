export interface State {
    posts: TodoPost[];
    selectedPost: TodoPost;
}

export interface TodoPost {
    title: string;
    description: string;
}

export enum ActionTypes {
    GET_TODOS = 'GET_TODOS',
    GET_TODO = 'GET_TODO',
    SET_TODO  = 'SET_TODOS',
}