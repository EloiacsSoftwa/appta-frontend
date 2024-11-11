import React from "react";
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Vector (3).svg';
function AddStockTransform({ handleClose }) {
  return (
    <div className="h-screen bg-white p-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Inventory - Stock Transfer - <span className="text-orange-600">New Stock Transfer</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-4 p-4 mb-4">
        <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Adjustment Details</p>
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Stock Transfer ID</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
              placeholder="Auto Generate"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Date</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
              placeholder="Auto Generate"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Transfer Cost</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
              placeholder="₹"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Reason</label>
            <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
              <option value="">Select Reason</option>
             
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">From Warehouse</label>
            <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
              <option value="">Select Warehouse</option>
            
            </select>
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">To Warehouse</label>
            <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
              <option value="">Select Warehouse</option>
              
            </select>
          </div>

          <div className="flex items-center mt-4">
            <input type="checkbox" className="bg-zinc-300 border border-black" />
            <p className="font-semibold text-base ml-4">E-Way Bill</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-96 mt-8">
          <div className="relative w-full min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Description</label>
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-[#BDBDBD] bg-[#F0F0F0]"
              placeholder=" "
            ></textarea>
          </div>
        </div>

        <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope mt-4">Product Details</p>
        <table className="w-1/2 text-left mb-5 table-auto">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="font-semibold text-sm text-neutral-900 font-Manrope border border-white p-2">Product</th>
            <th className="font-semibold text-sm text-neutral-900 font-Manrope border border-white p-2">Product Code</th>
            <th className="font-semibold text-sm text-neutral-900 font-Manrope border border-white p-2">Qnty</th>
            <th className="font-semibold text-sm text-neutral-900 font-Manrope border border-white p-2">Unit Price</th>
            <th className="font-semibold text-sm text-neutral-900 font-Manrope border border-white  border-r-0 p-2">Amount</th>
            <th className="p-2 font-semibold text-base text-neutral-900 border-l-0 border border-white "></th>
          </tr>
        </thead>
        <tbody>
  <tr className="bg-[#D9D9D9]">
    <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start border border-white bg-gray-100">Printer</td>
    <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start border border-white bg-gray-100">HP48617O</td>
    <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start border border-white bg-gray-100">02</td>
    <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start border border-white bg-gray-100">₹</td>
    <td className="p-2 font-semibold text-sm font-Manrope text-neutral-900 text-start border border-white border-r-0 bg-gray-100">₹</td>
    <td className="p-2 text-gray-500 cursor-pointer border-l-0 border-white border bg-gray-100">
      <img src={Dot} alt="Options" />
    </td>
  </tr>
</tbody>

      </table>

      <div className="flex items-center mt-4 cursor-pointer" >
          <div className="flex items-center" >
          <img src={Add} alt="Add icon" />
          <p className="font-semibold text-sm ml-4">Add Products</p>
          </div>
         
        </div>
      </div>

     
    </div>
  );
}

export default AddStockTransform;
