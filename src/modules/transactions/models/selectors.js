import { createSelector } from 'reselect';

const getTransactionsList = state => state.transaction.transactionList;
export const getTransactionsListState = createSelector(
  [getTransactionsList],
  data => data,
);

const getMerchants = state => state.transaction.merchants;
export const getMerchantsState = createSelector(
  [getMerchants],
  data => data,
);

const getCurrencies = state => state.transaction.currencies;
export const getCurrenciesState = createSelector(
  [getCurrencies],
  data => data,
);
