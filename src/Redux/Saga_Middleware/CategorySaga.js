import { call, takeEvery, put } from 'redux-saga/effects';
import { AddCategory ,GetCategory} from '../Action/CategoryAction';
import Cookies from 'universal-cookie';



function* handleaddCategory (args) {

    const response = yield call(AddCategory, args.payload);
   console.log("Response For pos ",response)
    if (response.status === 200 || response.statusCode === 200) {
      const token = response.data;
      yield put({ type: 'ADD-CATEGORY', payload: { statusCode: response.status  || response.statusCode}});
            
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.statusCode}});

    }

    
    if (response) {
      // refreshToken(response)
   }

  } 

  function* handleGetCategoryList (action){
    const response = yield call (GetCategory, action.payload);
    
    if (response.status === 200 || response.statusCode === 200){
       yield put ({type : 'GET-CATEGORY' ,payload:{response: response.data.data, statusCode:response.status || response.statusCode}})
    }
 
    else {
       yield put ({type:'ERROR', payload:response.data.message})
    }
    if(response){
      // refreshToken(response)
   }
}


  function refreshToken(response) {
    console.log("response",response);
    
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


  function* CategorySaga() {
  yield takeEvery('ADD_CATEGORY', handleaddCategory);
  yield takeEvery('GET_CATEGORY', handleGetCategoryList);
   }

export default CategorySaga;
