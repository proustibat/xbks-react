import React from 'react';
import { shallow } from 'enzyme';
import BookListItem from '../../components/BookListItem';
import books from "../fixtures/books";

test( 'Should render BookListItem component correctly', () => {
    const bookData = books[ 0 ];
    const wrapper = shallow( <BookListItem
        { ...bookData }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );
