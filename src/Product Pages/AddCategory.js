// import React from 'react';
// import Minus from '../Images/Sales/Minus.svg'

// function AddCategory({ handleClose }) {
//   return (

//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-zinc-300 rounded-lg w-full max-w-xl p-6 mx-4">
        
         

//       <div className='flex-1'>
// <div className='mb-2'>



//   <label className='mb-2'>Category Name</label>
//   <input
//             type="text"
//             id="categoryName"
//             required
//             className="mt-1 block w-full border rounded-md shadow-sm  p-2 focus:border-none"
//             placeholder="Enter category name"
//           />


// </div>
// <div className="flex justify-end gap-5">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 text-orange-600 rounded-md  border-orange-600 border"
//               onClick={handleClose}
//             >
//               Discard
//             </button>
//             <div className='px-1 py-1 border-black border-2 w-auto rounded bg-orange-600 border-solid'>
//         <label className="text-base font-semibold mb-4 text-black font-Manrope">Save & Close</label>
//        </div>
//           </div>


//         </div>



       
//     </div>
//   </div>

//   );
// }

// export default AddCategory;


import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Minus from '../Images/Sales/Minus.svg';

function AddCategory({ handleClose }) {
  
  const dispatch = useDispatch();
  const State = useSelector(state => state);
  console.log("State",State);
  

  const[categoryname, setCategoryName] = useState('');

 

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value)
  }

  const handleSaveCategory = () => {
     if(categoryname ){
      dispatch({ type: 'ADD_CATEGORY', payload: { categoryName:categoryname, imageUrl :'', active :''}})
      setCategoryName('')
      handleClose()
     }
    
  }

 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-300 rounded-lg w-full max-w-xl p-8 mx-4">
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add Category</h2>
          <img src={Minus} alt="Close Icon" onClick={handleClose} className="cursor-pointer" />
        </div> */}

        <div className="flex-1">
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-black-700 font-semibold mb-1 font-Manrope mb-2 text-sm">Category Name</label>
            <input
              type="text"
              id="categoryName"
              value = {categoryname}
              onChange={(e)=> handleCategoryName(e)}
              required
              className="mt-1 font-normal block  text-base  w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 font-Manrope text-black placeholder-black "
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
              className="px-4 py-2 bg-zinc-300 text-orange-600 rounded-md border border-orange-600 "
              onClick={handleClose}
            >
              Discard
            </button>
            <button

             onClick={handleSaveCategory}
              type="button" 
              className="flex items-center justify-center px-4 py-2 bg-orange-600 text-black rounded-md hover:bg-orange-700 border-black border"
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

