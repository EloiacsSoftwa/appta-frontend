import React from 'react';
import Minus from '../Images/Sales/Minus.svg';

function AddCategory({ handleClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-300 rounded-lg w-full max-w-xl p-8 mx-4">
        
        <div className="flex-1">
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-gray-700 font-medium mb-1">Sub Category Name</label>
            <input
              type="text"
              id="categoryName"
              required
              className="mt-1 block w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter category name"
            />
          </div>


                     {/* <div className="mb-4">
             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
               Description
             </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 lg:w-full sm:w-full xs:w-full block  border  rounded-md shadow-sm  p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter category description"
            ></textarea>
          </div> */}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-zinc-300 text-orange-600 rounded-md border border-orange-600 font-Manrope "
              onClick={handleClose}
            >
              Discard
            </button>
            <button
              type="button"
              className="flex items-center font-Manrope justify-center px-4 py-2 bg-orange-600 text-black rounded-md hover:bg-orange-700 border border-black"
            >
              Save & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;

