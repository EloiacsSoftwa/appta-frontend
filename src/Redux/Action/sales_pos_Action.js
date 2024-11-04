import config from '../../WebService/Config';
import axios from 'axios'


// export  function PosGetbyBarcode(payload) {

//  return  axios.post(`${config.apiBaseUrl}/products/getProductByBarcode`, payload)
//  .then(response=>response)
//  .catch(error=>{console.log(error,"catch")
//     return error
//  });
 
// }

export async function PosGetbyBarcode(payload) {
    return await axios.post(`${config.apiBaseUrl}/products/getProductByBarcode`, payload, {
        params: payload
    })
  }