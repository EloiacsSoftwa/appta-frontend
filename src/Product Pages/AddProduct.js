import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GET_BRANDS_API_CALL, GET_ALL_UNITS_API_CALL } from "../utils/Constant";

import Vector from '../Images/Icons/Vector.svg';
import Delete from '../Images/Icons/Delete.svg';

const AddProductModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Product Details");

  const [formData, setFormData] = useState({

    images: [],
    Name: "",
    productId: '',
    productName: '',
    // productType: 'Tracked',
    // productBrand: '',
    categoryId: '',
    subCategoryId: '',
    brandId: 1,
    unitId: 0,
    quantity: '',
    minPurchaseQuantity: '',
    barcodeType: 0,
    barcodeNo: 1,
    description: '',
    // quantity: 0,
    billOfMaterials: false,
    purchasePrice: 0,
    salesPricePercentage: 1,
    freebie: false,
    purchasePercentage: 0,
    salesPrice: 0,
    mrp: 0,
    // wholeSalePrice: 0,
    wholesalePricePercentage: 1,
    threshold: 0,
    freebieProductId: 0,
    barcodeNo: 0,
    statusTypeId: 1,
    sizeId: 0
  });
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    // dispatch({ type: 'GETSUBCATEGORY' });
    dispatch({ type: 'GETCATEGORY' });
    dispatch({ type: GET_BRANDS_API_CALL })
    dispatch({type: GET_ALL_UNITS_API_CALL})
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
      <div className="bg-white rounded-lg w-1/2 p-6 overflow-y-scroll h-650px">
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
        {
        formData.billOfMaterials === true ?
        activeTab === "Bill Of Material" && <BillOfMaterials handleBack={handleBack} formData={formData} setFormData={setFormData} />
    :null}
      </div>
    </div>
  );
};

const ProductDetailsForm = ({ handleNext, formData, setFormData }) => {


  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState()
  let fileInputRef = useRef()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      freebie: true
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file",file);
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result.split(',')[1];
// console.log("base64String",base64String);

        setFormData({
          ...formData,
          images: file,
        });
// [base64String]
        // fileInputRef.current.value = '';
      };
      reader.onerror = (error) => {
        console.error(error);
      };
      reader.readAsDataURL(file);
    }


    // const file = e.target.files[0];
    // if (file) {
    //   setFormData({
    //     ...formData,
    //     images: URL.createObjectURL(file),
    //   });
    // }
  };

  const handleSelectCategory = (id) => {
    setSelectedCategory(id)
    dispatch({ type: 'GETSUBCATEGORY', payload: id });
  }
// getFreebieName
const handleFreebieName = (e) =>{
    setFormData({ ...formData, Name: e.target.value });
    setTimeout(() => {
        dispatch({type:"GETFREEBIENAME", payload : e.target.value})
    }, 4000);
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
          {formData.images != "" ? (
            <img src={formData.images} alt="Uploaded" className="object-cover w-full h-full" />
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
          <input type="text" name="productName" value={formData.Name} onChange={(e) => { handleFreebieName(e) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Freebie" />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4">

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="productName" value={formData.productName} onChange={(e) => { setFormData({ ...formData, productName: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
          </div>
          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
            <select name="subCategory" value={formData.brandId} onChange={(e) => { setFormData({ ...formData, brandId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
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

        <div className="flex flex-1 flex-row">

          <div className="flex flex-row flex-1">
            <div className="flex-1 mr-4">
              <label className="text-left block text-sm font-medium text-gray-700">Size</label>
              <select name="productType" value={formData.sizeId} onChange={(e) => { setFormData({ ...formData, sizeId: e.target.value, statusTypeId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
                <option value={0}>Please Select the size</option>
                <option value={1}>100</option>
                <option value={2}>20</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="text-left block text-sm font-medium text-gray-700">Product Type</label>
              <select name="productType" value={formData.productId} onChange={(e) => { setFormData({ ...formData, productId: e.target.value, statusTypeId: e.target.value, billOfMaterials : e.target.value == 2 ? true : false}) }} className="mt-1 block w-full border border-gray-300 rounded-md">
                <option value={1}>Tracked</option>
                <option value={2}>Bill Of Materials</option>
              </select>
            </div>
          </div>

        </div>

        <div className="flex gap-4">

          <div className="flex-1">
            <label className="text-left block text-sm font-medium text-gray-700">Unit</label>
            <select name="unit" value={formData.unitId} onChange={(e) => { setFormData({ ...formData, unitId: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
              <option>Select Unit</option>
              {state.AddProduct?.units && state.AddProduct.units.map((v, i) => (
                <option key={v.id} value={v.id}>{v.unitSmall} - {v.unitName}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-medium text-gray-700">Qty</label>
              <input type="number" name="qty" value={formData.quantity} onChange={(e) => { setFormData({ ...formData, quantity: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Qty" />
            </div>
            <div className="flex-1">
              <label className="text-left block text-sm font-medium text-gray-700">Min Qty</label>
              <input type="number" name="minQty" value={formData.minPurchaseQuantity} onChange={(e) => { setFormData({ ...formData, minPurchaseQuantity: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Min Qty" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Barcode</label>
          <select name="barcode" value={formData.barcodeType} onChange={(e) => { setFormData({ ...formData, barcodeType: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md">
          <option value={0}>Selecte one</option>
              <option value={1} key={1}>Auto GEnerate</option>
              <option value={2} key={2}>Scan code</option>
              <option value={3} key={3}>Manual</option>
            </select>
             </div>

          <div className="flex-1">
          {/* <label className="text-left block text-sm font-medium text-gray-700">Barcode</label> */}
            <input type="number" name="quantity" value={formData.barcodeNo} onChange={(e) => { setFormData({ ...formData, barcodeNo: e.target.value }) }} className="mt-6 block w-full border border-gray-300 rounded-md" />
         
          {/* <label className="text-left block text-sm font-medium text-gray-700">Barcode</label> */}
            {/* <input type="number" name="quantity" value={formData.barcodeNo} onChange={(e) => { setFormData({ ...formData, barcodeNo: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" /> */}
          
          </div>
        </div>

        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">description</label>
          <input type="text" name="quantity" value={formData.description} onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md h-100px" />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md sm:w-auto">Next</button>
        </div>
      </div>
    </form>
  );
};

const AccountingDetailsForm = ({ handleNext, handleBack, formData, setFormData }) => {

//   const state = useSelector(state => state);
  const dispatch = useDispatch();

    const handleSubmit = () => {
        setFormData({ ...formData, billOfMaterialsList: [] })      
        let temp = { ...formData, billOfMaterialsList: [] }
        console.log(temp);
        dispatch({ type: "ADDPRODUCTDETAILS", payload: temp })
      }
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Purchase Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" value={formData.purchasePrice} onChange={(e) => { setFormData({ ...formData, purchasePrice: e.target.value }) }} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Purchase Percentage</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.purchasePercentage} onChange={(e) => { setFormData({ ...formData, purchasePercentage: e.target.value }) }} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Sales Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.salesPrice} onChange={(e) => { setFormData({ ...formData, salesPrice: e.target.value }) }} />
        </div>
      </div>


      <div className="w-full">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">MRP</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.mrp} onChange={(e) => { setFormData({ ...formData, mrp: e.target.value }) }} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Whole sale Price</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" value={formData.wholeSalePrice} onChange={(e) => { setFormData({ ...formData, wholeSalePrice: e.target.value }) }} />
        </div>
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Whole sale Percentage</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.wholeSalePercentage} onChange={(e) => { setFormData({ ...formData, wholeSalePercentage: e.target.value }) }} />
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1">
          <label className="text-left block text-sm font-medium text-gray-700">Product Threshold</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.threshold} onChange={(e) => { setFormData({ ...formData, threshold: e.target.value }) }} />
        </div>
      </div>

      <div className="flex justify-end mt-4 pr-4 space-x-4 bg-zinc-300 py-2">
        {/* <div className="flex-1"> */}
          <button type="submit" className="bg-orange-500 hover:bg-gray-400 text-black font-semibold py-1 px-4 rounded" onClick={handleBack}>
            back
          </button>
        {/* </div> */}
        {/* <div className="flex-1"> */}
            {
                 formData.billOfMaterials == true ? 
                 <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded" onClick={handleNext}>
            Next
          </button>
          :
                 <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
            }
          
        {/* </div> */}
      </div>
    </div>
  )
}


// const BillOfMaterials = ({ handleBack, formData, setFormData }) => {
//   const dispatch = useDispatch();
//   // var [peroductList, setProductList] = useState(
//   //     {
//   //         productId: 0,
//   //         productName: "string",
//   //         statusTypeId: 0,
//   //         categoryId: 0,
//   //         subCategoryId: 0,
//   //         brandId: 0,
//   //         unitId: 0,
//   //         quantity: 0,
//   //         minPurchaseQuantity: 0,
//   //         barcodeType: 0,
//   //         barcodeNo: "string",
//   //         description: "string",
//   //         purchasePrice: 0,
//   //         salesPricePercentage: 0,
//   //         mrp: 0,
//   //         wholesalePricePercentage: 0,
//   //         threshold: 0,
//   //         billOfMaterials: true,
//   //         billOfMaterialsList: [
//   //           {
//   //             billOfMaterialsProductId: 0,
//   //             billOfMaterialsProductQuantity: 0,
//   //             billOfMaterialsProductCost: 0
//   //           }
//   //         ],
//   //         freebie: true,
//   //         freebieProductId: 0,
//   //         images: [
//   //           "string"
//   //         ]
//   //       }
//   //   )
//   var handleSubmit = () => {
//     console.log("formData", formData);

//     dispatch({ type: "ADDPRODUCTDETAILS", payload: formData })
//   }

//   // min-h-screen 
//   return (
//     <div className="flex items-center justify-center bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-y-auto">

//         <div className="space-y-6 md:p-8">
//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-orange-500">Component</h3>
//             <div>
//               <div className="flex items-center mb-px">
//                 <input
//                   type="text"
//                   placeholder="Product Name"
//                   className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-zinc-300"

//                 />
//                 <input
//                   type="text"
//                   placeholder="Qty"
//                   className="w-36 px-4 py-2 mx-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-300"
//                 />

//               </div>
//               <div className="flex items-center space-x-0.5">
//                 <input
//                   type="text"
//                   placeholder="Computer"
//                   className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 bg-zinc-100"
//                 />
//                 <input
//                   type="text"
//                   placeholder="10 pcs"
//                   className="w-36 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-100"
//                 />
//                 <button className="text-gray-500 hover:text-red-500 mt-2">
//                   <img className="ml-2" src={Delete}></img>
//                 </button>
//               </div>

//               <button className="mt-4 text-neutral-900 text-sm font-manrope font-semibold text-left flex items-center space-x-2">
//                 <span className="flex items-center justify-center w-4 h-4 rounded-full border border-black text-black text-xs">
//                   <img src={Vector}></img>
//                 </span>
//                 <span>Add a component product</span>
//               </button>

//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-orange-500 mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500">Additional Cost</h3>
//             <div className="flex items-center mb-px">
//               <input
//                 type="text"
//                 placeholder="Cost Name"
//                 className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-zinc-300"
//               />
//               <input
//                 type="text"
//                 placeholder="Sub Total"
//                 className="w-36 px-4 py-2 mx-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-300"
//               />

//             </div>
//             <div className="flex items-center space-x-0.5">
//               <input
//                 type="text"
//                 placeholder="Assemble"
//                 className="w-52 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 bg-zinc-100"
//               />
//               <input
//                 type="text"
//                 placeholder="₹ 11,000"
//                 className="w-36 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500  bg-zinc-100"
//               />
//               <button className="text-gray-500 hover:text-red-500 mt-2">
//                 <img className="ml-2" src={Delete}></img>
//               </button>
//             </div>

//             <button className="mt-4 text-neutral-900 text-sm font-manrope font-semibold text-left flex items-center space-x-2">
//               <span className="flex items-center justify-center w-4 h-4 rounded-full border border-black text-black text-xs">
//                 <img src={Vector}></img>
//               </span>
//               <span>Add an additional cost</span>
//             </button>
//           </div>
//         </div>

//         <div className="w-full bg-zinc-300 mt-6 p-2">
//           <div className="flex justify-end space-x-4">
//             <button
//               className="px-4 bg-orange-500 text-neutral-900 rounded-md hover:bg-gray-300" onClick={handleBack}
//             >
//               Back
//             </button>
//             <button className="px-4 py-1 bg-orange-500 text-neutral-900 rounded-md hover:bg-orange-600" onClick={handleSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

function BillOfMaterials({ handleBack, formData, setFormData }) {
  const dispatch = useDispatch();
  const [billOfMaterialsList, setbillOfMaterialsList] = useState([
    { productName: 'Computer', billOfMaterialsProductId: 1, billOfMaterialsProductQuantity: 0, costName: 'Assemble', billOfMaterialsProductCost: 0 }

  ]);

  // const [additionalCosts, setAdditionalCosts] = useState([
  //   { costName: 'Assemble', billOfMaterialsProductCost: 0 },
  // ]);


  const addComponent = () => {
    setbillOfMaterialsList([...billOfMaterialsList, { productName: '', billOfMaterialsProductQuantity: '' }]);
  };


  const deleteComponent = (index) => {
    setbillOfMaterialsList(billOfMaterialsList.filter((_, i) => i !== index));
  };


  const addAdditionalCost = () => {
    setbillOfMaterialsList([...billOfMaterialsList, { costName: '', subtotal: '' }]);
  };

  const deleteAdditionalCost = (index) => {
    setbillOfMaterialsList(billOfMaterialsList.filter((_, i) => i !== index));
  };

  var handleSubmit = () => {
    setFormData({ ...formData, billOfMaterialsList })
    // const formattedBillOfMaterials = billOfMaterialsList.map(item => ({
    //     billOfMaterialsProductId: item.billOfMaterialsProductId || 0,
    //     billOfMaterialsProductQuantity: item.billOfMaterialsProductQuantity || 0,
    //     billOfMaterialsProductCost: 0  // Set to 0 if not applicable
    // }));

    // const formattedAdditionalCosts = additionalCosts.map(item => ({
    //     billOfMaterialsProductId: 0, // Set to 0 if not applicable
    //     billOfMaterialsProductQuantity: 0,
    //     billOfMaterialsProductCost: item.billOfMaterialsProductCost || 0
    // }));

    // Merge both formatted arrays into a single array
    // const unifiedBillOfMaterialsList = [...formattedBillOfMaterials];

    // Wrap in the desired object structure
    // const finalData = {
    //     billOfMaterialsList: unifiedBillOfMaterialsList
    // };
    // let temp1 = [...finalData.billOfMaterialsList]
    let temp = { ...formData, billOfMaterialsList: [] }
    console.log(temp);
    dispatch({ type: "ADDPRODUCTDETAILS", payload: temp })
  }

  return (
    // min-h-screen
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-y-auto border border-orange-500">

        <div className='p-6'>
          <div className="my-4">
            <h3 className="text-lg font-semibold font-Manrope text-orange-500">Component</h3>
            <table className="w-full mt-3 border-none lg:w-96">
              <thead>
                <tr className="bg-zinc-300 font-Manrope text-base font-bold">
                  <th className="text-left px-5 border-r-2 border-white ">Product Name</th>
                  <th className="p-2 text-left px-5">Qty</th>
                </tr>
              </thead>
              <tbody>
                {billOfMaterialsList.map((component, index) => (
                  <tr key={index} className="border-none">
                    <td className="">
                      <input
                        type="text"
                        value={component.productName}
                        placeholder="Enter product name"
                        className="border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => {
                          const newComponents = [...billOfMaterialsList];
                          newComponents[index].productName = e.target.value;
                          setbillOfMaterialsList(newComponents);
                        }}
                      />
                    </td>
                    <td className="">
                      <input
                        type="text"
                        value={component.billOfMaterialsProductQuantity}
                        placeholder="Enter quantity"
                        className="border w-full border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => {
                          const newComponents = [...billOfMaterialsList];
                          newComponents[index].billOfMaterialsProductQuantity = e.target.value;
                          setbillOfMaterialsList(newComponents);
                        }}
                      />
                    </td>
                    <td className="text-center">
                      <button onClick={() => deleteComponent(index)} className="text-red-500 hover:text-red-700">
                        <img src={Delete} className="w-7 h-7 ml-1"></img>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div onClick={addComponent} className="text-blue-500 hover:text-blue-700 mt-4 flex items-center">
              <span className=""><img src={Vector} className="w-4 h-4 ml-1"></img></span>
              <span className="ml-3 font-Manrope font-semibold text-sm text-neutral-900">Add a component product</span>
            </div>
          </div>


          <div className="my-4">
            <h3 className="text-lg font-semibold text-orange-500">Additional Cost</h3>
            <table className="w-full mt-2 border-none lg:w-96">
              <thead>
                <tr className="bg-zinc-300 bg-zinc-300 font-Manrope text-base font-bold">
                  <th className="text-left px-5 border-r-2 border-white">Cost Name</th>
                  <th className="p-2 text-left px-5">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {billOfMaterialsList.map((cost, index) => (
                  <tr key={index} className="border-none">
                    <td className="">
                      <input
                        type="text"
                        value={cost.costName}
                        placeholder="Enter cost name"
                        className=" border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => {
                          const newCosts = [...billOfMaterialsList];
                          newCosts[index].costName = e.target.value;
                          setbillOfMaterialsList(newCosts);
                        }}
                      />
                    </td>
                    <td className="">
                      <input
                        type="text"
                        value={cost.billOfMaterialsProductCost}
                        placeholder="Enter subtotal"
                        className="border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => {
                          const newCosts = [...billOfMaterialsList];
                          newCosts[index].billOfMaterialsProductCost = e.target.value;
                          setbillOfMaterialsList(newCosts);
                        }}
                      />
                    </td>
                    <td className=" text-center">
                      <button onClick={() => deleteAdditionalCost(index)} className="text-red-500 hover:text-red-700">
                        <img src={Delete} className="w-7 h-7 ml-1"></img>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div onClick={addAdditionalCost} className="text-blue-500 hover:text-blue-700 mt-4 flex items-center">
              <span className=""><img src={Vector} className="w-4 h-4 ml-1"></img></span>
              <span className="ml-1 font-Manrope font-semibold text-sm text-neutral-900 ">Add an additional cost</span>
            </div>

          </div>

        </div>


        <div className="flex justify-end mt-4 pr-4 space-x-4 bg-zinc-300 py-2">
          <button className="bg-orange-500 hover:bg-gray-400 text-black font-semibold py-1 px-4 rounded" onClick={handleBack}>Back</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

//   export default BillMaterial;


export default AddProductModal;
