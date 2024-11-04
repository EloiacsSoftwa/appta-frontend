import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';



function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga()
])
}
export default RootSaga;