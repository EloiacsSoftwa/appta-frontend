import { call, takeEvery, put, take } from 'redux-saga/effects';
import { Category, SubCategory, AddProductDetails, AddBrand, GetProduct, getAllUnitsCall, getFreebie, getProductDetailsbyid } from '../Action/AddProductAction';
import { GET_BRANDS_API_CALL, GET_BRANDS_API_RESPONSE, GET_ALL_UNITS_API_CALL, GET_ALL_UNITS_API_RESPONSE, GET_PRODUCT_SIZE_API_CALL, GET_PRODUCT_SIZE_API_RESPONSE } from '../../utils/Constant';
import { getAllBrands, getProductSizes } from '../Action/AddProductAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';


function* Sub_Category(args) {

  const response = yield call(SubCategory, args.payload);
  console.log("response for subCategory", response)
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'GET_SUBCATEGORY', payload: { response: response.data.data, statusCode: response.status || response.code } });

  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}

// Category

function* MainCategory(args) {

  const response = yield call(Category, args.payload);
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'GET_CATEGORY', payload: { response: response.data.data, statusCode: response.status || response.code } });

  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}

function* GetFreebieName(args) {

    const response = yield call(getFreebie, args.payload);
    if (response.status === 200 || response.code === 200) {
      yield put({ type: 'GET_FREEBIE_NAME', payload: { response: response.data.data, statusCode: response.status || response.code } });
  
    }
    else {
      yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
    }
    if (response) {
      ExpireToken(response)
    }
  }


function* getAllBrandsAPIRequest(args) {
  const response = yield call(getAllBrands, args.payload);

  if (response.status === 200 || response.code === 200) {
    yield put({ type: GET_BRANDS_API_RESPONSE, payload: { response: response.data.data, statusCode: response.status || response.code } });

  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}

function* AddProduct_Details(args) {

  const response = yield call(AddProductDetails, args.payload);
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'ADD_PRODUCT_DETAILS', payload: { response: response.data, statusCode: response.status || response.code } });

  }
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}


function* handleAddBrand(args) {
  const response = yield call(AddBrand, args.payload);
  const toastStyle = {
    backgroundColor: "#fff",
    color: '#38B000',
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


  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'ADD_BRAND', payload: { response: response.data, statusCode: response.status || response.code } });
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
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}



function* handleGetProduct() {

  const response = yield call(GetProduct);
  if (response.status === 200 || response.code === 200) {
    yield put({ type: 'GET_PRODUCT', payload: { response: response.data.data, statusCode: response.status || response.code } });

  }
  // if (response.status === 403 || response.statusCode === 403)
  else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
  if (response) {
    ExpireToken(response)
  }
}

function* getAllUnits() {
  const response = yield call(getAllUnitsCall);
  if (response.status === 200 && response.data.code === 200) {
    yield put({type: GET_ALL_UNITS_API_RESPONSE, payload: response.data.data})
  }else {
    yield put({ type: 'ERROR', payload: { statusCode: response.status || response.code } });
  }
}


function ExpireToken(response) {

  const code = response.data?.code ?? response.code;
  if ( code === 403) {
    const cookies = new Cookies();
    cookies.set('access-denied', code, { path: '/' });
  }
}

function* getProductDetails(action) {
  try {
    const { productName } = action.payload;
    console.log("Fetching product details for:", productName);

    // Call API with the correct parameter
    const response = yield call(getProductDetailsbyid, productName);

    if (response.status === 200 || response.code === 200) {
      yield put({
        type: 'GET_PRODUCT_DETAILS_BY_ID',
        payload: { response: response.data, statusCode: response.status || response.code }
      });
    } else {
      yield put({
        type: 'ERROR',
        payload: { statusCode: response.status || response.code }
      });
    }

    if (response) {
      ExpireToken(response);
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    yield put({ type: 'ERROR', payload: { statusCode: error.status || error.code } });
  }
}

function* getAllProductSizes() {
  const response = yield call(getProductSizes);

  if (response.status == 200 && response.data.code == 200) {
    yield put({
      type: GET_PRODUCT_SIZE_API_RESPONSE,
      payload: response.data.data 
    });
  }
}


function* AddProductSaga() {
  yield takeEvery('GETSUBCATEGORY', Sub_Category);
  yield takeEvery('GETCATEGORY', MainCategory);
  yield takeEvery('ADDPRODUCTDETAILS', AddProduct_Details);
  yield takeEvery(GET_BRANDS_API_CALL, getAllBrandsAPIRequest)
  yield takeEvery('ADDBRAND', handleAddBrand);
  yield takeEvery('GETPRODUCT', handleGetProduct);
  yield takeEvery(GET_ALL_UNITS_API_CALL, getAllUnits);
//   GET_FREEBIE_NAME
  yield takeEvery('GETFREEBIENAME', GetFreebieName);
   //   GET_GET_PRODUCT_BY_NAME
  yield takeEvery('GET_PRODUCT_BY_NAME',getProductDetails);
  yield takeEvery(GET_PRODUCT_SIZE_API_CALL, getAllProductSizes)

}

export default AddProductSaga;
