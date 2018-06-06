import React from 'react';
import { shallow } from 'enzyme';
import BookCard from '../../components/BookCard';
import books from "../fixtures/books";

test( 'Should render BookCard component correctly with no data', () => {
    const wrapper = shallow( <BookCard /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render BookCard component correctly with data', () => {
    const wrapper = shallow( <BookCard
        book={ books[ 0 ] }
    /> );

    expect( wrapper ).toMatchSnapshot();
} );
