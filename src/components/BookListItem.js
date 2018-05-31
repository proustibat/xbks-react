import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const BookListItem = ( { isbn, title, price, synopsis } ) => (
    <Link to={ `/book/${ isbn }` } className="list-item">

        <div>
            <h3 className="list-item__title">{ title }</h3>
            <span className="list-item__sub-title">{ synopsis[ 0 ] }</span>
        </div>

        <h3 className="list-item__data">{ numeral( price ).format( '0.00$' ) }</h3>

    </Link>
);

export default BookListItem;
