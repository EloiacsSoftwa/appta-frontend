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
import WhitePlus from '../Images/Sales/Whiteplus.svg';
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';


function Expense_List() {


    const [currentPage, setCurrentPage] = useState(1);



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
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Paid"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Paid"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Partial"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Pending"
        },
        {
            Date: "28-08-2024",
            CategoryName: "Purchase",
            VendorSupplier: "ElectronicCrafters",
            InvoiceNo: "INV030526",
            Amount: '2000',
            Status: "Paid"
        },

        

    ];







    //  pagination
    const itemsPerPage = 11;
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





    return (
        <div className='h-screen bg-gray-200 p-4 w-full'>

            <div className='flex justify-between items-center gap-2 mb-2.5'>
                <div>
                    <label className='font-semibold text-22 text-neutral-900 font-Manrope'>Expense / </label> <label className='font-bold text-22 text-orange-600 font-Manrope'> Expense List</label>

<div>
    <label className='font-medium text-base  text-neutral-500 font-Manrope' >Manage your Expenses</label>
</div>
                </div>
                <div className='cursor-pointer flex items-center gap-2 w-auto h-auto text-gray-200 border bg-orange-600 border-orange-600 rounded-2xl px-2 py-1'>
                    <div>
                        <img src={WhitePlus} className='w-4 h-4' />
                    </div>
                    <div>
                        <label className="cursor-pointer text-sm text-gray-200 font-semibold  font-Manrope">Add Expense</label>
                    </div>

                </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
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
            </div> */}


            <div className="bg-white rounded-lg shadow-custom overflow-x-auto">
                <div className="flex items-center justify-between p-4 border-b bg-zinc-300">
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
                <table className="w-full  text-left table-auto">
                    <thead>

                        <tr className="bg-white border-0">
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
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Date</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Category Name</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Vendor / Supplier</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Invoice No</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Amount</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer"  />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Status</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className={`hover:bg-gray-50 border-0 ${index % 2 === 0 ?  'bg-gray-200' : 'bg-zinc-300' }`}>
                               <td className="p-2 mt-1 flex items-center justify-start">
                                    <img src={SmallDot} className="mr-1.5" />
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer"
                                    /></td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.Date}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.CategoryName}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.VendorSupplier}</td>
                                <td className='p-2 font-semibold text-sm font-Manrope text-start text-neutral-900 '>
                                    ₹{item.InvoiceNo}
                                </td>
                                <td className='p-2 font-semibold text-sm font-Manrope text-start text-neutral-900 ' >
                                    {item.Amount}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start  
                                          ${item.Status === 'Paid' ? 'text-lime-600' :
                                        item.Status === 'Pending' ? 'text-red-600' :
                                            item.Status === 'Partial' ? 'text-blue-600' : ''}`}>
                                    {item.Status}
                                </td>                               
                                
                                 <td className="p-2 text-gray-500 cursor-pointer"><img src={Dot} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>






                <div className="flex items-center justify-center space-x-3  h-14 bg-zinc-300">


<div className='bg-zinc-500 p-2 flex rounded-2xl'>


                    <ArrowLeft2 className='cursor-pointer text-zinc-300'
                        size="16"
                   
                        onClick={handlePrevClick}
                        disabled={currentPage === 1}
                    />

                    <span className=" font-bold  text-xs  text-zinc-300">
                        <span className="font-bold text-xs text-zinc-300">{String(currentPage).padStart(2, '0')}</span> of <span className="font-bold text-xs  text-zinc-300">{totalPages}</span>
                    </span>
                    <ArrowRight2 className='cursor-pointer text-zinc-300'
                        size="16"
                       
                        onClick={handleNextClick}
                        disabled={currentPage === totalPages}
                    />
</div>
                </div>
            </div>
        </div>
    )
}

export default Expense_List;