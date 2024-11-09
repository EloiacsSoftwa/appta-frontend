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
import Checkbox from '../Images/Vector (8).svg'
import AddStockTransform from './AddStockTransform';
function StockTransform() {


    const [currentPage, setCurrentPage] = useState(1);
    const [showAddStockTransform, setShowAddStockTransform] = useState(false)

     const Stock = [
        {
            TransferId: "DAE456YUT",
            Date: "03-09-2024",
            EwayBillStaus: "Received",
            EwayBillNumber: "EWB456",
            Documents: 'Uploaded',
            Approval: "Approved"
        },
        
        {
            TransferId: "DAE456YUT",
            Date: "03-09-2024",
            EwayBillStaus: "Received",
            EwayBillNumber: "EWB456",
            Documents: 'Uploaded',
            Approval: "Approved"
        },
        {
            TransferId: "DAE456YUT",
            Date: "03-09-2024",
            EwayBillStaus: "Not-Received",
            EwayBillNumber: "-",
            Documents: 'Uploaded',
            Approval: "Pending"
        },
        

    ];







    //  pagination
    const itemsPerPage = 11;
    const totalPages = Math.ceil(Stock.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Stock.slice(indexOfFirstItem, indexOfLastItem);

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
        setShowAddStockTransform(true);
      }



    return (
        <>
        {showAddStockTransform ? (
             <AddStockTransform/> 
            ) : (
        <div className='h-screen bg-second-gray p-4 w-full'>

            <div className='flex justify-between items-center gap-2 mb-2.5'>
                <div>
                    <label className='font-medium text-xl text-neutral-900 font-Manrope'>Stock Transfer </label>

<div>
    <label className='font-medium text-base  text-neutral-500 font-Manrope' >Manage your Stock</label>
</div>
                </div>
                <div onClick={handleAdd} className='cursor-pointer flex items-center gap-2 w-auto h-auto text-gray-200 border bg-orange-600 border-orange-600 rounded-lg px-2 py-1'>
                    <div>
                        <img src={WhitePlus} className='w-4 h-4' />
                    </div>
                    <div>
                        <label className="cursor-pointer text-sm text-gray-200 font-semibold  font-Manrope">Add Stock Transfer </label>
                    </div>

                </div>
            </div>

           


            <div className="">
                <div className="flex items-center justify-between p-4 border rounded-t-2xl bg-zinc-300">
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
                <div className="overflow-x-auto">
                <table className="w-full  text-left table-auto">
                    <thead>

                        <tr className="bg-white border-0">
                        <th className="p-1 flex items-center justify-start  h-full">
                                {/* <input
                                    type="checkbox"
                                    className="ml-4 mt-1 form-checkbox h-4 w-4 text-blue-600 border-grey font-Manrope cursor-pointer"
                                /> */}
                                <img src={Checkbox} className='ml-4 mt-1'/>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />    
                             <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base font-Manrope'>Transfer ID</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base text-neutral-900 font-Manrope'>Date</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base  text-neutral-900 font-Manrope'>E-way Bill Status</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base text-neutral-900 font-Manrope'>E-way Bill Number</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base text-neutral-900 font-Manrope'>Documents</div>
                                </div>
                            </th>
                            <th className="p-1 font-semibold text-base text-neutral-900">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="flex flex-col items-center">
                                        <ArrowUp2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer"  />
                                        <ArrowDown2 className="font-extrabold w-3 h-3 text-neutral-800 cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-base text-neutral-900 font-Manrope'>Approval</div>
                                </div>
                            </th>

                            <th className="p-1 font-semibold text-base text-neutral-900 min-w-[40px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className={`hover:bg-gray-50 border-0 ${index % 2 === 0 ?  'bg-gray-200' : 'bg-zinc-300' }`}>
                               <td className="p-1 mt-1 flex items-center justify-start">
                                 
                                    {/* <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 border-grey bg-gray-300 cursor-pointer ml-4"
                                    /> */}
                                       <img src={Checkbox} className='ml-4 mt-1'/>
                                    </td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.TransferId}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.Date}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.EwayBillStaus}</td>
                                <td className='p-2 font-semibold text-sm font-Manrope text-start text-neutral-900 '>
                                    {item.EwayBillNumber}
                                </td>
                                <td className='p-2 font-semibold text-sm font-Manrope text-start text-neutral-900 ' >
                                    {item.Documents}
                                </td>
                                <td className={`p-2 font-semibold text-sm font-Manrope text-start ${item.Approval === 'Pending' ? 'text-blue-600' : 'text-lime-600'}`}>
                                        {item.Approval}
                                    </td>                               
                                 
                                 <td className="p-2 text-gray-500 cursor-pointer w-8"><img src={Dot} /></td>
                            </tr>
                        ))}
                       <tr className="bg-zinc-300"><td colSpan="8" className="p-4"></td></tr>
                          
                            
                           
                    </tbody>
                </table>
</div>





                <div className="flex items-center justify-center mt-40  h-14 bg-zinc-300">


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
            )}
            </>
    )
}

export default StockTransform;