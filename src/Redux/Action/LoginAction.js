import AxiosConfig from "../../WebService/AxiosConfig";




export  function login(payload) {

 return  AxiosConfig.post('/auth/login', payload).then(response=>response).catch(error=>{console.log(error,"catch")
    return error
 });

  
  
 
}