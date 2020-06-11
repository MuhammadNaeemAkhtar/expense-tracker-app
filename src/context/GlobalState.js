import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State

// any global state will go in this object
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// create global context using createContext
export const GlobalContext = createContext(initialState);

// In order to have access for the components to the global context we need to have provider
// we basicall need to wrap all the components in a provider component

// provider component
export const GlobalProvider = ({ children }) => {
    //wehrnever we want to call reducer action we need to use dispatch
    const [state , dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id 
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
        });
    }

    //provider components (it provides the state , actions to the components)
    //children is everything we wrap in app
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}