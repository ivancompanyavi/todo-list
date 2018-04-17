import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import { getHistory } from './history';
import logger from './logger';

const store = createStore(reducer, applyMiddleware(thunk, logger, routerMiddleware(getHistory())));

export default store;
