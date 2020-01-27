import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from './RefundOverlay.styles';

function ProgressOverlay(props){

    const {
        isVisible,
        message = 'Refunding Transactions...',
    } = props;

    return (
        <Overlay
            height={200} 
            isVisible={isVisible}
        >

            <View style={styles.overlayContainer}>
                <View style={styles.overlayMessage}>
                    <Text style={styles.overlayMessageText}> 
                        {message}
                    </Text>
                </View>
            </View>
        </Overlay>
    )
}

export default ProgressOverlay;