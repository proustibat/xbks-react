import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import PageLoading from './pages/PageLoading';

import configureStore from './store/configureStore';
import configureNumeral from './configs/configureNumeral';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {setBooks} from "./actions/books";


configureNumeral();

const store = configureStore();

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if ( !hasRendered ) {
        ReactDOM.render( jsx, document.querySelector( '#app' ) );
        hasRendered = true;
    }
};

ReactDOM.render( <PageLoading />, document.querySelector( '#app' ) );


// When the page first loads
fetch( 'http://henri-potier.xebia.fr/books', { mode: 'no-cors' } )
    .then( response => {
        if ( response.status !== 200 ) {
            console.log( 'Looks like there was a problem. Status Code: ' + response.status );
            return;
        }
        response
            .json()
            .then( books => {
                console.log( books );
                store.dispatch( setBooks( books ) );
                renderApp();
            });
    } )
    .catch( err => {
        console.log( 'Fetch Error :-S', err );
    } );
