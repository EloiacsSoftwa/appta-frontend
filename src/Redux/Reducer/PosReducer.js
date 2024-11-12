import { ADD_ORDER_ITEMS_API_RESPONSE, RESET_PAYMENT_STATUS_CODE } from "../../utils/Constant";
const initialState = {
  BarcodeproductData: [],
  barcodeStatuscode: 0,
  Order_Id:'',
  CreateOrderStatuscode :0,
  CompleteOrderStatuscode :0,
  paymenttypestatuscode : 0,
  deleteposproductStatuscode : 0,
  OrderHoldproductStatuscode : 0,
  Errormsg: '',
  orderItems: [],
  PaymentType:[],
  totalPrice: 0,
  totalAmount: '',
  totalDiscount: 0,
  addorderItemsStatusCode :0,
  orderinitialiseStatusCode : 0,
  paymentordercompletedStatusCode : 0,
  Invoice_url:'',


const PosReducer = (state = initialState, action) => {
  console.log("action",action);
  
  
  switch (action.type) {
 
    case 'CREATE_ORDER':
      return { ...state, Order_Id: action.payload.response.orderId, CreateOrderStatuscode: action.payload.statusCode }
    case 'REMOVE_CREATE_ORDER_STATUS_CODE':
      return { ...state, CreateOrderStatuscode: 0 }


      case 'GET_PAYMENT_TYPE':
        return { ...state, PaymentType: action.payload.response, paymenttypestatuscode: action.payload.statusCode }
      case 'REMOVE_GET_PAYMENT_TYPE_STATUS_CODE':
        return { ...state, paymenttypestatuscode: 0 }

      // case 'COMPLETE_ORDER':
      //   return { ...state,  CompleteOrderStatuscode: action.payload.statusCode }
      // case 'REMOVE_COMPLETE_ORDER_STATUS_CODE':
      //   return { ...state, CompleteOrderStatuscode: 0 }

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

    case ADD_ORDER_ITEMS_API_RESPONSE: {
      return {...state, orderItems: action.payload.orderItems , addorderItemsStatusCode:action.payload.statusCode}
    }
    case 'REMOVE_ADD_ORDER_ITEMS_STATUS_CODE':
      return { ...state, addorderItemsStatusCode: 0 }


    case 'DELETE_POS_PRODUCT':
      return { ...state, orderItems: action.payload.orderItems,  deleteposproductStatuscode: action.payload.statusCode }
    case 'REMOVE_DELETE_POS_PRODUCT_STATUS_CODE':
      return { ...state, deleteposproductStatuscode: 0 }

      case 'ORDER_HOLD':
        return { ...state,  OrderHoldproductStatuscode: action.payload.statusCode, orderItems: [] }
      case 'REMOVE_ORDER_HOLD_STATUS_CODE':
        return { ...state, OrderHoldproductStatuscode: 0 }

        case 'ORDER_INITIALIZE_PAYMENT':
          return { ...state, totalAmount: action.payload.total_amount , orderinitialiseStatusCode: action.payload.statusCode }
        case 'REMOVE_ORDER_INITIALIZE_PAYMENT_STATUS_CODE':
          return { ...state, orderinitialiseStatusCode: 0 }

          case 'COMPLETE_ORDER_PAYMENT':
<<<<<<< HEAD
            return { ...state, Invoice_url:action.payload.Invoice_url, orderItems:[],  paymentordercompletedStatusCode: action.payload.statusCode }
=======

            return { ...state, Invoice_url:action.payload.Invoice_url,  paymentordercompletedStatusCode: action.payload.statusCode }
>>>>>>> 188be50c25fa8bddc2a83f918836e826c63fa461
          case 'REMOVE_COMPLETE_ORDER_PAYMENT_STATUS_CODE':
            return { ...state, paymentordercompletedStatusCode: 0 }


          case RESET_PAYMENT_STATUS_CODE:
            return { ...state, paymentordercompletedStatusCode: 0 }

    default:
      return state;
  }
};

export default PosReducer;
