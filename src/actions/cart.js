export const addBook = book => ( {
    type: 'ADD_BOOK_TO_CART',
    book
} );

export const removeBook = ( isbn = '' ) => ( {
    type: 'REMOVE_BOOK_FROM_CART',
    isbn
} );

// Could be used if cart is saved in localstorage or cookie
// export const setSavedBooks = books => ( {
//     type: 'SET_SAVED_BOOKS_TO_CART',
//     books
// } );

export const changeQuantity = ( { isbn, qtt } ) => ( {
    type: 'CHANGE_QUANTITY_BOOK_IN_CART',
    isbn,
    qtt
} );
