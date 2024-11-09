const initialState = {

    getPurchaseStatusCode: 0,
    PurchaseList: [],
    addPurchaseStatusCode: 0
};

const PurchaseReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PURCHASE':
            return { ...state, PurchaseList: action.payload.response, getPurchaseStatusCode: action.payload.statusCode };

        case 'REMOVE_GET_PURCHASE_STATUS_CODE':
            return { ...state, getPurchaseStatusCode: 0 }

        case 'ADD_PURCHASE':
            return { ...state, addPurchaseStatusCode: action.payload.statusCode }
        case 'REMOVE_ADD_PURCHASE':
            return { ...state, addPurchaseStatusCode: 0 }
        default:
            return state;
    }
};

export default PurchaseReducer;
