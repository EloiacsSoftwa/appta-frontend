import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetPurchaseList() {
  return await AxiosConfig.post('/Purchase-List',{
      })
}


export async function AddPurchaseList(purchase) {
    return await AxiosConfig.post('/Purchase-List',purchase,{
        data:purchase
        })
  }