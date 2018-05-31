import React from 'react';
import BookCard from "../components/BookCard";

export class PageBook extends React.Component {

    openConfirmModal = () => {
        console.log( 'PageBook.openConfirmModal' );
    };

    render() {
        return (
            <div>
                <div className="content-container">
                    <BookCard book = { this.props.book } />
                </div>
            </div>
        );
    }
}

export default PageBook;
