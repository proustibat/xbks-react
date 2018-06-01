export const addBook = book => ( {
    type: 'ADD_BOOK',
    book
} );

export const removeBook = ( { isbn } = {} ) => ( {
    type: 'REMOVE_BOOK',
    isbn
} );

// Could be used if cart is saved in localstorage or cookie
export const setSavedBooks = books => ( {
    type: 'SET_SAVE_BOOKS',
    books
} );
