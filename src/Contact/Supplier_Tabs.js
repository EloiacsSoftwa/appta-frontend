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
    } else if (!emailPattern.test(altEmail)) {
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

    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
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
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded font-Manrope"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded font-Manrope"
          >
            Discard
          </button>
        </div>
      </div>

      {/* Tabs */}
    
      <div className="flex justify-between flex-row border-b-2 border-gray-900 mb-4 px-6">
        
        {['General Information', 'Address', 'Accounting'].map((tab) => (
          <div className='flex flex-col'>
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-medium font-Manrope ${
              activeTab === tab
                ? 'text-orange-600 '
                : 'text-neutral-900'
            }`}
          >
            {tab} 
          </button>
          {activeTab === tab && <span className='border border-orange-600 h-2 rounded-ss-lg rounded-se-lg w-48 bg-orange-600'></span>}
          
          </div>
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 font-SourceSansPro">Name</label>
                  <input type="text" 
                                value={name}
                                onChange={handleName}
                  
                  placeholder="Name" className="w-full p-2 border border-gray-300 rounded placeholder-black mb-1 font-SourceSansPro font-normal"  />
                  {nameError && <span className="text-red-500 font-SourceSansPro mt-1 text-sm">{nameError}</span>}
                </div>
                <div> 
                  <label className="block text-gray-700 font-semibold mb-1 font-SourceSansPro ">Email</label>
                  <input type="email" placeholder="example@example.com"
                  
                  value={email}
              onChange={handleEmail}
                  className="w-full p-2 border border-gray-300 rounded placeholder-black mb-1 font-SourceSansPro font-normal" />
                  {emailError && <span className="text-red-500 font-SourceSansPro mt-1 text-sm">{emailError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 font-SourceSansPro">Alternative Email</label>
                  <input type="email" 
                   value={altEmail}
                   onChange={handleAltEmail}
                  placeholder="example@example.com" className=" font-SourceSansPro font-normal w-full p-2 border border-gray-300 mb-1 rounded placeholder-black" />
               
               {altEmailError && <span className="text-red-500 font-SourceSansPro text-sm">{altEmailError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 font-SourceSansPro">Phone</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" 
                    value={phone}
                    maxLength={10}
                    onChange={handlePhone}
                    
                    placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0 mb-1 font-SourceSansPro font-normal" />
                       
                  </div>
                  {phoneError && <span className="text-red-500 font-SourceSansPro text-sm">{phoneError}</span>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 font-SourceSansPro">Alternate Phone</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" 
                    value={altPhone}
                    onChange={handleAltPhone}
                    maxLength={10}
                    placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0 mb-1 font-SourceSansPro font-normal" />
                    
                  </div>
                  {altPhoneError && <span className="text-red-500 font-SourceSansPro text-sm">{altPhoneError}</span>}
                </div>
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
                  <label className="block text-sm font-semibold  text-black font-SourceSansPro">
                    Contact Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold   text-black font-SourceSansPro">
                    Address 1<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Building no 15/82" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold   text-black font-SourceSansPro">
                    Address 2<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold   text-black font-SourceSansPro">
                    City<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Nagercoil" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold   text-black font-SourceSansPro">
                    State<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Tamil Nadu" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold   text-black font-SourceSansPro">
                    Country<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="India" className=" font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold  text-black font-SourceSansPro">
                    Postal Code<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="635848" className=" text-base font-normal  font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />

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
                  <label className="block text-sm font-semibold text-black font-SourceSansPro">
                    Bank Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className=" font-normal font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black font-SourceSansPro">
                    Account Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className="font-normal font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black font-SourceSansPro">
                    Account Number<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="15/82/******" className="font-normal font-SourceSansPro mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black font-SourceSansPro">
                    IFSC Code<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="ABC012****" className="font-normal font-SourceSansPro  mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
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
  SupplierList: state.Product.SupplierList,
});

export default connect(mapStateToProps)(SupplierForm)