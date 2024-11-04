import React, { useState } from 'react';
import Vector from '../Images/Sales/Vector.svg'
import Frame1 from '../Images/Sales/Frame.svg'
import Frame2 from '../Images/Sales/Frame2.svg'
import Frame3 from '../Images/Sales/Frame 3.svg'
import Frame4 from '../Images/Sales/Frame4.svg'
import Search from '../Images/Sales/Search.svg'
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Sales/Add Green.svg';
import SmallDot from '../Images/Sales/Smalldots.svg'
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';
import AddPurchase from './AddPurchase';



function Purchase_List() {


    const [currentPage, setCurrentPage] = useState(1);
    const [showAddPurchase, setShowAddPurchase] = useState(false);


    const reports = [
        {
            title: "Total Purchase Oder",
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
            // extra: "20%",

        },
    ];




    const Purchase = [
        {
            PurchaseDate: "28-08-2024",
            DeliveryDate: "06-09-2024",
            Supplier: "AGS Corporate",
            TotalAmount: "12,000",
            PurchaseStatus: 'Pending',
            PaymentStatus: "Delay"
        },
        {
            PurchaseDate: "28-08-2024",
            DeliveryDate: "06-09-2024",
            Supplier: "AGS Corporate",
            TotalAmount: "12,000",
            PurchaseStatus: 'Pending',
            PaymentStatus: "Partial"
        },
        {
            PurchaseDate: "28-08-2024",
            DeliveryDate: "06-09-2024",
            Supplier: "AGS Corporate",
            TotalAmount: "12,000",
            PurchaseStatus: 'Delivered',
            PaymentStatus: "Paid"
        },

    ];







    //  pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(Purchase.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Purchase.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleAdd = () => {
    setShowAddPurchase(true);
  }



    return (
        <>
        {showAddPurchase ? (
             <AddPurchase /> 
            ) : (
        <div className='h-screen bg-white p-4 w-full'>

            <div className='flex justify-between items-center gap-2 mb-2.5'>
                <div>
                    <label className='font-semibold text-22 text-neutral-900 font-Manrope'>Purchase - </label> <label className='font-bold text-22 text-orange-600 font-Manrope'> Purchase List</label>

                </div>
                <div onClick={handleAdd} className='cursor-pointer flex items-center gap-2 w-auto h-auto text-orange-600 border border-orange-600 rounded px-2 py-1'>
                    <div>
                        <img src={Add} className='w-4 h-4' />
                    </div>
                    <div>
                        <label className="cursor-pointer text-sm text-orange-600 font-semibold  font-Manrope">Add Purchase List</label>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
                {reports.map((report, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-custom">
                        <p className="text-sm text-orange-600 font-semibold mb-4 font-Manrope">{report.title}</p>


                        <div className='flex justify-between items-center'>

                            <p className="text-2xl font-medium text-black font-Manrope">
                                {report.value}

                            </p>
                            {report.extra && (
                                <div className='flex items-center'>
                                    <div className='text-emerald-500 text-sm font-semibold font-Manrope'> {report.extra}</div>
                                    <div> <img src={Vector} className='w-5 h-5' /> </div>
                                </div>

                            )}
                        </div>
                    </div>
                ))}
            </div>


            <div className="bg-white rounded-lg shadow-custom overflow-x-auto">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div><img src={Frame1} className='w-6 h-6 cursor-pointer' /></div>
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
                    <div className='flex items-center gap-2 '>
                        <div>
                            <img src={Frame2} className='w-6 h-6 cursor-pointer' />
                        </div>
                        <div>
                            <img src={Frame3} className='w-6 h-6 cursor-pointer' />
                        </div>
                        <div>
                            <img src={Frame4} className='w-6 h-6 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <table className="w-full  text-left mb-5 table-auto">
                    <thead>

                        <tr className="bg-gray-200 border-0">
                        <th className="p-1 flex items-center justify-start  h-full">
                                <input
                                    type="checkbox"
                                    className="ml-4 mt-1 form-checkbox h-4 w-4 text-blue-600 border-neutral-500 font-Manrope cursor-pointer"
                                />
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />    
                             <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Purchase Date</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Delivery Date</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Supplier</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total Amount</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Purchase Status</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer"  />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Payment Status</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900 min-w-[40px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 border-0">
                               <td className="p-2 mt-1 flex items-center justify-start">
                                    <img src={SmallDot} className="mr-1.5" />
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer"
                                    /></td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.PurchaseDate}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.DeliveryDate}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.Supplier}</td>
                                <td className='p-2 font-semibold text-sm font-Manrope text-start text-neutral-900 '>
                                    ₹{item.TotalAmount}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start  ${item.PurchaseStatus === 'Delivered' ? 'text-lime-600' : 'text-red-600'}`} >
                                    {item.PurchaseStatus}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start  
                                          ${item.PaymentStatus === 'Paid' ? 'text-lime-600' :
                                        item.PaymentStatus === 'Delay' ? 'text-red-600' :
                                            item.PaymentStatus === 'Partial' ? 'text-blue-600' : ''}`}>
                                    {item.PaymentStatus}
                                </td>                               
                                
                                 <td className="p-2 text-gray-500 cursor-pointer w-8"><img src={Dot} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>






                <div className="flex items-center justify-center space-x-3 mt-40 mb-5">

                    <ArrowLeft2 className='cursor-pointer'
                        size="16"
                        color="#797979"
                        onClick={handlePrevClick}
                        disabled={currentPage === 1}
                    />

                    <span className=" font-bold text-neutral-900 text-xs">
                        <span className="font-bold text-xs text-neutral-900">{String(currentPage).padStart(2, '0')}</span> of <span className="font-bold text-xs text-neutral-900">{totalPages}</span>
                    </span>
                    <ArrowRight2 className='cursor-pointer'
                        size="16"
                        color="#797979"
                        onClick={handleNextClick}
                        disabled={currentPage === totalPages}
                    />

                </div>
            </div>
        </div>
            )}
        </>
    )
}

export default Purchase_List;