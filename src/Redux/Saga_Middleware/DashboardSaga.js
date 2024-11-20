import { call, takeEvery, put } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import { GetUserInfo } from '../Action/DashboardAction';

function* handleGetUserInfo() {
const response = yield call(GetUserInfo);
    console.log("response",response)
    if (response.status === 200 || response.code === 200) {
      yield put({type: 'GET_USER', payload: {response:response.data.data,statusCode: response.status || response.code }});
                }
       else {
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

function* DashboardSaga (){
   yield takeEvery('GETUSERINFO',handleGetUserInfo);
}
export default DashboardSaga;