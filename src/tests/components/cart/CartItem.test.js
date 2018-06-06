import React from 'react';
import { shallow } from 'enzyme';
import { CartItem } from "../../../components/cart/CartItem";
import cart from "../../fixtures/cart";

test( 'Should render CartItem component correctly with data', () => {
    const itemData = cart.books[ 0 ];
    const wrapper = shallow( <CartItem
        { ...itemData }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );


test( 'Should render CartItem component correctly with no data', () => {
    const wrapper = shallow( <CartItem /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle change number of quantity input (update state, update offers and quantity in store)', () => {
    const itemData = cart.books[ 0 ];
    const startSetOffers = jest.fn();
    const changeQuantity = jest.fn();
    const wrapper = shallow( <CartItem
        { ...itemData }
        startSetOffers = { startSetOffers }
        changeQuantity = { changeQuantity }
    /> );
    const value = 333;
    wrapper.find( '.cart-list__col-qtt input' ).first().simulate( 'input', { currentTarget: { value } } );

    expect( wrapper.state( 'quantity' ) ).toBe( value );
    expect( changeQuantity ).toHaveBeenLastCalledWith( {
        isbn: wrapper.state( 'isbn' ),
        qtt: value
    } );
    expect( startSetOffers ).toHaveBeenCalled();
} );

test( 'Should handle remove book', () => {
    const itemData = cart.books[ 0 ];
    const startSetOffers = jest.fn();
    const removeBook = jest.fn();
    const wrapper = shallow( <CartItem
        { ...itemData }
        startSetOffers = { startSetOffers }
        removeBook = { removeBook }
    /> );

    wrapper.find( '.cart-list__col-qtt button' ).first().simulate( 'click' );

    expect( removeBook ).toHaveBeenLastCalledWith( wrapper.state( 'isbn' ) );
    expect( startSetOffers ).toHaveBeenCalled();
} );
