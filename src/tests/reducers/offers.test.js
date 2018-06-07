import offersReducers from "../../reducers/offers";
import { offers } from "../fixtures/offers";

const defaultState = {
    offersList: [],
    bestOffer: {
        type: 'none',
        amount: 0
    }
};

test( 'Should set up default offers values', () => {
    const state = offersReducers( undefined, { type: '@@INIT' } );
    expect( state ).toEqual( defaultState );
} );

test( 'Should set up offers', () => {
    const action = { type: 'SET_OFFERS', offers };
    const state = offersReducers( undefined, action );
    expect( state ).toEqual( { ...defaultState, ...{ offersList: offers } } );
} );

test( 'Should set up best offer', () => {
    const bestOffer = {
        type: 'minus',
        amount: 55
    };
    const action = { type: 'SET_BEST_OFFER', bestOffer };
    const state = offersReducers( undefined, action );
    expect( state ).toEqual( { ...defaultState, ...{ bestOffer } } );
} );
