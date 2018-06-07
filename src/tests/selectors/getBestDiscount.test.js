import getBestDiscount from '../../selectors/getBestDiscount';
import cart from "../fixtures/cart";
import { multipleOffers } from "../fixtures/offers";


test( 'Should return the best offer among an array of offers, for a given books list and a subtotal', () => {
    const books = cart.books;
    const subtotal = 100;
    const bestOffer = getBestDiscount( books, multipleOffers, subtotal );

    expect( bestOffer ).toEqual( {
        type: 'minus',
        amount: 15
    } );
} );

test( 'Should return default best offer object if there\'s no book and no subtotal', () => {
    const bestOffer = getBestDiscount( undefined, multipleOffers, undefined );
    expect( bestOffer ).toEqual( { type: "none", value: 0, amount: 0 } );
} );
