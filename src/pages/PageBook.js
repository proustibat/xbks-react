import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { addBook, removeBook } from "../actions/cart";
import { startSetOffers } from "../actions/offers";

export class PageBook extends React.Component {

    onAdd = () => {
        this.props.addToCart( this.props.book );
        this.props.startSetOffers();
        this.props.history.push( '/' );
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
    removeFromCart: isbn => dispatch( removeBook( { isbn } ) ),
    startSetOffers: () => dispatch ( startSetOffers() )
} );


export default connect( mapStateToProps, mapDispatchToProps )( PageBook );

