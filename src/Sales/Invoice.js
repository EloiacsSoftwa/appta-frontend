import React, { useState } from 'react';
import Vector from '../Images/Sales/Vector.svg'
import Frame1 from '../Images/Sales/Frame.svg'
import Frame2 from '../Images/Sales/Frame2.svg'
import Frame3 from '../Images/Sales/Frame 3.svg'
import Frame4 from '../Images/Sales/Frame4.svg'
import Search from '../Images/Sales/Search.svg'
import Dot from '../Images/Sales/Dots.svg';
import SmallDot from '../Images/Sales/Smalldots.svg'
import Add from '../Images/Sales/Add Green.svg';
import AddInvoice from './AddInvoice';

import { ArrowRight2, ArrowLeft2 ,ArrowUp2, ArrowDown2} from 'iconsax-react';


function Invoice() {

   
    const [currentPage, setCurrentPage] = useState(1);
    const [showAddInvoice, setShowAddInvoice] = useState(false);


    const reports = [
        {
            title: "Total Customers",
            value: "2,420",
        },
        {
            title: "New Customers",
            value: "2,420",
        },
        {
            title: "Total Sales",
            value: "₹ 90,896.00",
            extra: "20%",

        },
        {
            title: "Unpaid",
            value: "₹ 8,056",
        },
    ];




    const salesData = [
        {
            date: '28-Sep-2024',
            duedate:'28-Oct-2024',
            customer: 'Shane',
            phone: '+91 9876543210',
            customerId: 'CK0546',
            status: 'Delivered',
            payment: 'Paid',
            total: '₹ 2,000',
            // paid: '₹ 2,500',
            // counter: 'C3',
        },
        {
            date: '28-Sep-2024',
            duedate:'28-Oct-2024',
            customer: 'Robert',
            phone: '+91 9876543210',
            customerId: 'CK0546',
            status: 'Delivered',
            payment: 'Paid',
            total: '₹ 2,000'
            // paid: '₹ 2,500',
            // counter: 'C3',
        },
        {
            date: '28-Sep-2024',
            duedate:'28-Oct-2024',
            customer: 'Branson',
            phone: '+91 9876543210',
            customerId: 'CK0546',
            status: 'Delivered',
            payment: 'Paid',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C4',
        },
        {
            date: '28-Sep-2024',
            duedate:'28-Oct-2024',
            customer: 'Branson',
            phone: '+91 9876543210',
            customerId: 'CK0546',
            status: 'Delivered',
            payment: 'Paid',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C4',
        },
    ];






    //  pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(salesData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = salesData.slice(indexOfFirstItem, indexOfLastItem);

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


const  handleCreateInvoice = () => {
setShowAddInvoice(true);
}

   

   








    return (
        <>
           {showAddInvoice ? (
             <AddInvoice /> 
            ) : (
        <div className='h-screen bg-white p-4 w-full'>
            <div className='flex justify-between items-center gap-2 mb-2.5'>
            <div className='flex justify-start items-center gap-2 mb-2.5'>
                <label className='font-semibold text-22 text-neutral-900 font-Manrope'>Sales - </label> <label className='font-bold text-22 text-orange-600 font-Manrope'> Invoice</label>
            </div>

            <div>
              <button 
              onClick={handleCreateInvoice}
                 type="submit" 
                 class="flex items-center w-full justify-center bg-white px-3 py-1.5 text-sm font-semibold text-orange-600 border border-[#648D68] shadow-sm hover:bg-[#648D68] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#648D68]">
                <img src={Add} alt="Add" class="mr-2" /> 
                 Create Invoice
               </button>

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
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope leading-0'>Name</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Contact</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Invoice Date</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Due Date</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total Amount</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Delivery Status</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Payment</div>
                                </div>
                            </th>
                          
                       <th className="p-1 font-semibold text-base text-neutral-900"></th>
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
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.customer}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.phone}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.date}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.duedate}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.total}</td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start  ${item.status === 'Delivered' ? 'text-[#4CB51B]' : 'text-red-600'}`}>
                                    {item.status}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope ${item.payment === 'Paid' ? 'text-[#4CB51B]' : 'text-[#4CB51B]-600'}`}>
                                    {item.payment}
                                </td>
                                {/* <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.total}</td> */}
                                {/* <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.paid}</td> */}
                                {/* <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.payment}</td> */}
                                <td className="p-2 text-gray-500 cursor-pointer"><img src={Dot} /></td>
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

export default Invoice;








	
	
	