import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookReducers from '../reducers/books';
import cartReducers from '../reducers/cart';
import offersReducers from '../reducers/offers';
import filtersReducers from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers( {
            books: bookReducers,
            cart: cartReducers,
            offers: offersReducers,
            filters: filtersReducers
        } ),
        composeEnhancers( applyMiddleware( thunk ) )
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

