import React from 'react';
import { shallow } from 'enzyme';
import Cart from "../../../components/cart/Cart";

test( 'Should render Cart component correctly', () => {
    const wrapper = shallow( <Cart /> );
    expect( wrapper ).toMatchSnapshot();
} );
