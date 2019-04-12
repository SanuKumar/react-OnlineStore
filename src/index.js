import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './Context';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { ConfigureStore } from './store/ConfigureStore';

let store = ConfigureStore({});

ReactDOM.render(
    <Provider store={store}>
        <ProductProvider> 
            <Router>
                <App />
            </Router>
        </ProductProvider>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
