import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    overlayContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    overlayMessage: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    overlayMessageText: {
       fontSize: 20,
       textAlign: 'center',
       color: '#232323',
    },

    overlayButtons: {
        flex: .3,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonSpace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
      
  });

  export default styles;