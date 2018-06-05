import React from 'react';
import numeral from 'numeral';

export default class BookCard extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isbn: props.book ? props.book.isbn : '',
            title: props.book ? props.book.title : '',
            price: props.book ? ( props.book.price ).toString() : '',
            cover: props.book ? props.book.cover : '',
            synopsis: props.book ? props.book.synopsis : []
        }
    }

    render() {
        return (
            <div className="bookcard">
                <h1 className="bookcard__title">{ this.state.title }</h1>

                <div className="bookcard__row">
                    <div className="bookcard__cell-cover">
                        <img className="bookcard__cover" src={ this.state.cover } alt={ `cover for ${ this.state.title }` } />
                        <p className="bookcard__price">
                            <span>{ numeral( this.state.price ).format( '0.00$' ) }</span>
                        </p>
                    </div>
                    <div className="bookcard__cell-details">
                        <div className="bookcard__details">
                            <div className="bookcard__description">{ this.state.synopsis.join( ' ' ) }</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

