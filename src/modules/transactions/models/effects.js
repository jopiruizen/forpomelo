import transactionsAPI from '../../../api/transactions';
import { randomTransaction } from '../../../api/utility';

export async function generateNewTransaction() {
    let list = await transactionsAPI.newTransaction(randomTransaction());
    list = await transactionsAPI.newTransaction(randomTransaction());
    list = await transactionsAPI.newTransaction(randomTransaction());
    this.setTransactionsList(list);
}

export async function getTransactionsList() {
    const list = await transactionsAPI.transactionsList();
    this.setTransactionsList(list);
}

export async function newTransaction({ merchant, amount, currency }) {
    const list = await transactionsAPI.newTransaction(randomTransaction());
    this.setTransactionsList(list);
}

export async function refundTransaction({transactionId}) {
    const list = await transactionsAPI.refundTransaction({ transactionId });
    this.setTransactionsList(list);
}

export async function getMerchants(){
    const merchants = await transactionsAPI.merchantsList();
    this.setMerchants(merchants); 
}

export async function getCurrencies() {
    const currencies = await transactionsAPI.currencyList();
    this.setCurrencies(currencies); 
}