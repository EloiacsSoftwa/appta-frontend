import React, { useState } from "react";

const AddProductModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Product Details");

 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-1/2 p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Product</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">X</button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b mb-4">
          {["Product Details", "Accounting", "Bill Of Material"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-12 py-2 -mb-px border-b-2 ${
                activeTab === tab ? "border-orange-500 text-orange-500" : "border-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        {activeTab === "Product Details" && (
          <ProductDetailsForm />
        )}
        {/* Add other tab content components if needed */}

        {activeTab === "Accounting" && (
          <AccountingDetailsForm />
        )}

{activeTab === "Bill Of Material" && (
          <ProductDetailsForm />
        )}

      </div>
    </div>
  );
};

const ProductDetailsForm = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    const [isChecked, setIsChecked] = useState(false);

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

 

  // Toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
    
return <form className="flex flex-wrap gap-4">
  {/* Image Upload Box */}
  <div className="relative w-40 h-40 flex-shrink-0">
    {/* Hidden file input */}
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />

    {/* Square image box with preview */}
    <div className="w-full h-full border border-dashed border-gray-300 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden">
      {image ? (
        // Show uploaded image
        <img src={image} alt="Uploaded" className="object-cover w-full h-full" />
      ) : (
        // Placeholder text/icon when no image is uploaded
        <span className="text-gray-400 text-sm">+ Add image</span>
      )}
    </div>

    <div className="flex items-center mt-2">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
      />

      {/* Label */}
      <label
        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
        onClick={handleCheckboxChange} // Toggle checkbox when label is clicked
      >
        Freebie
      </label>
    </div>
    <div>
        <label className="text-left text-sm font-medium text-gray-700">Name</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Freebie" />
    </div>
  </div>

  {/* Form Fields */}
  <div className="flex flex-col flex-1 gap-4">
    <div>
      <label className="text-left block text-sm font-medium text-gray-700">Product Type</label>
      <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
      </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
    </div>

    <div className="flex gap-4">
    <div className="flex-1">
      <label className="text-left block text-sm font-medium text-gray-700">Category</label>
      <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
      {/* <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Category" /> */}
    </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Sub Category</label>
        {/* <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" /> */}
        <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
      </div>
    </div>

   




    <div className="flex gap-4">
    <div className="flex-1">
      <label className="text-left block text-sm font-medium text-gray-700">Unit</label>
      <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
      {/* <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Category" /> */}
    </div>
    <div className="flex-1 flex gap-4">
    <div className="flex-1">
      <label className="text-left block text-sm font-medium text-gray-700">Qty</label>
      <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
      {/* <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Category" /> */}
    </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Min Qty</label>
        {/* <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" /> */}
        <select className="mt-1 block w-full border border-gray-300 rounded-md">
        <option>Tracked</option>
        {/* Other options */}
      </select>
      </div>
    </div>
    </div>



    <div>
      <label className="text-left block text-sm font-medium text-gray-700">Quantity</label>
      <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="15" />
    </div>

    <button type="submit" className="mt-4 bg-orange-500 text-white py-2 rounded-md w-full sm:w-auto">
      Next
    </button>
  </div>
</form>




//  return <form className="grid grid-cols-2">
//     {/* Form Fields */}
//     <div className="relative w-40 h-40">
//       {/* Hidden file input */}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//       />

//       {/* Square image box with preview */}
//       <div className="w-full h-full border border-dashed border-gray-300 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden">
//         {image ? (
//           // Show uploaded image
//           <img src={image} alt="Uploaded" className="object-cover w-full h-full" />
//         ) : (
//           // Placeholder text/icon when no image is uploaded
//           <span className="text-gray-400 text-sm">+ Add image</span>
//         )}
//       </div>
//     </div>


//     <div>
//     <div>
//       <label className="text-left block text-sm font-medium text-gray-700">Product Type</label>
//       <select className="mt-1 block w-full border border-gray-300 rounded-md">
//         <option>Tracked</option>
//         {/* Other options */}
//       </select>
//     </div>
//     <div className="flex-row">
//     <div className="flex-1">
//       <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
//       <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
//     </div>
//     <div className="flex-1">
//       <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
//       <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
//     </div>
//     </div>
//     </div>



//     {/* Add other form fields similarly */}

//     <div>
//       <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
//       <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
//     </div>

//     <div>
//       <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
//       <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
//     </div>
    
//     <button type="submit" className="col-span-2 mt-4 bg-orange-500 text-white py-2 rounded-md">Next</button>
//   </form>
};

const AccountingDetailsForm = () => {

    return(
        <div className="flex flex-wrap gap-4">
<div className="flex gap-4">
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
      </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
    </div>
    

    <div className="w-full">
    <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
        </div>

        <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Name</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Watch" />
      </div>
      <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
    </div>

    <div className="w-full">
    <div className="flex-1">
        <label className="text-left block text-sm font-medium text-gray-700">Product Brand</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md" placeholder="Brand" />
      </div>
        </div>

        <div className="flex bg-gray">
    <div className="flex-1">
    <button type="submit" className="bg-orange-500 p-2 rounded-md w-full sm:w-auto">
      back
    </button>
      </div>
      <div className="flex-1">
      <button type="submit" className="bg-orange-500 p-2 rounded-md w-full sm:w-auto">
      Next
    </button>
      </div>
        </div>
            </div>
    )
}


export default AddProductModal;


// import { useState } from 'react';

// function AddProductModal() {
//   const [activeTab, setActiveTab] = useState('Product Details');

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold">Add Product</h2>
//         <div className="flex border-b border-gray-200 mt-4">
//           {['Product Details', 'Accounting', 'Bill Of Material'].map((tab) => (
//             <button
//               key={tab}
//               className={`py-2 px-4 text-sm font-medium focus:outline-none ${
//                 activeTab === tab ? 'border-orange-500 text-orange-500' : 'text-gray-500'
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {activeTab === 'Product Details' && (
//           <div className="mt-4 space-y-4">
//             {/* Product Type and Product Name */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Product Type</label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
//                   <option>Tracked</option>
//                   <option>Untracked</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Product Name</label>
//                 <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Titan TMN" />
//               </div>
//             </div>

//             {/* Brand and Category */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Brand</label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
//                   <option>Titan</option>
//                   <option>Casio</option>
//                   <option>Fossil</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category</label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
//                   <option>Fashion</option>
//                   <option>Electronics</option>
//                   <option>Accessories</option>
//                 </select>
//               </div>
//             </div>

//             {/* Sub Category and Unit */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Sub Category</label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
//                   <option>Watch</option>
//                   <option>Jewelry</option>
//                   <option>Apparel</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Unit</label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
//                   <option>Kg</option>
//                   <option>Pieces</option>
//                   <option>Liters</option>
//                 </select>
//               </div>
//             </div>

//             {/* Qty and Min Qty */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Qty</label>
//                 <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="15" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Min Qty</label>
//                 <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="5" />
//               </div>
//             </div>

//             {/* Barcode */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Barcode</label>
//               <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter barcode" />
//             </div>

//             <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg">
//               Next
//             </button>
//           </div>
//         )}

//         {/* You can implement similar layouts for Accounting and Bill Of Material tabs here */}
//       </div>
//     </div>
//   );
// }

// export default AddProductModal;
