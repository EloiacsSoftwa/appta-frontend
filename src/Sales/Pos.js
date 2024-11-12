import React, { useState, useEffect } from 'react';
import Cup from '../Images/Icons/cup.svg'
import Paylater from '../Images/Icons/paylater.svg'
import Search from '../Images/Sales/Search.svg'
import Delete from '../Images/Icons/Clip path group.svg'
import Addcustomer from '../Images/Icons/addcontact.svg'
import Radiobox from '../Images/Icons/Radio.svg'
import cancelbtn from '../Images/Icons/cancelbtn.svg'
import Barcode from '../Images/Icons/barcode.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddCustomer from '../Contact/AddCustomer';
import { Setting } from 'iconsax-react';
import Pos_Payment from './Pos_Payment';

import { ADD_ORDER_ITEMS_API_CALL, GET_ALL_ACTIVE_PRODUCTS_API_CALL } from '../utils/Constant';


const Pos = ({ handleClosed }) => {

  const dispatch = useDispatch();
  const State = useSelector(state => state);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClosed()
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClosed]);

  //  const [loading, setLoading] = useState(false);

  const [barcode, setBarcode] = useState('56676');

  const [productid, setProductId] = useState('')
  const [currentDate, setCurrentDate] = useState('');

  const [total_amount, setTotalAmount] = useState('')

  const [order_id, setOrderID] = useState('')

  const [posdata, setPosData] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  const [editingIndex, setEditingIndex] = useState(null);
  const [quantity, setQuantity] = useState(0);


  const handleQuantityClick = (index, minPurchaseQuantity) => {
    setEditingIndex(index);
    setQuantity(minPurchaseQuantity);
  };


  const handleQuantityChange = (index, newQuantity) => {
    const updatedData = posdata.map((item, i) =>
      i === index ? { ...item, minPurchaseQuantity: newQuantity } : item
    );
    setPosData(updatedData);
    setEditingIndex(null);
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    setQuantity(isNaN(parsedValue) ? '' : parsedValue);
  };


  const handleKeyDown = (index, event) => {
    if (event.key === 'Enter') {
      handleQuantityChange(index, quantity);
    }
  };




  const [editingDiscountIndex, setEditingDiscountIndex] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);


  const handleEditDiscountAmount = (index, currentDiscount) => {
    setEditingDiscountIndex(index);
    setDiscountAmount(currentDiscount || 0);
  };


  const handleDiscountAmountChange = (e) => {
    const value = e.target.value;
    setDiscountAmount(value);
  };


  const handleDiscountAmountSave = (index) => {
    const updatedData = posdata.map((item, i) =>
      i === index ? { ...item, discountAmount: discountAmount } : item
    );
    setPosData(updatedData);
    setEditingDiscountIndex(null);
  };


  const handleDiscountAmountKeyDown = (index, event) => {
    if (event.key === 'Enter') {
      handleDiscountAmountSave(index);
    }
  };






  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  //   const [posdata, setPosData] = useState([]);



  useEffect(() => {
    dispatch({ type: 'CREATE-ORDER' });
  }, [])


  useEffect(() => {
    if (State.PosReducer.CreateOrderStatuscode == 200) {
      setOrderID(State.PosReducer.Order_Id)

      setTimeout(() => {
        dispatch({ type: 'REMOVE_CREATE_ORDER_STATUS_CODE' })
      }, 2000)
    }

  }, [State.PosReducer.CreateOrderStatuscode])


  console.log("order_id", order_id);


  // Barcode scan function
  const BarcodeGetData = () => {
    dispatch({ type: 'BARCODE_GET_PRODUCT', payload: barcode });

    setTimeout(() => {
      if (State.PosReducer.BarcodeproductData && State.PosReducer.BarcodeproductData !== '') {
        handleProductUpdate(State.PosReducer.BarcodeproductData); // Correctly update posdata
      }
    }, 1000);
  };

  // Search filter logic
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductId, setSelectedProductId] = useState('');

  const [products,setProducts] = useState([])


  const handleproductName = (item) => {
    console.log("item", item);
    setSearchQuery('');

    const payload = {
      orderId: order_id,
      productId: item,
      discount: 0,
      quantity: 1,
      manuallyEntered: false
    }

    dispatch({type: ADD_ORDER_ITEMS_API_CALL, payload: payload})
    
  }

  useEffect(()=> {
    if(State.PosReducer.orderItems && State.PosReducer.orderItems.length > 0){
      setProducts(State.PosReducer.orderItems)
    }
   
  },[State.PosReducer.orderItems])

  const orderItems = useSelector((state) => state.PosReducer.orderItems);

  useEffect(() => {
    if (orderItems && orderItems.length > 0) {
     
      const updatedProducts = orderItems.map((item) => ({
        ...item,
        netAmount: item.quantity * item.totalAmount,
      }));
      setProducts(updatedProducts);

    
      const totalNetAmount = updatedProducts.reduce((sum, item) => sum + item.netAmount, 0);
      setTotalAmount(totalNetAmount); 
    }
  }, [orderItems]);



  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());

    if (e.target.value) {
      setFilteredData(State.AddProduct?.activeProducts && State.AddProduct?.activeProducts?.filter((item) =>
        item?.productName?.toLowerCase().includes(searchQuery) ||
        item?.barcodeNo?.toLowerCase().includes(searchQuery)
      ) || [])
    }

  };

  useEffect(() => {
    if (selectedProductId) {
      console.log("selectedProductId", selectedProductId);
      dispatch({ type: 'GETFREEBIENAME', payload: selectedProductId });
    }
    setSelectedProductId('')
  }, [selectedProductId]);


  useEffect(() => {
    if (State.AddProduct.getFreebieName && Array.isArray(State.AddProduct.getFreebieName) && State.AddProduct.getFreebieName.length > 0) {
      console.log("getFreebieName updated", State.AddProduct.getFreebieName);

      State.AddProduct.getFreebieName.forEach((productData) => {
        handleProductUpdate(productData);
      });
    }
  }, [State.AddProduct.getFreebieName]);



  const handleProductUpdate = (productData) => {
    if (productData && productData.productId) {
      setPosData((prevData) => {
        const existingProductIndex = prevData.findIndex((item) => item.productId === productData.productId);

        if (existingProductIndex !== -1) {

          const updatedData = [...prevData];
          updatedData[existingProductIndex] = {
            ...updatedData[existingProductIndex],
            quantity: updatedData[existingProductIndex].quantity + 1,
          };

          // Calculate total amount
          const totalAmount = updatedData.reduce((acc, item) => acc + (item.quantity * item.wholesalePrice), 0);
          setTotalAmount(totalAmount);
          console.log("Updated totalAmount:", totalAmount);

          return updatedData;

        } else {
          return [...prevData, { ...productData, quantity: productData.minPurchaseQuantity }];
        }
      });
    }
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_ACTIVE_PRODUCTS_API_CALL });
    dispatch({ type: 'GETCUSTOMER' });
  }, []);


  useEffect(()=> {
    if (State.PosReducer.addorderItemsStatusCode === 200) {
    
      setTimeout(() => {
        dispatch({ type: 'REMOVE_ADD_ORDER_ITEMS_STATUS_CODE' });
      }, 1000);
    }
  },[State.PosReducer.addorderItemsStatusCode])


  const [customerSearchQuery, setCustomerSearchQuery] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [customerFilter, setCustomerFilter] = useState('');



  const handleCustomerSearchChange = (e) => {
    setCustomerSearchQuery(e.target.value.toLowerCase());
    setSelectedCustomerId(null);
  };


  const filteredCustomers = State?.Customer?.CustomerList && State?.Customer?.CustomerList.filter(customer =>
    customer.customerName.toLowerCase().includes(customerSearchQuery)
  );


  useEffect(() => {
    if (selectedCustomerId) {
      const customerFilterResult = State.Customer.CustomerList.find(
        (u) => u.id === selectedCustomerId
      );
      setCustomerFilter(customerFilterResult || '');
    }
  }, [selectedCustomerId])


  const [showModal, setShowModal] = useState(false);


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (customerFilter) {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };


  const [isPayLaterEnabled, setIsPayLaterEnabled] = useState(false);
  const [customerform, SetCustomerform] = useState(false)

  const handleOpencustomer = () => {
    SetCustomerform(true)
  }

  const handleCloseAddCustomer = () => {
    SetCustomerform(false)
  }

  useEffect(() => {
    if (State.Customer.addCustomerStatusCode === 200) {
      dispatch({ type: 'GETCUSTOMER' });
      SetCustomerform(false);

      setTimeout(() => {
        dispatch({ type: 'REMOVE_ADD_CUSTOMER_STATUS_CODE' });
      }, 1000);
    }
  }, [State.Customer.addCustomerStatusCode]);


  useEffect(() => {
    if (State.Customer.addCustomerStatusCode === 200 && State.Customer.CustomerList.length > 0) {
      const lastCustomer = State.Customer.CustomerList[State.Customer.CustomerList.length - 1];
      setCustomerFilter(lastCustomer);
    }
  }, [State.Customer.CustomerList]);


  const [selectedProducts, setSelectedProducts] = useState([]);


  const handleCheckboxClick = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };


  const handleProductDelete = () => {
    const productsToDelete = selectedProducts.map((productId) => ({
      orderId: order_id,
      productId,
    }));
  
    dispatch({type: 'DELETE-POS-PRODUCT', payload: productsToDelete,});
    setSelectedProducts([]);
  };

  useEffect(()=> {
    if (State.PosReducer.deleteposproductStatuscode === 200) {
    
      setTimeout(() => {
        dispatch({ type: 'REMOVE_DELETE_POS_PRODUCT_STATUS_CODE' });
      }, 1000);
    }
  },[State.PosReducer.deleteposproductStatuscode])


  
  const handleHoldOrder = () => {
    if (order_id) {  
      dispatch({
        type: 'ORDER-HOLD',
        payload: { orderId: String(order_id) }, // Pass orderId as a simple string
      });
    } else {
      console.error("Order ID is missing.");
    }
  }; 
  


  


  const handleCreate = () => {
    console.log("Creating new customer...");
    // handleClosecustomer();
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    // p: 4,
    border: '2px solid #EA580C',
    borderRadius: '30px',
  };



  //   console.log("State.PosReducer.BarcodeproductData",State.PosReducer.BarcodeproductData);

  //   console.log("posdata",posdata);


  return (<>
    <div className='w-screen h-screen ' >
      <div className='h-4/5 bg-white p-4 w-full'>

        <div className='flex flex-row w-full h-full gap-4'>

          <div className="bg-white w-3/4 min-h-[70vh] shadow-custom overflow-x-auto">
            <div className="flex items-center justify-between p-2 border-b bg-lightgray">
              <div className="flex items-center ">

                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    <img src={Search} alt="Search Icon" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="rounded pl-10 py-1 bg-zinc-300"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    aria-label="Search for products"
                    role="search"
                  />

                  {/* Search result dropdown */}
                  {searchQuery && filteredData.length > 0 && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-10">
                      {filteredData.map((item) => (
                        <div
                          key={item.productId}  // Use productId for key instead of index
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            handleproductName(item.productId)
                        
                          }}

                        //   onChange={(e)=>handleproductName(e)}
                        >
                          <div className="text-sm font-medium text-gray-900 flex flex-col">
                            <label>{item.productName} {item.subCategory}</label>
                            <label>{item.size} {item.unit}</label>
                            </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No results message */}
                  {searchQuery && filteredData &&  filteredData.length === 0 && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-1 p-2 text-sm text-gray-500">
                      No products match your search
                    </div>
                  )}
                </div>

                <div className='bg-zinc-300 ms-2 items-center rounded'>
                  <img src={Barcode} className='p-1' alt='barcode' onClick={BarcodeGetData} />
                </div>
              </div>
              <div className='flex items-center gap-2 '>

                <div>
                  <img src={Delete} className='w-6 h-6 cursor-pointer' onClick={handleProductDelete} />
                </div>
              </div>
            </div>

            <div className="relative w-full mb-5">

              {/* {loading && (
<div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
<div className="loader border-t-4 border-orange-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
</div>
)} */}

              <table className="w-full text-left mb-5 table-auto">
                <thead>
                  <tr className="bg-gray-200 border-0">
                    <th className="p-1 flex items-center justify-start  h-full">

                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope leading-0'>SNo</div>
                      </div>
                    </th>

                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>ICode</div>
                      </div>
                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Product</div>
                      </div>
                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Quantity</div>
                      </div>
                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Unit Price</div>
                      </div>
                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Amount </div>
                      </div>
                    </th>
                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>%</div>
                      </div>
                    </th>

                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Discount</div>
                      </div>
                    </th>

                    <th className="p-1 font-semibold text-base text-neutral-900">
                      <div className="flex items-center justify-start gap-2">

                        <div className='font-semibold text-sm text-neutral-900 font-Manrope'>Net Amount</div>
                      </div>
                    </th>


                  </tr>
                </thead>
                <tbody>
                  {State.PosReducer.orderItems && State.PosReducer.orderItems.length > 0 ? (
                    State.PosReducer.orderItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 border-0">
                        <td className="p-2 mt-1 flex items-center justify-start">
                          <input type="checkbox" className="form-checkbox h-3 w-3 text-blue-600 border-neutral-500 cursor-pointer"   onClick={() => handleCheckboxClick(item.productId)}/>
                        </td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.unitId || '-'}</td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.barcodeNo || '-'}</td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{`${item.productName} - ${item.size}${item.unit}` || '-'}</td>



                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                          {editingIndex === index ? (
                            <input
                              type="number"
                              value={quantity}
                              onChange={handleInputChange}
                              onBlur={() => handleQuantityChange(index, quantity)}
                              onKeyDown={(e) => handleKeyDown(index, e)}
                              className="border border-neutral-300 rounded px-1 py-0.5 w-16"
                            />
                          ) : (
                            <span onClick={() => handleQuantityClick(index, item.quantity)} className="cursor-pointer">
                              {item.quantity || '-'}
                            </span>
                          )}
                        </td>



                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">₹{item.unitPrice || '0'}</td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">₹{item.totalAmount  || '-'}</td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{ '-'}</td>
                        {/* <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
             ₹{(item.minPurchaseQuantity * item.wholesalePrice * (item.wholesalePricePercentage / 100)) || '-'}</td> */}

                        {/* <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                          {editingDiscountIndex === index ? (
                            <input
                              type="number"
                              value={discountAmount}
                              onChange={handleDiscountAmountChange}
                              onBlur={() => handleDiscountAmountSave(index)}
                              onKeyDown={(e) => handleDiscountAmountKeyDown(index, e)}
                              className="border border-neutral-300 rounded px-1 py-0.5 w-16"
                            />
                          ) : (
                            <span
                              onClick={() => handleEditDiscountAmount(index, item.discountAmount || 0)}
                              className="cursor-pointer"
                            >
                              { '0'}
                            </span>
                          )}
                        </td> */}
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                          {'0'}
                        </td>
                        <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">
                          ₹{(item.quantity * item.totalAmount)  || '0'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="p-2 text-center text-sm text-neutral-500">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>






              </table>




            </div>







          </div>


          <div className="bg-white w-1/4 h-full shadow-custom overflow-x-auto">
            <div className="flex items-center justify-between p-2 border-b bg-lightgray">
              <div className="flex items-center ">
                {/* <div><img src={Frame1} className='w-6 h-6 cursor-pointer' /></div> */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    <img src={Search} alt="Search Icon" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search for Customer"
                    className="rounded pl-10 py-1 bg-zinc-300"
                    value={customerSearchQuery}
                    onChange={handleCustomerSearchChange}
                  />


                  {customerSearchQuery && filteredCustomers && filteredCustomers.length > 0 && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-10">
                      {filteredCustomers.map((customer, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setCustomerSearchQuery('')
                            setSelectedCustomerId(customer.id);
                          }}
                        >
                          <div className="text-sm font-medium text-gray-900">{customer.customerName}</div>
                        </div>
                      ))}
                    </div>
                  )}


                  {customerSearchQuery && filteredCustomers && filteredCustomers.length === 0 && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-1 p-2 text-sm text-gray-500">
                      No customers match your search
                    </div>
                  )}
                </div>

              </div>

              <div className='flex items-center gap-2 '>

                <div>
                  <img src={Addcustomer} className='w-6 h-6 cursor-pointer' onClick={handleOpencustomer} />
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-lg shadow-lg m-2 ">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col ">
                  <p className={customerFilter?.customerName ? 'text-sm font-semibold font-Manrope' : 'text-xs text-[#797979]'}>
                    {customerFilter?.customerName || "xyz"}</p>
                  <p className='text-xs text-[#797979]'>{customerFilter ? customerFilter.mobile : "+91 9876543210"}</p>
                  <p className='text-xs text-[#797979] me-2'>{customerFilter ? customerFilter.email : "xyz@gmail.com"}</p>
                </div>
                <div class="flex flex-col text-right">

                  <div class="flex">
                    <img src={Cup} className='w-6 h-6' />
                    <div>
                      <p className='text-xs  font-semibold font-Manrope ' style={{ paddingLeft: '5px' }}>Loyalty Points</p>
                      <p className='text-xs text-center text-[#797979] ' style={{ paddingRight: '20px' }}>{customerFilter ? customerFilter.loyaltyPoints : "0"} Points</p>
                    </div>
                  </div>

                  <div class="flex flex-row text-right mt-1 pb-0">
                    <img src={Paylater} className='w-6 h-6' />
                    <div>
                      <p className='text-xs  font-semibold font-Manrope' style={{ paddingRight: '7px' }}>Pay Later</p>
                      <p className='text-xs text-center   text-[#797979] ' style={{ paddingLeft: '8px' }}> {customerFilter?.paylater === "false" ? " Eligible" : " Not Eligible"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="border border-solid border-black"> </div>

            <div><p className='text-[#131313] text-xs  font-semibold font-Manrope ps-2'>Order No : {order_id}</p></div>

            <div class="border border-solid border-black"> </div>

            <div className='flex flex-col'>

              <div className='flex flex-row mt-2'>
                <input type="checkbox" className="form-checkbox h-3 w-3 mt-1 ms-2 text-blue-600 border-neutral-500 cursor-pointer" />

                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Add Loyalty Points</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Date: </p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>{currentDate}</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Total Items : </p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>{State.PosReducer.orderItems && State.PosReducer.orderItems.length}</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Amount :</p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>{total_amount}</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Discounts :</p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 00.00</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Before Tax : </p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 00.00</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'> Tax : </p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>CGST : </p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 00.00</p>
              </div>

              <div className='flex flex-row justify-between' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>SGST : </p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 00.00</p>
              </div>

              <div className='flex flex-row justify-between  mb-2 mt-2' >
                <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Total :</p>
                <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ {total_amount ? total_amount : 0}</p>
              </div>

              <div class="border border-dotted border-black ">
              </div>

              <div className='flex flex-col items-center mt-1' >
                <p className='font-semibold font-Manrope text-[#131313] font-bold text-xl '>Amount to Pay</p>
                <p className='font-semibold font-Manrope text-[#131313] font-bold text-xl '>₹ {total_amount ? total_amount : 0}</p>
              </div>

            </div>


          </div>

        </div>
      </div>



      <div className='h-22 w-full shadow-custom overflow-x-auto bg-[#D9D9D9]'>
        <div className='flex flex-row justify-center  justify-between items-center p-2 space-x-2'>
          <div className='flex flex-row space-x-2 pt-3 ps-3 justify-evenly'>
            <button
              type="submit"
              className="flex  items-center me-4 rounded justify-center bg-[#EA580C] text-white px-5 py-1.5 text-sm font-semibold  border border-[#EA580C] shadow-sm hover:bg-[#EA580C] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]">
              Quotation
            </button>

            <div >
              <button
                type="submit"
                style={{ marginRight: '2rem' }}
                className="flex items-center   rounded justify-center bg-[#797979] px-5 py-1.5 text-sm font-semibold text-white border border-[#648D68] shadow-sm hover:bg-[#648D68] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#648D68]">
                Guest Check
              </button>
            </div>

            <button
              type="submit"
              style={{ marginRight: '2rem' }}
              className="flex items-center me-4  justify-center rounded bg-[#797979] px-5 py-1.5 text-sm font-semibold text-white border border-[#648D68] shadow-sm hover:bg-[#648D68] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#648D68]">
              Cancel Order
            </button>

            <button
              type="submit"
              onClick={handleHoldOrder}
              style={{ marginRight: '2rem' }}
              className="flex items-center me-4  justify-center rounded bg-[#EA580C] text-white px-5 py-1.5 text-sm font-semibold  border border-[#EA580C] shadow-sm hover:bg-[#EA580C] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]">
              Hold Order
            </button>

            <button
              type="submit"
              className="flex items-center justify-center rounded bg-[#797979] px-5 py-1.5 text-sm font-semibold text-white border border-[#648D68] shadow-sm hover:bg-[#648D68] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#648D68]">
              Show Draft
            </button>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleOpen}
              className="flex items-center me-2 justify-center w-64 rounded bg-[#EA580C] text-white px-24 py-1.5 text-sm font-semibold border border-[#EA580C] shadow-sm hover:bg-[#EA580C] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]">
              ₹ Pay
            </button>
          </div>




        </div>



      </div>


      {/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className="border border-solid border-[#EA580C] rounded"
>
  <Box sx={{ ...style, borderRadius: '8px', overflow: 'hidden' }}>
    <Box sx={{ bgcolor: 'white', p: 2 }}>
    <div className="flex items-center justify-between " style={{marginBottom:'30px'}}>
    <h2 
  id="modal-modal-title" 
  style={{ fontWeight: 700, fontSize: '24px', lineHeight: '12px',color:'#EA580C' }} 
  className="mx-auto">
  Mode of pay
</h2>
  <img src={cancelbtn} alt="Cancel" className="cursor-pointer" onClick={handleClose} />
</div>


      <div className="flex flex-row justify-around mt-4">
  <button className="bg-[#797979] pt-1 ps-4 pe-4 pb-1 text-white">Cash</button>
  <button className="bg-[#797979] pt-1 ps-4 pe-4 pb-1 text-white">UPI</button>
  <button className="bg-[#797979] pt-1 ps-4 pe-4 pb-1 text-white">Swipe</button>
  <button className="bg-[#797979] pt-1 ps-4 pe-4 pb-1 text-white">Pay Later</button>
</div>

    </Box>

    <Box
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2,
        p: 3,
        backgroundColor: '#D9D9D9',
        width: '100%',
      }}
      noValidate
      autoComplete="off"
    >
  
 <TextField
                label="Amount to be paid"
                value={total_amount ? total_amount : 0}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
                sx={{ 
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  '& .MuiFormHelperText-root': { color: 'red' },
                }}
              />

<TextField
                label="Cash Received"
                value={cashReceived}
                onChange={handleCashReceived}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
                sx={{ 
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  '& .MuiFormHelperText-root': { color: 'red' },
                }}
              />

     

<TextField
                label="Change to Return"
                value={changeto_return}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
                sx={{ 
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  '& .MuiFormHelperText-root': { color: 'red' },
                }}
              />
   
   <TextField
                label="Receipt Number"
                value={receipt_number}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
                sx={{ 
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  '& .MuiFormHelperText-root': { color: 'red' },
                }}
              />

   

      <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', mt: 2 }}>
        <button className="text-center bg-[#EA580C] text-black p-2 rounded" onClick={handleClose}>
          Payment Completed
        </button>
      </Box>
    </Box>
  </Box>
</Modal> */}

      {
        open && customerFilter  && (<Pos_Payment handleclose={handleClose}  total_amount = {total_amount}/>
        )
      }

      {/* //add customer  */}

      {
        customerform && <AddCustomer handleClose={handleCloseAddCustomer} />
      }

    </div>
  </>
  )
}
export default Pos;