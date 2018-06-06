import React from 'react';
import { shallow } from 'enzyme';
import { CartList } from "../../../components/cart/CartList";
import cart from "../../fixtures/cart";

test( 'Should render CartList component correctly with books', () => {
    const wrapper = shallow( <CartList
        books = { cart.books }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render CartList component correctly with no books', () => {
    const wrapper = shallow( <CartList
        books = { [] }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );
