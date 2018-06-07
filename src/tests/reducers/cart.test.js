import cartReducers from "../../reducers/cart";
import cart from "../fixtures/cart";

test( 'Should set up default cart values', () => {
    const state = cartReducers( undefined, { type: '@@INIT' } );
    expect( state ).toEqual( { books: [] } );
} );


test( 'Should add a new book to cart', () => {
    const book = {
        isbn: 'bla-bli-blou',
        title: 'This is the title',
        price: 10,
        cover: '/img',
        synopsis: [ 'youpi', 'yep' ]
    };

    const action = { type: 'ADD_BOOK_TO_CART', book };
    const state = cartReducers( cart, action );

    expect( state.books ).toEqual( [ ...cart.books, book ] );
} );


test( 'Should increment quantity when adding a book that is already in the cart', () => {
    const firstBookInCart = { ...cart.books[ 0 ] };

    const action = { type: 'ADD_BOOK_TO_CART', book: {
        isbn: firstBookInCart.isbn,
        title: firstBookInCart.title,
        price: firstBookInCart.price,
        cover: firstBookInCart.cover,
        synopsis: firstBookInCart.synopsis
    } };
    const state = cartReducers( cart, action );

    expect( state.books.filter( book => book.isbn === firstBookInCart.isbn )[ 0 ].quantity ).toBe( firstBookInCart.quantity + 1 );
} );

test( 'Should remove a book from cart', () => {
    const isbn = cart.books[ 0 ].isbn;
    const action = { type: 'REMOVE_BOOK_FROM_CART', isbn };
    const state = cartReducers( cart, action );
    expect( state.books ).toEqual( [ cart.books[ 1 ] ] );
} );

test( 'Should change quantity of a book in cart', () => {
    const isbn = cart.books[ 0 ].isbn;
    const qtt = 55;
    const action = { type: 'CHANGE_QUANTITY_BOOK_IN_CART', isbn, qtt };
    const state = cartReducers( cart, action );
    expect( state.books.filter( book => book.isbn === isbn )[ 0 ].quantity ).toBe( qtt );
} );
