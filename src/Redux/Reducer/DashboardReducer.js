const initialState = {

    getUserInfoStatusCode: 0,
    UserInfo: [],
  };
  
  const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'GET_USER':
        return { ...state, UserInfo: action.payload.response, getUserInfoStatusCode: action.payload.statusCode };
  
      case 'REMOVE_GET_USER_INFO_STATUS_CODE':
        return { ...state, getUserInfoStatusCode: 0 }
  
      default:
        return state;
    }
  };
  
  export default DashboardReducer;
  