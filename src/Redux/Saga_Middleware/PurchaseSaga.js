import { call, takeEvery, put } from 'redux-saga/effects';
import { GetPurchaseList,AddPurchaseList } from '../Action/PurchaseAction';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function* handleAddPurchaseList(action) {

    const response = yield call(AddPurchaseList,action.payload);
   console.log("Response  ",response)
      if (response.status === 200 || response.code === 200 || response.data.code === 200) {
           yield put({ type: 'ADD_PURCHASE', payload: {response:response.data , statusCode: response.status  || response.code || response.data.code}});
           
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.code || response.data.code}});

    }
    

    if (response) {
        ExpireToken(response)
   }


  } 

  function* handlePurchaseList() {

    const response = yield call(GetPurchaseList);
   console.log("Response  ",response)
      if (response.status === 200 || response.code === 200 || response.data.code === 200) {
           yield put({ type: 'GET_PURCHASE', payload: {response:response.data.data , statusCode: response.status  || response.code || response.data.code}});
           
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.code || response.data.code}});

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


  function* PurchaseSaga() {
  yield takeEvery('GETPURCHASE', handlePurchaseList);
  yield takeEvery('ADDPURCHASE', handleAddPurchaseList);

  
   }

export default PurchaseSaga;
