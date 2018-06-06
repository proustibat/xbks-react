import React from 'react';
import { shallow } from 'enzyme';
import { BookList } from '../../components/BookList';
import books from "../fixtures/books";

test( 'Should render BookList component correctly with several books', () => {
    const wrapper = shallow( <BookList
        books = { books }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render BookList component correctly with no books', () => {
    const wrapper = shallow( <BookList
        books = { [] }
    /> );
    expect( wrapper ).toMatchSnapshot();
} );
