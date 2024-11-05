import { call, takeEvery, put } from 'redux-saga/effects';
import { PosGetbyBarcode } from '../Action/sales_pos_Action';
import Cookies from 'universal-cookie';



function* handleBarcodeGetProduct(args) {

    const response = yield call(PosGetbyBarcode, args.payload);
   console.log("Response For pos ",response)
    if (response.status === 200 || response.statusCode === 200) {
      const token = response.data;
      yield put({ type: 'BARCODE-GET-PRODUCT', payload: {response:response.data.data , statusCode: response.status  || response.statusCode}});
            
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.statusCode}});

    }

    
    if (response) {
      ExpireToken(response)
   }

  } 


  function ExpireToken(response) {
   if (response.data.code === 204) {
     const message = response.data.code
     const cookies = new Cookies()
     cookies.set('access-denied', message, { path: '/' });
   }

}


  function* PosSaga() {
  yield takeEvery('BARCODE_GET_PRODUCT', handleBarcodeGetProduct);
   }

export default PosSaga;
