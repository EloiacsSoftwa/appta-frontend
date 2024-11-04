import { call, takeEvery, put } from 'redux-saga/effects';
import { Category,SubCategory,AddProductDetails } from '../Action/AddProductAction';
// import Cookies from 'universal-cookie';

function* Sub_Category(args) {

    const response = yield call(SubCategory, args.payload);
    console.log("response for subCategory",response)
    if (response.status === 200 || response.statusCode === 200) {
      yield put({ type: 'GET_SUBCATEGORY', payload: {response:response.data.data , statusCode: response.status  || response.statusCode}});
            
    }
    // if (response.status === 403 || response.statusCode === 403)
    else {
      yield put({ type: 'ERROR', payload: { statusCode:response.status  || response.statusCode  } });
    }
  }  

// Category

function* MainCategory(args) {

    const response = yield call(Category, args.payload);
    if (response.status === 200 || response.statusCode === 200) {
      yield put({ type: 'GET_CATEGORY', payload: {response:response.data.data, statusCode: response.status  || response.statusCode}});
            
    }
       else {
      yield put({ type: 'ERROR', payload: { statusCode:response.status  || response.statusCode  } });
    }
  } 

  function* AddProduct_Details(args) {

    const response = yield call(AddProductDetails, args.payload);
    if (response.status === 200 || response.statusCode === 200) {
      yield put({ type: 'ADD_PRODUCT_DETAILS', payload: {response:response.data , statusCode: response.status  || response.statusCode}});
            
    }
       else {
      yield put({ type: 'ERROR', payload: { statusCode:response.status  || response.statusCode  } });
    }
  } 
  function* AddProductSaga() {
  yield takeEvery('GETSUBCATEGORY', Sub_Category);
  yield takeEvery('GETCATEGORY', MainCategory);
  yield takeEvery('ADDPRODUCTDETAILS', AddProduct_Details);
//   ADD_PRODUCT_DETAILS
}

export default AddProductSaga;
