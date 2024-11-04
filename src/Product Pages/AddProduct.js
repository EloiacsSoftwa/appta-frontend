import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GET_BRANDS_API_CALL } from "../utils/Constant";

import Vector from '../Images/Icons/Vector.svg';
import Delete from '../Images/Icons/Delete.svg';

const AddProductModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Product Details");

  const [formData, setFormData] = useState({
    
    image: null,
    Name: "",
    productId: '',
    productName: '',
    // productType: 'Tracked',
    // productBrand: '',
    categoryId: '',
    subCategoryId: '',
    brandId: 0,
    unitId: '',
    quantity: '',
    minPurchaseQuantity: '',
    barcodeType: '',
    barcodeNo: 0,
    description: '',
    // quantity: 0,
    isChecked: false,
    purchasePrice: 0,
    salesPricePercentage: 0,
    freebie: false,
    purchasePercentage: 0,
    salesPrice: 0,
    mrp: 0,
    // wholeSalePrice: 0,
    wholesalePricePercentage: 0,
    product_Threshold: 0,
    freebieProductId: 0
  });
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    // dispatch({ type: 'GETSUBCATEGORY' });
    dispatch({ type: 'GETCATEGORY' });
    dispatch({type: GET_BRANDS_API_CALL})
  }, []);

  const handleNext = () => {
    if (activeTab === "Product Details") {
      setActiveTab("Accounting");
    } else if (activeTab === "Accounting") {
      setActiveTab("Bill Of Material");
    }
  };

  const handleBack = () => {
    if (activeTab === "Accounting") {
      setActiveTab("Product Details");
    } else if (activeTab === "Bill Of Material") {
      setActiveTab("Accounting");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-1/2 p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Product</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">X</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          {["Product Details", "Accounting", "Bill Of Material"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-12 py-2 -mb-px border-b-2 ${activeTab === tab ? "border-orange-500 text-orange-500" : "border-transparent text-gray-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        {activeTab === "Product Details" && <ProductDetailsForm handleNext={handleNext} formData={formData} setFormData={setFormData} />}
        {activeTab === "Accounting" && <AccountingDetailsForm handleNext={handleNext} handleBack={handleBack} formData={formData} setFormData={setFormData} />}
        {activeTab === "Bill Of Material" && <BillOfMaterials handleBack={handleBack} formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  );
};

const ProductDetailsForm = ({ handleNext, formData, setFormData }) => {


  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState()


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSelectCategory = (id) => {
    setSelectedCategory(id)
    dispatch({ type: 'GETSUBCATEGORY', payload: id });
  }

  return (
    <form className="flex flex-wrap gap-4" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
      <div className="relative w-40 h-40 flex-shrink-0">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-full h-full border border-dashed border-gray-300 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden">
          {formData.image ? (
            <img src={formData.image} alt="Uploaded" className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400 text-sm">+ Add image</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.freebie}
            onChange={handleInputChange}
            className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label className="ml-2 text-sm font-medium text-gray-700 cursor-pointer" onClick={handleInputChange}>Freebie</label>
        </div>
        <div>
          <label className="text-left text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="productName" value={formData.Name} onChange={(e) => { setFormData({ ...formData, Name: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Freebie" />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Product Type</label>
          <select name="productType" value={formData.productId} onChange={(e) => { setFormData({ ...formData, productId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
            <option value={1}>Tracked</option>
            <option value={2}>Bill Of Materials</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="productName" value={formData.productName} onChange={(e) => { setFormData({ ...formData, productName: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
          </div>
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
            <select name="subCategory" value={formData.subCategoryId} onChange={(e) => { setFormData({ ...formData, subCategoryId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
              <option>Select Brand</option>
              {state.AddProduct?.brands && state.AddProduct.brands.map((v, i) => (
                <option key={v.id} value={v.id}>{v.brandName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Category</label>
            <select name="category" value={formData.categoryId} onChange={(e) => {
              setFormData({ ...formData, categoryId: e.target.value })
              handleSelectCategory(e.target.value)
            }} className="mt-1 block w-full border border-gray-300 rounded-md">
              <option>Select One</option>
              {state.AddProduct?.category && state.AddProduct.category?.map((v, i) => (
                <option key={v.id} value={v.id}>{v.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Sub Category</label>
            <select name="subCategory" value={formData.subCategoryId} onChange={(e) => { setFormData({ ...formData, subCategoryId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
              <option>Select One</option>
              {state.AddProduct?.subcategory && state.AddProduct.subcategory.map((v, i) => (
                <option key={v.id} value={v.id}>{v.subCategoryName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Unit</label>
            <select name="unit" value={formData.unit} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md">
              <option value={1} key={1}>Kg</option>
              <option value={2} key={2}>g</option>
              <option value={3} key={3}>Lt</option>
              <option value={4} key={4}>ml</option>
              <option value={5} key={5}>Box</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-medium text-gray-700">Qty</label>
              <input type="number" name="qty" value={formData.qty} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Qty" />
            </div>
            <div className="flex-1">
              <label className="text-left block text-sm font-medium text-gray-700">Min Qty</label>
              <input type="number" name="minQty" value={formData.minQty} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Min Qty" />
            </div>
          </div>
        </div>

        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
        </div>

        <button type="submit" className="mt-4 bg-orange-500 text-white py-2 rounded-md w-full sm:w-auto">Next</button>
      </div>
    </form>
  );
};

const AccountingDetailsForm = ({ handleNext, handleBack, formData, setFormData }) => {

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Purchase Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" value={formData.purchasePrice} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Purchase Percentage</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.purchasePercentage} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Sales Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.salesPrice} />
        </div>
      </div>


      <div className="w-full">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">MRP</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.mrp} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Whole sale Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" value={formData.wholeSalePrice} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Whole sale Percentage</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.wholeSalePercentage} />
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Product Threshold</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.product_Threshold} />
        </div>
      </div>

      <div className="flex bg-gray">
        <div className="flex-1">
          <button type="submit" className="bg-orange-500 p-2 rounded-md w-full sm:w-auto" onClick={handleBack}>
            back
          </button>
        </div>
        <div className="flex-1">
          <button type="submit" className="bg-orange-500 p-2 rounded-md w-full sm:w-auto" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}


const BillOfMaterials = ({ handleBack, formData, setFormData }) => {
  const dispatch = useDispatch();
  // var [peroductList, setProductList] = useState(
  //     {
  //         productId: 0,
  //         productName: "string",
  //         statusTypeId: 0,
  //         categoryId: 0,
  //         subCategoryId: 0,
  //         brandId: 0,
  //         unitId: 0,
  //         quantity: 0,
  //         minPurchaseQuantity: 0,
  //         barcodeType: 0,
  //         barcodeNo: "string",
  //         description: "string",
  //         purchasePrice: 0,
  //         salesPricePercentage: 0,
  //         mrp: 0,
  //         wholesalePricePercentage: 0,
  //         threshold: 0,
  //         billOfMaterials: true,
  //         billOfMaterialsList: [
  //           {
  //             billOfMaterialsProductId: 0,
  //             billOfMaterialsProductQuantity: 0,
  //             billOfMaterialsProductCost: 0
  //           }
  //         ],
  //         freebie: true,
  //         freebieProductId: 0,
  //         images: [
  //           "string"
  //         ]
  //       }
  //   )
  var handleSubmit = () => {
    console.log("formData", formData);

    dispatch({ type: "ADDPRODUCTDETAILS", payload: formData })
  }

  // min-h-screen 
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-y-auto">

        <div className="space-y-6 md:p-8">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-orange-500">Component</h3>
            <div>
              <div className="flex items-center mb-px">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-zinc-300"
                />
                <input
                  type="text"
                  placeholder="Qty"
                  className="w-36 px-4 py-2 mx-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-300"
                />

              </div>
              <div className="flex items-center space-x-0.5">
                <input
                  type="text"
                  placeholder="Computer"
                  className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 bg-zinc-100"
                />
                <input
                  type="text"
                  placeholder="10 pcs"
                  className="w-36 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-100"
                />
                <button className="text-gray-500 hover:text-red-500 mt-2">
                  <img className="ml-2" src={Delete}></img>
                </button>
              </div>

              <button className="mt-4 text-neutral-900 text-sm font-manrope font-semibold text-left flex items-center space-x-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full border border-black text-black text-xs">
                  <img src={Vector}></img>
                </span>
                <span>Add a component product</span>
              </button>

            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-orange-500 mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500">Additional Cost</h3>
            <div className="flex items-center mb-px">
              <input
                type="text"
                placeholder="Cost Name"
                className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-zinc-300"
              />
              <input
                type="text"
                placeholder="Sub Total"
                className="w-36 px-4 py-2 mx-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-300"
              />

            </div>
            <div className="flex items-center space-x-0.5">
              <input
                type="text"
                placeholder="Assemble"
                className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 bg-zinc-100"
              />
              <input
                type="text"
                placeholder="₹ 11,000"
                className="w-36 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-100"
              />
              <button className="text-gray-500 hover:text-red-500 mt-2">
                <img className="ml-2" src={Delete}></img>
              </button>
            </div>

            <button className="mt-4 text-neutral-900 text-sm font-manrope font-semibold text-left flex items-center space-x-2">
              <span className="flex items-center justify-center w-4 h-4 rounded-full border border-black text-black text-xs">
                <img src={Vector}></img>
              </span>
              <span>Add an additional cost</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-zinc-300 mt-6 p-2">
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 bg-orange-500 text-neutral-900 rounded-md hover:bg-gray-300" onClick={handleBack}
            >
              Back
            </button>
            <button className="px-4 py-1 bg-orange-500 text-neutral-900 rounded-md hover:bg-orange-600" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default AddProductModal;
