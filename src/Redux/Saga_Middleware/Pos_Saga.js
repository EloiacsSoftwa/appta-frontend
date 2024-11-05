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

    
   //  if (response) {
   //    refreshToken(response)
   // }

  } 


  function refreshToken(response) {
    if (response.data && response.data) {
       const refreshTokenGet = response.data
       console.log("refreshTokenGet", refreshTokenGet)
       const cookies = new Cookies()
       cookies.set('token', refreshTokenGet, { path: '/' });
    } 
    else if (response.data == 'Token expired') {
       const message = response.data
       const cookies = new Cookies()
       cookies.set('access-denied', message, { path: '/' });
 
    }
 
 }


  function* PosSaga() {
  yield takeEvery('BARCODE_GET_PRODUCT', handleBarcodeGetProduct);
   }

export default PosSaga;
