import { State, TodoPost } from "./types";
import { ActionTypes as t } from './types';

const initialState = {
    posts: <TodoPost[]>[],
    selectedPost: {
        title: '',
        description: '',
    }
}

export default function reducer(state: State = initialState, action: any) {
    switch (action.type) {
        case (t.GET_TODOS):
            return { ...state, posts: action.value };
        case (t.GET_TODO):
            return { ...state, selectedPost: action.value };
        default:
            return state;
    }
}