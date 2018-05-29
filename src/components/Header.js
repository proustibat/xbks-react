import React from 'react';
import Headroom from "react-headroom";
import { Link } from 'react-router-dom';

const Header = () => (
    <Headroom>
       <header className="header">
           <div className="content-container">
               <div className="header__content">
                   <Link className="header__title" to="/" >
                       <h1>XBKS</h1>
                   </Link>
                   <button className="button button--link">Cart</button>
               </div>
           </div>
       </header>
    </Headroom>
);

export default Header;
