import React, {useState} from "react";
import { Trash } from "iconsax-react";

const TableItems = (props) => {

    const [purchasePrice, setPurchasePrice] = useState(props.product.PurchasePrice)
    const [quantity, setQuantity] = useState(props.product.quantity)
    const [mrp, setMrp] = useState(props.product.MRP)
    const [expectedPrice, setExpectedPrice] = useState(props.product.expectedPrice)
    const [salesPercentage, setSalesPercentage] = useState(props.product.SalesPercentage)
    const [salesPrice, setSalesPrice] = useState(props.product.SalesPrice)
    const [wholesalePercentage, setWholesalepercentage] = useState(props.product.WholeSalePercentage)
    const [whholesalePrice, setWholesalePrice] = useState(props.product.WholeSalePrice)

    const updatePurchasePrice = (value) => {
        console.log(props.product.productID)
        setPurchasePrice(value)
        props.purchasePrice(Number(value), props.product.productID)

        const expPrice = Number(value)/(props.product.noOfItemsPerunit * quantity)
        setExpectedPrice(expPrice)
    }

    const updateBagChain = (value) => {
        setQuantity(value)
        props.handleQuantityChange(Number(value), props.product.productId)

        const expPrice = Number(purchasePrice)/(props.product.noOfItemsPerunit * value)
        setExpectedPrice(expPrice)
    }

    const updateMRP = (value) => {
        setMrp(value)
        props.mrpChanges(Number(value), props.product.productId)
    }

    const updateSalesPercentage = (value) => {
        setSalesPercentage(value)

        const calculatedPrice = ((Number(value)/100) * expectedPrice) + expectedPrice
        setSalesPrice(calculatedPrice)

        props.percentageChange(value, props.product.productId, 'retail')
    }

    const updateSalesPrice = (value) => {
        setSalesPrice(value)

        const calculatedPercentage = ((Number(value) - expectedPrice)/expectedPrice)*100
        setSalesPercentage(calculatedPercentage)

        props.priceChange(value, props.product.productId, 'retail')
    }

    const updateWholesalePercentage = (value) => {
        setWholesalepercentage(value)

        const calculatedPrice = ((Number(value)/100) * expectedPrice) + expectedPrice
        setWholesalePrice(calculatedPrice)
        props.percentageChange(value, props.product.productId, 'wholesale')
    }

    const updateWholesalePrice = (value) => {
        setWholesalePrice(value)

        const calculatedPercentage = ((Number(value) - expectedPrice)/expectedPrice)*100
        setWholesalepercentage(calculatedPercentage)

        props.priceChange(value, props.product.productId, 'wholesale')
    }

    return <tr key={props.index} className="bg-gray-100">
    <td className="p-2 border relative w-44">
      <input
        type="text"
        value={props.product.Product}
        onChange={(e) => {}}
        onClick={() =>{}}
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
      />
    </td>
    <td className="p-2 border w-1/12">
    <div className="flex flex-col">
    <input
        value={quantity}
        onChange={(e) => {updateBagChain(e.target.value)}}
        className={`border p-1  focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
      />
      <label className="text-xs">No of Items: {props.product.noOfItemsPerunit}</label>
    </div>
      
    </td>
    <td className="p-2 border w-2/12">
    <div className="flex flex-col">
    <input
        value={purchasePrice}
        onChange={(e) => {updatePurchasePrice(e.target.value)}}
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500`}
      />
      <label className="text-xs">price per item: {expectedPrice.toFixed(2)}</label>
    </div>
      

    </td>
    <td className="p-2 border w-1/12">
      <input
        type="number"
        value={mrp}
        onChange={(e) => {updateMRP(e.target.value)}}
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
        min="0"
      />
    </td>
    <td className="p-2 border w-1/12">
      <input
        type="number"
        value={salesPercentage}
        onClick={(e) => {}}
        onChange={(e) => {
            updateSalesPercentage(e.target.value)
          // handleInputChange(e, 'SalesPercentage', index)
        //   calculatePriceFromPercentage(e.target.value, index, 'retail')
        }}
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full 'border-red-500' : ''}`}
        min="0"
      // disabled={activeField[index] === 'SalesPrice'}
      />
    </td>

    <td className="p-2 border w-1/12">
      <input
        type="number"
        value={salesPrice}
        onClick={() => {}}
        onChange={(e) => { 
            updateSalesPrice(e.target.value)
          // handleInputChange(e, 'SalesPrice', index) 
        //   calculatePercentageFromPrice(e.target.value, index, 'retail')
        }}
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full border-red-500}`}
        min="0"
      // disabled={activeField[index] === 'SalesPercentage'}
      />

    </td>
    <td className="p-2 border w-1/12">
      <input
        type="number"
        value={wholesalePercentage}
        onChange={(e) => {
            updateWholesalePercentage(e.target.value)
        }
        }
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full border-red-500}`}
        min="0"
      />
    </td>
    <td className="p-2 border w-1/12">
      <input
        type="number"
        value={whholesalePrice}
        onChange={(e) => { 
            updateWholesalePrice(e.target.value)
       }
        }
        className={`border p-1 focus:border-gray-500 focus:outline-none rounded w-full border-red-500}`}
        min="0"
      />
    </td>
    {/* <td className="p-2 border w-1/12">
      <input
        type="number"
        disabled
        value={product.Total}
        className="border p-1  focus:border-gray-500 focus:outline-none rounded w-full"
      />
    </td> */}

    <td className="p-2  text-gray-500 cursor-pointer w-20"      >

      <div className="flex justify-center">


        <Trash
          size="32"
          color="#989c99"
          className="w-6 h-6 text-zinc-600 cursor-pointer" onClick={() => props.handleOpenDeleteModal(props.product.productID)}
        />

      </div>

    </td>


  </tr>
}

export default TableItems;