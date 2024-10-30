import { useState } from "react";
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

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("");
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
        <ul className="pl-5 mt-2 space-y-1 text-gray-300">{renderSubmenuItems(submenuItems)}</ul>
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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${isExpanded ? "w-64" : "w-20"} bg-black text-white flex flex-col transition-width duration-300 h-full overflow-y-auto`}
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
                <img src={icon} alt={`${title} Logo`} className="w-5 h-5" />
                {isExpanded && <span className="ml-6 text-base font-normal font-manrope">{title}</span>}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-zinc-300 h-14">
        <div className="flex justify-end items-center mr-5 mt-2">
          <img src={Notifications} alt="Notification Icon" className="mr-2 md:mr-5" />
          <p className="mr-4 font-semibold text-sm font-manrope">Jony Larrence</p>
          <img src={Elipsepic} alt="Profile Picture" className="w-9 h-9 md:w-10 md:h-10" />
        </div>

        {/* Title content when a sidebar item is clicked */}
        {selectedMenu && (
          <div className="bg-white p-4 mt-4">
            <h3 className="text-xl font-bold">Title: {selectedMenu}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
