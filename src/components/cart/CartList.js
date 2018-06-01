import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartList = props => (
    <div className="cart-list">
        { props.books.length === 0 ? (
            <span>Your cart is empty</span>
        ) : (
            <div>
                <div className="cart-list-header">
                    <span className="cart-list__col-item">Item</span>
                    <span className="cart-list__col-qtt">Qtt</span>
                    <span className="cart-list__col-unit-price">Unit Price</span>
                    <span className="cart-list__col-sub-total">Sub Total</span>
                </div>
                <div className="cart-list-body">
                    { props.books.map( ( book, i ) => (
                        <CartItem key = { `${ book.isbn }-${ i }` } { ...book } />
                    ) ) }
                </div>
            </div>
        ) }
    </div>
);

const mapStateToProps = state => ( {
    books: state.cart.books
} );

export default connect( mapStateToProps )( CartList);
