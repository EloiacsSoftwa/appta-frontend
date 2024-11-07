import AxiosConfig from '../../WebService/AxiosConfig';
import config from '../../WebService/Config';
import axios from 'axios'

export function Category(payload) {

    return  AxiosConfig.post(`/category/getCategory`, 
        {
        }, {
           params: {
            categoryName: payload
           }
        }

    ).then(response=>response).catch(error=>{console.log(error,"catch")
       return error
    });
    
   }
   
// export  function SubCategory(payload) {


export async function SubCategory(payload) {
   return await AxiosConfig.post('/subCategory/getSubCategory', {
   }, {
      params: {
         subCategory: payload
      }
   })
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
//    }



   export async function AddProductDetails(payload) {
      return await AxiosConfig.post('/products/addProduct',payload ,{
         data:payload
      })
    }



    

    export async function AddBrand(payload) {
      return await AxiosConfig.post('/brand/insertBrand',payload ,{
         data:payload
      })
    }

    export async function GetProduct() {
      return await AxiosConfig.post('/products/getProducts',{
              })
    }

    export async function getAllUnitsCall() {
      return await AxiosConfig.post('/unit/getUnit')
    }

    export async function getFreebie(payload) {
        return await AxiosConfig.post('/products/getProductsByBarcodeOrName', {
        }, {
           params: {
            inputText : payload
           }
        })
      }