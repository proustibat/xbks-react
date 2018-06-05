import getBestDiscount from '../selectors/getBestDiscount';
import getSubTotal from '../selectors/getSubTotal';

// SET_OFFERS
export const setOffers = offers => ( {
    type: 'SET_OFFERS',
    offers
} );

// SET_BEST_OFFER
export const setBestOffers = bestOffer => ( {
    type: 'SET_BEST_OFFER',
    bestOffer
} );

export const startSetOffers = () => {
    return ( dispatch, getState ) => {
        // Get all the isbn to fetch api
        const isbnList = [];
        getState().cart.books.forEach( book => {
            for (let i=0; i<book.quantity; i++) {
                isbnList.push( book.isbn );
            }
        } );

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
                        dispatch( setOffers( data.offers ) );
                        dispatch( setBestOffers(
                            getBestDiscount(
                                getState().cart.books,
                                getState().offers.offersList,
                                getSubTotal( getState().cart.books )
                            ) )
                        );
                    } );
            } )
            .catch( err => {
                console.log( 'Fetch Error :-S', err );
            } );
    };
}
