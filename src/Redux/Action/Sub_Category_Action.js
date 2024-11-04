import AxiosConfig from "../../WebService/AxiosConfig"


// export async function GetAsset() {
//   return await AxiosConfig.get('/all_assets',{
//       })
// }




export async function AddSubCategory(subCategory) {
    return await AxiosConfig.post('/subCategory/insertSubCategory',subCategory,{
        data:subCategory
        })
  }