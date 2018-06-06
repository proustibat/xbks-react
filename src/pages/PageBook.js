import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { addBook } from "../actions/cart";
import { startSetOffers } from "../actions/offers";

export class PageBook extends React.Component {

    onAdd = () => {
        this.props.addToCart( this.props.book );
        this.props.startSetOffers();
        this.props.history.push( '/' );
    };

    render() {
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

export const mapStateToProps = ( state, props ) => ( {
    book: state.books.find( book => book.isbn === props.match.params.isbn )
} );

export const mapDispatchToProps = dispatch => ( {
    addToCart: book => dispatch( addBook( book ) ),
    startSetOffers: () => dispatch ( startSetOffers() )
} );


export default connect( mapStateToProps, mapDispatchToProps )( PageBook );

