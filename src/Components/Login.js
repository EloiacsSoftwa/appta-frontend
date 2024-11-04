import React, { useState, useEffect } from "react";
import ApptaLogo from '../Images/Icons/Appta Logo.svg';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.LoginReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 4) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch({ type: 'LOGIN_REQUEST', payload: { email, password } });
    }
  };

  useEffect(() => {
    if (loginState.loginStatusCode == 200) {

      dispatch({ type: 'LOGIN-SUCCESS'})

      const encryptData = CryptoJS.AES.encrypt(JSON.stringify(true), 'abcd');
      localStorage.setItem("appTaLogin", encryptData.toString());



      const token = loginState.JWTtoken;
      if (token) {
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' });
        console.log("Token stored in cookies:", cookies.get('token'));
        
      }
      setErrorMessage('');
      setErrors({});
setTimeout(()=>{
  dispatch({ type: 'REMOVE_LOGIN_STATUS_CODE' });
},2000)
     

    }  
  }, [loginState.loginStatusCode]);


useEffect(()=>{
if(loginState.loginFailedStatusCode == 403){
  setErrorMessage('Invalid email or password. Please try again.');
  const cookies = new Cookies();
  cookies.remove('token', { path: '/' });
  setTimeout(()=>{
    dispatch({ type: 'REMOVE_LOGIN_FAILED_STATUS_CODE' });
  },2000)
       

}
},[loginState.loginFailedStatusCode])


  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#c1d3c5] p-4 overflow-hidden">
      <div className="greenlayer absolute top-32 right-0 h-full w-1/2 bg-[#779D7D] rounded-l-full" />
      <div className="greenlayerLeft absolute left-0 h-full w-1/2 bg-[#779D7D] rounded-r-full" />

      <div className="relative bg-white shadow-lg rounded-lg w-full flex flex-col md:flex-row items-center md:max-w-6xl h-auto md:h-[520px]">
        <div className="bg-white rounded-l-lg flex items-center justify-center w-full md:w-1/2 h-[500px] md:h-full p-8">
          <img src={ApptaLogo} alt="Logo" className="max-w-full h-full" />
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:h-full bg-[#779D7D] text-white ">
        <div className="lg:p-32">
          <h2 className="text-3xl mb-3 font-poppins font-medium text-center">WELCOME BACK</h2>
          <p className="text-sm mb-4 font-poppins font-normal text-center ">Welcome back! Please enter your details.</p>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium font-manrope ">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-md bg-[#8ea992] placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium font-manrope">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-md bg-[#8ea992] placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 mt-6"
            >
              Sign in
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
