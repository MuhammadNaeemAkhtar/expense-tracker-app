import React, { useContext } from 'react';
import{transaction, Transaction} from './Transacton'
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    //const context = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    //console.log(context);
    return(
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/> ))}
                
            </ul>
        </>
    );
}