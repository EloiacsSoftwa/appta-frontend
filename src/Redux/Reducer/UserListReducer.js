const initialState = {

  getUserStatusCode: 0,
  addUserStatusCode: 0,
  UserList: [],
};

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_USER':
      return { ...state, UserList: action.payload.response, getUserStatusCode: action.payload.statusCode };

    case 'REMOVE_GET_USER_STATUS_CODE':
      return { ...state, getUserStatusCode: 0 }

    case 'ADD_USER':
      return { ...state, addUserStatusCode: action.payload.statusCode };

    case 'REMOVE_ADD_USER_STATUS_CODE':
      return { ...state, addUserStatusCode: 0 }

    default:
      return state;
  }
};

export default UserListReducer;
