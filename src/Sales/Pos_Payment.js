import React, { useEffect, useState } from "react";
import cancelbtn from '../Images/Icons/cancelbtn.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DemoContainer  from '../Sales/DemoContainer'
import { useDispatch, useSelector } from 'react-redux';



const Pos_Payment = ({ handleclose,total_amount }) => {

  const [activeTab, setActiveTab] = useState("Cash"); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const dispatch = useDispatch();
  const State = useSelector(state => state);

  const [payment_type, setPaymentType] = useState('');
  const paymentTypes = useSelector(state => state.PosReducer.PaymentType);

  const [cashReceived, setCashReceived] = useState('')
  const [changeto_return, setChangeToReturn] = useState('')
  const [receipt_number, setReceiptNumber] = useState('')

  const handleCashReceived = (e) => {
    setCashReceived(e.target.value)
    const Return_amount = total_amount ? (total_amount - e.target.value) : 0
    setChangeToReturn(Return_amount)
  }
    
  useEffect(()=> {
    dispatch({ type: 'GET-PAYMENT-TYPE' });
  },[])



   const handlepaymentcomplete = ()=> {

    try {
        dispatch({ type: 'COMPLETE-ORDER'  });  
        handleclose();
      } 
      catch (error) {
        console.error("Error completing the order:", error);
      }
    
   }


  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-xl w-fit sm:w-5/12 mx-4 border-x-4 border-t-4 border-b-2 border-orange-600">
        <div className="rounded-xl flex items-center justify-center p-4">
          <p className="font-Poppins font-bold text-2xl text-orange-600 text-center flex-grow">
            Mode of pay
          </p>
          <img
            src={cancelbtn}
            alt="Cancel"
            className="cursor-pointer w-4 h-4"
            onClick={handleclose}
          />
        </div>

        <div className=" w-full   rounded-b-xl">
          <div className="relative right-0">
          <ul className="flex space-x-2 px-1.5 py-1.5 list-none rounded-md pb-4" role="tablist">
  <li className="flex-auto text-center">
    <a
      className={`pt-1 ps-6 pe-6 pb-1 rounded-md cursor-pointer text-[#EAEAEA] ${
        activeTab === "Cash" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("Cash")}
      role="tab"
      aria-selected={activeTab === "Cash"}
      style={{
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '12px',
        letterSpacing: '0.15px',
      }}
    >
      Cash
    </a>
  </li>
  <li className="flex-auto text-center">
    <a
      className={`pt-1 ps-6 pe-6 pb-1 rounded-md cursor-pointer text-[#EAEAEA] ${
        activeTab === "upi" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("upi")}
      role="tab"
      aria-selected={activeTab === "upi"}
      style={{
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '12px',
        letterSpacing: '0.15px',
      }}
    >
      UPI
    </a>
  </li>
  <li className="flex-auto text-center">
    <a
      className={`pt-1 ps-6 pe-6 pb-1 rounded-md cursor-pointer text-[#EAEAEA] ${
        activeTab === "swipe" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("swipe")}
      role="tab"
      aria-selected={activeTab === "swipe"}
      style={{
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '12px',
        letterSpacing: '0.15px',
      }}
    >
      Swipe
    </a>
  </li>
  <li className="flex-auto text-center">
    <a
      className={`pt-1 ps-6 pe-6 pb-1 rounded-md cursor-pointer text-[#EAEAEA] ${
        activeTab === "paylater" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("paylater")}
      role="tab"
      aria-selected={activeTab === "paylater"}
      style={{
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '12px',
        letterSpacing: '0.15px',
      }}
    >
      Pay Later
    </a>
  </li>
</ul>




            <div data-tab-content=""   className={`p-5 overflow-auto bg-gray-300 w-full ${activeTab === "paylater" ? "h-[30rem]" : "h-64"}`}>
  {activeTab === "Cash" && (
    <div id="Cash" role="tabpanel">
     
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
    InputProps={{
        readOnly: true, // Make the field read-only
    }}
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
                InputProps={{
                    readOnly: true, // Make the field read-only
                }}
               
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
                 value="#ELT054686"
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
        <button className="text-center bg-[#EA580C] text-black p-2 rounded" 
        onClick={handlepaymentcomplete}
        >
          Payment Completed
        </button>
      </Box>
    </Box>
     
    </div>
  )}


  {activeTab === "upi" && (
    <div id="upi" role="tabpanel">
      
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
                // value={total_amount ? total_amount : 0}
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
                label="Transaction Reference ID"
                 value="TSD584678526"
                // onChange={handleCashReceived}
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

     
{/* 
<TextField
                label="Payment Status"
                // value={changeto_return}
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
              /> */}

{/* <div className="flex flex-col sm:flex-row gap-4 mt-4"> */}
         
<FormControl fullWidth>
  <InputLabel
    id="pay-later-label"
    className="font-Roboto font-semibold text-xs bg-gray-300"
    shrink
    sx={{
      "&.Mui-focused": {
        color: "black",
      },
      padding: "0 4px",
      borderRadius: "4px",
      color: "black",
    }}
  >
    Payment Status
  </InputLabel>
  <Select
    labelId="pay-later-label"
    id="pay-later-select"
    className="font-Roboto font-semibold text-xs"
    value="Completed" // Set default value to "Completed"
    // onChange={handlePayLaterChange} // If you have an onChange handler
    label="Pay Later"
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
      "& .MuiInputLabel-root": { color: "black" },
      '& .MuiFormHelperText-root': { color: "red" },
      "& .MuiInputBase-input": {
        // fontFamily: "Roboto", 
        // fontWeight: "semibold",
        // fontSize: "12px",
      },
    }}
  >
    <MenuItem value="Completed" selected>
      Completed
    </MenuItem>
    <MenuItem value="Failed">Failed</MenuItem>
    <MenuItem value="Pending">Pending</MenuItem>
  </Select>
  {/* {payLaterError && <FormHelperText  sx={{color: 'red'}}>{payLaterError}</FormHelperText>} */}
</FormControl>

         {/* </div> */}
   
   <TextField
                label="Receipt Number"
                 value="#ELT054686"
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

   

      <Box sx={{ gridColumn: 'span 2', display: 'flex',flexDirection:'row', justifyContent:'space-between', mt: 2 }}>
      <button 
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  // onClick={handleClose}
        >
         Request for Payment 
        </button>
        <button
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  onClick={handlepaymentcomplete}
>
  Payment Completed
</button>
      </Box>
    </Box>

    </div>
  )}


  {activeTab === "swipe" && (
    <div id="swipe" role="tabpanel">
      
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
                // value={total_amount ? total_amount : 0}
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
                label="Transaction Reference ID"
                value="TSD584678526"
                // onChange={handleCashReceived}
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

     
<FormControl fullWidth>
  <InputLabel
    id="pay-later-label"
    className="font-Roboto font-semibold text-xs bg-gray-300"
    shrink
    sx={{
      "&.Mui-focused": {
        color: "black",
      },
      padding: "0 4px",
      borderRadius: "4px",
      color: "black",
    }}
  >
    Payment Status
  </InputLabel>
  <Select
    labelId="pay-later-label"
    id="pay-later-select"
    className="font-Roboto font-semibold text-xs"
    value="Completed" // Set default value to "Completed"
    // onChange={handlePayLaterChange} // If you have an onChange handler
    label="Pay Later"
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
      "& .MuiInputLabel-root": { color: "black" },
      '& .MuiFormHelperText-root': { color: "red" },
      "& .MuiInputBase-input": {
        // fontFamily: "Roboto", 
        // fontWeight: "semibold",
        // fontSize: "12px",
      },
    }}
  >
    <MenuItem value="Completed" selected>
      Completed
    </MenuItem>
    <MenuItem value="Failed">Failed</MenuItem>
    <MenuItem value="Pending">Pending</MenuItem>
  </Select>
  {/* {payLaterError && <FormHelperText  sx={{color: 'red'}}>{payLaterError}</FormHelperText>} */}
</FormControl>

   
   <TextField
                label="Receipt Number"
                value="#ELT054686"
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

   

      <Box sx={{ gridColumn: 'span 2', display: 'flex',flexDirection:'row', justifyContent:'space-between', mt: 2 }}>
        
      <button 
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  // onClick={handleClose}
        >
         Request for Payment 
        </button>
        <button
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  // onClick={handleClose}
>
  Payment Completed
</button>

      </Box>
    </Box>

    </div>
  )}


  
{activeTab === "paylater" && (
    <div id="paylater" role="paylater">
      
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
                label="Customer Name"
                // value={total_amount ? total_amount : 0}
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
                label="Customer Contact"
                // value={total_amount ? total_amount : 0}
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
                label="Amount to be paid"
                // value={total_amount ? total_amount : 0}
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
                label="Payment Received"
                // value={cashReceived}
                // onChange={handleCashReceived}
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
                label="Outstanding Balance"
                // value={changeto_return}
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
   
   {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
      
        <div className="w-full font-Roboto font-semibold text-xs"    
                  sx={{ 
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  '& .MuiFormHelperText-root': { color: 'red' },
                }}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Payment Due Date" />
          </DemoContainer>
        </div>

       
    </LocalizationProvider> */}


<LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full font-Roboto font-semibold text-xs">
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Payment Due Date"
            // value={selectedDate}
            // onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => (
              <TextField
                {...params}
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
            )}
          />
        </DemoContainer>
      </div>
    </LocalizationProvider>

<TextField

                label="Receipt Number"
                value="#ELT054686"
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

<FormControl fullWidth>
  <InputLabel
    id="pay-later-label"
    className="font-Roboto font-semibold text-xs bg-gray-300"
    shrink
    sx={{
      "&.Mui-focused": {
        color: "black",
      },
      padding: "0 4px",
      borderRadius: "4px",
      color: "black",
    }}
  >
    Payment Status
  </InputLabel>
  <Select
    labelId="pay-later-label"
    id="pay-later-select"
    className="font-Roboto font-semibold text-xs"
    value="Completed" // Set default value to "Completed"
    // onChange={handlePayLaterChange} // If you have an onChange handler
    label="Pay Later"
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
      "& .MuiInputLabel-root": { color: "black" },
      '& .MuiFormHelperText-root': { color: "red" },
      "& .MuiInputBase-input": {
        // fontFamily: "Roboto", 
        // fontWeight: "semibold",
        // fontSize: "12px",
      },
    }}
  >
    <MenuItem value="Completed" selected>
      Completed
    </MenuItem>
    <MenuItem value="Failed">Failed</MenuItem>
    <MenuItem value="Pending">Pending</MenuItem>
  </Select>
  {/* {payLaterError && <FormHelperText  sx={{color: 'red'}}>{payLaterError}</FormHelperText>} */}
</FormControl>


<TextField
                label="Enter OTP"
                value="****"
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

   

      <Box sx={{ gridColumn: 'span 2', display: 'flex',flexDirection:'row', justifyContent:'space-between', mt: 2 }}>
        
      <button 
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  // onClick={handleClose}
        >
         Request for Payment 
        </button>
        <button
  className="text-center bg-[#EA580C] text-black p-3 rounded-md font-roboto font-medium text-[18px] leading-[12px] tracking-[0.15px]"
  // onClick={handleClose}
>
  Payment Completed
</button>

      </Box>
    </Box>

    </div>
  )}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pos_Payment;
