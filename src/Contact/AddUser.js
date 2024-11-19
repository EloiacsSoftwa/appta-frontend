// import React from "react";


// function AddUser ({handleClose}) {

  
//     return(
//         <>
//          <div className="h-screen bg-white p-4 w-full">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
//         <p className="text-start font-semibold text-xl mb-2 md:mb-0">
//           Inventory - User List - <span className="text-orange-600">Add User</span>
//         </p>
//         <div className="flex gap-2">
//           <button
//             onClick={handleClose}
//             className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm hover:bg-orange-600 hover:text-black hover:border-black"
//           >
//             Cancel
//           </button>
//           <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
//             Save & Close
//           </button>
//         </div>
//       </div>

//       <div className="w-full rounded-xl shadow-custom mt-8 p-4 mb-4 h-4/5">
//         <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">User Details</p>
//         <div className="flex flex-wrap lg:flex-nowrap gap-4">
//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">First Name</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="Auto Generate"
//             />
//           </div>

//           <div className="w-full max-w-sm min-w-[200px] relative">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Last Name</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="Warehouse 01"
//             />

//           </div>

//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">User Name</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="Martin"
//             />
//           </div>

//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Password</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="Password"
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Phone Number</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="+91"
//             />
//           </div>

//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Email</label>
//             <input
//               type="text"
//               className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
//               placeholder="example@example.com"
//             />
//           </div>

//           <div className="w-full max-w-sm min-w-[200px]">
//             <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Manager</label>
//             <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
//               <option value="">Manager</option>
//               <option value=""> Sales Manager</option>
//               <option value="">Admin</option>
//             </select>
//           </div>
//         </div>

       

        

     
//       </div>

     
//     </div>
//         </>
//     )
// }
// export default AddUser;



import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


function AddUser({ handleClose }) {


  const dispatch = useDispatch();
  const state = useSelector(state => state);

  console.log("ADDUSERstate",state);
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    phoneNumber: "",
    email: "",
    manager: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.userName) newErrors.userName = "User Name is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.manager) newErrors.manager = "Manager selection is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({
        type: "ADDUSERLIST",
        payload: {
          id: 0, 
          firstName: formData.firstName,
          lastName: formData.lastName,
          userName: formData.userName,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          manager: formData.manager,
        },
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        phoneNumber: "",
        email: "",
        manager: "",
      });
      setErrors({});
      alert("User added successfully!");
    }
  };


  return (
    <div className="h-screen bg-white p-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Inventory - User List - <span className="text-orange-600">Add User</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm hover:bg-orange-600 hover:text-black hover:border-black"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm"
          >
            Save & Close
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full rounded-xl shadow-custom mt-8 p-4 mb-4 h-4/5">
        <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">User Details</p>
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Auto Generate"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Warehouse 01"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Martin"
            />
            {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="+91"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="example@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Manager
            </label>
            <select
              name="manager"
              value={formData.manager}
              onChange={handleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
            >
              <option value="">Manager</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Admin">Admin</option>
            </select>
            {errors.manager && <p className="text-red-500 text-xs mt-1">{errors.manager}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
