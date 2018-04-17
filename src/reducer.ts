import { combineReducers } from 'redux';
import todos from './todos';
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers({
    [todos.constants.NAME]: todos.reducer,
    router: routerReducer,
})

export default reducer;
