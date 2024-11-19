import AxiosConfig from "../../WebService/AxiosConfig"


export async function GetUserList() {
  return await AxiosConfig.post('/users/getUsers',{
      })
}

export async function AddUserList(user) {
  // console.log("State after API Call:", state);

  return await AxiosConfig.post('/users/insertUsers',user,{
    data:user
      })
}



