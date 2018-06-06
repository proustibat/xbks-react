import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../../components/SearchBar';

// TODO simulate on change input

test( 'Should render SearchBar component correctly without a searchTerm content', () => {
    const wrapper = shallow( <SearchBar
        searchTerm = ''
    /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render SearchBar component correctly with a searchTerm content', () => {
    const wrapper = shallow( <SearchBar
        searchTerm = 'Hello my searchterm'
    /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle text change', () => {
    const setSearchTerm = jest.fn();
    const value = 'new input value';

    const wrapper = shallow( <SearchBar
        setSearchTerm={ setSearchTerm }
    /> );

    wrapper.find( 'input' ).first().simulate( 'change', { currentTarget: { value } } );
    expect( setSearchTerm ).toHaveBeenLastCalledWith( value );
} );
