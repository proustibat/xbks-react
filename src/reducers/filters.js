const filtersReducerDefaultState = {
    searchTerm: ''
};
export default ( state = filtersReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'SET_SEARCHTERM':
            const searchTerm = action.searchTerm;
            return { ...state, ...{ searchTerm } };
        default:
            return state;
    }
};
