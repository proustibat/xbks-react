import filtersReducers from "../../reducers/filters";

test( 'Should set up default filters values', () => {
    const state = filtersReducers( undefined, { type: '@@INIT' } );
    expect( state ).toEqual( {
        searchTerm: ''
    } );
} );

test( 'Should set up search term filter', () => {
    const searchTerm = 'bla bli blou';
    const action = { type: 'SET_SEARCHTERM', searchTerm };
    const state = filtersReducers( {}, action );
    expect( state ).toEqual( { searchTerm } );
} );
