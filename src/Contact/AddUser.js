import React from "react";

function AddUser ({handleClose}) {
    return(
        <>
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
          <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-8 p-4 mb-4 h-4/5">
        <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">User Details</p>
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">First Name</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Auto Generate"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px] relative">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Last Name</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Warehouse 01"
            />

          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">User Name</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Martin"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Password</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Phone Number</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="+91"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Email</label>
            <input
              type="text"
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="example@example.com"
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Manager</label>
            <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
              <option value="">Manager</option>
              <option value=""> Sales Manager</option>
              <option value="">Admin</option>
            </select>
          </div>
        </div>

       

        

     
      </div>

     
    </div>
        </>
    )
}
export default AddUser