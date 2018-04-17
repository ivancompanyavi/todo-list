import { ActionTypes as t } from './types';
import * as api from './api';
import { Dispatch } from 'redux';


export function getTodos() {
    return async (dispatch: Dispatch<{}>) => {
        try {
            const response = await api.getTodos();
            dispatch({ type: t.GET_TODOS, value: response });
        } catch (e) {
            console.error(`There was a problem loading the TODOS: ${e}`);
        }
    }
}


export function getTodo(postId: string = null) {
    return async (dispatch: Dispatch<{}>) => {
        try {
            const response = await api.getTodo(postId);
            dispatch({ type: t.GET_TODO, value: response });
        } catch (e) {
            console.error(`There was a problem loading the TODOS: ${e}`);
        }
    }
}

export function setTodo(title: string, description: string) {
    return async (dispatch: Dispatch<{}>) => {
        try {
            await api.setTodo(title, description);
            dispatch({ type: t.SET_TODO });
        } catch (e) {
            console.error(`There was a problem loading the TODOS: ${e}`);
        }
    }
}
export type Actions = typeof getTodos;