import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetSupplierList() {
  return await AxiosConfig.post('/supplier/getSupplier',{
      })
}


export async function AddSupplierList(supplier) {
  return await AxiosConfig.post('/supplier/insertSupplier',supplier,{
    data:supplier
      })
}

