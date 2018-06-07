import getCartItems from '../../selectors/getCartItems';
import cart from "../fixtures/cart";

test( 'Should return the number of items in the cart', () => {
    const nb = getCartItems( cart.books );
    expect( nb ).toBe( 2 );
} );
