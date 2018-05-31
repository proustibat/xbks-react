import React from 'react';
import BookListItem from "./BookListItem";

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

export default BookList;
