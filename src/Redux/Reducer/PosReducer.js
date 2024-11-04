const initialState = {
    BarcodeproductData: [],
    barcodeStatuscode: 0,
   
  };
  
  const PosReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case 'BARCODE-GET-PRODUCT':
        return {...state, BarcodeproductData:action.payload.response,  barcodeStatuscode: action.payload.statusCode};
                     
      case 'REMOVE_GET_BARCODE_PRODUCT_STATUS_CODE':
       return{...state, barcodeStatuscode:0 }
 
 
    
      default:
        return state;
    }
  };
  
  export default PosReducer;
  