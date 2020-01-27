import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F7F7F7',
      alignItems: 'center',
      justifyContent: 'center',
    },

    header: {
        flex:0.10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:  '#FFFFFF',
        padding: 10,
    },

    headerText: {
        fontSize: 22,
    },

    listBox: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:  '#FFFFFF',
        padding: 4,
    },

    list: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 2,
        backgroundColor: "#FAFAFA",
    },

    listItem: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 4,
        backgroundColor: "#F7F7F7",
        height: 80,
    },

    listItemTextSpace: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 16,
        height: 80,
    },

    listItemText: {
        fontSize: 16,
        color: '#535353',
    },

    listItemTextAmount: {
        fontSize: 22,
        color: '#232323',
    },

    listItemStatusSpace: {
        flex: .25,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },

    buttonBox: {
        flex: 0.15,
        alignSelf: 'stretch',
        backgroundColor: '#FCFCFC',
        padding: 10,
        justifyContent: 'center',
    },

  });

  export default styles;