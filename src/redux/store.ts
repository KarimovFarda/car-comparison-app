import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import  compareApp  from './reducer/index';



export const store = createStore(
    compareApp,
    applyMiddleware(
        logger,
        thunk
    )
);