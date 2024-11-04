import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Eloiacs from "../Images/Icons/Eloiacs.svg";
import Dashboard from "../Images/Icons/Dashboard.svg";
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
import { useDispatch, useSelector } from 'react-redux';
import CryptoJS from "crypto-js";



function App() {

 
  const dispatch = useDispatch();


  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('Product List');
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setIsSubmenuOpen({});
  };

  const toggleSubmenu = (menu) => {
    setIsSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const renderSubmenuItems = (items) =>
    items.map((item) => (
      <li
        key={item}
        className="flex items-start text-xs font-normal font-manrope"
        onClick={() => setSelectedMenu(item)}
      >
        <img src={Elipse14} alt="Submenu Icon" className="mr-8 mt-1" /> {item}
      </li>
    ));

  const renderMenuItem = (icon, title, submenuItems) => (
    <li key={title}>
      <div
        onClick={() => toggleSubmenu(title)}
        className="flex items-center cursor-pointer text-white pl-4 hover:bg-gray-700 rounded-md"
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
    {
      icon: Dashboard,
      title: "Dashboard",
      submenu: [],
    },
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
      submenu: ["Stock Transfer", "Ware house"],
    },
    {
      icon: Contact,
      title: "Contact",
      submenu: ["Customer", "Supplier", "User"],
    },
  ];


console.log("selectedMenu",selectedMenu)


const handleLogout = () => {
  dispatch({type: 'LOG-OUT' })
  const encryptData = CryptoJS.AES.encrypt(JSON.stringify(false), 'abcd');
  localStorage.setItem("appTaLogin", encryptData.toString());
}




  return (
    <div className="flex h-screen">
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
          <img src={Elipsepic} alt="Profile Picture" className="w-9 h-9 md:w-10 md:h-10"  onClick={handleLogout}/>
        </div>
</div>
        
        
        {/* Title content when a sidebar item is clicked */}
<div className="overflow-y-auto h-full ">


        {selectedMenu === 'Dashboard' && (
          <div className="bg-white  mt-2">
           <h5>Dashboard Page</h5>
          </div>
        )}



        {selectedMenu === 'Product List' && (
          <div className="bg-white  mt-2">
            <ProductList />
          </div>
        )}
          {selectedMenu === 'POS' && (
          <div className="bg-white  mt-2">
            <Pos />
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
            <Expense_List/>
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





        </div>
        
      </div>
      </div>
    
  );
}

export default App;

