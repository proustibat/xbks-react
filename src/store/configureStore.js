import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookReducers from '../reducers/books';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default () => {
    const store = createStore(
        combineReducers( {
            books: bookReducers
        } ),
        composeEnhancers( applyMiddleware( thunk ) )
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

