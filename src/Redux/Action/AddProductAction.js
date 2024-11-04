import AxiosConfig from '../../WebService/AxiosConfig';
import config from '../../WebService/Config';
import axios from 'axios'

export function Category(payload) {

    return  AxiosConfig.post(`/category/getCategory`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }



export async function SubCategory(payload) {
   return await AxiosConfig.post('/subCategory/getSubCategory', {
   }, {
      params: {
         subCategory: payload
      }
   })
 }


// /products/addProduct
export  function AddProductDetails(payload) {

    return  AxiosConfig.post(`/products/addProduct`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }

export function getAllBrands(payloads) {
   let params = {}
   if (payloads != undefined || payloads != null) {
      params['brand'] = payloads
   }
   return AxiosConfig.post(`/brand/getBrand`, {}, {
      params: params
   }).then(response=>response).catch(error=>{console.log(error,"catch")
      return error
   });
}