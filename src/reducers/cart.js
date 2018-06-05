const cartReducerDefaultState = {
    books: []
};

export default ( state = cartReducerDefaultState, action ) => {
    let books;
    switch ( action.type ) {
        case 'ADD_BOOK':
            const existingBook = state.books.find( book => book.isbn === action.book.isbn );
            if ( existingBook ) {
                existingBook.quantity = existingBook.quantity + 1;
                books = state.books;
            }
            else {
                action.book.quantity = 1;
                books = [ ...state.books, action.book ];
            }
            return { ...state, ...{ books } };
        case 'REMOVE_BOOK':
            books = state.books.filter( ( { isbn } ) => action.isbn !== isbn );
            return { ...state, ...{ books } };
        case 'SET_SAVE_BOOKS':
            action.books.forEach( book => {
                if ( !book.quantity ) {
                    book.quantity = 1;
                }
            } );
            return { ...state, ...{ books: action.books } };
        case 'CHANGE_QUANTITY':
            const booksList = [...state.books];
            let newBookList = booksList
                .map( book => {
                    book.quantity = book.isbn === action.isbn ? action.qtt : book.quantity;
                    return book;
                } )
                .filter( book => book.quantity > 0 );
            return { ...state, ...{ books: newBookList } };
        default:
            return state;
    }
};
