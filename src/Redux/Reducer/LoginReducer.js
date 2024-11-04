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
     case 'LOGIN-INFO':
       return {...state, loginStatusCode: action.payload.statusCode,JWTtoken: action.payload.response };
                    
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
 