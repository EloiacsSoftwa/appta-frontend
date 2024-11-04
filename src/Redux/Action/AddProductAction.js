import AxiosConfig from '../../WebService/AxiosConfig';
import config from '../../WebService/Config';
import axios from 'axios'

export function Category(payload) {

    return  AxiosConfig.post(`/category/getCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }
   
// export  function SubCategory(payload) {

 return  axios.post(`${config.apiBaseUrl}/subCategory/getSubCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
    return error
 });
 
// }


export async function SubCategory() {
   return await AxiosConfig.post('/subCategory/getSubCategory', {
   })
 }


// /products/addProduct
export  function AddProductDetails(payload) {

    return  AxiosConfig.post(`/products/addProduct`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }