import React, { useState } from 'react';
import Dot from '../Images/Sales/Dots.svg';
import AddBlack from '../Images/Icons/Vector.svg';



function Stock_Adjustment_List() {


    const [products, setProducts] = useState([
        { name: 'Printer', code: 'HP486170', qty: '02', unitPrice: '₹', amount: '₹' },
    ]);


    const addProductRow = () => {
        const newProduct = { name: '', code: '', qty: '', unitPrice: '₹', amount: '₹' };
        setProducts([...products, newProduct]);
    };

    return (
        <div className='h-screen bg-white p-2 w-full'>

            <div className='bg-white p-3 w-full rounded shadow-custom container mx-auto h-max mt-1'>
                <div className='font-Manrope text-base font-bold text-left text-orange-600 mb-2'>
                    Adjustment Details
                </div>


                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                        <div>
                            <label className="block font-sans text-sm font-semibold mb-1 ml-1 ">Stock Transfer ID</label>
                            <input type="text" placeholder="Auto Generate" className="w-full border border-gray-300 text-sm rounded-md p-2 bg-white placeholder-black" disabled />
                        </div>
                        <div>
                            <label className="block font-sans text-sm font-semibold mb-1 ml-1">Date</label>
                            <input type='date' className="w-full border border-gray-300 rounded-md p-1.5 pl-3 text-sm" />
                        </div>
                        <div>
                            <label className="block font-sans text-sm font-semibold mb-1 ml-1">Type</label>
                            <select className="w-full border border-gray-300 rounded-md p-1.5 text-sm">
                                <option>Stock in</option>
                                <option>Stock out</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-sans text-sm font-semibold mb-1 ml-1">Reason</label>
                            <select className="w-full border border-gray-300 rounded-md p-1.5 text-sm">
                                <option>Return</option>
                                <option>Damage</option>
                            </select>
                        </div>

                        <div className="col-span-1 md:col-span-4 -mt-3">
                            <label className="block font-sans text-sm font-semibold mb-1 ml-1  text-sm">Ware House</label>
                            <select className="w-215 border border-gray-300 rounded-md p-1.5" >
                                <option>Salem</option>
                                <option>Other</option>
                            </select>
                        </div>


                        <div className="col-span-1 md:col-span-4 -mt-2">
                            <label className="block font-sans text-sm font-semibold mb-2 ml-1">Description</label>
                            <textarea className="w-full md:w-1/2 rounded-md p-2 h-24 bg-neutral-200 border-r border-b border-black mb-2" placeholder=""></textarea>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    <h3 className="font-Manrope text-base font-bold text-orange-600 mb-2 ml-1">Product Details</h3>
                    <table className="w-full border border-gray-200 rounded-md overflow-hidden">
                        <thead className="bg-gray-300 text-gray-600 text-sm">
                            <tr>
                                <th className="p-2 text-left">Product</th>
                                <th className="p-2 text-left">Product Code</th>
                                <th className="p-2 text-left">Qty</th>
                                <th className="p-2 text-left">Unit Price</th>
                                <th className="p-2 text-left">Amount</th>
                                <th className="p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index} className="bg-gray-100 border border-b-neutral-300">
                                    <td className="p-2">{product.name}</td>
                                    <td className="p-2">{product.code}</td>
                                    <td className="p-2">{product.qty}</td>
                                    <td className="p-2">{product.unitPrice}</td>
                                    <td className="p-2">{product.amount}</td>
                                    <td className="text-center">
                                        <img src={Dot} alt="Actions" className="inline" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-blue-500 hover:text-blue-700 mt-4 flex items-center cursor-pointer" onClick={addProductRow}>
                        <img src={AddBlack} alt="Add" className="w-4 h-4 ml-1" />
                        <span className="ml-3 font-Manrope font-semibold text-sm text-neutral-900">Add Products</span>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Stock_Adjustment_List;

