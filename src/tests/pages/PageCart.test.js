import React from 'react';
import { shallow } from 'enzyme';
import PageCart from '../../pages/PageCart';

test( 'Should render cart page correctly', () => {
    const wrapper = shallow( <PageCart /> );
    expect( wrapper ).toMatchSnapshot();
} );
