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
  
