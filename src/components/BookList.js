import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import getVisibleBooks from "../selectors/getVisibleBooks";

export class BookList extends React.Component {
    render() {
        return (
            <div className="booklist content-container">
                { this.props.books.length === 0 ? (
                    <span>No Books</span>
                ) : (
                    this.props.books.map( book => (
                        <BookListItem
                            key = { book.isbn }
                            { ...book }
                        />
                    ) )
                ) }
            </div>
        );
    }
}

const mapStateToProps = state => ( {
    books: getVisibleBooks( state.books, { searchTerm: state.filters.searchTerm } )
} );

export default connect( mapStateToProps )( BookList );
