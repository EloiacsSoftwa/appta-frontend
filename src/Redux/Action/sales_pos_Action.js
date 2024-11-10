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


export async function CompleteOrder(orderId, paymentType) {
  return await AxiosConfig.post('/order/completeOrder', null, {
    params: {
      orderId: orderId,
      paymentType: paymentType,
    },
  });
}

export async function getPaymentType() {
  return await AxiosConfig.post('/payments/getPayments', {
  })
}



