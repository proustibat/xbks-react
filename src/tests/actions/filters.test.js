import { setSearchTerm } from "../../actions/filters";

test( 'Should set up set books action object', () => {
    const searchTerm = 'blabliblou';
    const action = setSearchTerm( searchTerm );
    expect( action ).toEqual( {
        type: 'SET_SEARCHTERM',
        searchTerm
    } )
} );
