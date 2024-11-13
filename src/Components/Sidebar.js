import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Eloiacs from "../Images/Icons/Eloiacs.svg";
// import DashboardIcon from "../Images/Icons/DashboardIcon.svg";
import ProductIcon from "../Images/Icons/Product icon.svg";
import Brand from "../Images/Icons/Brand.svg";
import Sales from "../Images/Icons/Sales.svg";
import Purchase from "../Images/Icons/Purchase icon.svg";
import Inventory from "../Images/Icons/Inventory.svg";
import Contact from "../Images/Icons/Contact icon.svg";
import DownArrow from "../Images/Icons/DownArrow.svg";
import RightArrow from "../Images/Icons/RightArrow.svg";
import Elipse14 from "../Images/Icons/Ellipse 14.svg";
import Elipsepic from "../Images/Icons/Ellipse pic.svg";
import Notifications from "../Images/Icons/Notifications.svg";
import Orangedot from "../Images/Icons/Orangedot.svg";
// import Dashboard from "../Components/Dashboard";
import ProductList from '../Product Pages/Product_List_Table'
import Sales_List from "../Sales/Sales_List";
import Purchase_List from "../Purchase/Purchase_List";
import Expense_List from "../Sales/Expense_List";
import Invoice_List from '../Sales/Invoice';
import Quotation from "../Sales/Quotation";
import CategoryList from '../Product Pages/Category_List';
import BrandList from "../Brand Pages/BrandList";
import Pos from "../Sales/Pos";
import SubCategory_List from "../Product Pages/SubCategory_List";
import Customer_List from "../Contact/Customer_List";
import SupplierTable from '../Contact/SupplierTable';
import CryptoJS from "crypto-js";
import Stock_Adjustment_List from '../Inventry/Stock_Adjustment_List';
import Stock_Available from '../Inventry/Stock_Availability';
import StockTransform from "../Inventry/Stock_Transform";
import Ware_House from "../Inventry/Ware_House";
import Userlist from "../Contact/User_List";
import Swal from "sweetalert2"; 
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 



function App() {


  const dispatch = useDispatch();


  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('Product List');
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const [isHide, setIsHide] = useState(true)
  const state = useSelector(state => state);


  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setIsSubmenuOpen({});
  };

  const toggleSubmenu = (menu) => {
    setIsSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };






const handleSelectedMenu = (title) => {
setSelectedMenu(title)
localStorage.setItem('currentPage', title);
}


// useEffect(() => {
//   setSelectedMenu(localStorage.getItem('currentPage'));
// }, [selectedMenu]);



useEffect(() => {
  if (state.LoginReducer?.isLoggedIn) {
    setSelectedMenu('Product List')
  }
}, [state.LoginReducer?.isLoggedIn])

 const renderSubmenuItems = (items) =>
    items.map((item) => (
      <li
        key={item}
        className="flex items-center gap-8 text-xs font-normal font-manrope "
        onClick={() => handleSelectedMenu(item)}
      >
        
        <div
        className={`w-2 h-2 rounded-full ${
          selectedMenu === item ? 'bg-orange-600' : 'bg-gray-200'
        }`}
      ></div>

         {item}
      </li>
    ));

  const renderMenuItem = (icon, title, submenuItems) => (
    <li key={title} className="">
      <div
        onClick={() => toggleSubmenu(title)}
        className="flex items-center cursor-pointer text-white pl-4 pt-1.5 pb-1.5 hover:bg-gray-700 rounded-md"
      >
        <img src={icon} alt={`${title} Icon`} className="w-5 h-5" />
        {isExpanded && <span className="ml-6 text-base font-normal font-manrope">{title}</span>}
        {isExpanded && (
          <span className="ml-auto">
            <img src={isSubmenuOpen[title] ? DownArrow : RightArrow} alt="Toggle Submenu Icon" />
          </span>
        )}
      </div>
      {isSubmenuOpen[title] && (
        <ul className="pl-5 mt-2 space-y-1 text-gray-300 cursor-pointer">{renderSubmenuItems(submenuItems)}</ul>
      )}
    </li>
  );

  const sidebarItems = [
    // {
    //   icon: DashboardIcon,
    //   title: "Dashboard",
    //   submenu: [],
    // },
    {
      icon: ProductIcon,
      title: "Product",
      submenu: ["Product List", "Category List", "Sub Category"],
    },
    {
      icon: Brand,
      title: "Brand",
      submenu: ["Brand List"],
    },
    {
      icon: Sales,
      title: "Sales",
      submenu: ["POS", "Sales List", "Invoice", "Quotation"],
    },
    {
      icon: Purchase,
      title: "Purchase",
      submenu: ["Purchase List"],
    },
    {
      icon: Inventory,
      title: "Inventory",
      submenu: ["Stock Adjustment", "Stock Transfer", "Ware house", "Stock Availability"],
    },
    {
      icon: Contact,
      title: "Contact",
      submenu: ["Customer", "Supplier", "User"],
    },
  ];


  console.log("selectedMenu", selectedMenu)


  const handleLogout = () => {
    dispatch({ type: 'LOG-OUT' })
    // const encryptData = CryptoJS.AES.encrypt(JSON.stringify(false), 'abcd');
    // localStorage.setItem("appTaLogin", encryptData.toString());
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to log out?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'No, keep me logged in!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();  
        sessionStorage.clear();  
        window.location.href = "/login"; 
       console.log("Logged out successfully");
      }
    });
  };


  useEffect(()=>{
    if(selectedMenu == 'Stock Availability'){
      setIsHide(false)
    }

  },[selectedMenu])



  const handleCloseForStock = () =>{
    setIsHide(true)
    setSelectedMenu('Product List')
    localStorage.setItem('currentPage', 'Product List');

  }

  useEffect(()=>{
    if(selectedMenu == 'POS'){
      setIsHide(false)
    }

  },[selectedMenu])



  const handleCloseForPos = () =>{
    setIsHide(true)
    setSelectedMenu('Sales List')
    localStorage.setItem('currentPage', 'Sales List');

  }

  return (
    <div className="flex h-screen">
      {isHide ? <>
      {/* Sidebar */}
      <div
        className={`${isExpanded ? "w-64" : "w-20"} bg-black text-white flex flex-col transition-width duration-300 h-screen overflow-y-auto fixed `}
      >
        <div className={`${isExpanded ? "px-6 " : "px-2"} flex items-center justify-between py-4`}>
          <div className="flex items-center space-x-2">
            <img src={Eloiacs} alt="Eloiacs Logo" className={`${isExpanded ? "w-8" : "w-6"}`} />
            {isExpanded && <p className="text-orange-600 font-black text-xl">Eloiacs</p>}
          </div>
          <button onClick={toggleSidebar} className="px-1 py-1 rounded-full bg-orange-800 text-white">
            {isExpanded ? <HiOutlineArrowLeft /> : <HiOutlineArrowRight />}
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-2 mt-4">
          {sidebarItems.map(({ icon, title, submenu }) =>
            submenu.length > 0 ? renderMenuItem(icon, title, submenu) : (
              <li
                key={title}
                className="flex items-center pl-4 cursor-pointer"
                onClick={() => setSelectedMenu(title)}
              >
                <img src={icon} alt={`${title} Logo`} className="w-5 h-5 cursor-pointer" />
                {isExpanded && <span className="ml-6 text-base font-normal font-manrope cursor-pointer">{title}</span>}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className={`flex-1 overflow-y-auto ${isExpanded ? "ml-64" : "ml-20"}`}>
      <div className="flex justify-end items-center bg-zinc-300 h-14 sticky">
      <div className="flex items-center mr-5">
        <img src={Notifications} alt="Notification Icon" className="mr-2 md:mr-5" />
        <p className="mr-4 font-semibold text-sm font-manrope">Jony Larrence</p>
        <div className="flex items-center space-x-2">
        <img 
            src={Elipsepic} 
            alt="Profile Picture" 
            className="w-9 h-9 md:w-10 md:h-10"
          />
          <FontAwesomeIcon 
            icon={faSignOutAlt} 
            className="text-lg cursor-pointer"
            onClick={handleLogout} 
          />
        </div>
      </div>
    </div>
       
   


        {/* Title content when a sidebar item is clicked */}
        <div className="overflow-y-auto h-full ">


          {/* {selectedMenu === 'Dashboard' && (
            <div className="bg-white  mt-2">
             <Dashboard />
            </div>
          )} */}



          {selectedMenu === 'Product List' && (
            <div className="bg-white  mt-2">
              <ProductList />
            </div>
          )}
        
          {selectedMenu === 'Sales List' && (
            <div className="bg-white  mt-2">
              <Sales_List />
            </div>
          )}
          {selectedMenu === 'Invoice' && (
            <div className="bg-white  mt-2">
              <Invoice_List />
            </div>
          )}
          {selectedMenu === 'Quotation' && (
            <div className="bg-white  mt-2">
              <Quotation />
            </div>
          )}
          {selectedMenu === 'Purchase List' && (
            <div className="bg-white mt-2">
              <Purchase_List />
            </div>
          )}
          {selectedMenu === 'Expense List' && (
            <div className="bg-white  mt-2">
              <Expense_List />
            </div>
          )}


          {selectedMenu === 'Category List' && (
            <div className="bg-white  mt-2">
              <CategoryList />
            </div>
          )}
          {selectedMenu === 'Sub Category' && (
            <div className="bg-white  mt-2">

              <SubCategory_List />
            </div>
          )}
          {selectedMenu === 'Brand List' && (
            <div className="bg-white mt-2">
              <BrandList />
            </div>
          )}

          {selectedMenu === 'Customer' && (
            <div className="bg-white mt-2">
              <Customer_List />
            </div>
          )}
           {selectedMenu === 'Supplier' && (
            <div className="bg-white mt-2">
              <SupplierTable />
            </div>
          )}

        {selectedMenu === 'Stock Adjustment' && (
            <div className="">
              <Stock_Adjustment_List />
            </div>
          )}

        {selectedMenu === 'Stock Transfer' && (
            <div className="">
              <StockTransform />
            </div>
          )}
           {selectedMenu === 'User' && (
            <div className="">
              <Userlist />
            </div>
          )}


{selectedMenu === 'Ware house' && (
            <div className="">
             <Ware_House/>
            </div>
          )}

        </div>

      </div>
      </>
: 
  <>
      {selectedMenu === 'Stock Availability' && (
            <div className="bg-white mt-2">
              <Stock_Available/>
            </div>
          )}

{selectedMenu === 'POS' && (
            <div className="bg-white  mt-2">
              <Pos  handleClosed={handleCloseForPos}/>
            </div>
          )}
 </>
        }

       

    </div>

  );
}

export default App;




// import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
// import Eloiacs from "../Images/Icons/Eloiacs.svg";
// import Dashboard from "../Images/Icons/Dashboard.svg";
// import ProductIcon from "../Images/Icons/Product icon.svg";
// import Brand from "../Images/Icons/Brand.svg";
// import Sales from "../Images/Icons/Sales.svg";
// import Purchase from "../Images/Icons/Purchase icon.svg";
// import Inventory from "../Images/Icons/Inventory.svg";
// import Contact from "../Images/Icons/Contact icon.svg";
// import DownArrow from "../Images/Icons/DownArrow.svg";
// import RightArrow from "../Images/Icons/RightArrow.svg";
// import Elipse14 from "../Images/Icons/Ellipse 14.svg";
// import Elipsepic from "../Images/Icons/Ellipse pic.svg";
// import Notifications from "../Images/Icons/Notifications.svg";
// import Orangedot from "../Images/Icons/Orangedot.svg";
// import ProductList from '../Product Pages/Product_List_Table';
// import Sales_List from "../Sales/Sales_List";
// import Purchase_List from "../Purchase/Purchase_List";
// import Expense_List from "../Sales/Expense_List";
// import Invoice_List from '../Sales/Invoice';
// import Quotation from "../Sales/Quotation";
// import CategoryList from '../Product Pages/Category_List';
// import BrandList from "../Brand Pages/BrandList";
// import Pos from "../Sales/Pos";
// import SubCategory_List from "../Product Pages/SubCategory_List";
// import Customer_List from "../Contact/Customer_List";
// import CryptoJS from "crypto-js";
// import ProductDetails from "../Product Pages/ProductDetails";

// function App() {
//   const dispatch = useDispatch();

//   const [isExpanded, setIsExpanded] = useState(true);
//   const [selectedMenu, setSelectedMenu] = useState('Product List');
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState({});

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//     setIsSubmenuOpen({});
//   };

//   const toggleSubmenu = (menu) => {
//     setIsSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const renderSubmenuItems = (items) =>
//     items.map((item) => (
//       <li
//         key={item}
//         className="flex items-start text-xs font-normal font-manrope"
//         onClick={() => setSelectedMenu(item)}
//       >
//         <img
//           src={selectedMenu === item ? Orangedot : Elipse14}
//           alt="Submenu Icon"
//           className="mr-6 mt-1"
//         />
//         {item}
//       </li>
//     ));

//   const renderMenuItem = (icon, title, submenuItems) => (
//     <li key={title}>
//       <div
//         onClick={() => toggleSubmenu(title)}
//         className="flex items-center cursor-pointer text-white pl-4 hover:bg-gray-700 rounded-md"
//       >
//         <img src={icon} alt={`${title} Icon`} className="w-5 h-5" />
//         {isExpanded && <span className="ml-6 text-base font-normal font-manrope">{title}</span>}
//         {isExpanded && (
//           <span className="ml-auto">
//             <img src={isSubmenuOpen[title] ? DownArrow : RightArrow} alt="Toggle Submenu Icon" />
//           </span>
//         )}
//       </div>
//       {isSubmenuOpen[title] && (
//         <ul className="pl-5 mt-2 space-y-1 text-gray-300 cursor-pointer">{renderSubmenuItems(submenuItems)}</ul>
//       )}
//     </li>
//   );

//   const sidebarItems = [
//     {
//       icon: Dashboard,
//       title: "Dashboard",
//       submenu: [],
//     },
//     {
//       icon: ProductIcon,
//       title: "Product",
//       submenu: ["Product List", "Category List", "Sub Category"],
//     },
//     {
//       icon: Brand,
//       title: "Brand",
//       submenu: ["Brand List"],
//     },
//     {
//       icon: Sales,
//       title: "Sales",
//       submenu: ["POS", "Sales List", "Invoice", "Quotation"],
//     },
//     {
//       icon: Purchase,
//       title: "Purchase",
//       submenu: ["Purchase List"],
//     },
//     {
//       icon: Inventory,
//       title: "Inventory",
//       submenu: ["Stock Transfer", "Ware house"],
//     },
//     {
//       icon: Contact,
//       title: "Contact",
//       submenu: ["Customer", "Supplier", "User"],
//     },
//   ];

//   console.log("selectedMenu", selectedMenu);

//   const handleLogout = () => {
//     dispatch({ type: 'LOG-OUT' });
//     const encryptData = CryptoJS.AES.encrypt(JSON.stringify(false), 'abcd');
//     localStorage.setItem("appTaLogin", encryptData.toString());
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`${isExpanded ? "w-64" : "w-20"} bg-black text-white flex flex-col transition-width duration-300 h-screen overflow-y-auto fixed `}
//       >
//         <div className={`${isExpanded ? "px-6 " : "px-2"} flex items-center justify-between py-4`}>
//           <div className="flex items-center space-x-2">
//             <img src={Eloiacs} alt="Eloiacs Logo" className={`${isExpanded ? "w-8" : "w-6"}`} />
//             {isExpanded && <p className="text-orange-600 font-black text-xl">Eloiacs</p>}
//           </div>
//           <button onClick={toggleSidebar} className="px-1 py-1 rounded-full bg-orange-800 text-white">
//             {isExpanded ? <HiOutlineArrowLeft /> : <HiOutlineArrowRight />}
//           </button>
//         </div>
//         <ul className="flex flex-col space-y-4 p-2 mt-4">
//           {sidebarItems.map(({ icon, title, submenu }) =>
//             submenu.length > 0 ? renderMenuItem(icon, title, submenu) : (
//               <li
//                 key={title}
//                 className="flex items-center pl-4 cursor-pointer"
//                 onClick={() => setSelectedMenu(title)}
//               >
//                 <img src={icon} alt={`${title} Logo`} className="w-5 h-5 cursor-pointer" />
//                 {isExpanded && <span className="ml-6 text-base font-normal font-manrope cursor-pointer">{title}</span>}
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 overflow-y-auto ${isExpanded ? "ml-64" : "ml-20"}`}>

//         <div className="flex justify-end items-center bg-zinc-300 h-14 sticky">
//           <div className="flex items-center mr-5">
//             <img src={Notifications} alt="Notification Icon" className="mr-2 md:mr-5" />
//             <p className="mr-4 font-semibold text-sm font-manrope">Jony Larrence</p>
//             <img src={Elipsepic} alt="Profile Picture" className="w-9 h-9 md:w-10 md:h-10" onClick={handleLogout} />
//           </div>
//         </div>

//         {/* Title content when a sidebar item is clicked */}
//         <div className="overflow-y-auto h-full ">
//           {selectedMenu === 'Dashboard' && (
//             <div className="bg-white  mt-2">
//               <h5>Dashboard Page</h5>
//             </div>
//           )}

//           {selectedMenu === 'Product List' && (
//             <div className="bg-white  mt-2">
//               <ProductList />
//             </div>
//           )}
//           {selectedMenu === 'POS' && (
//             <div className="bg-white  mt-2">
//               <Pos />
//             </div>
//           )}
//           {selectedMenu === 'Sales List' && (
//             <div className="bg-white  mt-2">
//               <Sales_List />
//             </div>
//           )}
//           {selectedMenu === 'Invoice' && (
//             <div className="bg-white  mt-2">
//               <Invoice_List />
//             </div>
//           )}
//           {selectedMenu === 'Quotation' && (
//             <div className="bg-white  mt-2">
//               <Quotation />
//             </div>
//           )}
//           {selectedMenu === 'Purchase List' && (
//             <div className="bg-white mt-2">
//               <Purchase_List />
//             </div>
//           )}
//           {selectedMenu === 'Expense List' && (
//             <div className="bg-white  mt-2">
//               <Expense_List />
//             </div>
//           )}

//           {selectedMenu === 'Category List' && (
//             <div className="bg-white  mt-2">
//               <CategoryList />
//             </div>
//           )}
//           {selectedMenu === 'Sub Category' && (
//             <div className="bg-white  mt-2">
//               <SubCategory_List />
//             </div>
//           )}
//           {selectedMenu === 'Brand List' && (
//             <div className="bg-white  mt-2">
//               <BrandList />
//             </div>
//           )}
//           {selectedMenu === 'Product Details' && (
//             <div className="bg-white  mt-2">
//               <ProductDetails />
//             </div>
//           )}
//           {selectedMenu === 'Customer' && (
//             <div className="bg-white  mt-2">
//               <Customer_List />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
