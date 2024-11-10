import React, { useState } from 'react';
import { connect } from 'react-redux';
import NFlag from '../Images/Icons/NFlag.svg';
import { useDispatch, useSelector } from 'react-redux';





const SupplierForm = ({handleClose}) => {





  const dispatch = useDispatch();
  const state = useSelector(state => state);








  const [activeTab, setActiveTab] = useState('General Information');
  const [showForm, setShowForm] = useState(true); 
  


  // const [supplierCode, setSupplierCode] = useState('');
  // const [supplierCodeError, setSupplierCodeError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [altEmail, setAltEmail] = useState('');
  const [altEmailError, setAltEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [altPhone, setAltPhone] = useState('');
  const [altPhoneError, setAltPhoneError] = useState('');

  


  const handleSupplierCode = (e) => {
    const value = e.target.value;
    // setSupplierCode(value);
    // setSupplierCodeError('');
  };

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError('');
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError('');
  };

  const handleAltEmail = (e) => {
    const value = e.target.value;
    setAltEmail(value);
    setAltEmailError('');
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError('');
  };

  const handleAltPhone = (e) => {
    const value = e.target.value;
    setAltPhone(value);
    setAltPhoneError('');
  };





  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDiscardClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = () => {
    let isValid = true;

   
    if (!name) {
      setNameError('Please enter name');
      isValid = false;
    } else {
      setNameError('');
    }

   
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!email) {
    setEmailError('Please enter email');
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setEmailError('Please enter valid email');
    isValid = false;
  } else {
    setEmailError('');
  }

    
    if (!altEmail) {
      setAltEmailError('Please enter alternate email');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setAltEmailError('Please enter valid email');
      isValid = false;
    }else {
      setAltEmailError('');
    }

  
    const phonePattern = /^[0-9]{10}$/;
  if (!phone) {
    setPhoneError('Please enter phone number');
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    setPhoneError('Phone number must be 10 digits');
    isValid = false;
  } else {
    setPhoneError('');
  }

 
  if (!altPhone) {
    setAltPhoneError('Please enter alternate phone no.');
    isValid = false;
  } else if (!phonePattern.test(altPhone)) {
    setAltPhoneError('phone number must be 10 digits');
    isValid = false;
  } else {
    setAltPhoneError('');
  }

    
    if (isValid) {
      dispatch({
        type: 'ADDSUPPLIER',
        payload: {
          id: 0,
          supplierCode: 0,
          name: name,
          email: email,
          altEmail: altEmail,
          phone: phone,
          altPhone: altPhone,
        },
      });
    }
  };

  

  return (

    <div className="fixed inset-0 left-44 flex items-center justify-center bg-black bg-opacity-50">
    <div className="">
        
   

    <div className="bg-white rounded-lg p-6 shadow-md w-full min-h-screen mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="font-semibold text-22 text-neutral-900 font-Manrope">Contacts - </label>
          <label className="font-bold text-22 text-neutral-900 font-Manrope">Supplier - </label>
          <label className="font-bold text-22 text-orange-600 font-Manrope">Add Supplier</label>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleSaveClick}
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded"
          >
            Discard
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between border-b-2 border-gray-900 mb-4 px-6">
        {['General Information', 'Address', 'Accounting'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? 'text-orange-600 border-b-8 border-orange-600 rounded-l-lg rounded-r-lg'
                : 'text-neutral-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'General Information' && (
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
            <div className="grid grid-cols-1 gap-4">
              {/* <div>
                <label className="block text-gray-700 font-medium mb-1">Supplier Code</label>
                <input type="text"
                
                value={supplierCode}
                onChange={handleSupplierCode}
                placeholder="Auto Generate" className="w-full w-60 p-2 border border-gray-300 rounded placeholder-black" />
              </div> */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input type="text" 
                                value={name}
                                onChange={handleName}
                  
                  placeholder="Name" className="w-full p-2 border border-gray-300 rounded placeholder-black mb-1" />
                  {nameError && <span className="text-red-500 font-Manrope mt-1 text-sm">{nameError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input type="email" placeholder="example@example.com"
                  
                  value={email}
              onChange={handleEmail}
                  className="w-full p-2 border border-gray-300 rounded placeholder-black mb-1" />
                  {emailError && <span className="text-red-500 font-Manrope mt-1 text-sm">{emailError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Alternative Email</label>
                  <input type="email" 
                   value={altEmail}
                   onChange={handleAltEmail}
                  placeholder="example@example.com" className="w-full p-2 border border-gray-300 mb-1 rounded placeholder-black" />
               
               {altEmailError && <span className="text-red-500 font-Manrope text-sm">{altEmailError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" 
                    value={phone}
                    onChange={handlePhone}
                    
                    placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0 mb-1" />
                       
                  </div>
                  {phoneError && <span className="text-red-500 font-Manrope text-sm">{phoneError}</span>}
                </div>
              </div>
              <div>
                  <label className="block text-gray-700 font-medium mb-1">Alternate Phone</label>
                  <div className="flex items-center border border-gray-300 rounded w-60">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" 
                    value={altPhone}
                    onChange={handleAltPhone}
                    
                    placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0 mb-1" />
                    
                  </div>
                  {altPhoneError && <span className="text-red-500 font-Manrope text-sm">{altPhoneError}</span>}
                </div>
             
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Address' && (
        <div className="flex justify-center items-center">
          <div className="w-full min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4 border-border-pink-300">
            <div className="grid gap-8">
              <div className="grid grid-cols-4">
                <div className='w-full'>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address 1<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Building no 15/82" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address 2<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Nagercoil" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Tamil Nadu" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="India" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Postal Code<span className="text-red-600">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <input type="text" placeholder="629106" className="block w-full border border-gray-300 rounded-md p-2 pr-10 placeholder-black" />
                    <select className="absolute inset-y-0 right-2 bg-transparent border-none text-gray-700 cursor-pointer focus:ring-0 focus:outline-none" defaultValue="">
                      <option value="" disabled></option>
                      <option value="Option1">Option1</option>
                      <option value="Option2">Option2</option>
                      <option value="Option3">Option3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{activeTab === 'Accounting' && (
        <div className="flex justify-center items-center">
          <div className="w-full  min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bank Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Number<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="15/82/******" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    IFSC Code<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="ABC012****" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  SupplierList: state.AddProduct.SupplierList,
});

export default connect(mapStateToProps)(SupplierForm)