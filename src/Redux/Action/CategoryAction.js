import config from '../../WebService/Config';
import axios from 'axios'
import AxiosConfig from "../../WebService/AxiosConfig"




export async function AddCategory(payload) {
  return await AxiosConfig.post('/category/insertCategory', payload);
}


  export async function GetCategory() {
    return await AxiosConfig.post('/category/getCategory', {
    })
  }