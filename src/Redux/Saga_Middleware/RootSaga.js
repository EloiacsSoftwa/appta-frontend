import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';
import SubCategorySaga from './Sub_Category_Saga';
import AddProductSaga from './AddProductSaga';


function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga(),
  AddProductSaga(),
  SubCategorySaga(),
])
}
export default RootSaga;