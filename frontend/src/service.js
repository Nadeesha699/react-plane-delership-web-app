import axios from "axios";

export const getLoginEmployee = async (email, password) => {
  try {
    const resp = await axios.get(
      `http://localhost:1000/delership/api/employees?email=${email}&passWord=${password}`
    );
    return resp.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const setNewCustomer = async (data) => {
  try {
    const resp = await axios.post(
      `http://localhost:1000/delership/api/customers`,
      data
    );
    return resp.data.content;
  } catch (e) {
    console.log("Error", e);
  }
};

export const setInvoices = async (data) => {
  try {
    const resp = await axios.post(
      "http://localhost:1000/delership/api/salesOrder",
      data
    );
    console.log(resp.data);
  } catch (e) {
    console.log("Error", e);
  }
};

export const getAllCustomers = async () => {
  try {
    const resp = axios.get("http://localhost:1000/delership/api/customers");
    return (await resp).data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const setNewEmployee = async (data1) => {
  try {
    const resp = await axios.post(
      `http://localhost:1000/delership/api/employees`,
      data1
    );
    return resp.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const setNewPlane = async (data) => {
  try {
    const resp = await axios.post(
      `http://localhost:1000/delership/api/planes`,
      data
    );
    return resp.data;
  } catch (e) {
    console.log("Error", e);
  }
};
