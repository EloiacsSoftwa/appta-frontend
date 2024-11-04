import { call, takeEvery, put } from 'redux-saga/effects';
import { login } from '../Action/LoginAction';
import Cookies from 'universal-cookie';

function* Login(args) {

    const response = yield call(login, args.payload);

    if (response.status === 200) {
      const token = response.data;
      yield put({
        type: 'LOGIN-INFO',
        payload: { response: { token }, statusCode: response.status }
      });
      
      const cookies = new Cookies();
      cookies.set('authToken', token, { path: '/' });

    }
    else{
      yield put({ type: 'LOGIN_FAILURE', payload: { message: 'Login failed', statusCode: 403 } });
    }
  } 

function* LoginSaga() {
  yield takeEvery('LOGIN_REQUEST', Login);
}

export default LoginSaga;
