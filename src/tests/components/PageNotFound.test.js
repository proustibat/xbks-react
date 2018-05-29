import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test( 'Should render 404 page correctly', () => {
    const wrapper = shallow( <PageNotFound /> );
    expect( wrapper ).toMatchSnapshot();
} );
