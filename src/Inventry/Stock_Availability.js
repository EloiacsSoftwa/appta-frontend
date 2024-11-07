import React, { useState, useEffect } from 'react';
import Vector from '../Images/Sales/Vector.svg'
import OrangeSearch from '../Images/Sales/searchOrange.svg'
import Frame1 from '../Images/Sales/Frame.svg'
import Frame2 from '../Images/Sales/Frame2.svg'
import Frame3 from '../Images/Sales/Frame 3.svg'
import Frame4 from '../Images/Sales/Frame4.svg'
import Search from '../Images/Sales/Search.svg'
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Sales/Add Green.svg';
import SmallDot from '../Images/Sales/Smalldots.svg'
import View from '../Images/Sales/view.svg'
import Edit from '../Images/Sales/edit.svg'
import Delete from '../Images/Sales/Delete.svg'
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2, Import } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function Stock_Availability({handleClose}) {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [currentPage, setCurrentPage] = useState(1);
   
    const [loading, setLoading] = useState(false);

  


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
               handleClose()
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClose]);








    const Category = [
        {
            ProductName: "Dairy",
            ProductCode: "DAE456YUT",
            Available: "10",
           

        },
        {
            ProductName: "Dairy",
            ProductCode: "DAE456YUT",
            Available: "15",
                   },
        {
            ProductName: "Dairy",
            ProductCode: "DAE456YUT",
            Available: "25",
                   },

    ];



   


    //  pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(Category && Category.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Category && Category.slice(indexOfFirstItem, indexOfLastItem);
    // const totalPages = subCategoryList ? Math.ceil(subCategoryList.length / itemsPerPage) : 0;
    // const currentItems = (subCategoryList || []).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);




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
    <div className='h-screen bg-white p-4 w-screen'>
<div className="bg-white rounded-lg shadow-custom overflow-x-auto">
<div className='flex items-center gap-5'>



<div className='m-4 flex items-center gap-2' >

    <img src={OrangeSearch} className='w-8 h-8'/>
    <label className="font-Manrope font-bold text-2xl text-orange-600 text-center whitespace-nowrap">Stock Availability</label>
</div>

<div className='w-full rounded h-8 bg-orange-600 '>

</div>
</div>
<hr  className='mb-3 mt-3 shadow'/>
<div className="bg-white rounded-lg shadow-custom overflow-x-auto m-4">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div>
                            <label className="font-Manrope font-bold text-2xl text-orange-600 text-center flex-grow">Availability List</label>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 
                            top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                <img src={Search} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="border border-gray-200 rounded-full pl-10 py-1 text-sm focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>
                    {/* <div className='flex items-center gap-2 '>
                        <div>
                            <img src={Frame2} className='w-6 h-6 cursor-pointer' />
                        </div>
                        <div>
                            <img src={Frame3} className='w-6 h-6 cursor-pointer' />
                        </div>
                        <div>
                            <img src={Frame4} className='w-6 h-6 cursor-pointer' />
                        </div>
                    </div> */}
                </div>


                <div className="relative w-full mb-5">

                {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
        </div>
      )}

                <table className="w-full  text-left mb-5">
                    <thead>

                        <tr className="bg-gray-200 border-0">
                          
                            <th className="p-1 font-semibold text-base text-neutral-900 flex items-center justify-start ">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Product Name</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Product Code</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                    </div>
                                    <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Availability</div>
                                </div>
                            </th>
                            

                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.length > 0 && currentItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 border-0">
                               
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start pl-6">{item.ProductName}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start pl-6">{item.ProductCode || '-'}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start pl-6">{item.Available || '-'}</td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>


</div>



                <div className="flex items-center justify-center space-x-3 mt-10 mb-5">

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


    </div>
  )
}

export default Stock_Availability