import React, { useEffect, useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductDetails from "./Product Pages/ProductDetails";

function App() {


  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(true);



  console.log("state", state)

  const tokenAccessDenied = cookies.get('access-denied');
  const Appta_Login = localStorage.getItem("appTaLogin");


  useEffect(() => {
    if ( tokenAccessDenied == 403) {
      dispatch({ type: 'LOG-OUT' })
      setSuccess(false)
      cookies.set('access-denied', null, { path: '/', expires: new Date(0) });
    }
  }, [tokenAccessDenied])


  useEffect(() => {
    if (Appta_Login) {
      const decryptedData = CryptoJS.AES.decrypt(Appta_Login, 'abcd');
      const decryptedString = decryptedData.toString(CryptoJS.enc.Utf8);
      const parseData = JSON.parse(decryptedString);
      setSuccess(parseData)

    }
    setLoading(false);
  }, [Appta_Login])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-orange-600 border-gray-300 w-16 h-16"></div>
    </div>
  }

  return (
   <>

<ToastContainer />
    <Router>
      <Routes>
        {success || state.LoginReducer?.isLoggedIn ? (
          <>
            <Route path="/" element={<Sidebar />} />
            <Route path="*" element={<Navigate to="/" replace />} />

          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />

          </>
        )}
      </Routes>
    </Router>

    <ProductDetails/>
  
    </>
  );
}

export default App;
