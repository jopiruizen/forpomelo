import { db } from '../firebase';

export async function newTransaction({currency, amount, merchant}) {
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