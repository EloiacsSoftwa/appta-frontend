import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(false);
    navigate("/customer-list");
  };

 

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-xl w-11/12 sm:w-5/12 p-6 mx-4 border-x-4 border-t-4 border-b-2 border-orange-600">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <p className="font-Poppins font-bold text-2xl text-orange-600 text-center pt-4 pb-4">Add New Customer</p>

        <div className="bg-gray-300 pb-4 mt-4 w-full border-2">
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%', marginTop: '40px' } }}
            noValidate
            autoComplete="off"
          >
            <div className="flex gap-4">
              <TextField
                className="font-Roboto font-semibold text-xs"
                label="Customer Name"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              />
              <TextField
                className="font-Roboto font-semibold text-xs"
                label="Mobile Number"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              />
            </div>
          </Box>

          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <div className="flex gap-4 mt-6">
              <TextField
                className="font-Roboto font-semibold text-xs"
                label="Email ID"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              />
              <TextField
                className="font-Roboto font-semibold text-xs"
                label="Address"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              />
            </div>
          </Box>

          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <div className="flex gap-4 mt-6 w-full sm:w-3/4 md:w-1/2 lg:w-250">
              <TextField
                className="font-Roboto font-semibold text-xs"
                label="Pay Later"
                 defaultValue="Enable/Disable"
                 InputLabelProps={{ shrink: true }}
                sx={{
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#797979' },
                    '&:hover fieldset': { borderColor: '#797979' },
                    '&.Mui-focused fieldset': { borderColor: '#797979' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              />
            </div>
          </Box>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-orange-600 w-20 h-8 rounded-lg px-2 py-0 font-Roboto font-medium text-lg">Create</button>
            <button
              onClick={onClose}
              className="bg-second-gray w-20 h-8 rounded-lg px-2 py-0 font-Roboto font-medium text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
