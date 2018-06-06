import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from "../actions/filters";

export class SearchBar extends React.Component {

    handleChange = e => {
        this.props.setSearchTerm( e.currentTarget.value );
    };

    render() {
        return (
            <div className="content-container">
                <input
                    className="searchbar__input"
                    type="text"
                    placeholder="Search"
                    value = { this.props.searchTerm }
                    onChange = { this.handleChange }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ( {
    searchTerm: state.filters.searchTerm
} );

const mapDispatchToProps = dispatch => ( {
    setSearchTerm: text => dispatch( setSearchTerm( text ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( SearchBar );
