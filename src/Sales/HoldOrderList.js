import React, { useEffect, useState } from 'react';
import Vector from '../Images/Sales/Vector.svg';
import Frame1 from '../Images/Sales/Frame.svg';
import Frame2 from '../Images/Sales/Frame2.svg';
import Frame3 from '../Images/Sales/Frame 3.svg';
import Frame4 from '../Images/Sales/Frame4.svg';
import Search from '../Images/Sales/Search.svg';
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Sales/Add Green.svg';
import SmallDot from '../Images/Sales/Smalldots.svg';
import { ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2 } from 'iconsax-react';
import { useDispatch, useSelector, connect } from 'react-redux';
import Plus from '../Images/Icons/Vector.svg'
import moment from 'moment';
import Minus from '../Images/Sales/white_Minus.svg';


function HoldOrderList() {



    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const state = useSelector(state => state);
const [holdOrder, setHoldOrder] = useState([])


console.log("state hold List",state)

useEffect(()=>{
dispatch({ type: 'GETHOLDORDERLIST'})
},[])


    useEffect(() => {
        if (state.PosReducer?.getHoldOrderStatuscode == 200) {
            setLoading(false)
            setHoldOrder(state.PosReducer?.holdOrderList)
            setTimeout(() => {
                dispatch({ type: 'REMOVE_GET_HOLD_ORDER_LIST' })
            }, 3000)

        }


    }, [state.PosReducer?.getHoldOrderStatuscode])




  return (
   
   
    <div className="relative w-full mb-5 bg-white">

    {loading && (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
    <div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
    </div>
    )}

    
<div className='flex justify-between p-2 items-center bg-orange-600 w-full h-6'>
<div>
    <label className='text-base text-white font-semibold font-Manrope'>On Hold</label>
</div>
<div>
    <img src={Minus} className='w-4 h-4'/>
    </div>
</div>
                            <table className="w-full text-left mb-5 table-auto">
                                
                                <thead>
    
                                    <tr className="bg-white-600 border-0">
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
                                                <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Customer</div>
                                            </div>
                                        </th>
                                        <th className="p-1 font-semibold text-base text-neutral-900">
                                            <div className="flex items-center justify-start gap-2">
                                                <div className="flex flex-col items-center">
                                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                </div>
                                                <div className='font-semibold text-sm  text-neutral-900 font-Manrope'>Customer ID</div>
                                            </div>
                                        </th>
                                        <th className="p-1 font-semibold text-base text-neutral-900">
                                            <div className="flex items-center justify-start gap-2">
                                                <div className="flex flex-col items-center">
                                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                </div>
                                                <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Time</div>
                                            </div>
                                        </th>
                                        <th className="p-1 font-semibold text-base text-neutral-900">
                                            <div className="flex items-center justify-start gap-2">
                                                <div className="flex flex-col items-center">
                                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                </div>
                                                <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total</div>
                                            </div>
                                        </th>
                                        <th className="p-1 font-semibold text-base text-neutral-900">
                                            <div className="flex items-center justify-start gap-2">
                                                <div className="flex flex-col items-center">
                                                    <ArrowUp2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                    <ArrowDown2 className="font-extrabold w-3 h-3 text-orange-600 cursor-pointer" />
                                                </div>
                                                <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Total Item</div>
                                            </div>
                                        </th>
    
                                        
                                    </tr>
                                </thead>
    
                                <tbody>
                                    {holdOrder && holdOrder.length > 0 && holdOrder.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                          
    
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{moment(item.createdAt, "DD-MM-YYYY HH:mm:ss").format('DD MMM YYYY')}</td>
                                            <td className="pl-5 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.customerName || '-'}</td>
                                            <td className="pl-8  font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.customerId || '-'}</td>
                                            <td className="pl-10 font-semibold text-sm font-Manrope text-neutral-900 text-start">{moment(item.createdAt, "DD-MM-YYYY HH:mm:ss").format('HH:mm:ss')}</td>
                                            <td className="p-3 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.totalAmount}</td>
                                            <td className="p-3 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.orderItems?.length}</td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
    
    
    
    
                </div>
  )
}

export default HoldOrderList