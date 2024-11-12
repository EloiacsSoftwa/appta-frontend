import React, { useEffect, useState , useRef} from "react";
import cancelbtn from '../Images/Icons/cancelbtn.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DateIcon from '../Images/Sales/Vector (5).svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';



const Pos_Payment = ({ handleclose,total_amount,order_id }) => {

    const State = useSelector(state => state);

  const [activeTab, setActiveTab] = useState("Cash"); 
  const [payment_type, setPaymentType] = useState();
  console.log("payment_type",payment_type);

  const [receipt_number, setReceiptNumber] = useState('')
  const [transcation_id,setTransaction_ID] = useState('')




const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const PaymentFilter = State?.PosReducer?.PaymentType?.filter((u) => u.paymentType === tabName);
    setPaymentType(PaymentFilter);
    setReceiptNumber(PaymentFilter && PaymentFilter[0]?.receiptNumber || '');
    setTransaction_ID(PaymentFilter && PaymentFilter[0]?.transactionId || '');
};


useEffect(() => {
    const defaultPaymentFilter = State?.PosReducer?.PaymentType?.filter((u) => u.paymentType === "Cash");
    setPaymentType(defaultPaymentFilter);
    setReceiptNumber(defaultPaymentFilter && defaultPaymentFilter[0]?.receiptNumber || '');
    setTransaction_ID(defaultPaymentFilter && defaultPaymentFilter[0]?.transactionId || '');
}, [State?.PosReducer?.PaymentType]);

  const dispatch = useDispatch();





  const [cashReceived, setCashReceived] = useState('')
  const [changeto_return, setChangeToReturn] = useState('')
  

  const handleCashReceived = (e) => {
    const cashReceivedValue = e.target.value;
    setCashReceived(cashReceivedValue);

    const Return_amount = total_amount ? ((cashReceivedValue) - total_amount).toFixed(2) : 0;
    setChangeToReturn(parseFloat(Return_amount));
}

const datePickerRef = useRef(null);

const [orderDate, setOrderDate] = useState(null);
const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

const handleIconClickForOrder = () => {
  setIsDatePickerOpen((prev) => !prev);
};

const handleOrderDateChange = (date) => {
  setOrderDate(date);
  setIsDatePickerOpen(false);
  // setOrderDateError('')
};
    
  useEffect(()=> {
    dispatch({ type: 'GET-PAYMENT-TYPE' });
  },[])


 
  const [invoiceurl,setInvoiceurl] = useState('')


  const handlepaymentcomplete = () => {
    if (payment_type && payment_type.length > 0) {
        const orderId = order_id
        const paymentType = payment_type[0].paymentTypeId;

        if (orderId && paymentType) {
            dispatch({
                type: 'COMPLETE-ORDER-PAYMENT',
                payload: { orderId, paymentType }
            });

            handleclose();          
        } else {
            console.log("Incomplete payment data", payment_type[0]);
        }
    } else {
        console.log("Payment type is missing or invalid");
    }
};




// const InvoiceUrl = useSelector(state => state.PosReducer.Invoice_url);



// useEffect(() => {
  
//   if (InvoiceUrl) {
//     setInvoiceurl(InvoiceUrl);
//   }
// }, [InvoiceUrl]);



// useEffect(() => {
//   if (invoiceurl) {
//     window.open(invoiceurl, '_blank');
//   }
// }, [invoiceurl]);


// console.log("invoiceurl",invoiceurl);
console.log("Url",State.PosReducer);
console.log("state for POs",State)





  

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
        activeTab === "UPI" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("UPI")}
      role="tab"
      aria-selected={activeTab === "UPI"}
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
        activeTab === "Swipe" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("Swipe")}
      role="tab"
      aria-selected={activeTab === "Swipe"}
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
        activeTab === "Pay Later" ? "bg-[#EA580C]" : "bg-[#797979]"
      } font-Roboto`}
      onClick={() => handleTabClick("Pay Later")}
      role="tab"
      aria-selected={activeTab === "Pay Later"}
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




            <div data-tab-content=""   className={`p-5 overflow-auto bg-gray-300 w-full ${activeTab === "Pay Later" ? "h-[30rem]" : "h-64"}`}>
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
        <button className="text-center bg-[#EA580C] text-black p-2 rounded" 
        onClick={handlepaymentcomplete}
        >
          Payment Completed
        </button>
      </Box>
    </Box>
     
    </div>
  )}


  {activeTab === "UPI" && (
    <div id="UPI" role="tabpanel">
      
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
                label="Transaction Reference ID"
                 value={transcation_id}
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


  {activeTab === "Swipe" && (
    <div id="Swipe" role="tabpanel">
      
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


  
{activeTab === "Pay Later" && (
    <div id="Pay Later" role="Pay Later">
      
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


<div className="relative">
              <label className="block font-semibold mb-1  text-xs text-gray text-start font-SourceSansPro">
              Payment Due Date <span className="text-red-500">*</span>
              </label>

              <DatePicker
                selected={orderDate}
                onChange={handleOrderDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="DD / MM / YYYY"
                className="w-full border rounded px-3 bg-[#D9D9D9] py-2 pr-12 text-sm md:text-base focus:border-orange-600"
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
            </div>

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
