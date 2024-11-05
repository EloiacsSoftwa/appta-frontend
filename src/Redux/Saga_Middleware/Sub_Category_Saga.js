import { call, takeEvery, put } from 'redux-saga/effects';
import { AddSubCategory } from '../Action/Sub_Category_Action';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function* handleSubCategory(args) {

    const response = yield call(AddSubCategory, args.payload);
   console.log("Response For subcategory ",response)
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
           yield put({ type: 'ADD_SUB_CATEGORY', payload: {response:response.data , statusCode: response.status  || response.statusCode}});
           toast.success('Subcategory Successfully Created', {
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
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.statusCode}});

    }
    
=
//     if (response) {
//     //   refreshToken(response)
//    }


  } 


  function refreshToken(response) {
    if (response.data && response.data) {
       const refreshTokenGet = response.data
       console.log("refreshTokenGet", refreshTokenGet)
       const cookies = new Cookies()
       cookies.set('token', refreshTokenGet, { path: '/' });
    } 
    else if (response.data == 'Token expired') {
       const message = response.data
       const cookies = new Cookies()
       cookies.set('access-denied', message, { path: '/' });
 
    }
 
 }


  function* SubCategorySaga() {
  yield takeEvery('ADDSUBCATEGORY', handleSubCategory);
   }

export default SubCategorySaga;
