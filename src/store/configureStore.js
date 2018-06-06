import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookReducers from '../reducers/books';
import cartReducers from '../reducers/cart';
import offersReducers from '../reducers/offers';
import filtersReducers from '../reducers/filters';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const idLocalStorage = 'xbks-react';

const localStorageMiddleWare = store => next => action => {
    next( action );
    localStorage[ idLocalStorage ] = JSON.stringify( {
        cart: store.getState().cart
    } );
};

const getLocalStorageCart = () => {
    let content = {};
    if( localStorage && localStorage[ idLocalStorage ] ) {
        content = JSON.parse( localStorage[ idLocalStorage ] );
    }
    return content;
};

const preloadedState = getLocalStorageCart();

export default () => {
    return createStore(
        combineReducers( {
            books: bookReducers,
            cart: cartReducers,
            offers: offersReducers,
            filters: filtersReducers
        } ),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                localStorageMiddleWare
            )
        )
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

