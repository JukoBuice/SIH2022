// import axios from "axios";
import instance from "./config";
// import Cookies from "js-cookie";

const url = "https://krishi-sadhan-app.herokuapp.com";

export const getBooking = async ({ accessToken }) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await instance.get(`${url}/api/booking/`, { headers });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};