import config from '../../WebService/Config';
import axios from 'axios'
import AxiosConfig from '../../WebService/AxiosConfig';


export  function Category(payload) {

    return  axios.post(`${config.apiBaseUrl}/category/getCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }
   
// export  function SubCategory(payload) {

//  return  axios.post(`${config.apiBaseUrl}/subCategory/getSubCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
//     return error
//  });
 
// }


export async function SubCategory() {
   return await AxiosConfig.post('/subCategory/getSubCategory', {
   })
 }


// /products/addProduct
export  function AddProductDetails (payload) {

    return  axios.post(`${config.apiBaseUrl}/products/addProduct`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }