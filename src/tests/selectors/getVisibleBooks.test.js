import getVisibleBooks from '../../selectors/getVisibleBooks';
import books from "../fixtures/books";

test( 'Should return the books that match with the search term in the title', () => {
    const visibleBooks = getVisibleBooks( books, { searchTerm: 'ecole' } );
    expect( visibleBooks.length ).toBe( 1 );
    expect( visibleBooks[ 0 ].title ).toBe( 'Henri Potier à l\'école des sorciers' );
} );
