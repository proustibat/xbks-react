import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import configureNumeral from './configs/configureNumeral';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

configureNumeral();

const store = configureStore();

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render( jsx, document.querySelector( '#app' ) );
