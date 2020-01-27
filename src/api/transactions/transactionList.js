import { db } from '../firebase';

export async function transactionsList() {
    const transactions =  await db.collection("transactions").get(); 
    return transactions.docs.map((transaction) => {
        return { id: transaction.id,  ...transaction.data() };
    });
}
