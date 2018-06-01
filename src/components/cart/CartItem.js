import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const CartItem = ( { isbn, title, price, quantity } ) => (
    <div className="cart-list-item">
        <span className="cart-list__col-item">
            <Link className="cart-list__col-item-title" to={ `/book/${ isbn }` }>{ title }</Link>
        </span>
        <span className="cart-list__col-qtt">{ quantity }</span>
        <span className="cart-list__col-unit-price">{ numeral( price ).format( '0.00$' ) }</span>
        <span className="cart-list__col-sub-total">{ numeral( price * quantity ).format( '0.00$' ) }</span>
    </div>
);

export default CartItem;
