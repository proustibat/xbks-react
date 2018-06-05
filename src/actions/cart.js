export const addBook = book => ( {
    type: 'ADD_BOOK',
    book
} );

export const startAddBook = ( bookData = {} ) => {
    return ( dispatch, getState ) => {
        const {
            isbn = '',
            title = '',
            price = 0,
            cover = '',
        } = bookData;

        const book = { isbn, title, price, cover };

        // Get all the isbn to fetch api
        const isbnList = [];
        getState().cart.books.forEach( book => {
            for (let i=0; i<book.quantity; i++) {
                isbnList.push( book.isbn );
            }
        } );

        // Add current isbn
        isbnList.push( isbn );

        // fetch api to get offers
        const url = `http://henri-potier.xebia.fr/books/${ isbnList.join( ',' ) }/commercialOffers`;
        return fetch( url )
            .then( response => {
                if ( response.status !== 200 ) {
                    console.log( 'Looks like there was a problem. Status Code: ' + response.status );
                    return;
                }
                response
                    .json()
                    .then( data => {
                        // TODO : do something with offers
                        console.log( data.offers );
                        dispatch( addBook( {
                            ...book
                        } ) );
                    });
            } )
            .catch( err => {
                console.log( 'Fetch Error :-S', err );
            } );
    };
}

export const removeBook = ( { isbn } = {} ) => ( {
    type: 'REMOVE_BOOK',
    isbn
} );

// Could be used if cart is saved in localstorage or cookie
export const setSavedBooks = books => ( {
    type: 'SET_SAVE_BOOKS',
    books
} );
