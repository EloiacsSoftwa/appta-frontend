import { call, takeEvery, put } from 'redux-saga/effects';
import {GetSupplierList,AddSupplierList} from '../Action/SupplierAction'
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function* handleAddSupplier(args) {

    const response = yield call(AddSupplierList, args.payload);
   console.log("Response For Supplier ",response)

    if (response.status === 200 || response.code === 200) {
           yield put({ type: 'ADD_SUPPLIER', payload: {response:response.data , statusCode: response.status  || response.code}});
           toast.success('Supplierr Successfully Created', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeButton: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
    else{
        yield put({ type: 'ERROR', payload: {response:response.data.message , statusCode: response.status  || response.code}});

    }
    

    if (response) {
        ExpireToken(response)
   }


  } 


function* handleGetSupplier() {

    const response = yield call(GetSupplierList);
    console.log("response",response)
    if (response.status === 200 || response.code === 200) {
      yield put({ type: 'GET_SUPPLIER', payload: {response:response.data.data , statusCode: response.status || response.code }});
                }
       else {
    
    }
  if (response) {
    ExpireToken(response)
   }
  }  



  function ExpireToken(response) {

    const code = response.data?.code ?? response.code;
    if ( code === 403) {
      const cookies = new Cookies();
      cookies.set('access-denied', code, { path: '/' });
    }
  }


  function* SupplierSaga() {
  yield takeEvery('GETSUPPLIER', handleGetSupplier);
  yield takeEvery('ADDSUPPLIER',  handleAddSupplier);
   }

export default SupplierSaga;
