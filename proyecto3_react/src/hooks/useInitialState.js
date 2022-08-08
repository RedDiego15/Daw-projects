import InitialState from '../InitialState';
import React from 'react';
import { useState } from 'react';
import { useMap } from 'react-use';

const appInitialState = {
    pageTitle :'',
}
const useInitialState = () => {
    const [state, { set, setAll, remove, reset }] = useMap(InitialState);
    const [appState, setAppState] = useState(appInitialState);

    const findItem = (item) => {
        return state.cart.filter((product) => item.id === product.id)[0];
    };

    const setPageTitle = (newPageTitle) => {
        setAppState({
			...appState,
			pageTitle: newPageTitle,
		});
    }

    const addToCart = (payload) => {
        console.log(state);
        const item = findItem(payload);
        if (item && item.quantity < 10) {
            item.quantity = item.quantity + 1;
            item.totalPrice = item.price * item.quantity;
            state.cart = [...state.cart];
        } else if (item && item.quantity === 10) {
            alert('cant buy more than 10');
        } else {
            payload.quantity = 1;
            payload.totalPrice = payload.price;
            state.cart = [...state.cart, payload];
        }
        setAll({ ...state });
    };
    const getTotalOrderPrice = () => {
        return state.cart.reduce(
            (prev, actual) => prev + actual.quantity * actual.price,
            0
        );
    };
    const addBuyer = (payload) => {
        set('buyer', payload);
    };
    const addNewOrder = (payload) => {
        set('order', payload);
    };

    return {
        state,
        appState,
        addToCart,
        getTotalOrderPrice,
        addBuyer,
        addNewOrder,
        setPageTitle
    };
};

export { useInitialState };
