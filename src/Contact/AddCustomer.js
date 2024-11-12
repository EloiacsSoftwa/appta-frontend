import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import cancelbtn from '../Images/Icons/cancelbtn.svg'
import { useDispatch, useSelector } from 'react-redux';
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


function AddCustomer({handleClose}) {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const navigate = useNavigate();

 
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payLater, setPayLater] = useState('');
 

  const [customerNameError, setCustomerNameError] = useState("");
const [mobileNumberError, setMobileNumberError] = useState("");
const [emailError, setEmailError] = useState("");
const [addressError, setAddressError] = useState("");
const [payLaterError, setPayLaterError] = useState("");

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
    setCustomerNameError("");
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    
    if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Please enter 10 digit mobile no.");
    } else {
      setMobileNumberError("");
    }
  };

  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

   
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const handlePayLaterChange = (e) => {
    setPayLater(e.target.value);
    setPayLaterError("");
  };

  const handleCreate = () => {
    
    setCustomerNameError("");
    setMobileNumberError("");
    setEmailError("");
    setAddressError("");
    setPayLaterError("");
  
   
    let isValid = true;
  
    if (!customerName) {
      setCustomerNameError("Please enter customer name");
      isValid = false;
    }
  
    if (!mobileNumber) {
      setMobileNumberError("Please enter mobile number");
      isValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError("Please enter 10 digit mobile number");
      isValid = false;
    }
  
    if (!email) {
      setEmailError("Please enter email");
      isValid = false;
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }
  
    if (!address) {
      setAddressError("Please enter address");
      isValid = false;
    }
  
    if (!payLater) {
      setPayLaterError("Please select pay later");
      isValid = false;
    }
  
    
    if (isValid) {
      dispatch({
        type: 'ADDCUSTOMER',
        payload: {
          id: 0,
          customerName: customerName,
          customerId: "0",
          mobile: mobileNumber,
          email: email,
          address: address,
          paylater: payLater,
          loyaltyPoints: 0
        }
      });
    }
  };
  

  return (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-xl w-fit sm:w-5/12  mx-4 border-x-4 border-t-4 border-b-2 border-orange-600">
       
       <div className="rounded-xl flex items-center justify-center p-4">

      
        {/* <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button> */}

<p className="font-Poppins font-bold text-2xl text-orange-600 text-center flex-grow">
            Add New Customer
          </p>
          <img
            src={cancelbtn}
            alt="Cancel"
            className="cursor-pointer w-4 h-4"
            onClick={handleClose}
          />
        </div>


        <div className="bg-gray-300 pb-4 w-full border-2 p-4 rounded-b-xl">
          <Box component="form" noValidate autoComplete="off">
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <TextField
                label="Customer Name"
                value={customerName}
                onChange={handleCustomerNameChange}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
  helperText={customerNameError}
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
                label="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                fullWidth
                inputProps={{ maxLength: 10 }}
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
    helperText={mobileNumberError}
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <TextField
                label="Email ID"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
                
    helperText={emailError}
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
                label="Address"
                value={address}
                onChange={handleAddressChange}
                fullWidth
                className="font-Roboto font-semibold text-xs"
                InputLabelProps={{ shrink: true }}
               
                helperText={addressError}
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
         
            <FormControl fullWidth>
      <InputLabel id="pay-later-label" className="font-Roboto font-semibold text-xs bg-gray-300" shrink  
      sx={{
           "&.Mui-focused": {
        color: "black", 
      },
            padding: "0 4px",
            borderRadius: "4px",
            color: "black",
          }}>Pay Later</InputLabel>
      <Select
        labelId="pay-later-label"
        id="pay-later-select"
        className="font-Roboto font-semibold text-xs "
        value={payLater}
        onChange={handlePayLaterChange}
        label="Pay Later"
        // error={!!payLaterError}
        helperText={payLaterError}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#797979", // Matches TextField border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#797979", // Matches TextField hover color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#797979", // Matches TextField focus color
          },
          "& .MuiInputLabel-root": { color: 'black' },
          '& .MuiFormHelperText-root': { color: 'red' },
          "& .MuiInputBase-input": {
            // fontFamily: "Roboto", 
            // fontWeight: "semibold",
            // fontSize: "12px",
          },
        }}
        
      >
        <MenuItem value="" disabled>
          Enable/Disable
        </MenuItem>
        <MenuItem value="true">Enable</MenuItem>
        <MenuItem value="false">Disable</MenuItem>
      </Select>
      {payLaterError && <FormHelperText  sx={{color: 'red'}}>{payLaterError}</FormHelperText>}
    </FormControl>
            </div>
          </Box>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button onClick={handleCreate} className="bg-orange-600 w-20 h-8 rounded-lg font-Roboto font-medium text-lg">Create</button>
            <button onClick={handleClose} className="bg-second-gray w-20 h-8 rounded-lg font-Roboto font-medium text-lg">Cancel</button>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default AddCustomer;
