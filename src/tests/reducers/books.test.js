import booksReducers from "../../reducers/books";
import books from "../fixtures/books";

test( 'Should set up default books values', () => {
    const state = booksReducers( undefined, { type: '@@INIT' } );
    expect( state ).toEqual( [] );
} );

test( 'Should set books', () => {
    const action = { type: 'SET_BOOKS', books: [ books[ 1 ] ] };
    const state = booksReducers( books, action );
    expect( state ).toEqual( [ books[ 1 ] ] );
} );
