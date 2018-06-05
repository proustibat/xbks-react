import React from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';

export class Cart extends React.Component {
    render () {
        return (
            <div className="cart content-container">
                <CartList />
                <CartTotal />
            </div>
        );
    }
}

export default Cart;
