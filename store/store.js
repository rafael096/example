import {createStore,applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

const reduxDevtools=typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const composeEnhancers = reduxDevtools|| compose;

export const makeStore = (initialState) => {

    return createStore(reducer, initialState,composeEnhancers(applyMiddleware(thunkMiddleware )));
};


