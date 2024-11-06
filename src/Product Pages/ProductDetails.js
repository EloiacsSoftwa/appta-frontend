import React, { useState } from 'react';
import Circle_Minus from '../Images/Icons/Circle_Minus.svg';
import IrishButter from '../Images/Icons/IrishButter.svg';

function ProductDetails() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="flex flex-col md:flex-row mx-auto px-4 my-8">
                <section className="bg-white shadow-xl rounded-md w-full h-full mb-10">
                    <div className="p-4 flex items-center justify-between mb-3 border-b-2 border-neutral-500">
                        <h3 className="pl-2 text-orange-500 text-xl font-manrope font-semibold">Pure Irish Butter</h3>
                        <div className="pr-8 flex items-center gap-3">
                            <button 
                                onClick={handleClose} 
                                className="bg-orange-600 text-black px-4 py-0.5 rounded border border-black font-semibold"
                            >
                                Save & Close
                            </button>
                            <img src={Circle_Minus} alt="Remove" />
                        </div>
                    </div>

                    <div className="pl-6 text-xl font-manrope font-semibold mb-5">Product Details</div>

                    <div className="px-4 md:px-8 h-full">
                        <form className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex justify-center md:block">
                                <img src={IrishButter} alt="Product" className="w-40 h-40 object-cover rounded" />
                            </div>

                            <div className="flex flex-col flex-1 gap-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Code</label>
                                        <input type="text" name="productCode" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" placeholder="BTY548956" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Name</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" placeholder="Pure Irish Butter" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Type</label>
                                        <select name="productType" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded">
                                            <option>Tracked</option>
                                            <option>Brand 1</option>
                                            <option>Brand 2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Category</label>
                                        <select name="category" className="mt-1 pl-1 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded">
                                            <option>Dairy</option>
                                            <option>Brand 1</option>
                                            <option>Brand 2</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Sub Category</label>
                                        <select name="subCategory" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded">
                                            <option>Butter</option>
                                            <option>Brand 1</option>
                                            <option>Brand 2</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Brand</label>
                                        <select name="brand" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded">
                                            <option>Butter</option>
                                            <option>Brand 1</option>
                                            <option>Brand 2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 w-full">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Unit</label>
                                        <select name="unit" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded w-full">
                                            <option>100gm</option>
                                            <option>g</option>
                                            <option>Lt</option>
                                            <option>ml</option>
                                            <option>Box</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div>
                                            <label className="font-source-sans-pro text-sm font-semibold leading-5 ml-1">Qty</label>
                                            <input type="number" name="qty" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded lg:w-44 xl:w-44 md:w-32" placeholder="Qty" />
                                        </div>
                                        <div>
                                            <label className="font-source-sans-pro text-sm font-semibold leading-5  ml-1">Min Qty</label>
                                            <input type="number" name="minQty" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded lg:w-44 md:w-32" placeholder="Min Qty" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">BarCode</label>
                                        <input type="text" name="barcode" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded w-full" placeholder="YHJ4625" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="font-source-sans-pro text-base font-normal">Description</label>
                                    <textarea className="mb-10 mt-1 p-3 block md:w-full lg:w-1/2 border border-gray-300 h-24 font-source-sans-pro text-sm placeholder-black rounded" placeholder="Lorem ipsum dolor sit amet consectetur. Pulvinar a dui quisque etiam purus ut. Placerat volutpat sed nulla amet lorem consectetur quis. Duis volutpat quisque sit faucibus cursus luctus donec urna."></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="border-b-2 border-neutral-500 mb-8 -mt-2"></div>
                </section>
            </div>
        )
    );
}

export default ProductDetails;
