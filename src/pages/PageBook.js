import React from 'react';
import { connect } from 'react-redux';
import BookCard from "../components/BookCard";


export class PageBook extends React.Component {

    onAdd = () => {
      console.log( 'ADD' );
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


export default connect( mapStateToProps )( PageBook );

