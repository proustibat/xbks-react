import { setOffers, setBestOffers, startSetOffers } from "../../actions/offers";

import { offers, bestOffer } from "../fixtures/offers";
import cart from "../fixtures/cart";
import books from "../fixtures/books";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
const defaultState = {
    books,
    cart,
    offers: {
        offersList: offers,
        bestOffer
    },
    filters: {
        searchTerm: ''
    }
};

const createMockStore = configureMockStore( [ thunk ] );

test( 'Should set up set offers action object', () => {
    const action = setOffers( offers );
    expect( action ).toEqual( {
        type: 'SET_OFFERS',
        offers
    } )
} );

test( 'Should set up set best offer action object', () => {
    const action = setBestOffers( bestOffer );
    expect( action ).toEqual( {
        type: 'SET_BEST_OFFER',
        bestOffer
    } )
} );

test( 'Should fetch offers then set up offers action object and best offer action object', async() => {
    const store = createMockStore( defaultState );

    const response = {
        status: 200,
        json: jest.fn().mockImplementationOnce(() => Promise.resolve( { offers } ) )
    };
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve( response ) );

    await store.dispatch( startSetOffers() );

    const actions = store.getActions();

    expect( actions[ 0 ] ).toEqual( {
        type: 'SET_OFFERS',
        offers
    } );

    expect( actions[ 1 ] ).toEqual( {
        type: 'SET_BEST_OFFER',
        bestOffer: {
            type: expect.any(String),
            amount: expect.any(Number)
        }
    } );
} );


test( 'Should handle api error when fetching offers', async() => {
    const store = createMockStore( defaultState );
    const response = {
        status: 500
    };
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve( response ) );
    await store.dispatch( startSetOffers() );

    const actions = store.getActions();

    expect( actions.length ).toBe( 0 );
} );

test( 'Should handle error when fetching', async() => {
    const store = createMockStore( defaultState );
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject( 'error' ) );
    await store.dispatch( startSetOffers() );
    const actions = store.getActions();
    expect( actions.length ).toBe( 0 );
} );


test( 'Should not search for offers if there\'s no books in cart', async() => {
    defaultState.cart.books = [];
    const store = createMockStore( defaultState );

    const response = {
        status: 200,
        json: jest.fn().mockImplementationOnce(() => Promise.resolve( { offers } ) )
    };
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve( response ) );
    await store.dispatch( startSetOffers() );

    const actions = store.getActions();

    expect( window.fetch ).not.toHaveBeenCalled();
    expect( actions[ 0 ] ).toEqual( {
        type: 'SET_OFFERS',
        offers: []
    } );
    expect( actions[ 1 ] ).toEqual( {
        type: 'SET_BEST_OFFER',
        bestOffer: {
            amount: 0,
            type: 'none',
        },
    } );
} );
