import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddBrandList({ handleClose }) {
    const [brandName, setBrandName] = useState('');
    const [description, setDescription] = useState('');
    const [brandNameError, setBrandNameError] = useState('');

    const dispatch = useDispatch();



const handleBrandName = (e) =>{

    const value = e.target.value;
setBrandName(value)
setBrandNameError('')
}





    const handleAddBrand = () => {
        if (!brandName) {
            setBrandNameError('Please enter Brand Name');
            return;
        }
        dispatch({
            type: 'ADDBRAND',
            payload: {
                id: 0,
                brandName:brandName,
                imageUrl: 'sample',
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-300 rounded-lg w-2/6 p-6 mx-4 border border-orange-600">
                <div>
                    <div className="mb-4">
                        <label className="block font-sans text-sm font-semibold mb-1 font-Manrope">Brand Name</label>
                        <input
                            type="text"
                            value={brandName}
                            onChange={(e) => handleBrandName(e)} 
                            className="mt-1 block w-full rounded border text-black text-xs font-Manrope border-neutral-400 shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Aasirvaad"
                        />
                        {brandNameError && (
                            <div className="text-red-600 text-sm font-Manrope font-bold mt-2 mb-2">{brandNameError}</div>
                        )}
                    </div>

                    {/* <div className="mb-4">
                        <label className="block font-manrope text-xs font-semibold text-left">Description</label>
                        <textarea
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full border rounded-md shadow-sm border-neutral-400 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder=""
                        ></textarea>
                    </div> */}

                    <div className="flex justify-center gap-3 mt-6">
                        <button
                            type="button"
                            className="px-4 py-1 bg-zinc-300 text-orange-600 border border-orange-600 font-Manrope font-semibold text-sm"
                            onClick={handleClose}
                        >
                            Discard
                        </button>
                        <button
                            type="button"
                            onClick={handleAddBrand}
                            className="flex items-center font-Manrope justify-center px-4 py-1 bg-orange-600 text-black hover:bg-orange-700 border border-black font-semibold text-sm"
                        >
                            Save & Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBrandList;