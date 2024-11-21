import React, { useState } from 'react';
import Circle_Minus from '../Images/Icons/Circle_Minus.svg';
import IrishButter from '../Images/Icons/IrishButter.svg';
import { connect } from 'react-redux';

function ProductDetails({productDetails, handleClose}) {
    
// console.log("productDetails",productDetails)
console.log("productDetails",productDetails)


const [formValues, setFormValues] = useState({
    productCode: productDetails?.productId || '',
    productName: productDetails?.productName || '',
    productType: productDetails?.statusType || '',
    category: productDetails?.category || '',
    subCategory: productDetails?.subCategory || '',
    brand: productDetails?.brand || '',
    unit: productDetails?.unit || '',
    quantity: productDetails?.size || '',
    minQty: productDetails?.minPurchaseQuantity ?? '',
    barcode: productDetails?.barcodeNo || '',
    description: productDetails?.description || '',
    images : productDetails?.images[0] || ''
});

    return (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ml-60 mt-5 h-full">
          
            <div className="flex flex-col md:flex-row mx-auto px-4 my-8">
                <section className="bg-white shadow-xl rounded-md w-full h-full mb-10">
                    <div className="p-4 flex items-center justify-between mb-3 border-b-2 border-neutral-500">
                        <h3 className="pl-2 text-orange-500 text-xl font-manrope font-semibold">{formValues.productName}</h3>
                        <div className="pr-8 flex items-center gap-3">
                            <img src={Circle_Minus} onClick={handleClose}  alt="Remove" />
                        </div>
                    </div>

                    <div className="pl-6 text-xl font-manrope font-semibold mb-5">Product Details</div>

                    <div className="px-4 md:px-8 h-full">
                        <form className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex justify-center md:block">
                                <img src={productDetails.images[0] || IrishButter} alt="Product" className="w-40 h-40 object-cover rounded" />
                                
                            </div>

                            <div className="flex flex-col flex-1 gap-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Code</label>
                                        <input type="text" name="productCode" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded"  value={formValues.productCode} />
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Name</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" value={formValues.productName}/>
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Product Type</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" value={formValues.productType}/>
                                        
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Category</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" value={formValues.category}/>
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Sub Category</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" value={formValues.subCategory}/>
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Brand</label>
                                        <input type="text" name="productName" className="mt-1 pl-3 block w-full border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded" value={formValues.brand}/>
                                      
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 w-full">
                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">Unit</label>
                                        <input type="text" name="qty" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded lg:w-44 xl:w-44 md:w-32" value={formValues.unit} />
                                    </div>
                                    <div className='flex gap-2'>
                                        <div>
                                            <label className="font-source-sans-pro text-sm font-semibold leading-5 ml-1">Qty</label>
                                            <input type="text" name="qty" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded lg:w-44 xl:w-44 md:w-32" value={formValues.quantity} />
                                        </div>
                                        <div>
                                            <label className="font-source-sans-pro text-sm font-semibold leading-5  ml-1">Min Qty</label>
                                            <input type="text" name="minQty" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded lg:w-44 md:w-32" value={formValues.minQty} />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label className="font-source-sans-pro text-sm font-semibold leading-5">BarCode</label>
                                        <input type="text" name="barcode" className="mt-1 pl-3 block border border-gray-300 py-2 font-source-sans-pro text-base placeholder-black rounded w-full" value={formValues.barcode} />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="font-source-sans-pro text-base font-normal">Description</label>
                                    <textarea className="mb-10 mt-1 p-3 block md:w-full lg:w-1/2 border border-gray-300 h-24 font-source-sans-pro text-sm placeholder-black rounded" value={formValues.description}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="border-b-2 border-neutral-500 mb-8 -mt-2"></div>
                </section>
            </div>
            
            </div>

            );
}
const mapStateToProps = (state) => ({
    ProductByName: state.Product.ProductByName,
  });

export default connect(mapStateToProps)(ProductDetails)