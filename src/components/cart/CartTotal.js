import React from 'react';
import { connect } from 'react-redux';
import { getAbsoluteTotal, getDiscount, getFinalTotal } from '../../selectors/cart-total';
import numeral from "numeral";

const CartTotal = props => (
    <div className="cart-totals">
        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Total before reductions:</span>
            <span className="cart-totals__line-amount">{ numeral( props.subtotal ).format( '0.00$' ) }</span>
        </p>
        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Reductions:</span>
            <span className="cart-totals__line-amount">{ numeral( props.discount ).format( '0.00$' ) }</span>
        </p>

        <p className="cart-totals__line">
            <span className="cart-totals__line-label">Total to pay:</span>
            <span className="cart-totals__line-amount">{ numeral( props.total ).format( '0.00$' ) }</span>
        </p>
    </div>
);

const mapStateToProps = state => ( {
    subtotal: getAbsoluteTotal( state.cart.books ),
    discount: getDiscount( state.cart.books ),
    total: getFinalTotal( state.cart.books )
} );

export default connect( mapStateToProps )( CartTotal );
