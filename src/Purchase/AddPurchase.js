import React, { useState } from "react";
import Rectangle from '../Images/Rectangle 52.svg';
import Add from '../Images/Vector (3).svg';
import dropdown from '../Images/Vector (4).svg';
import Dot from '../Images/Sales/Dots.svg';

function AddPurchase() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const tableData = [
    {
      Product: "Printer",
      Productcode: "HP48617O",
      HSNCode: "8945 6132",
      Quantity: "5 pcs",
      Price: "5,000",
      Discount: "200",
      TaxableAmount: '4,800',
      IGST: '5%',
      Taxamount: '400',
      Total: '25,000'
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Purchases - Purchase List - <span className="text-orange-600">Add Purchases</span>
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm">
            Cancel
          </button>
          <button className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm">
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-4 p-4 mb-4">
        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row justify-start p-2">
            <div className={`relative mb-4 md:mb-0 ${dropdownOpen ? 'sm:mb-32 md:mb-32' : ''}`}>
              <p className="font-bold text-lg text-orange-600 mb-4">Supplier Details</p>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-black bg-grey font-medium w-full md:w-56 sm:w-56 px-5 py-2 text-sm rounded-t-xl"
              >
                Supplier
                <img className="ml-28 md:ml-28 sm:ml-10" src={dropdown} />
              </button>
              {dropdownOpen && (
                <div className="absolute z-50 bg-light_gray divide-y divide-gray-100 shadow md:w-56 w-56 h-28 sm:w-56">
                  <ul className="py-2 text-sm text-black font-Manrope font-medium text-start">
                    <li>
                      <a href="#" className="block px-2 py-2">
                        24/D2 BALAN PERUMAL COMPOUND, Thattan Vilai Rd, Ramanputhur, KELLA, Nagercoil, Tamil Nadu 629002
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 md:ml-20 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Order Date <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm" placeholder="MM / DD / YYYY" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Invoice ID <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm" placeholder="P7895233" />
                </div>

                <div className="mt-6">
                  <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">Delivered Date <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm" placeholder="MM / DD / YYYY" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mt-12 sm:mr-44">
            <p className="font-bold text-lg text-orange-600 mr-4">Products</p>
            <img src={Rectangle} alt="Product icon" />
            <p className="font-semibold text-base ml-4">On Credit</p>
          </div>
          <div className="w-full md:w-auto mt-4">
            <label className="block font-normal mb-1 text-sm text-start font-SourceSansPro">Purchase ID</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm bg-Dim-red"
              placeholder="Auto Generate"
            />
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="table-auto w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 py-2 border font-Manrope font-semibold text-base">Product</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Product Code</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">HSN Code</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Quantity</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Price</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Discount</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Taxable Amount</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">CGST</th>
                <th className="px-2 py-2 border border-white font-Manrope font-semibold text-base">Tax Amount</th>
                <th className="px-2 py-2 border-white  border border-r-0 font-Manrope font-semibold text-base">Total</th>
                <th className="px-2 py-2 border-white  border border-l-0 border-white font-Manrope font-semibold text-base"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="px-2 py-2 border font-Manrope font-semibold text-base">{data.Product}</td>
                  <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.Productcode}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.HSNCode}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.Quantity}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.Price}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.Discount}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.TaxableAmount}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.IGST}</td>
      <td className="px-2 py-2 border border-white font-Manrope font-semibold text-base">{data.Taxamount}</td>
                  <td className="px-2 py-2 border-white  border border-r-0 font-Manrope font-semibold text-base">{data.Total}</td>
                  <td className="p-2 py-2 border-white  border border-l-0 text-gray-500 cursor-pointer w-8"><img src={Dot} alt="Options" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex mt-4">
          <img src={Add} alt="Add icon" />
          <p className="font-semibold text-sm ml-4">Add Products</p>
        </div>

        <div className="mt-4 border border-y-black w-full"></div>

        <div className="ml-4 mr-4">
          {[
            { label: "Sub-total", value: "0.00" },
            { label: "Discount (-)", value: "0.00" },
            { label: "+ Add Charges", value: "0.00" },
            { label: "Before- Tax", value: "0.00" },
            { label: "Tax (+) >", value: "0.00" },
            { label: "CGST", value: "0.00" },
            { label: "SGST", value: "0.00" },
            { label: "Rounding Off", value: "0.00" }
          ].map((item) => (
            <div key={item.label} className="flex justify-between mt-4">
              <p className="font-semibold text-sm">{item.label}</p>
              <p className="font-semibold text-sm">{item.value}</p>
            </div>
          ))}

          <div className="mt-4 border border-y-orange w-full"></div>

          <div className="flex justify-between mt-4">
            <p className="font-semibold text-lg">Total (INR)</p>
            <p className="font-semibold text-lg">0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPurchase;
