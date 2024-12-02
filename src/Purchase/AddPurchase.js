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
import TableItems from "./TableItems";


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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDateError, setOrderDateError] = useState('');
  const [invoiceIdError, setInvoiceIdError] = useState('');
  const [productsError, setProductsError] = useState('');
  const [supplierIdError, setSupplierIdError] = useState('');
  const [isStoredIndex, setIsStoredIndex] = useState('');
  const [activeField, setActiveField] = useState({});
  const [searchProduct, setSearchProduct] = useState('')
  const [showSelection, setShowSelection] = useState(false)
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([])


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

  const updateSearchProductLocally = (e) => {
    setShowSelection(e.target.value.length > 0)
    setSearchProduct(e.target.value)
  }

  const handleAddRow = () => {
    const newRow = {
      Product: '',
      productID: '',
      quantity: '',
      FinalQuantity: 0,
      PurchasePrice: 0,
      MRP: '',
      SalesPercentage: '',
      SalesPrice: '',
      WholeSalePercentage: 0,
      WholeSalePrice: '',
      Total: 0,
      expectedPrice: 0,
      noOfItemsPerunit: 1
    };
    setProducts([...products, newRow]);
    setItems([...items, newRow])
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

    if (field == 'Quantity') {
      updatedProducts[index].expectedPrice = updatedProducts[index].PurchasePrice / (updatedProducts[index].noOfItemsPerunit * value)
    }

    if (field == 'PurchasePrice') {
      updatedProducts[index].expectedPrice = value / (updatedProducts[index].noOfItemsPerunit * updatedProducts[index].Quantity)
    }

    const { Quantity, PurchasePrice, SalesPercentage, WholeSalePercentage, MRP, SalesPrice, WholeSalePrice, Product, noOFItemPerUnit, FinalQuantity, expectedPrice } = updatedProducts[index];
    updatedProducts[index].Total = Math.ceil(FinalQuantity * PurchasePrice);


    const numericMRP = parseFloat(MRP) || 0;
    const numericPurchasePrice = parseFloat(updatedProducts.expectedPrice) || 0;
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



    if (updatedProducts[index].SalesPrice > updatedProducts[index].MRP) {
      newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
    } else {
      newErrors[`SalesPrice-${index}`] = '';
    }

    if (updatedProducts[index].WholeSalePrice > updatedProducts[index].MRP) {
      newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
    } else {
      newErrors[`WholeSalePrice-${index}`] = '';
    }


    if (field === 'Quantity' || field === 'noOFItemPerUnit') {



      const numericQuantity = parseFloat(updatedProducts[index].Quantity) || 0;
      const numericNoOfItemsPerUnit = parseFloat(updatedProducts[index].noOFItemPerUnit) || 0;

      updatedProducts[index].FinalQuantity = numericQuantity * numericNoOfItemsPerUnit;

      if (updatedProducts[index].Quantity <= 0) {
        newErrors[`Quantity-${index}`] = 'Quantity must be greater than 0';
      } else {
        newErrors[`Quantity-${index}`] = '';
      }
    }



    if (field === 'SalesPercentage' && SalesPercentage && PurchasePrice) {

      const calculateSalesPrice = updatedProducts[index].SalesPrice = Math.ceil(expectedPrice * (1 + SalesPercentage / 100));
      updatedProducts[index].SalesPrice = calculateSalesPrice;

      if (calculateSalesPrice > numericMRP) {
        newErrors[`SalesPrice-${index}`] = 'Sales price exceeds MRP';
      } else {
        newErrors[`SalesPrice-${index}`] = '';
      }

    } else if (field === 'SalesPrice' && !SalesPercentage && numericPurchasePrice > 0) {
      console.log("condition 1")
      updatedProducts[index].SalesPercentage = Math.ceil(((numericSalesPrice / numericPurchasePrice)) * 100);


    } else if (field === 'SalesPrice' && SalesPercentage && numericPurchasePrice > 0) {
      console.log("condition 2")
      const calculatedSalesPercentage = Math.ceil(((numericSalesPrice / numericPurchasePrice)) * 100);
      updatedProducts[index].SalesPercentage = calculatedSalesPercentage;

      if (calculatedSalesPercentage < 0) {
        newErrors[`SalesPrice-${index}`] = 'Calculated Sales Percentage is unusually low. Please verify.';
      }
    }

    if (field === 'WholeSalePercentage' && WholeSalePercentage && PurchasePrice) {
      const CalculateWholeSalePrice = Math.ceil(PurchasePrice * (1 + WholeSalePercentage / 100));
      updatedProducts[index].WholeSalePrice = CalculateWholeSalePrice

      if (CalculateWholeSalePrice > numericMRP) {
        newErrors[`WholeSalePrice-${index}`] = 'Wholesale price exceeds MRP';
      } else {
        newErrors[`WholeSalePrice-${index}`] = '';
      }
    } else if (field === 'WholeSalePrice' && !WholeSalePercentage && numericPurchasePrice > 0) {
      updatedProducts[index].WholeSalePercentage = Math.ceil(((numericWholeSalePrice / numericPurchasePrice) - 1) * 100);

    } else if (field === 'WholeSalePrice' && WholeSalePercentage && numericPurchasePrice > 0) {
      const calculatedWholeSalesPercentage = Math.ceil(((numericWholeSalePrice / numericPurchasePrice) - 1) * 100);
      updatedProducts[index].WholeSalePercentage = calculatedWholeSalesPercentage;

      if (calculatedWholeSalesPercentage < 0) {
        newErrors[`WholeSalePrice-${index}`] = 'Calculated Whole Sales Percentage is unusually low. Please verify.';
      }
    }

    setErrors(newErrors);
    setProducts(updatedProducts);
  };


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

    const formattedDate = new Date(orderDate).toLocaleDateString('en-GB');
    const purchaseItems = items.map(product => ({
      productId: product.productID,
      quantity: product.quantity,
      purchasePrice: product.expectedPrice,
      mrp: product.MRP,
      salesPercentage: product.SalesPercentage,
      salesPrice: product.SalesPrice,
      wholesalePercentage: product.WholeSalePercentage,
      wholesalePrice: product.WholeSalePrice
    }));


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
    // setProducts((prevProducts) => prevProducts.filter((_, i) => i !== isStoredIndex));
    setItems(items.filter(_itm => _itm.productID !== isStoredIndex))
    setIsModalOpen(false);

    const calculatedSubTotal = items.filter(_itm => _itm.productID !== isStoredIndex).reduce((sum, product) => sum + Number(product.PurchasePrice), 0);
    setSubTotal(Number(calculatedSubTotal) || 0);
  };


  const handleProductName = (item) => {
    // setErrors((prevErrors) => {
    //   const newErrors = { ...prevErrors };
    //   delete newErrors[`Product-${index}`];
    //   return newErrors;
    // });

    const prd = {
      Product: item.productName + " " + item.subCategory + "-" + item.size + item.unit,
      productID: item.productId,
      size: item.size,
      subCategory: item.subCategory,
      unit: item.unit,
      noOfItemsPerunit: item.noOfItemsPerunit,
      quantity: 1,
      PurchasePrice: 0,
      MRP: 0,
      SalesPercentage: 0,
      SalesPrice: 0,
      WholeSalePercentage: 0,
      WholeSalePrice: 0,
      Total: 0,
      expectedPrice: 0
    }

    setSearchProduct('')
    setShowSelection(false)
    setProducts([...products, prd]);
    setItems([...items, prd])
  };

  const handlePurchasePrice = (price, productId) => {
    const prd = items
    const findIndex = prd.findIndex(item => item.productID == productId)
    prd[findIndex].PurchasePrice = price

    const expPrice = Number(price) / (prd[findIndex].quantity)
    prd[findIndex].expectedPrice = expPrice

    setProducts(prd)
    setItems(prd)

    const calculatedSubTotal = prd.reduce((sum, product) => sum + Number(product.PurchasePrice), 0);
    setSubTotal(Number(calculatedSubTotal) || 0);
  }

  const handleQuantityChange = (quantity, productId) => {
    const prd = items
    const findIndex = prd.findIndex(item => item.productId == productId)
    prd[findIndex].quantity = quantity * prd[findIndex].noOfItemsPerunit

    const expPrice = Number(prd[findIndex].PurchasePrice) / (prd[findIndex].quantity)
    prd[findIndex].expectedPrice = expPrice

    setProducts(prd)
    setItems(prd)
  }

  const handleMrpChanges = (mrp, productId) => {
    const prd = products
    const findIndex = prd.findIndex(item => item.productId == productId)
    prd[findIndex].MRP = mrp

    setProducts(prd)
    setItems(prd)
  }

  const handleSalesPercentageChange = (percentage, productId, tag) => {
    const prd = items
    const findIndex = prd.findIndex(item => item.productId == productId)
    const calculatedPrice = ((Number(percentage)/100) * prd[findIndex].expectedPrice) + prd[findIndex].expectedPrice

    if (tag === 'wholesale') {
      prd[findIndex].WholeSalePercentage = Number(percentage)
      prd[findIndex].WholeSalePrice = Number(calculatedPrice)
    }
    else if (tag == 'retail') {
      prd[findIndex].SalesPercentage = Number(percentage)
      prd[findIndex].SalesPrice = Number(calculatedPrice)
    }

    setItems(prd)
  }

  const handleChangePriceChange = (price, productId, tag) => {
    const prd = items
    const findIndex = prd.findIndex(item => item.productId == productId)
    const calculatedPercentage = ((Number(price) - prd[findIndex].expectedPrice)/prd[findIndex].expectedPrice)*100

    if (tag === 'retail') {
      prd[findIndex].SalesPercentage = Number(calculatedPercentage)
      prd[findIndex].SalesPrice = Number(price)
    }
    else if (tag === 'wholesale') {
      prd[findIndex].WholeSalePercentage = Number(calculatedPercentage)
      prd[findIndex].WholeSalePrice = Number(price)
    }

    setItems(prd)
  }

  const deleteItems = (productId) => {
    const calculatedSubTotal = items.filter(_itm => _itm.productID !== productId).reduce((sum, product) => sum + Number(product.PurchasePrice), 0);
    setSubTotal(Number(calculatedSubTotal) || 0);
    setItems(items.filter(_itm => _itm.productID !== productId))

  }


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


  const handleOpenDeleteModal = (productId) => {
    setIsModalOpen(true);
    setIsStoredIndex(productId)
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);

  };
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
              <th className="p-2 border font-semibold text-sm w-1/12">Bags/Chain</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Purchase Price</th>
              <th className="p-2 border font-semibold text-sm w-1/12">MRP</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Sales %</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Sales Price</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Whole Sale %</th>
              <th className="p-2 border font-semibold text-sm w-1/12">Whole Sale Price</th>
              {/* <th className="p-2 border font-semibold text-sm w-1/12">Total</th> */}
              <th className="p-2 border font-semibold text-sm w-20"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((product, index) => {
              return <TableItems product={product} handleproductNameDropDown={handleproductNameDropDown} index={index} purchasePrice={handlePurchasePrice} handleQuantityChange={handleQuantityChange} mrpChanges={handleMrpChanges} percentageChange={handleSalesPercentageChange} priceChange={handleChangePriceChange} handleOpenDeleteModal={handleOpenDeleteModal}/>

            })}
            <tr className="bg-gray-100">
              <td className="p-2 border relative w-44">
                <input
                  type="text"
                  value={searchProduct}
                  onChange={updateSearchProductLocally}
                  onClick={() => { }}
                  placeholder="Search the product here"
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                />
                {
                  showSelection && <div ref={dropdownRef} className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow h-40 md:w-44 w-44 sm:w-44 overflow-scroll">
                    <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">
                      {productId.length > 0 ? (
                        productId
                          .map(item => (
                            <li
                              key={item.productId}
                              // handleProductName(item, props.index)
                              onClick={() => { handleProductName(item) }}
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
                }
              </td>

              <td className="p-2 border w-1/12">
                <div className="flex flex-col">
                  <input
                    type="number"
                    placeholder="eg. 2"
                    onChange={() => { }}
                    className={`border p-1  focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                    min="0"
                  />
                </div>

              </td>

              <td className="p-2 border w-2/12">
                <div className="flex flex-col">
                  <input
                    type="number"
                    placeholder="eg. 2000"
                    onChange={() => { }}
                    className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                    min="0"
                  />

                </div>
              </td>

              <td className="p-2 border w-1/12">
                <input
                  type="number"
                  placeholder="eg. 1000"
                  onChange={(e) => { }}
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                  min="0"
                />
              </td>

              <td className="p-2 border w-1/12">
                <input
                  type="number"
                  placeholder="eg. 10"
                  onChange={(e) => { }}
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                  min="0"
                />
              </td>
              <td className="p-2 border w-1/12">
                <input
                  type="number"
                  placeholder="eg. 500"
                  onChange={(e) => { }}
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                  min="0"
                />
              </td>
              <td className="p-2 border w-1/12">
                <input
                  type="number"
                  placeholder="eg. 25"
                  onChange={(e) => { }}
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                  min="0"
                />
              </td>
              <td className="p-2 border w-1/12">
                <input
                  type="number"
                  placeholder="eg. 500"
                  onChange={(e) => { }}
                  className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
                  min="0"
                />
              </td>

            </tr>
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


