import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const BookListItem = ( { isbn, title, price, cover } ) => (
    <Link to={ `/book/${ isbn }` } className="list-item">
        <span><img src={ cover } alt="" className="list-item__preview"/></span>
        <h3 className="list-item__title">{ title }</h3>
        <span>{ numeral( price ).format( '0.00$' ) }</span>
    </Link>
);

export default BookListItem;
