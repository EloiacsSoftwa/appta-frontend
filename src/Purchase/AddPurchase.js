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

  const [subTotal, setSubTotal] = useState(0);
  const [beforeTax, setBeforeTax] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [productId, setProductID] = useState(state.AddProduct?.ProductList)
  const [selectedOption, setSelectedOption] = useState('');
  const [showProductDropdown, setShowProductDropdown] = useState([]);
  const [productIDWithName, setProductIDWithName] = useState('')
  const [supplierId, setSupplierId] = useState('')
  // const [addCharges, setAddCharges] = useState(0);
  // const [globalDiscount, setGlobalDiscount] = useState(0);
  // const [roundingOff, setRoundingOff] = useState(0);
  const [errors, setErrors] = useState({});
  console.log("supplierId", supplierId)

  const [orderDateError, setOrderDateError] = useState('');
  const [invoiceIdError, setInvoiceIdError] = useState('');
  const [productsError, setProductsError] = useState('');
  const [supplierIdError, setSupplierIdError] = useState('');

  const dropdownRef = useRef(null);

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
  };

  const handleOrderDateChange = (date) => {
    setOrderDate(date);
    setIsDatePickerOpen(false);
    setOrderDateError('')
  };

  const handleDeliveredDateChange = (date) => {
    setDeliveredDate(date);
  };




  console.log("state add Purchase", state)

  const [products, setProducts] = useState([
    {
      Product: '',
      productID: '',
      Quantity: 1,
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

  //   const handleInputChange = (e, field, index) => {

  // console.log("e",e.target.value, "field",field, "index", index)

  //     const newData = [...products];
  //     newData[index][field] = e.target.value;
  //     setProducts(newData);
  //   };



  const handleInputChange = (e, field, index) => {
    const value = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;

    const { Quantity, PurchasePrice } = updatedProducts[index];
    updatedProducts[index].Total = Quantity * PurchasePrice;

    if (value) {
      const filteredProduct = state.AddProduct?.ProductList?.filter((product) => {
        return product.productName.toLowerCase().includes(value.toLowerCase());
      });
      setProductID(filteredProduct)
    }

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [`${field}-${index}`]: '',
      }));
    }
    // setProductIDWithName(updatedProducts[0]?.Product)
    // if(updatedProducts[0]?.Product){
    //   const filteredProduct = state.AddProduct.ProductList.filter((product) => {
    //     return product.productName.toLowerCase().includes(updatedProducts[0]?.Product.toLowerCase());
    //   });



    // }
    setProducts(updatedProducts);
  };


  console.log("products", products)
  useEffect(() => {
    const calculatedSubTotal = products.reduce((sum, product) => sum + product.Total, 0);
    // const calculatedTaxTotal = products.reduce((sum, product) => sum + product.TaxAmount, 0);

    // const calculatedBeforeTax = calculatedSubTotal - globalDiscount + addCharges;
    // const calculatedTotal = calculatedBeforeTax + calculatedTaxTotal + roundingOff;

    setSubTotal(Number(calculatedSubTotal) || 0);
    // setTaxTotal(calculatedTaxTotal);
    // setBeforeTax(calculatedBeforeTax);
    // setTotal(calculatedTotal);
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




  const handleDelete = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };




  // useEffect(()=>{
  //   if(state.AddProduct?.ProductList.length > 0){
  //     setProductID(state.AddProduct?.ProductList)
  //   }

  // },[state.AddProduct?.ProductList])


  // useEffect(() => {

  //     // if (productIDWithName) {
  //     //   dispatch({
  //     //     type: 'GET_PRODUCT_BY_NAME',
  //     //     payload: { productName: productIDWithName },
  //     //   });
  //     //       }
  // // if(productIDWithName){
  // //   const filteredProduct = state.AddProduct.ProductList.filter((product) => {
  // //     return product.productName.toLowerCase().includes(productIDWithName.toLowerCase());
  // //   });

  // //   console.log('filteredProduct', filteredProduct);
  // //   setProductID(filteredProduct)
  // // }

  //  }, [productIDWithName]);



  // console.log("productIDWithName",productIDWithName)

  console.log("productId", productId)



  // useEffect(()=>{
  //   if(state.AddProduct?.getProductByNameStatusCode == 200){
  //     // setProductID(state.AddProduct.ProductByName?.data[0]?.productId)
  //     setProductID(state.AddProduct.ProductByName?.data)
  //   }

  // },[state.AddProduct?.getProductByNameStatusCode])



  const handleProductName = (item, index) => {
    const updatedProducts = [...products];
    updatedProducts[index].Product = item.productName;
    updatedProducts[index].productID = item.productId;
    updatedProducts[index].size = item.size;
    updatedProducts[index].subCategory = item.subCategory;
    updatedProducts[index].unit = item.unit

    setProducts(updatedProducts);

    const updatedDropdown = [...showProductDropdown];
    updatedDropdown[index] = false;
    setShowProductDropdown(updatedDropdown);
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
    setSupplierId(id)
  };


  const handleAddPurchase = () => {

    setOrderDateError('');
    setInvoiceIdError('');
    setProductsError('');
    setSupplierIdError('');
    setErrors({});
    let valid = true;
    const newErrors = {};

    if (!orderDate) {
      setOrderDateError('Purchase date is required');
      valid = false;
    }

    if (!invoiceId) {
      setInvoiceIdError('Invoice ID is required');
      valid = false;
    }

    if (!products || products.length === 0) {
      setProductsError('At least one product is required');
      valid = false;
    }

    if (!supplierId) {
      setSupplierIdError('Supplier ID is required');
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
      if (!product.MRP) {
        newErrors[`MRP-${index}`] = 'MRP must be greater than 0';
        valid = false;
      }
      if (!product.SalesPercentage) {
        newErrors[`SalesPercentage-${index}`] = 'Sales Percentage cannot be negative';
        valid = false;
      }
      if (!product.SalesPrice) {
        newErrors[`SalesPrice-${index}`] = 'Sales Price must be greater than 0';
        valid = false;
      }
      if (!product.WholeSalePercentage) {
        newErrors[`WholeSalePercentage-${index}`] = 'Wholesale Percentage cannot be negative';
        valid = false;
      }
      if (!product.WholeSalePrice) {
        newErrors[`WholeSalePrice-${index}`] = 'Wholesale Price must be greater than 0';
        valid = false;
      }
    });


    setErrors(newErrors);


    if (!valid) {
      return;
    }



    if (orderDate && invoiceId && products && supplierId) {

      const formattedDate = new Date(orderDate).toLocaleDateString('en-GB');
      const purchaseItems = products.map(product => ({
        productId: product.productID,
        quantity: product.Quantity,
        purchasePrice: product.PurchasePrice,
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
    }
  };


  useEffect(() => {
    dispatch({ type: 'GETSUPPLIER' });
  }, []);




  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Purchases - Purchase List - <span className="text-orange-600">Add Purchases</span>
        </p>
        <div className="flex gap-2">
          <button onClick={handleClose} className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm">
            Cancel
          </button>
          <button onClick={handleAddPurchase} className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-4 p-4 mb-4">
        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row justify-start p-2 items-center gap-5">


            <div className="relative mb-4 lg:mb-0 md:mb-0">
              <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Shipment From</p>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between text-black whitespace-nowrap bg-grey font-medium w-full md:w-56 sm:w-56 px-5 py-2 text-sm rounded-t-xl"
              >
                {selectedOption || 'Supplier'}

                {/* Icon will stay on the far right responsively */}
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

        {supplierIdError && <p className="text-red-500 font-Manrope mt-1 text-sm">{supplierIdError}</p>}
        <div className="w-full md:w-1/2  mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="relative">
              <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
                Purchase Date <span className="text-red-500">*</span>
              </label>

              <DatePicker
                selected={orderDate}
                onChange={handleOrderDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="DD / MM / YYYY"
                className="w-full border rounded px-3 py-2 pr-12 text-sm md:text-base focus:border-orange-600"
                open={isDatePickerOpen}
                onClickOutside={() => setIsDatePickerOpen(false)}
                ref={datePickerRef}
              />

              <img
                src={DateIcon}
                alt="Date Icon"
                className="absolute top-12 transform -translate-y-1/2 right-3 md:right-4 lg:right-5 cursor-pointer"
                onClick={handleIconClickForOrder}
              />
              {orderDateError && <p className="text-red-500 font-Manrope mt-1 text-sm">{orderDateError}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Invoice ID <span className="text-red-500">*</span></label>
              <input type="text"
                value={invoiceId}
                onChange={handleInvoiceIdChange}
                className="w-full border rounded px-3 py-2 text-sm focus:border-orange-600" placeholder="P7895233" />
              {invoiceIdError && <p className="text-red-500 font-Manrope mt-1 text-sm">{invoiceIdError}</p>}

            </div>



          </div>
        </div>





        {/* <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mt-12 sm:mr-44">
            <p className="font-bold text-lg text-orange-600 mr-4 font-Manrope">Products</p>
           <input type="checkbox" className="bg-zinc-300 border border-black"/>
            <p className="font-semibold text-base ml-4">On Credit</p>
          </div>
          <div className="w-full md:w-auto mt-4">
            <label className="block font-normal mb-1 text-sm text-start font-SourceSansPro">Purchase ID</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm bg-Dim-red"
              placeholder="Auto Generate"
            />
          </div>
        </div> */}





        {/* Table */}





        {/* {productsError && <p className="text-red-500 font-Manrope mt-1 text-sm">{productsError}</p>} */}




        <table className="table-auto border border-gray-300 rounded-lg w-full overflow-x-auto mt-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border font-semibold text-sm">Product</th>
              <th className="p-2 border font-semibold text-sm">Quantity</th>
              <th className="p-2 border font-semibold text-sm">Purchase Price</th>
              <th className="p-2 border font-semibold text-sm">MRP</th>
              <th className="p-2 border font-semibold text-sm">Sales %</th>
              <th className="p-2 border font-semibold text-sm">Sales Price</th>
              <th className="p-2 border font-semibold text-sm">Whole Sale %</th>
              <th className="p-2 border font-semibold text-sm">Whole Sale Price</th>
              <th className="p-2 border font-semibold text-sm">Total</th>
              <th className="p-2 border font-semibold text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="p-2 border relative">
                  <input
                    type="text"
                    value={`${product.Product} ${product.subCategory} - ${product.size} ${product.unit}`}
                    onChange={(e) => handleInputChange(e, 'Product', index)}
                    onClick={() => handleproductNameDropDown(index)}
                    className={`border p-1 rounded w-full ${errors[`Product-${index}`] ? 'border-red-500' : ''}`}
                  />


                  {showProductDropdown[index] && (
                    <div ref={dropdownRef} className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow md:w-56 w-56 sm:w-56">
                      <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">
                        {productId.length > 0 ? Array.from(productId).map((item) => (
                          <li
                            key={item.productId}
                            onClick={() => handleProductName(item, index)}
                            className="px-2 py-2 cursor-pointer hover:bg-gray-200"
                          >
                            <div className="flex flex-col">
                             <label>{item.productName} {item.subCategory }</label> 
                             <label>{item.size } - {item.unit} </label> 
                            </div>
                            
                          </li>
                        ))
                          :

                          <li

                            className="px-2 py-2 cursor-pointer hover:bg-gray-200"
                          >
                            No products
                          </li>


                        }
                      </ul>
                    </div>
                  )}
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.Quantity}
                    onChange={(e) => handleInputChange(e, 'Quantity', index)}
                    className={`border p-1 rounded w-full ${errors[`Quantity-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.PurchasePrice}
                    onChange={(e) => handleInputChange(e, 'PurchasePrice', index)}
                    className={`border p-1 rounded w-full ${errors[`PurchasePrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />

                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.MRP}
                    onChange={(e) => handleInputChange(e, 'MRP', index)}
                    className={`border p-1 rounded w-full ${errors[`MRP-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.SalesPercentage}
                    onChange={(e) => handleInputChange(e, 'SalesPercentage', index)}
                    className={`border p-1 rounded w-full ${errors[`SalesPercentage-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.SalesPrice}
                    onChange={(e) => handleInputChange(e, 'SalesPrice', index)}
                    className={`border p-1 rounded w-full ${errors[`SalesPrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.WholeSalePercentage}
                    onChange={(e) => handleInputChange(e, 'WholeSalePercentage', index)}
                    className={`border p-1 rounded w-full ${errors[`WholeSalePercentage-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.WholeSalePrice}
                    onChange={(e) => handleInputChange(e, 'WholeSalePrice', index)}
                    className={`border p-1 rounded w-full ${errors[`WholeSalePrice-${index}`] ? 'border-red-500' : ''}`}
                    min="0"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    readOnly
                    value={product.Total}
                    className="border p-1 rounded w-full"
                  />
                </td>

                <td className="p-2 border-white border border-l-0 text-gray-500 cursor-pointer w-8 relative" onClick={() => handleDropDown(index)}>
                  <img src={Dot} alt="Options" />


                  {dropdownIndex === index && (
                    <div className="absolute right-10 top-2 mt-2  bg-zinc-300 border border-zinc-200 rounded-lg shadow-lg z-20  w-24 p-2">
                      <div className='flex items-center justify-evenly w-auto'>


                        <div>
                          <img src={Delete} className='size-6  cursor-pointer' onClick={() => handleDelete(index)} />
                        </div>
                      </div>

                    </div>
                  )}


                </td>
              </tr>
            ))}
          </tbody>
        </table>


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
