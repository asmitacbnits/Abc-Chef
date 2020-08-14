import axios from "axios";
import { apiBaseUrl } from "./Helper/helpers";
import { toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuthToken } from "./Helper/helpers";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl + "/app/",
  headers: { Authorization: `Bearer ${getAuthToken}` },
});
export default axiosInstance; 
export const axiosApiCall = axios.create({
    baseURL: apiBaseUrl + "/app/",
});
export const callApiToken = (url, method, data) => {
  const dataObj = !data
    ? {}
    : {
        [["GET", "DELETE"].indexOf(method.toUpperCase()) !== -1
          ? "params"
          : "data"]: data,
      };
  //console.log("dataObj===>>>", dataObj);
  return new Promise((resolve, reject) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('access-token')}` };
    return axiosInstance({
      url,
      method: method.toUpperCase(),
      headers,
      ...dataObj,
    })
      .then((response) => {
       // console.log("callApi===>>>>", response);
        if (response.status === 200) {
          resolve(response.data.data);
          //alert(response.data.details);
          const details = response.data.details;
          toast.info(details, {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject();
        console.log(error);
      });
  });
};

