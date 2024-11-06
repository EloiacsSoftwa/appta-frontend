import { call, takeEvery, put } from 'redux-saga/effects';
import { PosGetbyBarcode } from '../Action/sales_pos_Action';
import Cookies from 'universal-cookie';

function* handleBarcodeGetProduct(args) {

    const response = yield call(PosGetbyBarcode, args.payload);
  
    console.log("response",response);
    
    if (response && (response.status === 200 || response.code === 200)) {
        yield put({ 
          type: 'BARCODE_GET_PRODUCT_SUCCESS', 
          payload: { data: response.data, statusCode: response.status || response.code } 
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

function ExpireToken(response) {

    const code = response.data?.code ?? response.code;
    if (code === 204 || code === 403) {
      const cookies = new Cookies();
      cookies.set('access-denied', code, { path: '/' });
    }
  }

function* PosSaga() {
    yield takeEvery('BARCODE_GET_PRODUCT', handleBarcodeGetProduct);
}

export default PosSaga;
