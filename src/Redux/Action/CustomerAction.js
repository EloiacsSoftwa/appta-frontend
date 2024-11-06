import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetCustomerList() {
  return await AxiosConfig.post('/customer/getCustomer',{
      })
}


export async function AddCustomer(customer) {
  return await AxiosConfig.post('/customer/addCustomer',customer,{
    data:customer
      })
}

