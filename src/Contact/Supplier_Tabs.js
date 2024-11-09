// import React, { useState } from 'react';
// import NFlag from '../Images/Icons/NFlag.svg';

// const SupplierForm = () => {
//   const [activeTab, setActiveTab] = useState('Address');


//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
 

 


//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md w-full min-h-screen mx-auto mt-10">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <label className="font-semibold text-22 text-neutral-900 font-Manrope">Contacts - </label>
//           <label className="font-bold text-22 text-neutral-900 font-Manrope">Supplier - </label>
//           <label className="font-bold text-22 text-orange-600 font-Manrope">Add Supplier</label>
//         </div>
//         <div className="flex space-x-2">
//           <button className="bg-orange-600 text-black font-semibold py-1 px-3 rounded">Save</button>
//           <button className="bg-orange-600 text-black font-semibold py-1 px-3 rounded"
//            >Discard</button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-between border-b-2 border-gray-900 mb-4 px-6">
//         {['General Information', 'Address', 'Accounting'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={`px-4 py-2 font-medium ${
//               activeTab === tab
//                 ? 'text-orange-600 border-b-8 border-orange-600 rounded-l-lg rounded-r-lg'
//                 : 'text-neutral-900'
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {activeTab === 'General Information' && (
//         <div className="flex justify-center items-center">
//           <div className="w-full max-w-4xl min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Supplier Code</label>
//                 <input type="text" placeholder="Auto Generate" className="w-full w-60 p-2 border border-gray-300 rounded placeholder-black" />
//               </div>
//               <div className="grid grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">Name</label>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">Email</label>
//                   <input type="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">Alternative Email</label>
//                   <input type="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">Phone</label>
//                   <div className="flex items-center border border-gray-300 rounded">
//                     <span className="px-1 text-gray-700">+91</span>
//                     <span className="px-1">
//                       <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
//                     </span>
//                     <input type="text" placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0" />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Alternate Phone</label>
//                 <div className="flex items-center border border-gray-300 rounded">
//                   <span className="px-1 text-gray-700">+91</span>
//                   <span className="px-1">
//                     <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
//                   </span>
//                   <input type="text" placeholder="XXX XXX XXXX" className="w-60 p-2 placeholder-black border-l-0" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {activeTab === 'Address' && (
//         <div className="flex justify-center items-center">
//           <div className="w-full min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4 border-border-pink-300">
//             <div className="grid gap-8">
//               <div className="grid grid-cols-8">
//                 <div className='w-full'>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Contact Name<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Address 1<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Building no 15/82" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Address 2<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     City<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Nagercoil" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     State<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Tamil Nadu" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Country<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="India" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Postal Code<span className="text-red-600">*</span>
//                   </label>
//                   <div className="mt-1 relative">
//                     <input type="text" placeholder="629106" className="block w-full border border-gray-300 rounded-md p-2 pr-10 placeholder-black" />
//                     <select className="absolute inset-y-0 right-2 bg-transparent border-none text-gray-700 cursor-pointer focus:ring-0 focus:outline-none" defaultValue="">
//                       <option value="" disabled></option>
//                       <option value="Option1">Option1</option>
//                       <option value="Option2">Option2</option>
//                       <option value="Option3">Option3</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       )}

//       {activeTab === 'Accounting' && (
//         <div className="flex justify-center items-center">
//           <div className="w-full  min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
//             <div className="grid gap-4">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Bank Name<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Account Name<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Account Number<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="15/82/******" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     IFSC Code<span className="text-red-600">*</span>
//                   </label>
//                   <input type="text" placeholder="ABC012****" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SupplierForm;








import React, { useState } from 'react';
import NFlag from '../Images/Icons/NFlag.svg';

const SupplierForm = () => {
  const [activeTab, setActiveTab] = useState('Address');
  const [showForm, setShowForm] = useState(true); 
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDiscardClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = () => {
    
    console.log('Form saved');
  };

  if (!showForm) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full min-h-screen mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="font-semibold text-22 text-neutral-900 font-Manrope">Contacts - </label>
          <label className="font-bold text-22 text-neutral-900 font-Manrope">Supplier - </label>
          <label className="font-bold text-22 text-orange-600 font-Manrope">Add Supplier</label>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleSaveClick}
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded"
          >
            Save
          </button>
          <button
            onClick={handleDiscardClick}
            className="bg-orange-600 text-black font-semibold py-1 px-3 rounded"
          >
            Discard
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between border-b-2 border-gray-900 mb-4 px-6">
        {['General Information', 'Address', 'Accounting'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? 'text-orange-600 border-b-8 border-orange-600 rounded-l-lg rounded-r-lg'
                : 'text-neutral-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'General Information' && (
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Supplier Code</label>
                <input type="text" placeholder="Auto Generate" className="w-full w-60 p-2 border border-gray-300 rounded placeholder-black" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input type="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Alternative Email</label>
                  <input type="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded placeholder-black" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0" />
                  </div>
                </div>
              </div>
              <div>
                  <label className="block text-gray-700 font-medium mb-1">Alternate Phone</label>
                  <div className="flex items-center border border-gray-300 rounded w-60">
                    <span className="px-1 text-gray-700">+91</span>
                    <span className="px-1">
                      <img src={NFlag} alt="Indian Flag" className="w-6 h-6" />
                    </span>
                    <input type="text" placeholder="XXX XXX XXXX" className="w-full p-2 placeholder-black border-l-0" />
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Address' && (
        <div className="flex justify-center items-center">
          <div className="w-full min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4 border-border-pink-300">
            <div className="grid gap-8">
              <div className="grid grid-cols-4">
                <div className='w-full'>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address 1<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Building no 15/82" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address 2<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Nagercoil" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Tamil Nadu" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="India" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Postal Code<span className="text-red-600">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <input type="text" placeholder="629106" className="block w-full border border-gray-300 rounded-md p-2 pr-10 placeholder-black" />
                    <select className="absolute inset-y-0 right-2 bg-transparent border-none text-gray-700 cursor-pointer focus:ring-0 focus:outline-none" defaultValue="">
                      <option value="" disabled></option>
                      <option value="Option1">Option1</option>
                      <option value="Option2">Option2</option>
                      <option value="Option3">Option3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{activeTab === 'Accounting' && (
        <div className="flex justify-center items-center">
          <div className="w-full  min-h-[80vh] bg-white rounded-lg shadow-xl p-6 m-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bank Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Arul" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Name<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Simon Nagar" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Number<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="15/82/******" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    IFSC Code<span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="ABC012****" className="mt-1 block w-full border border-gray-300 rounded-md p-2 placeholder-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SupplierForm;


