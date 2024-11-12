import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Frame1 from '../Images/Sales/Frame.svg';
import Frame2 from '../Images/Sales/Frame2.svg';
import Frame3 from '../Images/Sales/Frame 3.svg';
import Frame4 from '../Images/Sales/Frame4.svg';
import Search from '../Images/Sales/Search.svg';
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Sales/Add Green.svg';
import Vector from '../Images/Icons/Vector.svg';
import SmallDot from '../Images/Sales/Smalldots.svg';
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';
import AddWareHouse from './AddWareHouse'

function Ware_House() {

    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [isAddStock, setIsAddStock] = useState(false);
    const [loading, setLoading] = useState(true);
    const [stock, setStock] = useState([]);
    const [isHovered, setIsHovered] = useState(false);


    const handleAddStock = () => {
        setShowModal(true);
        setIsAddStock(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsAddStock(false);
    };

    const reports = [
        { title: "Total Products", value: "2,420" },
        { title: "Vendors", value: "2,420" },
        { title: "Active Suppliers", value: "1,280" },
        { title: "Customer", value: "3,420", extra: "20%" },
    ];


    const tablestockItems = [
        {
            AdjustmentID: "SU85695",
            WareHouseName: "WareHouse1",
            Location: "Salem",
            Manager: "Mahesh",
            Contact: '+91 7894 236 457',
            Type: "Distribution"
        },
        {
            AdjustmentID: "SU85695",
            WareHouseName: "WareHouse2",
            Location: "Chennai",
            Manager: "Mark",
            Contact: '+91 7894 236 457',
            Type: "Regional"
        },
        {
            AdjustmentID: "SU85695",
            WareHouseName: "WareHouse3",
            Location: "Madurai",
            Manager: "Martin",
            Contact: '+91 7894 236 457',
            Type: "Retail"
        }
    ];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(stock && stock.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const stockItems = stock && stock.slice(indexOfFirstItem, indexOfLastItem);


    console.log("stockItems", stockItems)


    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='h-screen bg-white p-3 w-full'>

            <div className="flex justify-between items-center gap-2">


                <div>
                    <label className="font-semibold text-base text-black font-Manrope">
                        Inventory
                    </label>
                    <label className={`font-semibold text-base ${isAddStock ? 'text-black' : 'text-orange-600'} font-Manrope`}>
                        {isAddStock ? ' - Warehouse - ' : ' - Warehouse'}
                    </label>
                    {isAddStock && (
                        <label className="font-bold text-base text-orange-600 hover:text-black font-Manrope">
                            Add Ware House
                        </label>
                    )}
                </div>




                {isAddStock ? (
                    <div className="flex space-x-2">
                        <button className="bg-white text-orange-600 border border-orange-600 font-semibold py-0 px-3 rounded">Cancel</button>
                        <button className="bg-orange-600 text-black font-semibold  px-3 rounded" onClick={handleCloseModal}>
                            Save & Cancel
                        </button>
                    </div>
                ) : (

                    <div
                        onClick={handleAddStock}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`cursor-pointer flex items-center gap-2 text-orange-600 border border-orange-600 rounded px-2 py-1 hover:bg-orange-600 ${isAddStock ? 'mb-2' : 'mb-4'
                            }`}
                    >
                        <img
                            src={isHovered ? Vector : Add}
                            className="w-4 h-4"
                            alt="Add"
                        />
                        <label
                            className={`text-xs font-semibold font-Manrope ${isHovered ? 'text-black' : 'text-orange-600'
                                }`}
                        >
                        Add Ware House
                        </label>
                    </div>
                )}
            </div>


            {!isAddStock && (
                <>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
                        {reports.map((report, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-custom">
                                <p className="text-sm text-orange-600 font-semibold mb-4 font-Manrope">{report.title}</p>
                                <div className='flex justify-between items-center'>
                                    <p className="text-2xl font-medium text-black font-Manrope">{report.value}</p>
                                    {report.extra && <div className='text-emerald-500 text-sm font-semibold font-Manrope'>{report.extra}</div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-lg shadow-custom overflow-x-auto">
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <img src={Frame1} className='w-6 h-6 cursor-pointer' />
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                        <img src={Search} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border border-gray-200 rounded-full pl-10 py-1 text-sm focus:outline-none focus:border-orange-500"
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Frame2} className='w-6 h-6 cursor-pointer' />
                                <img src={Frame3} className='w-6 h-6 cursor-pointer' />
                                <img src={Frame4} className='w-6 h-6 cursor-pointer' />
                            </div>
                        </div>

                        <table className="w-full text-left mb-5">
                            <thead>

                                <tr className="bg-gray-200 border-0">
                                    <th className="p-1 flex items-center justify-start  h-full">
                                        <input
                                            type="checkbox"
                                            className="ml-5 mt-1 form-checkbox h-5 w-4 text-blue-600 border-neutral-500 font-Manrope cursor-pointer"
                                        />
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Ware House ID</div>
                                        </div>
                                    </th>

                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Ware House Name</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Location</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Manager</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2 pl-5">
                                            <div className="flex flex-col items-center pl-1">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Contact</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900 pl-5">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Type</div>
                                        </div>
                                    </th>

                                    <th className="p-1 font-semibold text-base text-neutral-900  min-w-[40px]"></th>
                                </tr>
                            </thead>


                            <tbody>
                                {tablestockItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="p-3 flex items-center">
                                            <img src={SmallDot} className="mr-1.5" />
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer" />
                                        </td>
                                        <td className="cursor-pointer pl-4 font-semibold text-sm font-Manrope text-neutral-900">{item.AdjustmentID}</td>
                                        <td className="font-semibold text-sm font-Manrope text-neutral-900 pl-4">{item.WareHouseName}</td>
                                        <td className="pl-6 font-semibold text-sm font-Manrope text-neutral-900">{item.Location}</td>
                                        <td className="pl-7 font-semibold text-sm font-Manrope text-neutral-900">{item.Manager}</td>
                                        <td className="pl-6 font-semibold text-sm font-Manrope text-neutral-900">{item.Contact}</td>
                                        <td className="pl-5 font-semibold text-sm font-Manrope text-start">{item.Type}
                                        </td>
                                        <td className="p-2 text-gray-500 cursor-pointer w-8"><img src={Dot} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex items-center justify-center space-x-3 mt-10 mb-5">
                            <ArrowLeft2 className='cursor-pointer' size="16" color="#797979" onClick={handlePrevClick} />
                            <span className="font-bold text-neutral-900 text-xs">
                                <span className="font-bold text-xs text-neutral-900">{String(currentPage).padStart(2, '0')}</span> of {totalPages.toString().padStart(2, '0')}
                            </span>
                            <ArrowRight2 className='cursor-pointer' size="16" color="#797979" onClick={handleNextClick} />
                        </div>
                    </div>

                </>
            )}

            {isAddStock && <AddWareHouse />}
        </div>
    );
}

export default Ware_House;

