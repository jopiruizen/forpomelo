import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import { Overlay } from 'react-native-elements';

import styles from './RefundOverlay.styles';

function RefundOverlay(props){
    
    const {
        transactionId,
        amount,
        currency,
        merchant,
        onRefundOk,
        onRefundCancel,
        isVisible,
        onBackdropPress,
    } = props;

    function handleRefundOk(){
        onRefundOk(transactionId);
    }
    
    return (
        <Overlay
            height={320}
            onBackdropPress={onBackdropPress} 
            isVisible={isVisible}>

            <View style={styles.overlayContainer}>
                <View style={styles.overlayMessage}>
                    <Text style={styles.overlayMessageText}>
                        {`Are you sure you want to refund ${currency} ${amount} from ${merchant}?`} 
                    </Text>
                </View>
                <View style={styles.overlayButtons}>
                    <View style={styles.buttonSpace}>
                        <Button
                            title="Cancel"
                            onPress={onRefundCancel}
                        />
                    </View>
                    <View style={styles.buttonSpace}>
                        <Button
                            title="Refund"
                            onPress={handleRefundOk}
                        />
                    </View>   
                </View>
            </View>
           
        </Overlay>
    )
}

export default RefundOverlay;