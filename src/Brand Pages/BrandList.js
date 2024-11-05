import React, { useEffect, useState } from 'react';
import Aashirvaad from '../Images/Icons/Aasirvaad.svg';
import SakthiMasala from '../Images/Icons/SakthiMasala.svg';
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
import AddBrandList from './AddBrandList';
import { useDispatch, useSelector } from 'react-redux';
import { GET_BRANDS_API_CALL } from "../utils/Constant";
import moment from 'moment';



function Brand_List() {

    const [currentPage, setCurrentPage] = useState(1);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [brandList, setBrandList] = useState([])
    const dispatch = useDispatch();
    const state = useSelector(state => state);


    console.log("state for Brand", state)


    useEffect(() => {
        dispatch({ type: GET_BRANDS_API_CALL })
    }, [])




    useEffect(() => {
        if (state.AddProduct.getBrandStatusCode == 200) {
            setBrandList(state.AddProduct?.brands)

            setTimeout(() => {
                dispatch({ type: 'REMOVE_GET_BRAND_STATUSCODE' })
            }, 3000)
        }

    }, [state.AddProduct.getBrandStatusCode])


    useEffect(() => {
        if (state.AddProduct.AddBrandSuccessStatusCode == 200) {
            dispatch({ type: GET_BRANDS_API_CALL })
            setShowAddCategory(false)
            setTimeout(() => {
                dispatch({ type: 'REMOVE_ADD_BRAND_STATUS_CODE' })
            }, 2000)

        }

    }, [state.AddProduct.AddBrandSuccessStatusCode])







    const reports = [
        { title: "Total Products", value: "2,420" },
        { title: "Low Stocks", value: "2,420" },
        { title: "New Products", value: "1,280" },
        { title: "Customer", value: "3,420", extra: "20%" },
    ];

    const Category = [
        {
            Category: "Aashirvaad",
            image: Aashirvaad,
            CategoryCode: "AAS123ABC",
            Description: "Aatta",
            Date: '08-Sep-2024',
        },
        {
            Category: "Sakthi Masala",
            image: SakthiMasala,
            CategoryCode: "SAK456DEF",
            Description: "Masala",
            Date: '08-Sep-2024',
        },
    ];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(brandList.length / itemsPerPage);
    const currentItems = brandList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='h-screen bg-white p-4 w-full'>
            <div className='flex justify-between items-center gap-2 mb-2.5'>
                <div>
                    <label className='font-semibold text-22 text-neutral-900 font-Manrope'>Product - </label>
                    <label className='font-bold text-22 text-orange-600 font-Manrope'>Brand List</label>
                </div>

                <div
                    onClick={() => setShowAddCategory(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className='hover:bg-orange-500 cursor-pointer flex items-center gap-2 w-auto h-auto text-orange-600 border border-orange-600 rounded px-2 py-1'
                >
                    {isHovered ? (
                        <img src={Vector} className='w-4 h-4 ml-1' />
                    ) : (
                        <img src={Add} className='w-4 h-4' />
                    )}
                    <label className="cursor-pointer text-sm hover:text-black text-orange-600 font-semibold font-Manrope">
                        Add Brand
                    </label>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-7 gap-y-4 mb-6">
                {reports.map((report, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-custom">
                        <p className="text-sm text-orange-600 font-semibold mb-4 font-Manrope">{report.title}</p>
                        <div className='flex justify-between items-center'>
                            <p className="text-2xl font-medium text-black font-Manrope">{report.value}</p>
                            {report.extra && (
                                <div className='text-emerald-500 text-sm font-semibold font-Manrope'>{report.extra}</div>
                            )}
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
                    <div className='flex items-center gap-2 '>
                        <img src={Frame2} className='w-6 h-6 cursor-pointer' />
                        <img src={Frame3} className='w-6 h-6 cursor-pointer' />
                        <img src={Frame4} className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>

                <table className="w-full text-left mb-5">
                    <thead>
                        <tr className="bg-gray-200 border-0">
                            <th className="p-1 flex items-center justify-start h-full">
                                <input type="checkbox" className="ml-4 mt-1 form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer" />
                            </th>
                            {["Image", "Brand Name", "Brand Description", "Date"].map((header, i) => (
                                <th key={i} className="p-1 font-semibold text-base text-neutral-900">
                                    <div className='flex gap-3'>
                                        <div className="flex flex-col items-center justify-start gap-1">
                                            <ArrowUp2 className="w-3 h-3 text-orange-600 cursor-pointer" />
                                            <ArrowDown2 className="w-3 h-3 text-orange-600 cursor-pointer" />
                                        </div>
                                        <span className="font-semibold text-sm text-neutral-900 font-Manrope">{header}</span>
                                    </div>
                                </th>
                            ))}
                            <th className="p-1 font-semibold text-base text-neutral-900 min-w-[40px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 border-0">
                                <td className="p-2 flex items-center justify-start mt-4">
                                    <img src={SmallDot} className="mr-1.5" />
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-neutral-500 cursor-pointer" />
                                </td>
                                <td className="p-2 text-center">
                                    <img src={SakthiMasala} alt='brand' className="w-10 h-10 mt-3 -mb-3" />
                                </td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.brandName}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.Description || '-'}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                                    {moment(item.createdAt, "DD-MM-YYYY HH:mm:ss").format("DD-MMM-YY")}
                                </td>
                                <td className="p-2 text-gray-500 cursor-pointer w-8">
                                    <img src={Dot} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-center space-x-3 mt-40 mb-5">
                    <ArrowLeft2 className='cursor-pointer' size="16" color="#797979" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
                    <span className="font-bold text-neutral-900 text-xs">
                        {String(currentPage).padStart(2, '0')} of {totalPages}
                    </span>
                    <ArrowRight2 className='cursor-pointer' size="16" color="#797979" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
                </div>
            </div>

            {showAddCategory && <AddBrandList handleClose={() => setShowAddCategory(false)} />}
        </div>
    );
}

export default Brand_List;





