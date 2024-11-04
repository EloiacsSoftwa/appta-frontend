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

    // Validate email
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    // Validate password
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
      {/* Right-side curved overlay */}
      <div className="greenlayer absolute top-32 right-0 h-full w-1/2 bg-[#779D7D] rounded-l-full" />

      {/* Left-side top curved overlay */}
      <div className="greenlayerLeft absolute left-0 h-full w-1/2 bg-[#779D7D] rounded-r-full" />

      <div className="relative bg-white shadow-lg rounded-lg w-full flex flex-col items-center md:flex-row md:max-w-6xl h-[520px]">
        {/* Logo Section */}
        <div className="bg-white rounded-l-lg flex items-center justify-center w-full h-[500px] md:w-1/2 p-8">
          <img src={ApptaLogo} alt="Logo" className="max-w-full h-full" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center w-full h-[520px] md:w-1/2 p-36 bg-[#779D7D] text-white">
          <h2 className="text-3xl font-bold mb-2">WELCOME BACK</h2>
          <p className="text-sm mb-4">Welcome back! Please enter your details.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

