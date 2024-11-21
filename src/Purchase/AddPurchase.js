import React, { useState, useEffect, useRef } from "react";
import Rectangle from '../Images/Rectangle 52.svg';
import Add from '../Images/Vector (3).svg';
import dropdown from '../Images/Vector (4).svg';
import Dot from '../Images/Sales/Dots.svg';
import DateIcon from '../Images/Sales/Vector (5).svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import View from '../Images/Sales/view.svg'
import Edit from '../Images/Sales/edit.svg'
import Delete from '../Images/Sales/Delete.svg'
import { useDispatch, useSelector } from 'react-redux';
import { MpSharp } from "@mui/icons-material";
import { Trash } from "iconsax-react";


function AddPurchase({ handleClose }) {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);
  const [orderDate, setOrderDate] = useState(null);
  const [deliveredDate, setDeliveredDate] = useState(null);
  const [invoiceId, setInvoiceId] = useState("")
  const quantityRefs = useRef([]);
  const [subTotal, setSubTotal] = useState(0);
  const [beforeTax, setBeforeTax] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [productId, setProductID] = useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [showProductDropdown, setShowProductDropdown] = useState([]);
  const [productIDWithName, setProductIDWithName] = useState('')
  const [supplierId, setSupplierId] = useState('')
  const [errors, setErrors] = useState({});
  console.log("supplierId", supplierId)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDateError, setOrderDateError] = useState('');
  const [invoiceIdError, setInvoiceIdError] = useState('');
  const [productsError, setProductsError] = useState('');
  const [supplierIdError, setSupplierIdError] = useState('');
  const [isStoredIndex, setIsStoredIndex] = useState('');
  const [activeField, setActiveField] = useState({});

  const dropdownRef = useRef(null);
  const productRefs = useRef([]);
  const toggleDropdown = () => {
    setDropdownOpen(true);
  };

  const handleIconClickForDelivery = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleIconClickForOrder = () => {
    setIsDatePickerOpen((prev) => !prev);
  };

  const handleInvoiceIdChange = (e) => {
    setInvoiceId(e.target.value);
    setInvoiceIdError('')
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.invoiceId;
      return newErrors;
    });
  };

  const handleOrderDateChange = (date) => {
    setOrderDate(date);
    setIsDatePickerOpen(false);
    setOrderDateError('')
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.orderDate;
      return newErrors;
    });
  };

  const handleDeliveredDateChange = (date) => {
    setDeliveredDate(date);
  };




  console.log("state add Purchase", state)

  console.log("error", errors)

  const [products, setProducts] = useState([
    {
      Product: '',
      productID: '',
      Quantity: 1,
      FinalQuantity: 0,
      PurchasePrice: '',
      MRP: '',
      SalesPercentage: '',
      SalesPrice: '',
      WholeSalePercentage: '',
      WholeSalePrice: '',
      Total: 0,
      subCategory: '',
      unit: '',
      size: ''
    },
  ]);



  const handleAddRow = () => {
    const newRow = {
      Product: '',
      productID: '',
      Quantity: '',
      FinalQuantity: 0,
      PurchasePrice: '',
      MRP: '',
      SalesPercentage: '',
      SalesPrice: '',
      WholeSalePercentage: '',
      WholeSalePrice: '',
      Total: 0,
    };
    setProducts([...products, newRow]);
    setShowProductDropdown([...showProductDropdown, false]);
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddRow();
    }
  };







  const handleInputChange = (e, field, index) => {
    const value = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;

    const { Quantity, PurchasePrice, SalesPercentage, WholeSalePercentage, MRP, SalesPrice, WholeSalePrice, Product, noOFItemPerUnit, FinalQuantity } = updatedProducts[index];
    updatedProducts[index].Total = FinalQuantity * PurchasePrice;


  
   

    const numericMRP = parseFloat(MRP) || 0;
    const numericPurchasePrice = parseFloat(PurchasePrice) || 0;
    const numericSalesPrice = parseFloat(SalesPrice) || 0;
    const numericWholeSalePrice = parseFloat(WholeSalePrice) || 0;

    const newErrors = { ...errors };

    if (!Product) {
      newErrors[`Product-${index}`] = 'Product name is required';
    } else {
      newErrors[`Product-${index}`] = '';
    }



    if (!numericPurchasePrice) {
      newErrors[`PurchasePrice-${index}`] = 'Purchase Price must be greater than 0';
    } else {
      newErrors[`PurchasePrice-${index}`] = '';
    }
    if (!numericMRP) {
      newErrors[`MRP-${index}`] = 'MRP must be greater than 0';
    } else {
      newErrors[`MRP-${index}`] = '';
    }

    if (!Quantity) {
      newErrors[`Quantity-${index}`] = 'Quantity must be greater than 0';
    } else {
      newErrors[`Quantity-${index}`] = '';
    }



    if (numericSalesPrice > numericMRP) {
      newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
    } else {
      newErrors[`SalesPrice-${index}`] = '';
    }

    if (numericWholeSalePrice > numericMRP) {
      newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
    } else {
      newErrors[`WholeSalePrice-${index}`] = '';
    }


    if (field === 'Quantity' || field === 'noOFItemPerUnit') {


      
      const numericQuantity = parseFloat(updatedProducts[index].Quantity) || 0;
      const numericNoOfItemsPerUnit =parseFloat(updatedProducts[index].noOFItemPerUnit) || 0;
    
      updatedProducts[index].FinalQuantity = numericQuantity * numericNoOfItemsPerUnit;

      console.log("numericQuantity",numericQuantity)
      console.log("numericNoOfItemsPerUnit",numericNoOfItemsPerUnit)
    
      if (updatedProducts[index].Quantity <= 0) {
        newErrors[`Quantity-${index}`] = 'Quantity must be greater than 0';
      } else {
        newErrors[`Quantity-${index}`] = '';
      }
    }
    

    
    if (field === 'SalesPercentage' && SalesPercentage && PurchasePrice) {

      const calculateSalesPrice = updatedProducts[index].SalesPrice = Math.round(PurchasePrice * (1 + SalesPercentage / 100));
      updatedProducts[index].SalesPrice = calculateSalesPrice;

      if (calculateSalesPrice > numericMRP) {
        newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
      } else {
        newErrors[`SalesPrice-${index}`] = '';
      }

    } else if (field === 'SalesPrice' && !SalesPercentage && numericPurchasePrice > 0) {
      updatedProducts[index].SalesPercentage = Math.round(((numericSalesPrice / numericPurchasePrice) - 1) * 100);


    } else if (field === 'SalesPrice' && SalesPercentage && numericPurchasePrice > 0) {
      const calculatedSalesPercentage = Math.round(((numericSalesPrice / numericPurchasePrice) - 1) * 100);
      updatedProducts[index].SalesPercentage = calculatedSalesPercentage;

      if (calculatedSalesPercentage < 0) {
        newErrors[`SalesPrice-${index}`] = 'Calculated Sales Percentage is unusually low. Please verify.';
      }
    }

    if (field === 'WholeSalePercentage' && WholeSalePercentage && PurchasePrice) {
      const CalculateWholeSalePrice = Math.round(PurchasePrice * (1 + WholeSalePercentage / 100));
      updatedProducts[index].WholeSalePrice = CalculateWholeSalePrice

      if (CalculateWholeSalePrice > numericMRP) {
        newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
      } else {
        newErrors[`WholeSalePrice-${index}`] = '';
      }
    } else if (field === 'WholeSalePrice' && !WholeSalePercentage && numericPurchasePrice > 0) {
      updatedProducts[index].WholeSalePercentage = Math.round(((numericWholeSalePrice / numericPurchasePrice) - 1) * 100);

    } else if (field === 'WholeSalePrice' && WholeSalePercentage && numericPurchasePrice > 0) {
      const calculatedWholeSalesPercentage = Math.round(((numericWholeSalePrice / numericPurchasePrice) - 1) * 100);
      updatedProducts[index].WholeSalePercentage = calculatedWholeSalesPercentage;

      if (calculatedWholeSalesPercentage < 0) {
        newErrors[`WholeSalePrice-${index}`] = 'Calculated Whole Sales Percentage is unusually low. Please verify.';
      }
    }

    setErrors(newErrors);
    setProducts(updatedProducts);
  };





  console.log("products", products)

  const handleAddPurchase = () => {
    let valid = true;
    const newErrors = {};


    if (!orderDate) {
      newErrors.orderDate = 'Purchase date is required';
      valid = false;
    }

    if (!invoiceId) {
      newErrors.invoiceId = 'Invoice ID is required';
      valid = false;
    }

    if (!products || products.length === 0) {
      newErrors.products = 'At least one product is required';
      valid = false;
    }

    if (!supplierId) {
      newErrors.supplierId = 'Supplier ID is required';
      valid = false;
    }

    products.forEach((product, index) => {
      if (!product.Product) {
        newErrors[`Product-${index}`] = 'Product name is required';
        valid = false;
      }
      if (!product.PurchasePrice || product.PurchasePrice <= 0) {
        newErrors[`PurchasePrice-${index}`] = 'Purchase Price must be greater than 0';
        valid = false;
      }
      if (!product.Quantity || product.Quantity <= 0) {
        newErrors[`Quantity-${index}`] = 'Quantity must be greater than 0';
        valid = false;
      }
      if (!product.MRP || product.MRP <= 0) {
        newErrors[`MRP-${index}`] = 'MRP must be greater than 0';
        valid = false;
      }

      if (!product.SalesPrice) {
        newErrors[`SalesPrice-${index}`] = 'Sales price must be greater than 0';
        valid = false;
      }

      if (!product.WholeSalePrice) {
        newErrors[`WholeSalePrice-${index}`] = 'Wholesale price must be greater than 0';
        valid = false;
      }

      if (product.SalesPercentage && product.PurchasePrice) {
        const calculatedSalesPrice = Math.round(product.PurchasePrice * (1 + product.SalesPercentage / 100));
        if (calculatedSalesPrice > product.MRP) {
          newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
          valid = false;
        }
      } else if (product.SalesPrice && product.SalesPrice > product.MRP) {
        newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
        valid = false;
      }
      if (product.WholeSalePercentage && product.PurchasePrice) {
        const calculatedWholeSalePrice = Math.round(product.PurchasePrice * (1 + product.WholeSalePercentage / 100));
        if (calculatedWholeSalePrice > product.MRP) {
          newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
          valid = false;
        }
      } else if (product.WholeSalePrice && product.WholeSalePrice > product.MRP) {
        newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
        valid = false;
      }
    });


    if (!valid) {
      setErrors(newErrors);
      return;
    }

    console.log("error for Validation", errors)

    const formattedDate = new Date(orderDate).toLocaleDateString('en-GB');
    const purchaseItems = products.map(product => ({
      productId: product.productID,
      quantity: product.FinalQuantity,
      purchasePrice: product.PurchasePrice,
      mrp: product.MRP,
      salesPercentage: product.SalesPercentage,
      salesPrice: product.SalesPrice,
      wholesalePercentage: product.WholeSalePercentage,
      wholesalePrice: product.WholeSalePrice
    }));

    console.log(purchaseItems)

    dispatch({
      type: 'ADDPURCHASE',
      payload: {
        supplierId: supplierId,
        purchaseDate: formattedDate,
        invoiceId: invoiceId,
        invoiceImage: "string",
        purchaseItems: purchaseItems
      }
    });
  };

  useEffect(() => {
    const calculatedSubTotal = products.reduce((sum, product) => sum + product.Total, 0);
    setSubTotal(Number(calculatedSubTotal) || 0);
  }, [products]);




  const [showProductNameDropdown, setShowProductNameDropdown] = useState([]);

  const handleproductNameDropDown = (index) => {
    const updatedDropdown = [...showProductDropdown];
    updatedDropdown[index] = !updatedDropdown[index];
    setShowProductDropdown(updatedDropdown);
  };


  const handleDropDown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };




  const handleDelete = () => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== isStoredIndex));
    setIsModalOpen(false);
  };








  const handleProductName = (item, index) => {
console.log("Item name",item)

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[`Product-${index}`];
      return newErrors;
    });



    const updatedProducts = [...products];
    updatedProducts[index].Product = item.productName;
    updatedProducts[index].productID = item.productId;
    updatedProducts[index].size = item.size;
    updatedProducts[index].subCategory = item.subCategory;
    updatedProducts[index].unit = item.unit;
    updatedProducts[index].noOFItemPerUnit = item.noOfItemsPerunit




    setProducts(updatedProducts);

    const updatedDropdown = [...showProductDropdown];
    updatedDropdown[index] = false;
    setShowProductDropdown(updatedDropdown);

    document.getElementById(`product-${index}`).focus();


  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProductDropdown([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option, id) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    setSupplierIdError('');
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.supplierId;
      return newErrors;
    });
    setSupplierId(id)
  };


console.log("ProductID",productId)

useEffect(() => {
  if (state.Product.getProductStatusCode == 200) {
    
      setProductID(state.Product.ProductList)

      setTimeout(() => {
          dispatch({ type: 'REMOVE_GET_PRODUCT_STATUS_CODE' })
      }, 2000)
  }

}, [state.Product.getProductStatusCode])


  useEffect(() => {
    dispatch({ type: 'GETSUPPLIER' });
    dispatch({ type: 'GETPRODUCT' })
  }, []);


  const handleOpenDeleteModal = (index) => {
    console.log("store index", index)
    setIsModalOpen(true);
    setIsStoredIndex(index)


  };


  const handleCloseModal = () => {
    setIsModalOpen(false);

  };

  console.log("Current errors state:", errors);


  const handleFieldClick = (fieldName, index) => {
    setActiveField((prevState) => ({
      ...prevState,
      [index]: fieldName,
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Purchases - Purchase List - <span className="text-orange-600">Add Purchases</span>
        </p>
        <div className="flex gap-2">
          <button onClick={handleClose} className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm hover:bg-orange-600 hover:text-black hover:border-black">
            Cancel
          </button>
          <button onClick={handleAddPurchase} className="flex items-center gap-2 w-fit h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-8 p-4 mb-4">
        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row justify-start p-2 items-center gap-5">


            <div className="relative mb-4 lg:mb-0 md:mb-0">
              <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Shipment From</p>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between text-black whitespace-nowrap bg-grey font-medium w-full md:w-56 sm:w-56 px-5 py-2 text-sm rounded-t-xl"
              >
                {selectedOption || 'Supplier'}


                <img className="w-4 h-4" src={dropdown} alt="Dropdown Icon" />
              </button>

              {dropdownOpen && (
                <div className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow md:w-56 w-56 sm:w-56">
                  <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">

                    {
                      state.Supplier?.SupplierList?.length > 0 ? (
                        state.Supplier.SupplierList.map((view) => {
                          return (
                            <li
                              key={view.id}
                              value={view.id}
                              onClick={() => handleOptionSelect(view.name, view.id)}
                              className="px-2 py-2 cursor-pointer hover:bg-gray-200"
                            >
                              {view.name}
                            </li>
                          );
                        })
                      ) : (
                        <label>No Supplier Available</label>
                      )
                    }



                  </ul>
                </div>
              )}


              <div className="bg-light_gray p-4 rounded shadow h-32">
                <p className="text-black font-Manrope font-medium">{selectedOption || 'Select Supplier'}</p>
              </div>



            </div>


            <div className="relative mb-4 lg:mb-0 md:mb-0 ">
              <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Shipment To</p>
              <div className="flex items-center justify-between text-black whitespace-nowrap bg-grey font-medium w-full md:w-56 sm:w-56 px-5 py-2 text-sm rounded-t-xl">
                <span>APPTA</span>
              </div>

              <div className="bg-light_gray p-4 rounded shadow h-32">
                <p className="text-black font-Manrope font-medium">Appta</p>
                <p className="text-black font-Manrope font-medium">Street</p>
                <p className="text-black font-Manrope font-medium">Nagarkoil</p>
              </div>



            </div>



          </div>





        </div>

        {errors.supplierId && <p className="text-red-500 font-Manrope mt-1 text-sm">{errors.supplierId}</p>}
        <div className="w-full md:w-1/2  mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="w-full relative">
              <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
                Purchase Date <span className="text-red-500">*</span>
              </label>
              <div class="react-datepicker__input-container relative">
                <DatePicker
                  selected={orderDate}
                  onChange={handleOrderDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="DD / MM / YYYY"
                  className="w-full border rounded px-3 py-2 pr-12 text-sm md:text-base focus:border-gray-500 relative focus:outline-none"
                  open={isDatePickerOpen}
                  onClickOutside={() => setIsDatePickerOpen(false)}
                  ref={datePickerRef}
                />

                <img
                  src={DateIcon}
                  alt="Date Icon"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 md:right-5 lg:right-8 xl:right-10 cursor-pointer"
                  onClick={handleIconClickForOrder}
                />
              </div>


              {errors.orderDate && (
                <p className="text-red-500 font-Manrope mt-1 text-sm">{errors.orderDate}</p>
              )}
            </div>











            <div>
              <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Invoice ID <span className="text-red-500">*</span></label>
              <input type="text"
                value={invoiceId}
                onChange={handleInvoiceIdChange}
                className="w-full border rounded px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none" placeholder="P7895233" />
              {errors.invoiceId && <p className="text-red-500 font-Manrope mt-1 text-sm">{errors.invoiceId}</p>}

            </div>



          </div>
        </div>





        <table className="table-auto border border-gray-300 rounded-lg w-full overflow-x-auto mt-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border font-semibold text-sm w-96">Product</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Quantity</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Purchase Price</th>
              <th className="p-2 border font-semibold text-sm w-1/12">MRP</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Sales %</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Sales Price</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Whole Sale %</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Whole Sale Price</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Total</th>
              <th className="p-2 border font-semibold text-sm w-20"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="p-2 border relative w-96">
                  <input
                    type="text"
                    value={product.Product}
                    // placeholder={`${product.subCategory} - ${product.size} ${product.unit}`}
                    id={`product-${index}`}
                    // value={`${product.Product} ${product.subCategory} - ${product.size} ${product.unit}`}
                    onChange={(e) => handleInputChange(e, 'Product', index)}
                    onClick={() => handleproductNameDropDown(index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`Product-${index}`] ? 'border-red-500' : ''}`}
                  />



                  {showProductDropdown[index] && (
                    <div ref={dropdownRef} className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow md:w-56 w-56 sm:w-56">
                      <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">
                        {productId.length > 0 ? (
                          productId
                            .filter(item => item.productName.toLowerCase().includes(product.Product.toLowerCase()))
                            .map(item => (

                              <li
                                key={item.productId}
                                onClick={() => handleProductName(item, index)}
                                className="px-2 py-2 cursor-pointer hover:bg-gray-200"
                              >
                                <div className="flex flex-col">
                                  <label>{item.productName}

                                    {item.subCategory}</label>
                                  <label>{item.size} - {item.unit}</label>
                                </div>
                              </li>
                            ))
                        ) : (
                          <li className="px-2 py-2 cursor-pointer hover:bg-gray-200">
                            No products
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.Quantity}

                    onChange={(e) => handleInputChange(e, 'Quantity', index)}
                    className={`border p-1  focus:border-gray-500 focus:outline-none rounded w-full ${errors[`Quantity-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.PurchasePrice}
                    onChange={(e) => handleInputChange(e, 'PurchasePrice', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`PurchasePrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />

                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.MRP}
                    onChange={(e) => handleInputChange(e, 'MRP', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`MRP-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.SalesPercentage}
                    onClick={() => handleFieldClick('SalesPercentage', index)}
                    onChange={(e) => handleInputChange(e, 'SalesPercentage', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`SalesPercentage-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  // disabled={activeField[index] === 'SalesPrice'}
                  />
                </td>

                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.SalesPrice}
                    onClick={() => handleFieldClick('SalesPrice', index)}
                    onChange={(e) => handleInputChange(e, 'SalesPrice', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`SalesPrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  // disabled={activeField[index] === 'SalesPercentage'}
                  />

                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.WholeSalePercentage}
                    onChange={(e) => handleInputChange(e, 'WholeSalePercentage', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`WholeSalePercentage-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    value={product.WholeSalePrice}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => handleInputChange(e, 'WholeSalePrice', index)}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full ${errors[`WholeSalePrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border w-1/12">
                  <input
                    type="number"
                    disabled
                    value={product.Total}
                    className="border p-1  focus:border-gray-500 focus:outline-none rounded w-full"
                  />
                </td>

                <td className="p-2  text-gray-500 cursor-pointer w-20"      >

                  <div className="flex justify-center">


                    <Trash
                      size="32"
                      color="#989c99"
                      className="w-6 h-6 text-zinc-600 cursor-pointer" onClick={() => handleOpenDeleteModal(index)}
                    />

                  </div>

                </td>


              </tr>




            ))}
          </tbody>
        </table>





        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg z-50">
              <p className="mb-3 font-Manrope font-semibold">Do you want to remove the selected products?</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 rounded font-Manrope">Cancel</button>
                <button onClick={() => handleDelete()} className="px-4 py-2 bg-orange-600 text-white rounded w-20 font-Manrope">OK</button>
              </div>
            </div>
          </div>
        )}







        <div className="errors-container">
          {Object.keys(errors).map((key) => {
            if (
              ['Product', 'PurchasePrice', 'Quantity', 'MRP', 'SalesPercentage', 'SalesPrice', 'WholeSalePercentage', 'WholeSalePrice'].some((k) => key.includes(k))
            ) {
              return (
                <p key={key} className="text-red-500 text-xs mt-1">
                  {errors[key]}
                </p>
              );
            }
            return null;
          })}
        </div>




        <div className="flex items-center mt-4 cursor-pointer" >
          <div onClick={handleAddRow} className="flex items-center" >
            <img src={Add} alt="Add icon" />
            <p className="font-semibold text-sm ml-4">Add Products</p>
          </div>

        </div>

        <div className="mt-4 border border-y-black w-full"></div>



        <div className="flex flex-cols justify-end items-center gap-10 m-2">

          <div>
            <label>Sub-total</label>
          </div>
          <div>
            <label>₹{subTotal || 0.00}</label>
          </div>

        </div>

        <div className="mt-4 border border-y-orange-600 w-full"></div>

        <div className="flex flex-cols justify-end items-center gap-10 m-2">

          <div>
            <label>Total(INR)</label>
          </div>
          <div>
            <label>₹ {subTotal || 0.00}</label>
          </div>

        </div>





      </div>
    </div>
  );
}

export default AddPurchase;


