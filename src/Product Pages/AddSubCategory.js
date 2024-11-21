import React, { useState, useEffect } from 'react';
import Minus from '../Images/Sales/Minus.svg';
import { useDispatch, useSelector } from 'react-redux';




function AddSubCategory({ handleClose }) {

    const [SubCategoryName, setSubCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedParentCategory, setSelectedParentCategory] = useState('');
    const [subCategoryNameError, setSubCategoryNameError] = useState('')
    const [selectParentCategoryError, setSelectedParentCategoryError] = useState('')



    const dispatch = useDispatch();
    const state = useSelector(state => state);

    console.log("Add Subcategory state", state)

    
    useEffect(() => {
        dispatch({ type: 'GETCATEGORY' })
    }, [])

    const handleCategoryNameChange = (e) => {
        setSubCategoryName(e.target.value);
        setSubCategoryNameError('')
    };


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleParentCategoryChange = (e) => {
        setSelectedParentCategory(e.target.value);
        setSelectedParentCategoryError('')

    }


    const handleAddSubCategory = () => {
        console.log("SubCategoryName", SubCategoryName,selectedParentCategory )

        const ImageUrl = 'sample'
        
        if (!SubCategoryName) {
            setSubCategoryNameError('Please enter subcategory')

        }
        if (!selectedParentCategory) {
            setSelectedParentCategoryError('Please select subcategory')
        }


        if (SubCategoryName && selectedParentCategory) {
            dispatch({
                type: 'ADDSUBCATEGORY', payload:
                {
                    id: 0,
                    subCategoryName: SubCategoryName,
                    categoryId: selectedParentCategory,
                    imageUrl: ImageUrl,
                }
            })
        }
    }




    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-300 rounded-lg w-full max-w-xl p-8 mx-4 border border-orange-600">

                <div className="flex-1">
                    <div className="mb-4">
                        <label htmlFor="categoryName" className="block text-black font-semibold mb-1 font-Manrope text-sm">Sub Category Name</label>
                        <input
                            type="text"
                            id="categoryName"
                            required
                            value={SubCategoryName}
                            onChange={handleCategoryNameChange}
                            className=" placeholder-black font-normal text-base mt-1 block w-full border text-black font-Manrope rounded-md shadow-sm px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter sub category name"
                        />
                    </div>

                    {subCategoryNameError && <div className='mb-4'>
                        <label className='text-red-500 text-sm font-Manrope font-bold '>{subCategoryNameError}</label>
                    </div>}

                    <div className="mb-4 relative">
                        <label htmlFor="parentCategory" className="block text-black font-semibold mb-1 font-Manrope">
                            Parent Category
                        </label>
                        <div className="relative">
                            <select
                                id="parentCategory"
                                required
                                value={selectedParentCategory}
                                onChange={handleParentCategoryChange}
                                className="appearance-none font-normal text-sm  mt-1 block w-full border text-black font-Manrope rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="" disabled>Select a parent category</option>
                                {state.Product?.category?.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>





                    {selectParentCategoryError && <div>

                        <label className='text-red-500 text-sm font-Manrope font-bold'>{selectParentCategoryError}</label>

                    </div>}


                    {/* <div className="mb-4">
             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
               Description
             </label>
            <textarea
              id="description"
              rows="4"
               value={description}
              onChange={handleDescriptionChange}
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
                        <button onClick={handleAddSubCategory}
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

export default AddSubCategory;

