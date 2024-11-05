import { call, takeEvery, put } from 'redux-saga/effects';
import { Category,SubCategory,AddProductDetails,AddBrand } from '../Action/AddProductAction';
import { GET_BRANDS_API_CALL, GET_BRANDS_API_RESPONSE } from '../../utils/Constant';
import { getAllBrands } from '../Action/AddProductAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';


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
  if (response) {
    ExpireToken(response)
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
    if (response) {
      ExpireToken(response)
   }
  } 

  function* getAllBrandsAPIRequest(args) {
    const response = yield call(getAllBrands, args.payload);

    if (response.status === 200 || response.statusCode === 200) {
      yield put({ type: GET_BRANDS_API_RESPONSE, payload: {response:response.data.data , statusCode: response.status  || response.statusCode}});
            
    }
       else {
      yield put({ type: 'ERROR', payload: { statusCode:response.status  || response.statusCode  } });
    }
    if (response) {
      ExpireToken(response)
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
    if (response) {
      ExpireToken(response)
   }
  } 


  function* handleAddBrand(args) {
    const response = yield call(AddBrand , args.payload);

    const toastStyle = {
      backgroundColor: "#fff",
      color:'#38B000',
      width: "100%",
      borderRadius: "60px",
      height: "20px",
      fontFamily: "Manrope",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "start",
      display: "flex",
      alignItems: "center", 
      padding: "10px",
     
    };


    if (response.status === 200 || response.statusCode === 200) {
      yield put({ type: 'ADD_BRAND', payload: {response:response.data , statusCode: response.status  || response.statusCode}});
      toast.success('Brand Successfully Created', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: toastStyle,
      });   
    }
       else {
      yield put({ type: 'ERROR', payload: { statusCode:response.status  || response.statusCode  } });
    }
    if (response) {
      ExpireToken(response)
   }
  } 


  function ExpireToken(response) {
    if (response.data.code === 204) {
      const message = response.data.code
      const cookies = new Cookies()
      cookies.set('access-denied', message, { path: '/' });
    }

}



  function* AddProductSaga() {
  yield takeEvery('GETSUBCATEGORY', Sub_Category);
  yield takeEvery('GETCATEGORY', MainCategory);
  yield takeEvery('ADDPRODUCTDETAILS', AddProduct_Details);
  yield takeEvery(GET_BRANDS_API_CALL, getAllBrandsAPIRequest)
  yield takeEvery('ADDBRAND', handleAddBrand);

//   ADD_PRODUCT_DETAILS
}

export default AddProductSaga;
