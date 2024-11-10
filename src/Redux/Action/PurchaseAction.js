import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetPurchaseList() {
  return await AxiosConfig.post('/purchase/getPurchase',{
      })
}


export async function AddPurchaseList(purchase) {
    return await AxiosConfig.post('/purchase/addPurchase',purchase,{
        data:purchase
        })
  }