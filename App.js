import React from 'react';
import { Provider } from 'react-redux'; 
import store from './src/store';
import Transactions from './src/modules/transactions';

export default function App() {
  return (
    <Provider store={store}>
      <Transactions />
    </Provider>
  );
}