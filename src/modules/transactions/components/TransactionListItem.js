import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import RefundOverlay from './overlays/RefundOverlay';
import ProgressOverlay from './overlays/ProgressOverlay';

function TransactionListItem(props){
    const {
        data,
        onRefund,
    } = props;

    const [refundVisible, setRefundVisible] = useState(false);

    const { 
        item: {
            id,
            merchant,
            currency,
            amount,
            refunded,
        }
    } = data;

    function handleRefund() {
         setRefundVisible(true);
    }

    function hideRefundOverlay(){
        setRefundVisible(false);
    }

    function handleRefundOk (transactionId) {
        setRefundVisible(false);
        onRefund({transactionId});
    }

    function renderStatus(){
        if (refunded) {
            return (
                <Icon 
                    name="check" 
                    size={24}
                    color='green'
                />
            )
        } 
        return (
            <Button 
                title="Refund"
                onPress={handleRefund}
            />
        )
    }

    return (
        <View style={styles.listItem}>

            <RefundOverlay 
                transactionId={id}
                merchant={merchant}
                currency={currency}
                amount={amount}
                isVisible={refundVisible}
                onBackdropPress={hideRefundOverlay}
                onRefundCancel={hideRefundOverlay}
                onRefundOk={handleRefundOk}
            />
            
            <View style={styles.listItemTextSpace}>
                <Text style={styles.listItemText}>
                    {`Transaction to ${merchant}`}
                </Text>
                <Text style={styles.listItemTextAmount}>
                    {`${currency} ${amount}`}
                </Text>
            </View>
           <View style={styles.listItemStatusSpace}>
                {renderStatus()}
           </View>
        </View>
    )
}

export default TransactionListItem;