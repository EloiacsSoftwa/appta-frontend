const initialState = {
   email: '',
   password: '',
   isLoggedIn: false,
   errorEmail: '',
   errorPassword: '',
   errorMessage: '',
   loginStatusCode: 0,
   loginFailedStatusCode:0,
     JWTtoken: '',
 };
 
 const LoginReducer = (state = initialState, action) => {
   switch (action.type) {
    // action.payload.response  
     case 'LOGIN-INFO':
       return {...state, loginStatusCode: action.payload.statusCode,JWTtoken: "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoxLCJpZCI6NywiZW1haWwiOiJhbGx3aW5AZ21haWwuY29tIiwic3ViIjoiYWxsd2luQGdtYWlsLmNvbSIsImlhdCI6MTczMDc4NTcxMiwiZXhwIjoxNzMwNzg3NTEyfQ.Br8QIvp7mF7L0I29Qo-C58C_Mk9ksRjxYA5AVOAJUAA" };
                    
     case 'REMOVE_LOGIN_STATUS_CODE':
      return{...state, loginStatusCode:0 }


     case 'LOGIN_FAILURE':
       return {...state,errorMessage: action.payload.message,loginFailedStatusCode: action.payload.statusCode };

       case 'REMOVE_LOGIN_FAILED_STATUS_CODE':
        return{...state, loginFailedStatusCode:0 }

              
       case 'LOGIN-SUCCESS':
        return { ...state, isLoggedIn: true }

        case 'LOG-OUT':
          return{...state, isLoggedIn: false }
     default:
       return state;
   }
 };
 
 export default LoginReducer;
 