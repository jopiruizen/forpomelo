import { db } from '../firebase';

export async function refundTransaction( {transactionId}) {

    const date = new Date();
    const timestamp = date.toDateString() + ":" + date.toTimeString();
    const transactions = db.collection('transactions');
  
    await transactions.doc(transactionId).set({
        refunded: true,
        dateUpdated: timestamp,
    }, { merge: true } );

    const list = await db.collection("transactions").get();
    return list.docs.map((transaction) => {
        return { id: transaction.id,  ...transaction.data() };
    });
}