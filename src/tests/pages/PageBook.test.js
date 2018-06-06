import React from 'react';
import { shallow } from 'enzyme';
import { PageBook } from '../../pages/PageBook';
import books from '../fixtures/books';

test( 'Should render book page correctly', () => {
    const wrapper = shallow( <PageBook /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should call cart and offers actions and history function when clicking on add button', () => {
    const addToCart = jest.fn();
    const startSetOffers = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow( <PageBook
        addToCart={ addToCart }
        startSetOffers={ startSetOffers }
        history={ history }
        book={ books[ 0 ] }
    /> );

    wrapper.find( 'button' ).simulate( 'click' );

    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( addToCart ).toHaveBeenLastCalledWith( books[ 0 ] );
    expect( startSetOffers ).toHaveBeenCalled();
} );
