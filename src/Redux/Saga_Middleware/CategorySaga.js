import { call, takeEvery, put } from 'redux-saga/effects';
import { AddCategory ,GetCategory} from '../Action/CategoryAction';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function* handleaddCategory (args) {

    const response = yield call(AddCategory, args.payload);
   console.log("Response For Add category",response)
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
      const token = response.data;
      yield put({ type: 'ADD-CATEGORY', payload: { statusCode: response.status  || response.statusCode}});
      toast.success('Category Successfully Created', {
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




  function* CategorySaga() {
  yield takeEvery('ADD_CATEGORY', handleaddCategory);
   }

export default CategorySaga;
