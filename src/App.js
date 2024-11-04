// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// // import Cookies from 'js-cookie';
// import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';



// import './App.css';
// import 'tailwindcss/tailwind.css';
// import Sidebar from './Components/Sidebar';
// import Login from './Components/Login';
// import Bill_of_Material from './Product Pages/Bill_of_Material';
// import AddProduct from './Product Pages/AddProduct';

// function App() {


//   const state = useSelector(state => state);
//   const dispatch = useDispatch();
//   const cookies = new Cookies();

// console.log("state",state)

// const tokenAccessDenied = cookies.get('access-denied');


// useEffect(( )=>{
// if(tokenAccessDenied == 'Token expired'){
// dispatch({ type: 'LOG-OUT'})

// }
// },[tokenAccessDenied])


//   return (
//     <div className="App">
  
//     {/* <Sidebar /> */}
//     <Login/>
//     {/* <Bill_of_Material/> */}
//     {/* <AddProduct/> */}
//     </div>
//   );
// }

// export default App;


import { useEffect } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import Bill_of_Material from './Product Pages/Bill_of_Material';
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
   
    // <Router>
    //   <Routes>
    //     {state.LoginReducer?.isLoggedIn ? (
    //       <>
    //         <Route path="/" element={<Sidebar/>} />
    //          <Route path="*" element={<Navigate to="/" replace />} />
           
    //       </>
    //     ) : (
    //       <>
    //         <Route path="/" element={<Login />} />
    //         <Route path="*" element={<Navigate to="/" replace />} />
            
    //       </>
    //     )}
    //   </Routes>
    // </Router>
    <div>
    <Bill_of_Material/>
    <AddProduct/>
    </div>
  );
}

export default App