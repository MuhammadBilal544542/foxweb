import Toaster from "../../../Share/Toaster";
import axiosInstance from "../../interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "signUp",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "verifyOTP",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
export const resendOTP = createAsyncThunk(
  "resendOTP",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteSubscription = createAsyncThunk(
  "deleteSubscription",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "getUserProfile",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getAdopter = createAsyncThunk(
  "getAdopter",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin Login
export const adminLogin = createAsyncThunk(
  "adminLogin",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

// Admin dashboard data
export const dashboardCard = createAsyncThunk(
  "dashboardCard",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getSingleAdopter = createAsyncThunk(
  "getSingleAdopter",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getShelterAdopters = createAsyncThunk(
  "getShelterAdopters",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
//  Admin, get all shelters
export const getAllShelters = createAsyncThunk(
  "getAllShelters",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

//  Admin, get all shelters
export const deleteShelter = createAsyncThunk(
  "deleteShelter",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const setPassword = createAsyncThunk(
  "setPassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
export const updateShelter = createAsyncThunk(
  "updateShelter",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin, get all abopters of any shelter
export const getAllAbopters = createAsyncThunk(
  "getAllAbopters",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin, get all abopters graph
export const getAllAdopterGraph = createAsyncThunk(
  "getAllAdopterGraph",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin, get all state wise graph data
export const getAllStateWiseData = createAsyncThunk(
  "getAllStateWiseData",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin, get recent 5 shelters
export const recentShelters = createAsyncThunk(
  "recentShelters",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin shelter limit PUT
export const adminShelterLimitPut = createAsyncThunk(
  "adminShelterLimitPut",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

// Admin, get recent 5 shelters
export const adminShelterLimitGet = createAsyncThunk(
  "adminShelterLimitGet",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const addAdopter = createAsyncThunk(
  "addAdopter",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      Toaster.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const updateShelterProfile = createAsyncThunk(
  "updateShelterProfile",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data?.updatedShelter;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const Order = createAsyncThunk(
  "Order",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// admin get all pending shelters
export const adminGetPendingShelters = createAsyncThunk(
  "adminGetPendingShelters",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

// Admin chagne shelter status
export const adminChangeShelterStatus = createAsyncThunk(
  "adminChangeShelterStatus",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      Toaster.success(response.data.message);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllStatesForFilter = createAsyncThunk(
  "getAllStatesForFilter",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getAdopterDetailsFromLink = createAsyncThunk(
  "getAdopterDetailsFromLink",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const updatedShelterData = createAsyncThunk(
  "updatedShelterData",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
    } catch (error) {
      Toaster.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getGlobalRatio = createAsyncThunk(
  "getGlobalRatio",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const addShelterSubcription = createAsyncThunk(
  "addShelterSubcription",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const editShelterSubcription = createAsyncThunk(
  "editShelterSubcription",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const recentOrders = createAsyncThunk(
  "recentOrders",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
export const getOrdersHistory = createAsyncThunk(
  "getOrdersHistory",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const pauseResume = createAsyncThunk(
  "pauseResume",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const reminderEmailsPermission = createAsyncThunk(
  "reminderEmailsPermission",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getShopifyProducts = createAsyncThunk(
  "getShopifyProducts",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);




// ---------------------------FOX WEB API's start ---------------------------

// Number Verification
export const numberVerification = createAsyncThunk(
  "numberVerification",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

// --------------------OTP Verification--------------------
export const otpVerification = createAsyncThunk(
  "otpVerification",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
)
// --------------------Set New Password--------------------
export const setNewPassword = createAsyncThunk(
  "setNewPassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);


// Get Country  Code Number Verification
export const getCountryCode = createAsyncThunk(
  "getCountryCode",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);


// SigUp Profile
export const sigUpProfile = createAsyncThunk(
  "sigUpProfile",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);