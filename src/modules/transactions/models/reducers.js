const setTransactionsList = (state, transactionsList) => {
    return {
    ...state,
    transactionsList,
    };
};

const setMerchants = (state, merchants) => {
    return {
    ...state,
    merchants,
    };
};

const setCurrencies = (state, currencies) => {
    return {
    ...state,
    currencies,
    };
};
  
export default {
    reducers: {
        setTransactionsList,
        setMerchants,
        setCurrencies,
    },
};