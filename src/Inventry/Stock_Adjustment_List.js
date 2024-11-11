import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import New_Stock_Adjustment from './New_Stock_Adjustment'

function Stock_Adjustment_List() {
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
            Date: "09-Sep-2024",
            WareHouse: "Salem",
            AdjustmentType: "Stock In",
            Reason: 'Return',
            Approval: "Approved"
        },
        {
            AdjustmentID: "SU85695",
            Date: "09-Aug-2024",
            WareHouse: "Chennai",
            AdjustmentType: "Stock Out",
            Reason: 'Return',
            Approval: "Approved"
        },
        {
            AdjustmentID: "SU85695",
            Date: "09-Aug-2024",
            WareHouse: "Madurai",
            AdjustmentType: "Stock In",
            Reason: 'Promotion',
            Approval: "Pending"
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

                <div className={`${isAddStock ? 'mb-0' : 'mb-4'}`}>
                    <label className={`font-semibold text-base ${isAddStock ? 'text-black' : 'text-orange-600'} font-Manrope`}>
                        {isAddStock ? 'Inventory' : 'Stock Adjustment'}
                    </label>
                    {isAddStock && (
                        <label className="font-bold text-base text-orange-600 hover:text-black font-Manrope">
                            - New Stock Adjustment
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
                            New Stock Adjustment
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
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Adjustment ID</div>
                                        </div>
                                    </th>

                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Date</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Ware House</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Adjustment Type</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Reason</div>
                                        </div>
                                    </th>
                                    <th className="p-1 font-semibold text-base text-neutral-900">
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="flex flex-col items-center">
                                                <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                            </div>
                                            <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Approval</div>
                                        </div>
                                    </th>


                                    {/* <th className="p-1 font-semibold text-base text-neutral-900  min-w-[40px]"></th> */}
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
                                        <td className="font-semibold text-sm font-Manrope text-neutral-900">{item.Date}</td>
                                        <td className="pl-6 font-semibold text-sm font-Manrope text-neutral-900">{item.WareHouse}</td>
                                        <td className="pl-7 font-semibold text-sm font-Manrope text-neutral-900">{item.AdjustmentType}</td>
                                        <td className="pl-6 font-semibold text-sm font-Manrope text-neutral-900">{item.Reason}</td>
                                        <td className={`pl-5 font-semibold text-sm font-Manrope text-start  ${item.Approval === 'Pending' ? 'text-blue-600' : 'text-lime-600'}`}>
                                            {item.Approval}
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

            {isAddStock && <New_Stock_Adjustment />}
        </div>
    );
}

export default Stock_Adjustment_List;

