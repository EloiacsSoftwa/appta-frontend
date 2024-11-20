import { call, takeEvery, put, take } from 'redux-saga/effects';
import { PosGetbyBarcode ,CreateOrder, addOrderItemsApiCall ,getPaymentType,
   DeletePosProduct, Holdorder,InitializePayment ,CompleteOrder ,getsalesProduct,getHoldOrders,Addordercustomername} from '../Action/sales_pos_Action';
import Cookies from 'universal-cookie';
import { ADD_ORDER_ITEMS_API_CALL, ADD_ORDER_ITEMS_API_RESPONSE} from '../../utils/Constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function* handleBarcodeGetProduct(args) {

    const response = yield call(PosGetbyBarcode, args.payload);
  
    console.log("response",response.code);
    
    if (response && (response.code === 200 || response.status === 200 || response.data.code === 200   )) {
        yield put({ 
          type: 'BARCODE_GET_PRODUCT_SUCCESS', 
          payload: { data: response.data, statusCode: response.status || response.data.code ||  response.code  } 
        });
    } else {
        yield put({ 
          type: 'BARCODE_GET_PRODUCT_FAILURE', 
          payload: { message: response ? response.message : "Unable to fetch product data", statusCode: response?.status || 500 } 
        });
    }

    if (response) {
        ExpireToken(response);
    }
}


function* handleCreateOrder() {
  
  const response = yield call(CreateOrder);
       console.log("resposne",response)
  if (response.status === 200 || response.code === 200 || response.data.code === 200) {
    yield put({ type: 'CREATE_ORDER', payload: { response: response.data.data, statusCode: response.status || response.code } });
  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}

function* handleGetPaymentType() {
  
  const response = yield call(getPaymentType);
       console.log("resposne",response)
  if (response.status === 200 || response.code === 200 || response.data.code === 200) {
    yield put({ type: 'GET_PAYMENT_TYPE', payload: { response: response.data.data, statusCode: response.status || response.code } });
  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}




// function* handleCompleteOrder() {
  
//   const response = yield call(CompleteOrder);
//        console.log("resposne",response)
//   if (response.status === 200 || response.code === 200 || response.data.code === 200) {
//     yield put({ type: 'COMPLETE_ORDER', payload: { response: response.data.data, statusCode: response.status || response.code } });
//   }
//   else {
//     yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
//   }
//   if (response) {
//     ExpireToken(response)
//   }
// }



function* handleDeletePosProduct(args) {

  const response = yield call(DeletePosProduct, args.payload);
  console.log("Response ",response)

 const toastStyle = {
  backgroundColor: "#fff",
  color:'#38B000',
  width: "100%",
  borderRadius: "60px",
  height: "20px",
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: 14,
  textAlign: "start",
  display: "flex",
  alignItems: "center", 
  padding: "10px",
 
};
  if (response.status === 200 || response.code === 200 || response.data.code === 200) {
         yield put({ type: 'DELETE_POS_PRODUCT', payload: {orderItems: response.data.data.orderItems, statusCode: response.status  || response.code ||response.data.code }});
         toast.success("OrderItems removed successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: toastStyle,
        });
  }
  else{
      yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.code}});

  }
  

  if (response) {
      ExpireToken(response)
 }


}


function* handleHoldOrder({ payload }) {
  try {
    
    const response = yield call(Holdorder, payload);

    const toastStyle = {
      backgroundColor: "#fff",
      color: '#38B000',
      width: "100%",
      borderRadius: "60px",
      height: "20px",
      fontFamily: "Manrope",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "start",
      display: "flex",
      alignItems: "center", 
      padding: "10px",
    };

    
    const successCode = response?.status === 200 || response.code === 200 || response?.data?.code === 200;
    if (successCode) {
      yield put({ type: 'ORDER_HOLD', payload: { statusCode: response?.status || response?.data?.code || response.code  } });
      toast.success("Order hold success", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: toastStyle,
      });
    } else {
      yield put({ type: 'ERROR', payload: { response: response?.data?.message, statusCode: response?.status || response?.data?.code } });
    }

   
    if (response) {
      ExpireToken(response);
    }
  } catch (error) {
    console.error("Failed to hold order:", error.message);
    yield put({ type: 'ERROR', payload: { response: error.message } });
    // toast.error("Order hold failed", {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: true,
    //   style: { ...toastStyle, color: 'red' },
    // });
  }
}


function* handleInitializePayments({ payload }) {
  try {
    
    const response = yield call(InitializePayment, payload);
    console.log("Response:", response);


    
    const successCode = response?.status === 200 || response.code === 200 || response?.data?.code === 200;
    if (successCode) {
      yield put({ type: 'ORDER_INITIALIZE_PAYMENT', payload: {total_amount :response.data.data , statusCode: response?.status || response?.data?.code || response.code  } });
      
    } else {
      yield put({ type: 'ERROR', payload: { response: response?.data?.message, statusCode: response?.status || response?.data?.code } });
    }

   
    if (response) {
      ExpireToken(response);
    }
  } catch (error) {
    console.error("Failed to hold order:", error.message);
    yield put({ type: 'ERROR', payload: { response: error.message } });
  }
}

function* handlecompleteOrderPayment(action) {
  try {
    const { orderId, paymentType } = action.payload;
    const response = yield call(CompleteOrder, { orderId, paymentType });
    console.log("response",response);
    
    const successCode = response?.status === 200 || response.code === 200 || response?.data?.code === 200;

    if (successCode) {
      yield put({ type: 'COMPLETE_ORDER_PAYMENT', 

        payload: {Invoice_url: response.data.data.invoiceUrl ,statusCode: response?.status || response?.data?.code || response.code  } });

    } 
    else {
      yield put({ type: 'ERROR', payload: { message: response?.data?.message || "Unexpected error occurred", 
                                           statusCode: response?.status || response?.data?.code || response.code} 
      });
    }
    if (response) {
      ExpireToken(response)
    }
  } 
  catch (error) {
    yield put({ type: 'ERROR', payload: { message: error.response?.data?.message || error.message, 
                                         statusCode: error.response?.status || error.response?.data?.code } 
    });
  }
}

function* handleGetSalesProduct() {

  const response = yield call(getsalesProduct);
  console.log('response for sales product',response);
  
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'GET_SALES_PRODUCT', payload: { response: response.data.data, statusCode: response.status || response.code } });

  }
  // if (response.status === 403 || response.statusCode === 403)
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}


function* handleAddustomerforOrder(args) {
  const response = yield call(Addordercustomername, args.payload);
 

  if (response.status === 200 || response.code === 200 || response.data.code === 200) {
    yield put({ type: 'ADD_CUSTOMER_FOR_ORDER', payload: {  statusCode: response.status || response.code || response.data.code} });
    
  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}



function* handleGetHoldOrder() {
  
  const response = yield call(getHoldOrders);
       console.log("resposne",response)
  if (response.status === 200 || response.code === 200 || response.data.code === 200) {
    yield put({ type: 'GET_HOLD_ORDER_LIST', payload: { response: response.data.data, statusCode: response.status || response.code } });
  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}
















function ExpireToken(response) {

    const code = response.data?.code ?? response.code;
    if ( code === 403) {
      const cookies = new Cookies();
      cookies.set('access-denied', code, { path: '/' });
    }
  }

  function* addOrderItems(data) {
      const response = yield call(addOrderItemsApiCall, data.payload)

      if (response.status === 200 && response.data.code === 200  || response.code === 200) {
        yield put({type: ADD_ORDER_ITEMS_API_RESPONSE, payload: { orderItems: response.data.data.orderItems, statusCode: response?.status || response?.data?.code || response.code  }})
      }
      if (response) {
        ExpireToken(response)
      }
  }

function* PosSaga() {
    yield takeEvery('BARCODE_GET_PRODUCT', handleBarcodeGetProduct);
    yield takeEvery('CREATE-ORDER', handleCreateOrder);
    yield takeEvery('GET-PAYMENT-TYPE', handleGetPaymentType);
    // yield takeEvery('COMPLETE-ORDER', handleCompleteOrder);
    yield takeEvery('DELETE-POS-PRODUCT', handleDeletePosProduct);
    yield takeEvery('ORDER-HOLD', handleHoldOrder);
    yield takeEvery('ORDER-INITIALIZE-PAYMENT', handleInitializePayments);
    yield takeEvery('COMPLETE-ORDER-PAYMENT', handlecompleteOrderPayment);
    yield takeEvery('GET-SALES-PRODUCT', handleGetSalesProduct);
    yield takeEvery('ADD-CUSTOMER-FOR-ORDER', handleAddustomerforOrder);
    yield takeEvery(ADD_ORDER_ITEMS_API_CALL, addOrderItems)
    yield takeEvery('GETHOLDORDERLIST', handleGetHoldOrder)

}

export default PosSaga;
