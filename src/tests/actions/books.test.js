import { setBooks } from "../../actions/books";
import books from "../fixtures/books";

test( 'Should set up set books action object', () => {
    const action = setBooks( books );
    expect( action ).toEqual( {
        type: 'SET_BOOKS',
        books
    } )
} );
