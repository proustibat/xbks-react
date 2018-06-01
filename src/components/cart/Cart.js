import React from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';

export class Cart extends React.Component {
    render () {
        return (
            <div className="cart">
                <CartList />
                <CartTotal />
            </div>
        );
    }
}

export default Cart;
