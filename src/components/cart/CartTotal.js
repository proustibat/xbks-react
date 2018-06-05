import React from 'react';
import { connect } from 'react-redux';
import getSubTotal from '../../selectors/getSubTotal';
import getBestDiscount from '../../selectors/getBestDiscount';
import numeral from "numeral";

const CartTotal = props => (
    <div className="cart-totals">
        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Total before reductions:</span>
            <span className="cart-totals__line-amount">{ numeral( props.subtotal ).format( '0.00$' ) }</span>
        </p>
        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Reductions <em>(type: { props.discount.type })</em>:</span>
            <span className="cart-totals__line-amount">{ numeral( props.discount.amount ).format( '0.00$' ) }</span>
        </p>

        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Total to pay:</span>
            <span className="cart-totals__line-amount">{ numeral( props.total ).format( '0.00$' ) }</span>
        </p>
    </div>
);

const mapStateToProps = state => ( {
    subtotal: getSubTotal( state.cart.books ),
    discount: state.offers.bestOffer,
    total: getSubTotal( state.cart.books ) - state.offers.bestOffer.amount
} );

export default connect( mapStateToProps )( CartTotal );
