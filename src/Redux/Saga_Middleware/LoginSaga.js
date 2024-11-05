import { call, takeEvery, put } from 'redux-saga/effects';
import { login } from '../Action/LoginAction';
import Cookies from 'universal-cookie';

function* Login(args) {

    const response = yield call(login, args.payload);
    console.log("Response For Login ",response)
    if (response.status === 200 || response.statusCode === 200) {
      const token = response.data;
      yield put({ type: 'LOGIN-INFO', payload: {response:response.data , statusCode: response.status  || response.statusCode}});
            
    }
    else if (response.status === 403 || response.statusCode === 403){
      yield put({ type: 'LOGIN_FAILURE', payload: { message: 'Login failed', statusCode:response.status  || response.statusCode  } });
    }

  
  } 


 

  function* LoginSaga() {
  yield takeEvery('LOGIN_REQUEST', Login);
}

export default LoginSaga;
