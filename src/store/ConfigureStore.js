import { createStore, applyMiddleware, compose } from 'redux';
import { RootReducer } from './RootReducer';
import thunk from 'redux-thunk';

const ConfigureStore = (initialState) => {
    const middlewares = [thunk];
    let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(RootReducer, initialState, composeEnhancer(
        applyMiddleware(...middlewares)
    )) //need to pass ComposeEnhancer as a function
}

export {
    ConfigureStore
}