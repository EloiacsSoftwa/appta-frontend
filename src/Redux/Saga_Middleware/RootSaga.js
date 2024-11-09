import {all} from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import PosSaga from './Pos_Saga';
import CategorySaga  from './CategorySaga';
import SubCategorySaga from './Sub_Category_Saga';
import AddProductSaga from './AddProductSaga';
import CustomerSaga from './CustomerSaga';
import PurchaseSaga from './PurchaseSaga'


function* RootSaga() {
    
yield all([
  LoginSaga(),
  PosSaga(),
  CategorySaga(),
  AddProductSaga(),
  SubCategorySaga(),
  CustomerSaga(),
  PurchaseSaga(),

])
}
export default RootSaga;