const initialState = {
   email: '',
   password: '',
   isLoggedIn: false,
   errorEmail: '',
   errorPassword: '',
   errorMessage: '',
   statusCode: 0,
   loginInformation: [],
   JWTtoken: '',
 };
 
 const LoginReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'LOGIN-INFO':
       return {
         ...state,
         JWTtoken: action.payload.response.token, 
         isLoggedIn: true,
         statusCode: action.payload.statusCode,
       };
     
     case 'LOGIN_FAILURE':
       return {
         ...state,
         errorMessage: action.payload.message,
         statusCode: action.payload.statusCode,
         isLoggedIn: false,
       };
 
     default:
       return state;
   }
 };
 
 export default LoginReducer;
 