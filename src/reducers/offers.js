const offersReducerDefaultState = {
    offersList: [],
    bestOffer: {
        type: 'none',
        amount: 0
    }
};
export default ( state = offersReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'SET_OFFERS':
            const offersList = action.offers;
            return { ...state, ...{ offersList } };
        case 'SET_BEST_OFFER':
            const bestOffer = action.bestOffer;
            return { ...state, ...{ bestOffer } };
        default:
            return state;
    }
};
