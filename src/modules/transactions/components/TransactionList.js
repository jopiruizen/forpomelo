import React, { useEffect, useState } from 'react';
import { View, FlatList} from 'react-native';
import { useSelector, useDispatch  } from 'react-redux'; 

import TransactionListItem from './TransactionListItem';
import ProgressOverlay from './overlays/ProgressOverlay';

import styles from './styles';

function TransactionList() {

    const list = useSelector( state => state.transactions.transactionsList );

    const {
        transactions: { 
          getTransactionsList,
          refundTransaction,
          generateNewTransaction,
        }
    } = useDispatch();

    const [progressVisible, setProgressVisible] = useState(false);
    const [progressMessage, setProgressMessage] = useState('Loading Transactions...');

    useEffect(()=>{
        setProgressVisible(true);
        getTransactionsList();
    }, []);

    useEffect(()=>{
      setProgressVisible(false);
    }, [list]);


    function refundHandler ({transactionId}) {
        setProgressVisible(true);
        setProgressMessage('Refunding Transaction...');
        refundTransaction({transactionId});
    }

    return (
        <View style={styles.container}>

            <ProgressOverlay
                message={progressMessage}
                isVisible={progressVisible}
            />
            
            <FlatList  style={styles.list}
                data={list}
                renderItem={(item)=> {
                    return(
                        <TransactionListItem
                            data={item}
                            onRefund={refundHandler}
                        />
                    )
                }}
            />
        </View>
       
    )
}

export default TransactionList;