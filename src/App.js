import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Balance} from './components/Balance/Balance';
import {IncomeExpense} from './components/Expenses/IncomeExpense';
import {TransactionList} from './components/TransactionsInfo/TransactionList';
import {AddTransaction} from './components/TransactionsInfo/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
