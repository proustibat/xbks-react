import React from 'react';
import { shallow } from 'enzyme';
import PageHome from '../../pages/PageHome';

test( 'Should render home page correctly', () => {
    const wrapper = shallow( <PageHome /> );
    expect( wrapper ).toMatchSnapshot();
} );
