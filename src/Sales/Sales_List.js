import React, { useState,useEffect } from 'react';
import Vector from '../Images/Sales/Vector.svg'
import Frame1 from '../Images/Sales/Frame.svg'
import Frame2 from '../Images/Sales/Frame2.svg'
import Frame3 from '../Images/Sales/Frame 3.svg'
import Frame4 from '../Images/Sales/Frame4.svg'
import Search from '../Images/Sales/Search.svg'
import Dot from '../Images/Sales/Dots.svg';
import SmallDot from '../Images/Sales/Smalldots.svg'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ArrowRight2, ArrowLeft2 ,ArrowUp2, ArrowDown2} from 'iconsax-react';


function Sales_List() {

   
   
   

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [currentPage, setCurrentPage] = useState(1);

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch({ type: 'GET-SALES-PRODUCT' })
    }, [])



    useEffect(() => {
        if (state.PosReducer.getsalesproductStatuscode == 200) {
            setLoading(false)
            setProduct(state.PosReducer.SalesList)

            setTimeout(() => {
                dispatch({ type: 'REMOVE_GET_SALES_PRODUCT_STATUS_CODE' })
            }, 2000)
        }

    }, [state.PosReducer.getsalesproductStatuscode])


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
            date: '09-Oct-2024',
            customer: 'Shane',
            customerId: 'CK0546',
            status: 'pending',
            payment: 'pending',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C3',
        },
        {
            date: '09-Oct-2024',
            customer: 'Robert',
            customerId: 'CK0546',
            status: 'completed',
            payment: 'completed',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C3',
        },
        {
            date: '09-Oct-2024',
            customer: 'Branson',
            customerId: 'CK0546',
            status: 'completed',
            payment: 'completed',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C4',
        },
        {
            date: '09-Oct-2024',
            customer: 'Branson',
            customerId: 'CK0546',
            status: 'completed',
            payment: 'completed',
            total: '₹ 2,500',
            paid: '₹ 2,500',
            counter: 'C4',
        },
    ];






    //  pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(product && product.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product && product.slice(indexOfFirstItem, indexOfLastItem);

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
        <div className='h-screen bg-white p-4 w-full'>

            <div className='flex justify-start items-center gap-2 mb-2.5'>
                <label className='font-semibold text-22 text-neutral-900 font-Manrope'>Sales - </label> <label className='font-bold text-22 text-orange-600 font-Manrope'> Sales List</label>
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

                <div className="relative w-full mb-5">
                     
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                            <div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
                        </div>
                    )}

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
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope leading-0'>Date</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Customer</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Customer ID</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Status</div>
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
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Paid</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer"  />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Counter</div>
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
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                                {moment(item.createdAt, "DD-MM-YYYY HH:mm:ss").format('DD MMM YYYY')}
                                    </td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.customerName}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.customerId}</td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start  ${item.status === 'completed' ? 'text-lime-600' : 'text-red-600'}`}>
                                    {item.status}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope ${item.payment === 'completed' ? 'text-lime-600' : 'text-red-600'}`}>
                                    {item.payment}
                                </td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.totalAmount}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.paid}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.counter}</td>
                                <td className="p-2 text-gray-500 cursor-pointer w-8"><img src={Dot} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                </div>



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
    )
}

export default Sales_List;