import React from 'react';
import { shallow } from 'enzyme';
import PageLoading from '../../pages/PageLoading';

test( 'Should render loading page correctly', () => {
    const wrapper = shallow( <PageLoading /> );
    expect( wrapper ).toMatchSnapshot();
} );
