import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';

import TransactionList from './TransactionList';
import styles from './styles';
import TransationList from './TransactionList';

function TransactionView() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Welcome to PayYes!
                </Text>
            </View>
            <View style={styles.listBox}>
                <TransationList />
            </View>
        </View>
    )
}

export default TransactionView;

/*

     <View style={styles.buttonBox}>
                <Button 
                    title="Make Transaction" 
                    type="solid"
                    onPress={makeTransaction}
                />
            </View>

*/