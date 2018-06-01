import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { addBook, removeBook } from "../actions/cart";

export class PageBook extends React.Component {

    onAdd = () => {
        console.log("ADD");
        this.props.addToCart( this.props.book );
    };

    render() {
        console.log( 'BOOK ', this.props.book );
        return (
            <div className="content-container flex-container-col">
                <BookCard
                    book = { this.props.book }
                />
                <button className="button button--secondary" onClick = { this.onAdd }>Buy this book</button>
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) => ( {
    book: state.books.find( book => book.isbn === props.match.params.isbn )
} );

const mapDispatchToProps = dispatch => ( {
    addToCart: book => dispatch( addBook( book ) ),
    removeFromCart: isbn => dispatch( removeBook( { isbn } ) )
} );


export default connect( mapStateToProps, mapDispatchToProps )( PageBook );

