import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import cart from "../fixtures/cart";

test( 'Should render Header component correctly with items in cart', () => {
    const wrapper = shallow( <Header items={ cart.books.length } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render Header component correctly with no any items in cart', () => {
    const wrapper = shallow( <Header items={ [] } /> );
    expect( wrapper ).toMatchSnapshot();
} );
