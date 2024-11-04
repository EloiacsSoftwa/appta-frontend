import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import AddProductSaga from './AddProductSaga';




function* RootSaga() {
    
yield all([
  LoginSaga(),
  AddProductSaga()

])
}
export default RootSaga;