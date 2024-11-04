import React,{ useState } from 'react';
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
import {  FormControlLabel, Checkbox } from '@mui/material';


const  Pos = () => {


    const [showModal, setShowModal] = useState(false);


    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [isPayLaterEnabled, setIsPayLaterEnabled] = useState(false);
    const [customerform, SetCustomerform] = useState(false)

     const handleOpencustomer = () => {
        SetCustomerform(true)
     }

     const handleClosecustomer = () => {
        SetCustomerform(false)
     }

    // Function to handle the create action
    const handleCreate = () => {
      console.log("Creating new customer...");   
      handleClosecustomer();
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
        border:'2px solid #EA580C',
        borderRadius: '30px',
      };

    const PosData = [
        {
            No : "1",
            code : "DMC0123",
            product : "Dairy Milk",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,000',
        },
        {
            No : "2",
            code : "DMC0123",
            product : "Face Wash",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,000'
        },
        {
            No : "3",
            code : "DMC0123",
            product : "Egg",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,500',
        },
        {
            No : "4",
            code : "DMC0123",
            product : "Butter",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,500',
        },
        {
            No : "5",
            code : "DMC0123",
            product : "Butter",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,500',
        },
        {
            No : "6",
            code : "DMC0123",
            product : "Butter",
            quantity : "02",
            unit_price : "50",
            amount:'50',
            total: '₹ 2,500',
        },
    ];

    return(<>
        <div className='h-4/5 bg-white p-4 w-full'>
           
            <div className='flex flex-row w-full h-full gap-4'>

           <div className="bg-white w-3/4 min-h-[70vh] shadow-custom overflow-x-auto">
                <div className="flex items-center justify-between p-2 border-b bg-lightgray">
                    <div className="flex items-center ">
                        {/* <div><img src={Frame1} className='w-6 h-6 cursor-pointer' /></div> */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                <img src={Search} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for products"
                                className=" rounded pl-10 py-1  bg-zinc-300  "
                            />
                        </div>
                        <div className='bg-zinc-300 ms-2 items-center rounded'>
                            <img  src={Barcode} className='p-1' alt='barcode'/>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                    
                        <div>
                            <img src={Delete} className='w-6 h-6 cursor-pointer' />
                        </div>
                    </div>
                </div>
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
                        {PosData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 border-0">
                                <td className="p-2 mt-1 flex items-center justify-start">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-3 w-3 text-blue-600 border-neutral-500 cursor-pointer"
                                    /></td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.No}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.code}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.product}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">{item.quantity}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">₹{item.unit_price}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">₹{item.amount}</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">-</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start">-</td>
                                <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900">{item.total}</td>
                            

                              
                            </tr>
                        ))}
                    </tbody>
                </table>






              
            </div>
 

          <div className="bg-white w-1/4 h-full shadow-custom overflow-x-auto">
          <div className="flex items-center justify-between p-2 border-b bg-lightgray">
                    <div className="flex items-center ">
                        {/* <div><img src={Frame1} className='w-6 h-6 cursor-pointer' /></div> */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                <img src={Search} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for Customer"
                                className=" rounded pl-10 py-1  bg-zinc-300  "
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                    
                        <div>
                            <img src={Addcustomer} className='w-6 h-6 cursor-pointer' onClick={handleOpencustomer}/>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-2 rounded-lg shadow-lg m-2 ">
    <div class="flex flex-row justify-between">
          <div class="flex flex-col ">
            <p className='text-sm font-semibold font-Manrope'>Robinson</p>
            <p className='text-xs text-[#797979]'>+91 9584 654 254</p>
            <p className='text-xs text-[#797979] me-2'>robinson@gmail.com</p>
            </div>
          <div class="flex flex-col text-right">

            <div class="flex">
            <img src={Cup} className='w-6 h-6'/>
            <div>
            <p className='text-xs  font-semibold font-Manrope ' style={{paddingLeft:'7px'}}>Loyalty Points</p>
            <p className='text-xs text-center text-[#797979] ' style={{paddingRight:'20px'}}>85 points</p>
          </div>
          </div>

          <div class="flex flex-row text-right mt-1 pb-0">
          <img src={Paylater} className='w-6 h-6'/>
          <div>
             <p className='text-xs  font-semibold font-Manrope' style={{paddingRight:'7px'}}>Pay Later</p>
            <p className='text-xs text-center   text-[#797979] ' style={{paddingLeft:'8px'}}>Not Eligible</p>
            </div>
            </div>
          </div>
    </div>
    
  </div>

   <div  class="border border-solid border-black"> </div>

   <div><p className='text-[#131313] text-xs  font-semibold font-Manrope ps-2'>Order No : ELT054686</p></div>

   <div  class="border border-solid border-black"> </div>

   <div className='flex flex-col'>

    <div className='flex flex-row mt-2'>
    <img src={Radiobox}  className='ps-2'/>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Add Loyalty Points</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Date: </p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>12-09-2024</p>
    </div>
   
    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Total Items : </p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>056</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Amount :</p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 230.00</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Discounts :</p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 50.00</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Before Tax : </p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 230.00</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'> Tax : </p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>CGST : </p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 230.00</p>
    </div>

    <div className='flex flex-row justify-between' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>SGST : </p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 230.00</p>
    </div>

    <div className='flex flex-row justify-between  mb-2 mt-2' >
    <p className='text-[#131313] text-sm  font-semibold font-Manrope ps-2'>Total :</p>
    <p className='text-[#131313] text-sm  font-semibold font-Manrope pe-2'>₹ 1240.00</p>
    </div>

    <div class="border border-dotted border-black ">
</div>

    <div className='flex flex-col items-center mt-1' >
    <p className='font-semibold font-Manrope text-[#131313] font-bold text-xl '>Amount to Pay</p>
    <p className='font-semibold font-Manrope text-[#131313] font-bold text-xl '>₹ 1240.00</p>
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
      

    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className="border border-solid border-[#EA580C] rounded"
>
  <Box sx={{ ...style, borderRadius: '8px', overflow: 'hidden' }}>
    {/* Header with white background */}
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

    {/* Modal body with #D9D9D9 background */}
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
        id="outlined-basic"
        label="Amount to be paid"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Cash Received"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Change to Return"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Receipt Number"
        variant="outlined"
        fullWidth
      />

      {/* Centered Payment Button */}
      <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', mt: 2 }}>
        <button className="text-center bg-[#EA580C] text-black p-2 rounded" onClick={handleClose}>
          Payment Completed
        </button>
      </Box>
    </Box>
  </Box>
</Modal>



{/* //add customer  */}

<Modal
  open={customerform}
  onClose={handleClosecustomer}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className="border border-solid border-[#EA580C] rounded"
>
  <Box sx={{ ...style, borderRadius: '8px', overflow: 'hidden' }}>
    {/* Header with white background */}
    <Box sx={{ bgcolor: 'white', p: 2 }}>

        <div className="flex items-center justify-between">
            <div></div>
        <img src={cancelbtn} alt="Cancel" className="cursor-pointer" onClick={handleClosecustomer} />

        </div>
      <div className="flex items-center justify-between">
      <h2 
  id="modal-modal-title" 
  style={{ fontWeight: 700, fontSize: '24px', lineHeight: '12px',color:'#EA580C', marginBottom:'30px' }} 
  className="mx-auto">
    Add New Customer
</h2>
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
        id="outlined-basic"
        label="Customer Name"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Mobile Number"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Email ID"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        fullWidth
      />

     
      <TextField
        id="paylater-field"
        label="Pay Later"
        variant="outlined"
        fullWidth
      
      />
     

      
      <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
        <button className="bg-[#EA580C] text-[#000000] p-2 ps-4 pe-4 rounded" onClick={handleCreate}>
          Create
        </button>
        <button className="bg-white  text-[#000000] p-2 ps-4 pe-4 rounded" onClick={handleClosecustomer}>
          Cancel
        </button>
      </Box>
    </Box>
  </Box>
</Modal>


</>    
    )
}
export default Pos;