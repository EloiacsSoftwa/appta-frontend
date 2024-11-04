import { useEffect } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Cookies from 'universal-cookie';

function App() {


  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const cookies = new Cookies();

console.log("state",state)

const tokenAccessDenied = cookies.get('access-denied');


useEffect(( )=>{
if(tokenAccessDenied == 'Token expired'){
dispatch({ type: 'LOG-OUT'})

}
},[tokenAccessDenied])


  return (
   
    <Router>
      <Routes>
        {state.LoginReducer?.isLoggedIn ? (
          <>
            <Route path="/" element={<Sidebar/>} />
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
  );
}

export default App;
