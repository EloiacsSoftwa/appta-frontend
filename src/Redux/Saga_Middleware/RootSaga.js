import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';
import CategorySaga  from './CategorySaga';
import SubCategorySaga from './Sub_Category_Saga';
import AddProductSaga from './AddProductSaga';



function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga(),
  CategorySaga(),
  AddProductSaga(),
  SubCategorySaga(),

])
}
export default RootSaga;