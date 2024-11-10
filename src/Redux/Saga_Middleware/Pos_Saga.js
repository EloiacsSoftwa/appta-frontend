import { call, takeEvery, put, take } from 'redux-saga/effects';
import { PosGetbyBarcode ,CreateOrder, addOrderItemsApiCall} from '../Action/sales_pos_Action';
import Cookies from 'universal-cookie';
import { ADD_ORDER_ITEMS_API_CALL, ADD_ORDER_ITEMS_API_RESPONSE } from '../../utils/Constant';

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
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'CREATE_ORDER', payload: { response: response.data.data, statusCode: response.status || response.code } });
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

      console.log(response)
      if (response.status === 200 && response.data.code === 200) {
        yield put({type: ADD_ORDER_ITEMS_API_RESPONSE, orderItems: response.data.data.orderItems})
      }
  }

function* PosSaga() {
    yield takeEvery('BARCODE_GET_PRODUCT', handleBarcodeGetProduct);
    yield takeEvery('CREATE-ORDER', handleCreateOrder);
    yield takeEvery(ADD_ORDER_ITEMS_API_CALL, addOrderItems)
}

export default PosSaga;
