import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCartItems from "../selectors/getCartItems";

export const Header = ( props ) => (
   <header className="header">
       <div className="content-container">
           <div className="header__content">
               <Link className="header__title" to="/" >
                   <h1>XBKS</h1>
               </Link>
               <Link className="button button--link" to="/cart">
                   Cart { props.items > 0 && ( <span className="header__cart-info--items"><br/>{ props.items } items</span> ) }
               </Link>
           </div>
       </div>
   </header>
);

const mapStateToProps = ( state, props ) => ( {
   items : getCartItems( state.cart.books )
} );

export default connect( mapStateToProps )( Header );
