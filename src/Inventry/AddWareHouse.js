import React, { useState, useRef } from "react";
import Dot from '../Images/Sales/Dots.svg';
import Add from '../Images/Vector (3).svg';
import DateIcon from '../Images/Sales/Vector (5).svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddWareHouse({ handleClose }) {

    const [orderDate, setOrderDate] = useState(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const datePickerRef = useRef(null);

    const handleOrderDateChange = (date) => {
        setOrderDate(date);
        setIsDatePickerOpen(false);

    };

    const handleIconClickForOrder = () => {
        setIsDatePickerOpen((prev) => !prev);
    };

    return (
        <div className="h-screen bg-white p-4 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">


                
                {/* <p className="text-start font-semibold text-xl mb-2 md:mb-0">
                    Inventory - Warehouse - <span className="text-orange-600">Add Ware house</span>
                </p> */}
                {/* <div className="flex gap-2">
                    <button
                        onClick={handleClose}
                        className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm hover:bg-orange-600 hover:text-black hover:border-black"
                    >
                        Cancel
                    </button>
                    <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
                        Save & Close
                    </button>
                </div> */}
            </div>

            <div className="w-full rounded-xl shadow-custom p-4 mb-4">
                <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">Adjustment Details</p>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Ware House ID</label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder="Auto Generate"
                        />
                    </div>



                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Ware House Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder="Warehouse 01"
                        />
                    </div>

                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Manager</label>
                        <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
                            <option value="">Select </option>

                        </select>
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Type</label>
                        <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
                            <option value="">Select a type</option>

                        </select>
                    </div>
                </div>




                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Address 1
                        </label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder=""
                        />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Address 2
                        </label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder=""
                        />
                    </div>


                </div>


                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Street Address
                        </label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder=""
                        />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">City</label>
                        <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
                            <option value="">Select a City</option>
                            <option value="">Chennai</option>
                        </select>
                    </div>


                </div>


                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">State</label>
                        <select className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm">
                            <option value="">Select a State</option>
                            <option value="">Tamil Nadu</option>
                        </select>
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Pincode</label>
                        <input
                            type="text"
                            className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
                            placeholder=""
                        />
                    </div>


                </div>



                <div class="flex flex-wrap gap-4 mt-8">
  <div class="w-full max-w-sm min-w-[200px]">
    <label class="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Phone</label>

    <div class="relative mt-2">

      <div class="absolute top-2 left-0 flex items-center pl-3">
        <select class="w-full min-w-[90px]  rounded-l text-sm text-slate-700 bg-white focus:outline-none">
        <option value="+91">India (+91)</option>
          <option value="+33">France (+33)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+34">Spain (+34)</option>
          <option value="+1">USA (+1)</option>
        
        </select>

        <div class="h-6 border-l border-slate-200 ml-2"></div>
      </div>

    
      <input
        type="tel"
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#BDBDBD] rounded-r pr-3 pl-28 py-2 transition duration-300 ease focus:border-orange-600"
        placeholder="324-456-2323"
        pattern="[0-9]*"
        inputmode="numeric"
        maxlength="10"
        id="phoneNumberInput"
      />
    </div>
  </div>
</div>
















            </div>


        </div>
    );
}

export default AddWareHouse;
