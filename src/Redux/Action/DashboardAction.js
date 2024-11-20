import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetUserInfo() {
  return await AxiosConfig.post('/auth/getUserInfo',{
      })
}
