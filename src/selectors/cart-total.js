import {setBooks} from "../actions/books";
import {setSavedBooks} from "../actions/cart";

const getAbsoluteTotal = books => books.reduce( ( accumulator, book ) => accumulator + ( book.price * book.quantity ), 0 );

const getDiscount = books => {
    const isbnList = [];
    books.forEach( book => {
        for (let i=0; i<book.quantity; i++) {
            isbnList.push( book.isbn );
        }
    } );

    return 0;
    // TODO: fetch this in ACTION cart when adding or removing
    // const url = `http://henri-potier.xebia.fr/books/${ isbnList.join( ',' ) }/commercialOffers`;
    // fetch( url )
    //     .then( response => {
    //         if ( response.status !== 200 ) {
    //             console.log( 'Looks like there was a problem. Status Code: ' + response.status );
    //             return;
    //         }
    //         response
    //             .json()
    //             .then( data => {
    //                 console.log( data.offers )
    //             });
    //     } )
    //     .catch( err => {
    //         console.log( 'Fetch Error :-S', err );
    //     } );
};

const getFinalTotal = books => getAbsoluteTotal( books ) - getDiscount( books );

export {
    getAbsoluteTotal,
    getDiscount,
    getFinalTotal
}
