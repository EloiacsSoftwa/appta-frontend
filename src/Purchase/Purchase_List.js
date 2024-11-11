// import React, { useEffect, useState } from 'react';
// import Vector from '../Images/Sales/Vector.svg';
// import Frame1 from '../Images/Sales/Frame.svg';
// import Frame2 from '../Images/Sales/Frame2.svg';
// import Frame3 from '../Images/Sales/Frame 3.svg';
// import Frame4 from '../Images/Sales/Frame4.svg';
// import Search from '../Images/Sales/Search.svg';
// import Vector from '../Images/Sales/Vector.svg';
// import Frame1 from '../Images/Sales/Frame.svg';
// import Frame2 from '../Images/Sales/Frame2.svg';
// import Frame3 from '../Images/Sales/Frame 3.svg';
// import Frame4 from '../Images/Sales/Frame4.svg';
// import Search from '../Images/Sales/Search.svg';
// import Dot from '../Images/Sales/Dots.svg';
// import Add from '../Images/Sales/Add Green.svg';
// import SmallDot from '../Images/Sales/Smalldots.svg';
// import SmallDot from '../Images/Sales/Smalldots.svg';
// import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';
// import AddPurchase from './AddPurchase';
// import { useDispatch, useSelector, connect } from 'react-redux';
// import { useDispatch, useSelector, connect } from 'react-redux';


// function Purchase_List(props) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showAddPurchase, setShowAddPurchase] = useState(false);
// const [Purchase, setPurchase] = useState([])

// console.log("purchase",Purchase)

//     const dispatch = useDispatch();
//     const [loading, setLoading] = useState(true);
//     const state = useSelector(state => state);

//     // const Purchase = props.PurchaseList;

//     useEffect(() => {
//         dispatch({ type: 'GETPURCHASE' });  
//     }, []);


// useEffect(()=>{
//     if(state.Purchase.getPurchaseStatusCode == 200){
//         setLoading(false)
//         setPurchase(state.Purchase?.PurchaseList)

//         setTimeout(()=>{
// dispatch({ type: 'REMOVE_GET_PURCHASE_STATUS_CODE'})
//         },2000)
//     }

// },[state.Purchase.getPurchaseStatusCode])



//     //  
//     const itemsPerPage = 10;
//     const totalPages = Math.ceil(Purchase && Purchase.length / itemsPerPage);
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = Purchase && Purchase.slice(indexOfFirstItem, indexOfLastItem);


//     const handlePrevClick = () => currentPage > 1 && setCurrentPage(currentPage - 1);
//     const handleNextClick = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
//     const handleAdd = () => setShowAddPurchase(true);
//     const handleCloseAddPurchase = () => setShowAddPurchase(false);


//     useEffect(() => {
//         if (state.Purchase.addPurchaseStatusCode == 200) {
//             setShowAddPurchase(false)
//             dispatch({ type: 'GETPURCHASE' });


//             setTimeout(() => {
//                 dispatch({ type: 'REMOVE_ADD_PURCHASE' })
//             }, 3000)


//         }

//     }, [state.Purchase.addPurchaseStatusCode])





//     const reports = [
//         {
//             title: "Total Purchase Oder",
//             value: "2,420",
//         },
//         {
//             title: "Total Items",
//             value: "2,420",
//             extra: "20%",
//         },

//         {
//             title: "Amount to be Paid",
//             value: "₹1,02080",
//         },
//         {
//             title: "Pending Purchase",
//             value: "09",
//             // extra: "20%",

//         },
//     ];

//     return (
//         <>
//             {showAddPurchase ? (
//                 <AddPurchase handleClose={handleCloseAddPurchase} />
//             ) : (
//                 <div className="h-screen bg-white p-4 w-full">
//                     <div className="flex justify-between items-center gap-2 mb-2.5">
//                         <div>
//                             <label className="font-semibold text-22 text-neutral-900 font-Manrope">Purchase - </label>
//                             <label className="font-bold text-22 text-orange-600 font-Manrope">Purchase List</label>
//                         </div>
//                         <div onClick={handleAdd} className="cursor-pointer flex items-center gap-2 w-auto h-auto text-orange-600 border border-orange-600 rounded px-3 py-1 ">
//                             <img src={Add} className="w-4 h-4" alt="Add" />
//                             <label className="cursor-pointer text-sm text-orange-600 font-semibold font-Manrope">Add Purchase List</label>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
//                         {reports.map((report, index) => (
//                             <div key={index} className="bg-white p-4 rounded-xl shadow-custom">
//                                 <p className="text-sm text-orange-600 font-semibold mb-4 font-Manrope">{report.title}</p>
//                                 <div className="flex justify-between items-center">
//                                     <p className="text-2xl font-medium text-black font-Manrope">{report.value}</p>
//                                     {report.extra && (
//                                         <div className="flex items-center">
//                                             <span className="text-emerald-500 text-sm font-semibold font-Manrope">{report.extra}</span>
//                                             <img src={Vector} className="w-5 h-5" alt="Extra" />
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="bg-white rounded-lg shadow-custom overflow-x-auto">
//                         <div className="flex items-center justify-between p-4 border-b">
//                             <div className="flex items-center gap-2">
//                                 <img src={Frame1} className="w-6 h-6 cursor-pointer" alt="Frame1" />
//                                 <div className="relative">
//                                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                                         <img src={Search} alt="Search Icon" />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         placeholder="Search"
//                                         className="border border-gray-200 rounded-full pl-10 py-1 text-sm focus:outline-none focus:border-orange-500"
//                                     />
//                                 </div>
//                             </div>
//                             <div className='flex items-center gap-2 '>
//                                 <div>
//                                     <img src={Frame2} className='w-6 h-6 cursor-pointer' />
//                                 </div>
//                                 <div>
//                                     <img src={Frame3} className='w-6 h-6 cursor-pointer' />
//                                 </div>
//                                 <div>
//                                     <img src={Frame4} className='w-6 h-6 cursor-pointer' />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative w-full mb-5">

// {loading && (
// <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
// <div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
// </div>
// )}
//                         <table className="w-full text-left mb-5 table-auto">
                           
//                             <thead>

//                                 <tr className="bg-gray-200 border-0">
//                                     <th className="p-1 flex items-center justify-start  h-full">
//                                         <input
//                                             type="checkbox"
//                                             className="ml-4 mt-1 form-checkbox h-4 w-4 text-blue-600 border-neutral-500 font-Manrope cursor-pointer"
//                                         />
//                                     </th>
//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Purchase Date</div>
//                                         </div>
//                                     </th>

//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Delivery Date</div>
//                                         </div>
//                                     </th>
//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Supplier</div>
//                                         </div>
//                                     </th>
//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total Amount</div>
//                                         </div>
//                                     </th>
//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Purchase Status</div>
//                                         </div>
//                                     </th>
//                                     <th className="p-1 font-semibold text-base text-neutral-900">
//                                         <div className="flex items-center justify-start gap-2">
//                                             <div className="flex flex-col items-center">
//                                                 <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                                 <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
//                                             </div>
//                                             <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Payment Status</div>
//                                         </div>
//                                     </th>

//                                     <th className="p-1 font-semibold text-base text-neutral-900 min-w-[40px]"></th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {currentItems && currentItems.length > 0 && currentItems.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-50">
//                                         <div className='flex mt-2.5 p-3'>
//                                             <img src={SmallDot} className="ml-1" />
//                                             <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer ml-2.5" />
//                                         </div>

//                                         <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.purchaseDate}</td>
//                                         <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.deliveryDate}</td>
//                                         <td className="pl-8  font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.supplierName}</td>
//                                         <td className="pl-10 font-semibold text-sm font-Manrope text-neutral-900 text-start">₹{item.totalAmount}</td>
//                                         <td className="p-3 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.purchaseStatus}</td>
//                                         <td className="p-3 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.paymentStatus}</td>
//                                         <td className="p-3">
//                                             <img src={Dot} alt="Options" />
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>




//             </div>
//                         <div className="flex items-center justify-center space-x-3 mt-10 mb-5">
//                             <ArrowLeft2 onClick={handlePrevClick} />
//                             <span className="font-bold text-xs">{currentPage} of {totalPages}</span>
//                             <ArrowRight2 onClick={handleNextClick} />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
//     );
// }

// // const mapStateToProps = (state) => ({
// //     PurchaseList: state.Purchase.PurchaseList,
// // });

// export default Purchase_List;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';
import AddPurchase from './AddPurchase';
import Add from '../Images/Sales/Add Green.svg';
import SmallDot from '../Images/Sales/Smalldots.svg';
import Dot from '../Images/Sales/Dots.svg';
import Frame1 from '../Images/Sales/Frame.svg';
import Frame2 from '../Images/Sales/Frame2.svg';
import Frame3 from '../Images/Sales/Frame 3.svg';
import Frame4 from '../Images/Sales/Frame4.svg';
import Search from '../Images/Sales/Search.svg';
import Vector from '../Images/Sales/Vector.svg';

function Purchase_List(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showAddPurchase, setShowAddPurchase] = useState(false);
    const [purchase, setPurchase] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch({ type: 'GETPURCHASE' });
    }, []);

    useEffect(() => {
        if (state.Purchase.getPurchaseStatusCode === 200) {
            setLoading(false);
            setPurchase(state.Purchase?.PurchaseList);

            setTimeout(() => {
                dispatch({ type: 'REMOVE_GET_PURCHASE_STATUS_CODE' });
            }, 2000);
        }
    }, [state.Purchase.getPurchaseStatusCode]);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(purchase.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = purchase.slice(indexOfFirstItem, indexOfLastItem);

    const handlePrevClick = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNextClick = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const handleAdd = () => setShowAddPurchase(true);
    const handleCloseAddPurchase = () => setShowAddPurchase(false);

    useEffect(() => {
        if (state.Purchase.addPurchaseStatusCode === 200) {
            setShowAddPurchase(false);
            dispatch({ type: 'GETPURCHASE' });

            setTimeout(() => {
                dispatch({ type: 'REMOVE_ADD_PURCHASE' });
            }, 3000);
        }
    }, [state.Purchase.addPurchaseStatusCode]);

    const reports = [
        {
            title: "Total Purchase Order",
            value: "2,420",
        },
        {
            title: "Total Items",
            value: "2,420",
            extra: "20%",
        },
        {
            title: "Amount to be Paid",
            value: "₹1,02080",
        },
        {
            title: "Pending Purchase",
            value: "09",
        },
    ];

    return (
        <>
            {showAddPurchase ? (
                <AddPurchase handleClose={handleCloseAddPurchase} />
            ) : (
                <div className="h-screen bg-white p-4 w-full">
                    <div className="flex justify-between items-center gap-2 mb-2.5">
                        <div>
                            <label className="font-semibold text-22 text-neutral-900 font-Manrope">Purchase - </label>
                            <label className="font-bold text-22 text-orange-600 font-Manrope">Purchase List</label>
                        </div>
                        <div onClick={handleAdd} className="cursor-pointer flex items-center gap-2 w-auto h-auto text-orange-600 border border-orange-600 rounded px-3 py-1">
                            <img src={Add} className="w-4 h-4" alt="Add" />
                            <label className="cursor-pointer text-sm text-orange-600 font-semibold font-Manrope">Add Purchase List</label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
                        {reports.map((report, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-custom">
                                <p className="text-sm text-orange-600 font-semibold mb-4 font-Manrope">{report.title}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-medium text-black font-Manrope">{report.value}</p>
                                    {report.extra && (
                                        <div className="flex items-center">
                                            <span className="text-emerald-500 text-sm font-semibold font-Manrope">{report.extra}</span>
                                            <img src={Vector} className="w-5 h-5" alt="Extra" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-lg shadow-custom overflow-x-auto">
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <img src={Frame1} className="w-6 h-6 cursor-pointer" alt="Frame1" />
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                        <img src={Search} alt="Search Icon" />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border border-gray-200 rounded-full pl-10 py-1 text-sm focus:outline-none focus:border-orange-500"
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div><img src={Frame2} className='w-6 h-6 cursor-pointer' /></div>
                                <div><img src={Frame3} className='w-6 h-6 cursor-pointer' /></div>
                                <div><img src={Frame4} className='w-6 h-6 cursor-pointer' /></div>
                            </div>
                        </div>
                        <div className="relative w-full mb-5">
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                                    <div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
                                </div>
                            )}
                            <table className="w-full text-left mb-5 table-auto">
                                <thead>
                                    <tr className="bg-gray-200 border-0">
                                        <th className="p-1 flex items-center justify-start h-full">
                                            <input
                                                type="checkbox"
                                                className="ml-4 mt-1 form-checkbox h-4 w-4 text-blue-600 border-neutral-500 font-Manrope cursor-pointer"
                                            />
                                        </th>
                                        {['Purchase Date', 'Delivery Date', 'Supplier', 'Total Amount', 'Purchase Status', 'Payment Status'].map((title, idx) => (
                                            <th key={idx} className="p-1 font-semibold text-base text-neutral-900">
                                                <div className="flex items-center justify-start gap-2">
                                                    <div className="flex flex-col items-center">
                                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                    </div>
                                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>{title}</div>
                                                </div>
                                            </th>
                                        ))}
                                        <th className="p-1 font-semibold text-base text-neutral-900 min-w-[40px]"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {currentItems && currentItems.length > 0 && currentItems.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <div className='flex mt-2.5 p-3'>
                                                <img src={SmallDot} className="ml-1" />
                                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer ml-2.5" />
                                            </div>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.date}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.deliveryDate}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.supplier}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.totalAmount}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.purchaseStatus}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.paymentStatus}</td>
                                            <td className="pl-5 text-start cursor-pointer">
                                                <img src={Dot} className="w-4 h-4" alt="More Options" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex justify-between items-center">
                                <div>
                                    <button onClick={handlePrevClick} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                                        <ArrowLeft2 />
                                    </button>
                                    <span className="text-sm font-medium">{currentPage} of {totalPages}</span>
                                    <button onClick={handleNextClick} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                                        <ArrowRight2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
    
}



export default Purchase_List;
