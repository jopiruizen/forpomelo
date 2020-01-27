import { db } from '../firebase';

async function transactionsList() {
    const transactions =  await db.collection("transactions").get(); 
    return transactions.docs.map((transaction) => {
        return { id: transaction.id,  ...transaction.data() };
    });
}

async function newTransaction({currency, amount, merchant}) {
    const date = new Date();
    const timestamp = date.toDateString() + ":" + date.toTimeString();
    const transactions = db.collection("transactions");
    await transactions.add({
        merchant,
        currency,
        amount,
        refunded: false,
        deleted: false,
        dateCreated: timestamp,
        dateUpdated: timestamp,
    });
    const fullData = await transactions.get(); 
    return fullData.docs.map((transaction) => {
        return { id: transaction.id,  ...transaction.data() };
    });
}

async function refundTransaction( {transactionId}) {
    const date = new Date();
    const timestamp = date.toDateString() + ":" + date.toTimeString();
    const transaction = db.collection(`${ 'transactions/' , transactionId }`);
    await transaction.set({
        refunded: true,
        dateUpdated: timestamp,
    });
    const transactions = await db.collection("transactions").get();
    return transactions.docs.map((transaction) => {
        return { id: transaction.id,  ...transaction.data() };
    });
}

export default {
    transactionsList,
    newTransaction,
    refundTransaction,
};