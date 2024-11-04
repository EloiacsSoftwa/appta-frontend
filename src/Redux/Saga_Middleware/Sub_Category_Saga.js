import { call, takeEvery, put } from 'redux-saga/effects';
import { AddSubCategory } from '../Action/Sub_Category_Action';
import Cookies from 'universal-cookie';

function* handleSubCategory(args) {

    const response = yield call(AddSubCategory, args.payload);
   console.log("Response For subcategory ",response)
    if (response.status === 200 || response.statusCode === 200) {
           yield put({ type: 'ADD_SUB_CATEGORY', payload: {response:response.data , statusCode: response.status  || response.statusCode}});
            
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.statusCode}});

    }
    
    if (response) {
      refreshToken(response)
   }

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


  function* SubCategorySaga() {
  yield takeEvery('ADDSUBCATEGORY', handleSubCategory);
   }

export default SubCategorySaga;
