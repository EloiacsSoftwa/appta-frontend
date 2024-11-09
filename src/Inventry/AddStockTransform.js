import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function AddStockTransform() {
  return (
    <div className="h-screen bg-second-gray p-4 w-full">
      <div>
        <label className="font-medium text-xl text-neutral-900 font-Manrope">
          Inventory / <span className="text-orange-600">New Stock Adjustment</span>
        </label>
        <div>
          <label className="font-medium text-base text-neutral-500 font-Manrope">
            View, Search for category
          </label>
        </div>
      </div>

      <div className="bg-grey rounded-lg overflow-x-auto mt-8 p-6 h-4/5">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <TextField
            label="Payment Due Date"
            variant="outlined"
            fullWidth
            className="max-w-xs font-Roboto font-semibold text-xs"
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "black",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
          />
          <TextField
            label="Transfer ID"
            variant="outlined"
            fullWidth
            className="max-w-xs font-Roboto font-semibold text-xs"
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "black",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
          />
          <FormControl fullWidth className="max-w-xs font-Roboto font-semibold text-xs">
            <InputLabel sx={{ color: "gray", "&.Mui-focused": { color: "black" } }}>
              Source Warehouse
            </InputLabel>
            <Select
              label="Source Warehouse"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            >
              <MenuItem value="Warehouse1">Warehouse 1</MenuItem>
              <MenuItem value="Warehouse2">Warehouse 2</MenuItem>
              <MenuItem value="Warehouse3">Warehouse 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="max-w-xs font-Roboto font-semibold text-xs">
            <InputLabel sx={{ color: "gray", "&.Mui-focused": { color: "black" } }}>
              Destination Warehouse
            </InputLabel>
            <Select
              label="Destination Warehouse"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            >
              <MenuItem value="Warehouse1">Warehouse 1</MenuItem>
              <MenuItem value="Warehouse2">Warehouse 2</MenuItem>
              <MenuItem value="Warehouse3">Warehouse 3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="w-full mt-8">
  <div className="relative w-full min-w-[200px]">
    <textarea
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] outline outline-1 outline-transparent bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 transition-all placeholder-shown:outline-gray-400 hover:outline-gray-600 focus:outline-2 focus:outline-gray-600"
      placeholder=" "
    ></textarea>
    <label
      className="absolute left-2 -top-3 bg-grey px-1 text-[11px] text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-grey peer-focus:px-1 peer-focus:text-[11px] peer-focus:text-gray-900"
    >
      Description
    </label>
  </div>
</div>

        <div className="flex flex-wrap gap-4 mt-8">
          <FormControl fullWidth className="max-w-xs font-Roboto font-semibold text-xs">
            <InputLabel sx={{ color: "gray", "&.Mui-focused": { color: "black" } }}>
              Product Name
            </InputLabel>
            <Select
              label="Product Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            >
              <MenuItem value="Product1">Product 1</MenuItem>
              <MenuItem value="Product2">Product 2</MenuItem>
              <MenuItem value="Product3">Product 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Available Qty"
            variant="outlined"
            fullWidth
            className="max-w-xs font-Roboto font-semibold text-xs"
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "black",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
          />
          <TextField
            label="Qty"
            variant="outlined"
            fullWidth
            className="max-w-xs font-Roboto font-semibold text-xs"
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "black",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
          />
        </div>

    


      </div>
    </div>
  );
}

export default AddStockTransform;
