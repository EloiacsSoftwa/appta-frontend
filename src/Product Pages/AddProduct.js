import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GET_BRANDS_API_CALL, GET_ALL_UNITS_API_CALL, GET_PRODUCT_SIZE_API_CALL, GET_SUB_CATEGORY_BASED_ON_CATEGORY_API_CALL } from "../utils/Constant";
import Close from '../Images/Icons/cancelbtn.svg'
import Vector from '../Images/Icons/Vector.svg';
import Delete from '../Images/Icons/Delete.svg';
import useBarcodeScanner from "../utils/useBarcodeScanner";

const AddProductModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Product Details");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({

    images: [],
    Name: "",
    productId: '',
    productName: '',
    // productType: 'Tracked',
    // productBrand: '',
    categoryId: '',
    subCategoryId: '',
    brandId: 0,
    unitId: 0,
    quantity: '',
    minPurchaseQuantity: '',
    barcodeType: 0,
    barcodeNo: 0,
    description: '',
    // quantity: 0,
    billOfMaterials: false,
    purchasePrice: 0,
    salesPricePercentage: 0,
    freebie: false,
    purchasePercentage: 0,
    salesPrice: 0,
    mrp: 0,
    // wholeSalePrice: 0,
    wholesalePricePercentage: 0,
    threshold: 0,
    freebieProductId: 0,
    barcodeNo: 0,
    statusTypeId: 1,
    sizeId: 0,
    hsnCode: '',
    manualSize: true
  });




  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    if (state.AddProduct.add_Product_status_code === 200) {
      dispatch({ type: 'GETPRODUCT' })
      setFormData(prevState => ({
        ...prevState,
        images: [],
        Name: "",
        productId: '',
        productName: '',
        categoryId: '',
        subCategoryId: '',
        brandId: 0,
        unitId: 0,
        quantity: '',
        minPurchaseQuantity: '',
        barcodeType: 0,
        barcodeNo: 1,
        description: '',
        billOfMaterials: false,
        purchasePrice: 0,
        salesPricePercentage: 1,
        freebie: false,
        purchasePercentage: 0,
        salesPrice: 0,
        mrp: 0,
        wholesalePricePercentage: 1,
        threshold: 0,
        freebieProductId: 0,
        barcodeNo: 0,
        statusTypeId: 1,
        sizeId: 0,
        hsnCode: ''
      }));
      setErrors({});
      setTimeout(() => {
        dispatch({ type: 'REMOVE_ADD_PRODUCT_STATUS_CODE' })
      }, 3000)
    }
  }, [state.AddProduct.add_Product_status_code]);


  useEffect(() => {
    // dispatch({ type: 'GETSUBCATEGORY' });
    dispatch({ type: 'GETCATEGORY' });
    dispatch({ type: GET_BRANDS_API_CALL })
    dispatch({ type: GET_ALL_UNITS_API_CALL })
    dispatch({ type: GET_PRODUCT_SIZE_API_CALL })
  }, []);

  const handleNext = () => {
    if (activeTab === "Product Details") {
      // setActiveTab("Accounting");
      setActiveTab("Bill Of Material");
    } else if (activeTab === "Accounting") {
      setActiveTab("Bill Of Material");
    }
  };

  const handleBack = () => {
    if (activeTab === "Accounting") {
      setActiveTab("Product Details");
    } else if (activeTab === "Bill Of Material") {
      // setActiveTab("Accounting");
      setActiveTab("Product Details");
    }
  };





  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-1/2 p-6 overflow-y-scroll h-3/4 border border-orange-500">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Product</h2>
          <img src={Close} onClick={onClose} className="w-5 h-5 cursor-pointer hover:text-orange-800" />
          {/* <button  className="text-gray-600 hover:text-gray-800">X</button> */}
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4 justify-between">
          {/* {["Product Details", "Accounting", "Bill Of Material"].map((tab) => ( */}
          {["Product Details", "Bill Of Material"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-20 py-2 -mb-px border-b-2 ${activeTab === tab ? "border-orange-500 text-orange-500" : "border-transparent text-gray-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        {activeTab === "Product Details" && <ProductDetailsForm handleNext={handleNext} formData={formData} setFormData={setFormData} />}
        {/* {activeTab === "Accounting" && <AccountingDetailsForm handleNext={handleNext} handleBack={handleBack} formData={formData} setFormData={setFormData} />} */}
        {
          formData.billOfMaterials === true ?
            activeTab === "Bill Of Material" && <BillOfMaterials handleBack={handleBack} formData={formData} setFormData={setFormData} />
            : null}
      </div>
    </div>
  );
};

const ProductDetailsForm = ({ handleNext, formData, setFormData }) => {

  const dropdownRef = useRef(null);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState()
  const [enableBarcodeScanner, setBarcodeScannerEnabled] = useState(false)
  let fileInputRef = useRef()
  const [errors, setErrors] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);



  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      freebie: true
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // productsize filter or input field value send
  const [filteredSizes, setFilteredSizes] = useState([]);
  const productSizes = useSelector(state => state.AddProduct.productSize);


  const handleInputChanges = (e) => {
    const value = e.target.value;
    setShowDropdown(true);
    setFormData({ ...formData, sizeId: value });

              if (errors.sizeId) {
                  setErrors((prevErrors) => ({ ...prevErrors,  sizeId: "" }));
                }

    const filtered = productSizes.filter((size) =>
      size.sizeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSizes(filtered);
  };

  const barcodeScanned = (code) => {
    setFormData(...formData, { barcodeNo: code })
  }


  const handleSuggestionClick = (size) => {
    setFormData({ ...formData, sizeId: size.sizeName });
    setFilteredSizes([]);
    setShowDropdown(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = reader.result.split(',')[1];
        console.log("base64String", base64String);

        // setFormData({s
        //     ...formData,
        //     images: [base64String],
        // });
        setFormData({
          ...formData,
          images: reader.result,
        });
        // [base64String]
        // fileInputRef.current.value = '';
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      reader.onerror = (error) => {
        console.error(error);
      };
      //   reader.readAsDataURL(file);
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
    dispatch({ type: GET_SUB_CATEGORY_BASED_ON_CATEGORY_API_CALL, payload: id });
  }
  // getFreebieName
  const handleFreebieName = (e) => {
    setFormData({ ...formData, Name: e.target.value });
    setTimeout(() => {
      dispatch({ type: "GETFREEBIENAME", payload: e.target.value })
    }, 4000);
  }

  const validateFields = () => {
    let tempErrors = {};

    if (!formData.productName) tempErrors.productName = "Product Name is required";
    if (!formData.categoryId) tempErrors.categoryId = "Category is required";
    if (!formData.subCategoryId) tempErrors.subCategoryId = "Sub Category is required";
    if (!formData.brandId) tempErrors.brandId = "Brand is required";
    if (!formData.unitId) tempErrors.unitId = "Unit is required";
    if (!formData.barcodeType) tempErrors.barcodeType = "Barcode Type is required";
    if (!formData.barcodeNo) tempErrors.barcodeNo = "Barcode No is required";
    if (!formData.description) tempErrors.description = "Description is required";
    if (!formData.sizeId) tempErrors.sizeId = "Size is required";
    if (!formData.hsnCode) tempErrors.hsnCode = "HSN Code is required";
    if (!formData.productId) tempErrors.productId = "Product type is required";


    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      setFormData({ ...formData, billOfMaterialsList: [] })
      let temp = { ...formData, billOfMaterialsList: [] }
      console.log(temp);
      dispatch({ type: "ADDPRODUCTDETAILS", payload: temp })
    }

  }


  useBarcodeScanner(barcodeScanned)

  return (
    // onSubmit={(e) => { e.preventDefault(); handleNext(); }}
    <form className="flex-col flex-wrap gap-4" >
      <div className="flex flex-row flex-wrap gap-4">
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
              <span className="text-gray-400 text-sm font-Manrope">+ Add image</span>
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
            <label className="ml-2 text-sm font-medium text-gray-700 cursor-pointer font-Manrope" onClick={handleInputChange}>Freebie</label>
          </div>
          <div>
            <label className="text-left text-sm font-medium text-black font-SourceSansPro">Name</label>
            <input type="text" name="productName" value={formData.Name} onChange={(e) => { handleFreebieName(e) }} className="focus:border-zinc-400 focus:outline-none font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md h-9 pl-2" placeholder="Freebie" />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Product Name</label>
              <input type="text" name="productName" value={formData.productName} onChange={(e) => { 
                
                setFormData({ ...formData, productName: e.target.value }) 
                
                if (errors.productName) {
                  setErrors((prevErrors) => ({ ...prevErrors, productName: "" }));
                }
                
                }} className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9 pl-2 pr-2" placeholder="Watch" />

              {errors.productName && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.productName}</p>}
            </div>
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Brand</label>
              <select name="subCategory" value={formData.brandId} onChange={(e) => 
                
                { 
                  setFormData({ ...formData, brandId: e.target.value })
                  if (errors.brandId) {
                    setErrors((prevErrors) => ({ ...prevErrors, brandId: "" }));
                  }
                
                }} className=" focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray  mt-1 block w-full border border-gray-300 rounded-md h-9">
                <option>Select Brand</option>
                {state.AddProduct?.brands && state.AddProduct.brands.map((v, i) => (
                  <option key={v.id} value={v.id}>{v.brandName}</option>
                ))}
              </select>
              {errors.brandId && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.brandId}</p>}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Category</label>
              <select name="category" value={formData.categoryId} onChange={(e) => {
                setFormData({ ...formData, categoryId: e.target.value })
                if (errors.categoryId) {
                  setErrors((prevErrors) => ({ ...prevErrors, categoryId: "" }));
                }
                handleSelectCategory(e.target.value)
              }} className=" focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9">
                <option>Select One</option>
                {state.AddProduct?.category && state.AddProduct.category?.map((v, i) => (
                  <option key={v.id} value={v.id}>{v.categoryName}</option>
                ))}
              </select>
              {errors.categoryId && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.categoryId}</p>}
            </div>
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Sub Category</label>
              <select name="subCategory" value={formData.subCategoryId} onChange={(e) => { 
                
                setFormData({ ...formData, subCategoryId: e.target.value })
                if (errors.subCategoryId) {
                  setErrors((prevErrors) => ({ ...prevErrors, subCategoryId: "" }));
                }
                
                }} className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9">
                <option>Select One</option>
                {state.AddProduct?.subcategory && state.AddProduct.subcategory.map((v, i) => (
                  <option key={v.id} value={v.id}>{v.subCategoryName}</option>
                ))}
              </select>
              {errors.subCategoryId && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.subCategoryId}</p>}
            </div>
          </div>

          <div className="flex flex-1 flex-row">

          </div>

          <div className="flex gap-4">

            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Unit</label>
              <select name="unit" value={formData.unitId} onChange={(e) => { 
                
                
                setFormData({ ...formData, unitId: e.target.value })
                if (errors.unitId) {
                  setErrors((prevErrors) => ({ ...prevErrors,  unitId: "" }));
                }
                
                }} className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9">
                <option>Select Unit</option>
                {state.AddProduct?.units && state.AddProduct.units.map((v, i) => (
                  <option key={v.id} value={v.id}>{v.unitSmall} - {v.unitName}</option>
                ))}
              </select>
              {errors.unitId && <p className="text-red-500 text-sm  font-Manrope mt-2">{errors.unitId}</p>}
            </div>
            <div className="flex-1 relative " ref={dropdownRef}>
  <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Size</label>
  <input
    type="text"
    className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9 pl-2 pr-2"
    placeholder="Brand"
    value={formData.sizeId}
    onChange={handleInputChanges}
  />
  {errors.sizeId && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.sizeId}</p>}
  {showDropdown && filteredSizes.length > 0 && (
    <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 z-10 shadow-lg">
      {filteredSizes.map((size) => (
        <div
          key={size.id}
          className="p-2 cursor-pointer hover:bg-gray-100"
          onClick={() => handleSuggestionClick(size)}
        >
          {size.sizeName}
        </div>
      ))}
    </div>
  )}
</div>


          </div>

          <div className="flex flex-row flex-1 gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Product Type</label>
              <select name="productType" value={formData.productId} onChange={(e) => { 
                
                
                
                setFormData({ ...formData, productId: e.target.value, statusTypeId: e.target.value, billOfMaterials: e.target.value == 2 ? true : false })
                if (errors.productId) {
                  setErrors((prevErrors) => ({ ...prevErrors,  productId: "" }));
                }
                
                }} className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9">
                <option value={0}>Select</option>
                <option value={1}>Tracked</option>
                <option value={2}>Bill Of Materials</option>
              </select>
              {errors.productId && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.productId}</p>}

            </div>

            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">HSN Code</label>
              <input type="text" className="focus:border-zinc-400 focus:outline-none font-SourceSansPro text-base  placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-9 pl-2 pr-2" placeholder="Hsn Code" value={formData.hsnCode} onChange={(e) => {
                 setFormData({ ...formData, hsnCode: e.target.value })
                 if (errors.hsnCode) {
                  setErrors((prevErrors) => ({ ...prevErrors,  hsnCode: "" }));
                }
                 
                 }} />

              {errors.hsnCode && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.hsnCode}</p>}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">Barcode</label>
              <select name="barcode" value={formData.barcodeType} onChange={(e) => {
                setFormData({ ...formData, barcodeType: e.target.value })
                if (errors.barcodeType) {
                  setErrors((prevErrors) => ({ ...prevErrors,  barcodeType: "" }));
                }
                if (e.target.value === 2) {
                  // useBarcodeScanner(barcodeScanned)
                  setBarcodeScannerEnabled(true)
                } else {
                  setBarcodeScannerEnabled(false)
                }

              }} className="font-SourceSansPro text-base  placeholder-black  mt-1 block w-full border border-gray-300 rounded-md h-9 focus:border-zinc-400 focus:outline-none">
                <option value={0} className="text-gray">Selecte one</option>
                <option value={1} key={1}>Auto Generate</option>
                <option value={2} key={2}>Scan code</option>
                <option value={3} key={3}>Manual</option>
              </select>
              {errors.barcodeType && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.barcodeType}</p>}
            </div>

            <div className="flex-1">
              {/* <label className="text-left block text-sm font-medium text-gray-700">Barcode</label> */}
              <input type="text" name="quantity" value={formData.barcodeNo} onChange={(e) => { 
                
                setFormData({ ...formData, barcodeNo: e.target.value }) 
                
                if (errors.barcodeNo) {
                  setErrors((prevErrors) => ({ ...prevErrors, barcodeNo: "" }));
                }
                }} className="font-SourceSansPro text-base  placeholder-black mt-6 block w-full border border-gray-300 rounded-md h-9 focus:border-zinc-400 focus:outline-none" />
              {errors.barcodeNo && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.barcodeNo}</p>}
              {/* <label className="text-left block text-sm font-medium text-gray-700">Barcode</label> */}
              {/* <input type="number" name="quantity" value={formData.barcodeNo} onChange={(e) => { setFormData({ ...formData, barcodeNo: e.target.value }) }} className="mt-1 block w-full border border-gray-300 rounded-md" /> */}

            </div>
          </div>

          <div className="flex-1">
            <label className="text-left block text-sm font-semibold text-black font-SourceSansPro">description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value })
                if (errors.description) {
                  setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
                }
              }}
              className="p-2 font-SourceSansPro text-base text-left placeholder-gray mt-1 block w-full border border-gray-300 rounded-md h-32 focus:border-zinc-400 focus:outline-none "
              style={{ resize: "none" }}
              placeholder="Enter description here"
            />

            {errors.description && <p className="text-red-500 text-sm font-Manrope mt-2">{errors.description}</p>}

          </div>

          {/* <div className="flex justify-end w-full bg-zinc-300">
                    <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md sm:w-auto">Next</button>
                </div> */}
        </div>
      </div>
      {/* <div className="flex justify-end w-full bg-zinc-300 mt-4">
                    <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md sm:w-auto">Next</button>
                </div> */}

      <div className="flex justify-end mt-4 pr-4 space-x-4 bg-zinc-300 py-2 -mr-6 -ml-6 -mb-6">
        {
          formData.billOfMaterials == true ?
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded" onClick={handleNext}>Next</button>
            :
            <div className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded cursor-pointer" onClick={handleSubmit}>Submit</div>
        }

      </div>
    </form>
  );
};

const AccountingDetailsForm = ({ handleNext, handleBack, formData, setFormData }) => {

  //   const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let tempErrors = {};

    if (!formData.productName) tempErrors.productName = "Product Name is required";
    if (!formData.categoryId) tempErrors.categoryId = "Category is required";
    if (!formData.subCategoryId) tempErrors.subCategoryId = "Sub Category is required";
    if (!formData.brandId) tempErrors.brandId = "Brand is required";
    if (!formData.unitId) tempErrors.unitId = "Unit is required";
    if (!formData.barcodeType) tempErrors.barcodeType = "Barcode Type is required";
    if (!formData.barcodeNo) tempErrors.barcodeNo = "Barcode No is required";
    if (!formData.description) tempErrors.description = "Description is required";
    if (!formData.sizeId) tempErrors.sizeId = "Size is required";
    if (!formData.hsnCode) tempErrors.hsnCode = "HSN Code is required";
    if (!formData.productId) tempErrors.productId = "Product type is required";


    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
    setFormData({ ...formData, billOfMaterialsList: [] })
    let temp = { ...formData, billOfMaterialsList: [] }
    console.log(temp);
    dispatch({ type: "ADDPRODUCTDETAILS", payload: temp })
    }
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
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" value={formData.sizeId} onChange={(e) => { setFormData({ ...formData, sizeId: e.target.value }) }} />
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


function BillOfMaterials({ handleBack, formData, setFormData }) {
  const dispatch = useDispatch();
  // , costName: 'Assemble', billOfMaterialsProductCost: 0 
  const [errors, setErrors] = useState({});
  const [billOfMaterialsList, setbillOfMaterialsList] = useState([
    { productName: 'Computer', billOfMaterialsProductId: 1, billOfMaterialsProductQuantity: 0, costName: 'Assemble', billOfMaterialsProductCost: 0 }

  ]);

  const [additionalCosts, setAdditionalCosts] = useState([
    { costName: 'Assemble', billOfMaterialsProductCost: 0 },
  ]);


  const addComponent = () => {
    setbillOfMaterialsList([...billOfMaterialsList, { productName: '', billOfMaterialsProductQuantity: '' }]);
  };


  const deleteComponent = (index) => {
    setbillOfMaterialsList(billOfMaterialsList.filter((_, i) => i !== index));
  };


  const addAdditionalCost = () => {
    setAdditionalCosts([...additionalCosts, { costName: '', subtotal: '' }]);
  };

  const deleteAdditionalCost = (index) => {
    setAdditionalCosts(additionalCosts.filter((_, i) => i !== index));
  };


  const validateFields = () => {
    let tempErrors = {};

    if (!formData.productName) tempErrors.productName = "Product Name is required";
    if (!formData.categoryId) tempErrors.categoryId = "Category is required";
    if (!formData.subCategoryId) tempErrors.subCategoryId = "Sub Category is required";
    if (!formData.brandId) tempErrors.brandId = "Brand is required";
    if (!formData.unitId) tempErrors.unitId = "Unit is required";
    if (!formData.barcodeType) tempErrors.barcodeType = "Barcode Type is required";
    if (!formData.barcodeNo) tempErrors.barcodeNo = "Barcode No is required";
    if (!formData.description) tempErrors.description = "Description is required";
    if (!formData.sizeId) tempErrors.sizeId = "Size is required";
    if (!formData.hsnCode) tempErrors.hsnCode = "HSN Code is required";
    if (!formData.productId) tempErrors.productId = "Product type is required";


    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  var handleSubmit = () => {
    if (validateFields()) {
    setFormData({ ...formData, billOfMaterialsList })
    let temp = { ...formData, billOfMaterialsList }
    // console.log(temp);
    // const combinedObject = billOfMaterialsList.reduce((obj, keyObj, index) => {
    //     obj[keyObj.key] = additionalCosts[index].value;
    //     return obj;
    // }, {});

    // console.log(combinedObject);
    dispatch({ type: "ADDPRODUCTDETAILS", payload: temp })
    }

  }

  return (
    // min-h-screen
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-3xl  overflow-y-auto p-0">

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
                {additionalCosts.map((cost, index) => (
                  <tr key={index} className="border-none">
                    <td className="">
                      <input
                        type="text"
                        value={cost.costName}
                        placeholder="Enter cost name"
                        className=" border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        // onChange={(e) => {
                        //     const newCosts = [...additionalCosts];
                        //     newCosts[index].costName = e.target.value;
                        //     setAdditionalCosts(newCosts);
                        // }}
                        onChange={(e) => {
                          const newCosts = [...additionalCosts];
                          newCosts[index].costName = e.target.value;
                          setAdditionalCosts(newCosts);
                          const newComponents = [...billOfMaterialsList];
                          newComponents[index].costName = e.target.value;
                          setbillOfMaterialsList(newComponents);
                        }}
                      />
                    </td>
                    <td className="">
                      <input
                        type="text"
                        value={cost.billOfMaterialsProductCost}
                        placeholder="Enter subtotal"
                        className="border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        // onChange={(e) => {
                        //     const newCosts = [...additionalCosts];
                        //     newCosts[index].billOfMaterialsProductCost = e.target.value;
                        //     setAdditionalCosts(newCosts);
                        // }}
                        onChange={(e) => {
                          const newCosts = [...additionalCosts];
                          newCosts[index].billOfMaterialsProductCost = e.target.value;
                          setAdditionalCosts(newCosts);
                          const newComponents = [...billOfMaterialsList];
                          newComponents[index].billOfMaterialsProductCost = e.target.value;
                          setbillOfMaterialsList(newComponents);
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


        <div className="flex justify-end mt-4 pr-4 space-x-4 bg-zinc-300 py-2 w-full">
          <button className="bg-orange-500 hover:bg-gray-400 text-black font-semibold py-1 px-4 rounded" onClick={handleBack}>Back</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

//   export default BillMaterial;


export default AddProductModal;
