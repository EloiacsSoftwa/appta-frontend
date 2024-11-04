import AxiosConfig from '../../WebService/AxiosConfig';

export function Category(payload) {

    return  AxiosConfig.post(`/category/getCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }
   
export  function SubCategory(payload) {

 return  AxiosConfig.post(`/subCategory/getSubCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
    return error
 });
 
}

// /products/addProduct
export  function AddProductDetails(payload) {

    return  AxiosConfig.post(`/products/addProduct`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }