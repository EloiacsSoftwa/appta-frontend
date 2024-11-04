import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';
import SubCategorySaga from './Sub_Category_Saga';



function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga(),
  SubCategorySaga(),
])
}
export default RootSaga;