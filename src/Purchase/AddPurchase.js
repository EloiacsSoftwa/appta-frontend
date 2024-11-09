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



function AddPurchase({ handleClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(true);
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

  // const [addCharges, setAddCharges] = useState(0);
  // const [globalDiscount, setGlobalDiscount] = useState(0);
  // const [roundingOff, setRoundingOff] = useState(0);


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleIconClickForDelivery = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleIconClickForOrder = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleInvoiceIdChange = (e) => {
    setInvoiceId(e.target.value); 
  };

  const handleOrderDateChange = (date) => {
    setOrderDate(date);
  };

  const handleDeliveredDateChange = (date) => {
    setDeliveredDate(date);
  };






  const [products, setProducts] = useState([
    {
      Product: '',
      ProductCode: '',
      HSNCode: '',
      Quantity: 1,
      Price: '',
      Discount: '',
      TaxableAmount: '',
      IGST: '',
      TaxAmount: '',
      Total: 0,
    },
   
  ]);



  const handleAddRow = () => {
    const newRow = {
      Product: '',
      ProductCode: '',
      HSNCode: '',
      Quantity: '',
      Price: '',
      Discount: '',
      TaxableAmount: '',
      IGST: '',
      TaxAmount: '',
      Total: '',
    };
    setProducts([...products, newRow]);
  };

//   const handleInputChange = (e, field, index) => {

// console.log("e",e.target.value, "field",field, "index", index)

//     const newData = [...products];
//     newData[index][field] = e.target.value;
//     setProducts(newData);
//   };



const handleInputChange = (e, field, index) => {
  const value = e.target.value;
  const newData = [...products];
  

  newData[index][field] = value;
  

  const { Quantity, Price, Discount, IGST } = newData[index];
  // const taxableAmount = Quantity * Price - Discount;
  // const taxAmount = taxableAmount * (IGST / 100);
  const total = Quantity * Price;
  

  // newData[index].TaxableAmount = taxableAmount;
  // newData[index].TaxAmount = taxAmount;
  newData[index].Total = total;
  
  setProducts(newData);
};


  console.log("products",products)
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






  const handleDropDown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };




  const handleDelete = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };
  









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
          <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-4 p-4 mb-4">
        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row justify-start p-2">
            <div className={`relative mb-4 lg:mb-0 md:mb-0 ${dropdownOpen ? 'sm:mb-32' : ''}`}>
              <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Supplier Details</p>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-black bg-grey font-medium w-full md:w-56 sm:w-56 px-5 py-2 text-sm rounded-t-xl"
              >
                Supplier
                <img className="ml-28 md:ml-28 sm:ml-10" src={dropdown} />
              </button>
              {dropdownOpen && (
                <div className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow md:w-56 w-56 h-28 sm:w-56">
                  <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">
                    <li>
                      <a href="#" className="block px-2 py-2">
                        24/D2 BALAN PERUMAL COMPOUND, Thattan Vilai Rd, Ramanputhur, KELLA, Nagercoil, Tamil Nadu 629002
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 md:ml-20 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">






                <div className="relative">
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
                    Order Date <span className="text-red-500">*</span>
                  </label>



                  <DatePicker
                    selected={orderDate}
                    onChange={handleOrderDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="DD / MM / YYYY"
                    className="w-full border rounded px-3 py-2 pr-12 text-sm md:text-base focus:border-orange-600"
                    ref={datePickerRef}
                  />
                  <img
                    src={DateIcon}
                    alt="Date Icon"
                    className="absolute top-12 transform -translate-y-1/2 right-3 md:right-4 lg:right-5 cursor-pointer"
                    onClick={handleIconClickForOrder}
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Invoice ID <span className="text-red-500">*</span></label>
                  <input type="text" 
                   value={invoiceId}
                   onChange={handleInvoiceIdChange} 
                  className="w-full border rounded px-3 py-2 text-sm focus:border-orange-600" placeholder="P7895233" />
                </div>

                <div className="mt-6 relative">
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Delivered Date <span className="text-red-500">*</span></label>
                  <DatePicker
                    selected={deliveredDate}
                    onChange={handleDeliveredDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="DD / MM / YYYY"
                    className="w-full border rounded px-3 py-2 pr-12 text-sm md:text-base"
                    ref={datePickerRef}
                  />
                  <img
                    src={DateIcon}
                    alt="Date Icon"
                    className="absolute top-12 transform -translate-y-1/2 right-3 md:right-4 lg:right-5 cursor-pointer"
                    onClick={handleIconClickForDelivery}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
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
        </div>





{/* Table */}






       
          <table className="table-auto  border border-gray-300 rounded-lg  w-full overflow-x-auto mt-6">
            <thead>
            <tr className="bg-gray-200">
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">Product</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">Product Code</th>
        {/* <th className="px-2 py-2 border border-white font-Manrope font-semibold text-sm min-w-[120px]">HSN Code</th> */}
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">Quantity</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">Price</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">Discount</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm  whitespace-nowrap">Taxable Amount</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm ">IGST</th>
        <th className="p-2 border border-white font-Manrope font-semibold text-sm">Tax Amount</th>
        <th className="p-2 border-white border border-r-0 font-Manrope font-semibold text-sm ">Total</th>
        <th className="p-2 border-white border border-l-0 text-gray-500 cursor-pointer w-8">
         
        </th>
      </tr>
            </thead>
            <tbody>
        
            {products && products.length > 0 && products.map((product, index) => (
        <tr key={index} className="bg-gray-100">
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="text"
              value={product.Product}
              onChange={(e) => handleInputChange(e, 'Product', index)}
              className="border p-1 rounded w-full"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="text"
              value={product.ProductCode}
              onChange={(e) => handleInputChange(e, 'ProductCode', index)}
              className="border p-1 rounded w-full"
            />
          </td>
          {/* <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="text"
              value={product.HSNCode}
              onChange={(e) => handleInputChange(e, 'HSNCode', index)}
              className="border p-1 rounded"
            />
          </td> */}
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.Quantity}
              onChange={(e) => handleInputChange(e, 'Quantity', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.Price}
              onChange={(e) => handleInputChange(e, 'Price', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.Discount}
              onChange={(e) => handleInputChange(e, 'Discount', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.TaxableAmount}
              onChange={(e) => handleInputChange(e, 'TaxableAmount', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.IGST}
              onChange={(e) => handleInputChange(e, 'IGST', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border border-white font-Manrope font-semibold text-base">
            <input
              type="number"
              value={product.TaxAmount}
              onChange={(e) => handleInputChange(e, 'TaxAmount', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
          <td className="p-2 border-white border border-r-0 font-Manrope font-semibold text-base">
            <input
              type="number"
              readOnly
              value={(product.Quantity * product.Price)}
              onChange={(e) => handleInputChange(e, 'Total', index)}
              className="border p-1 rounded w-full"
              min="0"
            />
          </td>
                <td className="p-2 border-white border border-l-0 text-gray-500 cursor-pointer w-8 relative" onClick={() => handleDropDown(index)}>
                  <img src={Dot} alt="Options" />


                  {dropdownIndex === index && (
                  <div className="absolute right-10 top-2 mt-2  bg-zinc-300 border border-zinc-200 rounded-lg shadow-lg z-20  w-24 p-2">
                    <div className='flex items-center justify-evenly w-auto'>

                    
                        <div>
                            <img src={Delete} className='size-6  cursor-pointer'  onClick={() => handleDelete(index)}/>
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
          <div onClick={handleAddRow}className="flex items-center" >
          <img src={Add} alt="Add icon" />
          <p className="font-semibold text-sm ml-4">Add Products</p>
          </div>
         
        </div>






        <div className="mt-4 border border-y-black w-full"></div>

        <div className="ml-4 mr-4">
  {[
   { label: "Sub-total", value: subTotal ? subTotal.toFixed(2) : '0.00' },
    { label: "Discount (-)", value: '0' },
    { label: "+ Add Charges", value: '0' },
    { label: "Before- Tax", value: beforeTax.toFixed(2) },
    { label: "Tax (+)", value: taxTotal.toFixed(2) },
    { label: "IGST", value: taxTotal.toFixed(2) },
    { label: "Rounding Off", value: '0' }
  ].map((item) => (
    <div key={item.label} className="flex justify-between mt-4">
      <p className="font-semibold text-sm">{item.label}</p>
      <p className="font-semibold text-sm">{item.value}</p>
    </div>
  ))}

  <div className="mt-4 border border-y-orange-600 w-full"></div>

  <div className="flex justify-between mt-4">
    <p className="font-semibold text-lg">Total (INR)</p>
    <p className="font-semibold text-lg">{total.toFixed(2)}</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default AddPurchase;
