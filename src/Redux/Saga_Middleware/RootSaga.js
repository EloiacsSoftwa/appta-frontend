import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';
import CategorySaga  from './CategorySaga';


function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga(),
  CategorySaga()
])
}
export default RootSaga;