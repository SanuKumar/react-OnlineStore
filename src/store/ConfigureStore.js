import { createStore } from 'redux';
import { RootReducer } from './RootReducer';

const ConfigureStore = (initialState) => {
    let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    return createStore(RootReducer, initialState, composeEnhancer()) //need to pass ComposeEnhancer as a function
}

export {
    ConfigureStore
}