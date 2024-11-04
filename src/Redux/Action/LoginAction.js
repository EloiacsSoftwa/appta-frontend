import config from '../../WebService/Config';
import axios from 'axios'


export  function login(payload) {

 return  axios.post(`${config.apiBaseUrl}/auth/login`, payload).then(response=>response).catch(error=>{console.log(error,"catch")
    return error
 });
 
}