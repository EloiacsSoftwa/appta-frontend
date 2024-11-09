const initialState = {
  BarcodeproductData: [],
  barcodeStatuscode: 0,
  Order_Id:'',
  CreateOrderStatuscode :0,
  Errormsg: ''
};

const PosReducer = (state = initialState, action) => {
  console.log("action",action);
  
  switch (action.type) {
 
    case 'CREATE_ORDER':
      return { ...state, Order_Id: action.payload.response.orderId, CreateOrderStatuscode: action.payload.statusCode }
    case 'REMOVE_CREATE_ORDER_STATUS_CODE':
      return { ...state, CreateOrderStatuscode: 0 }

    case 'BARCODE_GET_PRODUCT_SUCCESS':
      return {...state, BarcodeproductData:  action.payload.data, barcodeStatuscode: action.payload.statusCode,
      };
    

    case 'BARCODE_GET_PRODUCT_FAILURE':
      return {...state, Errormsg: action.payload.message,
      };

    case 'REMOVE_GET_BARCODE_PRODUCT_STATUS_CODE':
      return { ...state, barcodeStatuscode: 0 };

    case 'CLEAR_BARCODE_GET_PRODUCT_FAILURE':
      return { ...state, Errormsg: '' };

    default:
      return state;
  }
};

export default PosReducer;
