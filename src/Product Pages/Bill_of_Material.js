import React, { useState } from 'react';
import Vector from '../Images/Icons/Vector.svg';
import Delete from '../Images/Icons/Delete.svg';

function BillMaterial() {

  const [components, setComponents] = useState([
    { productName: 'Computer', quantity: '10pcs' }
  
  ]);

  const [additionalCosts, setAdditionalCosts] = useState([
    { costName: 'Assemble', subtotal: '₹ 11,000' },
  ]);

  
  const addComponent = () => {
    setComponents([...components, { productName: '', quantity: '' }]);
  };


  const deleteComponent = (index) => {
    setComponents(components.filter((_, i) => i !== index));
  };

 
  const addAdditionalCost = () => {
    setAdditionalCosts([...additionalCosts, { costName: '', subtotal: '' }]);
  };

  const deleteAdditionalCost = (index) => {
    setAdditionalCosts(additionalCosts.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-y-auto border border-orange-500">
      
      <div className='p-6'>
        <div className="my-4">
          <h3 className="text-lg font-semibold font-Manrope text-orange-500">Component</h3>
          <table className="w-full mt-3 border-none lg:w-96">
            <thead>
              <tr className="bg-zinc-300 font-Manrope text-base font-bold">
                <th className="text-left px-5 border-r-2 border-white ">Product Name</th>
                <th className="p-2 text-left px-5">Qty</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index} className="border-none">
                  <td className="">
                    <input
                      type="text"
                      value={component.productName}
                      placeholder="Enter product name"
                      className="border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => {
                        const newComponents = [...components];
                        newComponents[index].productName = e.target.value;
                        setComponents(newComponents);
                      }}
                    />
                  </td>
                  <td className="">
                    <input
                      type="text"
                      value={component.quantity}
                      placeholder="Enter quantity"
                      className="border w-full border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => {
                        const newComponents = [...components];
                        newComponents[index].quantity = e.target.value;
                        setComponents(newComponents);
                      }}
                    />
                  </td>
                  <td className="text-center">
                    <button onClick={() => deleteComponent(index)} className="text-red-500 hover:text-red-700">
                     <img src={Delete} className="w-7 h-7 ml-1"></img>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div onClick={addComponent} className="text-blue-500 hover:text-blue-700 mt-4 flex items-center">
            <span className=""><img src={Vector}className="w-4 h-4 ml-1"></img></span> 
            <span className="ml-3 font-Manrope font-semibold text-sm text-neutral-900">Add a component product</span>
          </div>
        </div>

      
        <div className="my-4">
          <h3 className="text-lg font-semibold text-orange-500">Additional Cost</h3>
          <table className="w-full mt-2 border-none lg:w-96">
            <thead>
              <tr className="bg-zinc-300 bg-zinc-300 font-Manrope text-base font-bold">
                <th className="text-left px-5 border-r-2 border-white">Cost Name</th>
                <th className="p-2 text-left px-5">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {additionalCosts.map((cost, index) => (
                <tr key={index} className="border-none">
                  <td className="">
                    <input
                      type="text"
                      value={cost.costName}
                      placeholder="Enter cost name"
                      className=" border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => {
                        const newCosts = [...additionalCosts];
                        newCosts[index].costName = e.target.value;
                        setAdditionalCosts(newCosts);
                      }}
                    />
                  </td>
                  <td className="">
                    <input
                      type="text"
                      value={cost.subtotal}
                      placeholder="Enter subtotal"
                      className="border-none w-full bg-zinc-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => {
                        const newCosts = [...additionalCosts];
                        newCosts[index].subtotal = e.target.value;
                        setAdditionalCosts(newCosts);
                      }}
                    />
                  </td>
                  <td className=" text-center">
                    <button onClick={() => deleteAdditionalCost(index)} className="text-red-500 hover:text-red-700">
                    <img src={Delete}className="w-7 h-7 ml-1"></img>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div onClick={addAdditionalCost} className="text-blue-500 hover:text-blue-700 mt-4 flex items-center">
            <span className=""><img src={Vector}className="w-4 h-4 ml-1"></img></span> 
            <span className="ml-1 font-Manrope font-semibold text-sm text-neutral-900 ">Add an additional cost</span>
          </div>
          
        </div>

        </div>

      
        <div className="flex justify-end mt-4 pr-4 space-x-4 bg-zinc-300 py-2">
          <button className="bg-orange-500 hover:bg-gray-400 text-black font-semibold py-1 px-4 rounded">Back</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-1 px-4 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default BillMaterial;
