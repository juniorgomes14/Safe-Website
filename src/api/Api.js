import axios from "axios";
const baseURL = "http://localhost:3001";
// const baseURL = "http://192.168.1.6:3001"

const API = axios.create({ baseURL: baseURL });
export default API;
export  async function parseAPIResponse(APIPromise) {
  try {
    const response = await APIPromise;
    const responseData = await response.data;
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}


