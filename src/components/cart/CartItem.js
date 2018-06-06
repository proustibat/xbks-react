import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { changeQuantity, removeBook } from '../../actions/cart';
import { startSetOffers } from "../../actions/offers";

export class CartItem extends React.Component {

    state = {
      subTotal: 0
    };

    constructor( props ) {
        super( props );
        this.state = {
            isbn: props.isbn || '',
            title: props.title || '',
            price: props.price || 0,
            quantity: props.quantity || 0
        }
    }

    handleNumberChange = ( e ) => {
        console.log( this.props.isbn, e.currentTarget.value );
        const quantity = parseInt( e.currentTarget.value, 10 );

        this.setState( () => ( { quantity } ) );

        this.props.changeQuantity( {
            isbn: this.state.isbn,
            qtt: quantity
        } );
        this.props.startSetOffers();
    };

    handleRemove = () => {
      this.props.removeBook( this.state.isbn );
      this.props.startSetOffers();
    };

    render() {
        return (
            <div className="cart-list-item">
            <span className="cart-list__col-item">
                <Link className="cart-list__col-item-title" to={ `/book/${ this.state.isbn }` }>{ this.state.title }</Link>
            </span>
            <span className="cart-list__col-qtt">
                <button className="cart-list__delete" onClick={ this.handleRemove }>Remove</button>
                <input type="number" min="0" id="itemsNumber" defaultValue={ this.state.quantity } step="1" onInput={ this.handleNumberChange } />
            </span>
                <span className="cart-list__col-unit-price">{ numeral( this.state.price ).format( '0.00$') }</span>
                <span className="cart-list__col-sub-total">{ numeral( this.state.quantity * this.state.price ).format( '0.00$' ) }</span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ( {
    changeQuantity: ( { isbn, qtt } ) => dispatch( changeQuantity( { isbn, qtt } ) ),
    removeBook: isbn => dispatch( removeBook( isbn ) ),
    startSetOffers: () => dispatch ( startSetOffers() )
} );

export default connect( undefined, mapDispatchToProps )( CartItem );
