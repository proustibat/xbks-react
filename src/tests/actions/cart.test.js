import { addBook, removeBook, changeQuantity } from "../../actions/cart";
import cart from "../fixtures/cart";
import books from "../fixtures/books";


test( 'Should set up add book to cart action object', () => {
    const action = addBook( books[ 0 ] );
    expect( action ).toEqual( {
        type: 'ADD_BOOK_TO_CART',
        book: books[ 0 ]
    } );
} );

test( 'Should set up remove book from cart action object', () => {
    const isbn = cart.books[ 0 ].isbn;
    const action = removeBook( isbn );
    expect( action ).toEqual( {
        type: 'REMOVE_BOOK_FROM_CART',
        isbn
    } );
} );

test( 'Should set up change quantity action object', () => {
    const isbn = cart.books[ 0 ].isbn;
    const qtt = 3;
    const action = changeQuantity( { isbn, qtt } );
    expect( action ).toEqual( {
        type: 'CHANGE_QUANTITY_BOOK_IN_CART',
        isbn,
        qtt
    } );
} );
