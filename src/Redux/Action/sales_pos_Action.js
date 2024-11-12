import AxiosConfig from "../../WebService/AxiosConfig";



export async function PosGetbyBarcode(barcode) {
  try {
    const response = await AxiosConfig.post("/products/getProductByBarcode", {}, {
      params: {
        barcode: barcode,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product by barcode:", error);
    return null;
  }
}


export async function CreateOrder() {
  return await AxiosConfig.post('/order/createOrder', {
  })
}

export const addOrderItemsApiCall = async (product) => {
    return await AxiosConfig.post('order/addOrderItem', product)
}




export async function getPaymentType() {
  return await AxiosConfig.post('/payments/getPaymentTypes', {
  })
}

export async function DeletePosProduct(products) {
  return await AxiosConfig.post('/order/deleteOrderItems', products);
}

export async function Holdorder({ orderId }) { 
  try {
    return await AxiosConfig.post('/order/holdOrder', null, {
      params: { orderId }, 
    });
  } catch (error) {
    console.error("Network error:", error.response || error.message);
    throw error;
  }
}


export async function InitializePayment({ orderId }) { 
  try {
    return await AxiosConfig.post('/order/initializePayments', null, {
      params: { orderId }, 
    });
  } catch (error) {
    console.error("Network error:", error.response || error.message);
    throw error;
  }
}

export async function CompleteOrder({ orderId, paymentType }) { 
  try {
    return await AxiosConfig.post('/order/completeOrder', null, {
      params: { 
        orderId, 
        paymentType 
      }, 
    });
  } catch (error) {
    console.error("Network error:", error.response || error.message);
    throw error;
  }
}


