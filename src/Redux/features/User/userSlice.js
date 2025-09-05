import { createSlice } from "@reduxjs/toolkit";
import {
  Order,
  login,
  logout,
  signUp,
  resendOTP,
  verifyOTP,
  adminLogin,
  addAdopter,
  getAdopter,
  editProfile,
  setPassword,
  pauseResume,
  recentOrders,
  updateShelter,
  deleteShelter,
  dashboardCard,
  deleteAccount,
  changePassword,
  getUserProfile,
  forgetPassword,
  getGlobalRatio,
  getAllShelters,
  getAllAbopters,
  recentShelters,
  getOrdersHistory,
  getSingleAdopter,
  getAllAdopterGraph,
  updatedShelterData,
  deleteSubscription,
  getShopifyProducts,
  getShelterAdopters,
  getAllStateWiseData,
  adminShelterLimitPut,
  adminShelterLimitGet,
  updateShelterProfile,
  addShelterSubcription,
  getAllStatesForFilter,
  editShelterSubcription,
  adminGetPendingShelters,
  adminChangeShelterStatus,
  reminderEmailsPermission,
  getAdopterDetailsFromLink,
} from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    user: null,
    token: null,
    error: null,
    loading: "idle",
    recordsPerPage: 10,
  },
  reducers: {
    setRecordsPerPage: (state, action) => {
      state.recordsPerPage = action.payload;
    },
    customLogout: (state) => {
      state.user = null;
      state.token = null;
      state.recordsPerPage = 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(dashboardCard.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(dashboardCard.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(dashboardCard.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getSingleAdopter.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getSingleAdopter.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getSingleAdopter.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllShelters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllShelters.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAllShelters.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllAbopters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllAbopters.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAllAbopters.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllAdopterGraph.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllAdopterGraph.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAllAdopterGraph.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllStateWiseData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllStateWiseData.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAllStateWiseData.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(recentShelters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(recentShelters.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(recentShelters.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(adminShelterLimitPut.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(adminShelterLimitPut.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(adminShelterLimitPut.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(adminShelterLimitGet.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(adminShelterLimitGet.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(adminShelterLimitGet.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(adminGetPendingShelters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(adminGetPendingShelters.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(adminGetPendingShelters.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(adminChangeShelterStatus.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(adminChangeShelterStatus.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(adminChangeShelterStatus.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllStatesForFilter.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllStatesForFilter.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAllStatesForFilter.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAdopterDetailsFromLink.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAdopterDetailsFromLink.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getAdopterDetailsFromLink.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(updatedShelterData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updatedShelterData.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updatedShelterData.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getGlobalRatio.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getGlobalRatio.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getGlobalRatio.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (!action?.payload?.shelter?.firstLoginDone) {
          state.user = action.payload.shelter;
          state.token = action.payload.token;
        } else {
          state.email = action?.payload?.shelter?.email;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = "succeeded";
        state.notifications = [];
        state.user = null;
        state.shownAppModal = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = "failed";
        state.user = null;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(addAdopter.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addAdopter.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(addAdopter.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(signUp.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = "succeeded";
        // state.email = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(forgetPassword.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(forgetPassword.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(resendOTP.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(resendOTP.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(resendOTP.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getAdopter.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(getAdopter.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(getAdopter.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(verifyOTP.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(verifyOTP.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(deleteAccount.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.user = null;
        state.notifications = [];
        state.loading = "succeeded";
      })
      .addCase(deleteAccount.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(editProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data, role: state.user.role };
        state.loading = "succeeded";
      })
      .addCase(editProfile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(setPassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(setPassword.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (state.email !== "") {
          state.email = "";
          state.user = action?.payload?.data?.data?.user;
          state.token = action?.payload?.data?.data?.token;
        }
      })
      .addCase(setPassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateShelter.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateShelter.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(updateShelter.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data[0], tokens: state.user.tokens };
        state.loading = "succeeded";
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getShelterAdopters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getShelterAdopters.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getShelterAdopters.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateShelterProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateShelterProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload, role: state.user.role };
        state.loading = "succeeded";
      })
      .addCase(updateShelterProfile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(Order.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(Order.fulfilled, (state ) => {
        state.loading = "succeeded";
      })
      .addCase(Order.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteShelter.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteShelter.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(deleteShelter.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteSubscription.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteSubscription.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(deleteSubscription.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(addShelterSubcription.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addShelterSubcription.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(addShelterSubcription.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(editShelterSubcription.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(editShelterSubcription.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(editShelterSubcription.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(recentOrders.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(recentOrders.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(recentOrders.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getOrdersHistory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getOrdersHistory.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(getOrdersHistory.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(pauseResume.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(pauseResume.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(pauseResume.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(reminderEmailsPermission.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(reminderEmailsPermission.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action?.payload?.data?.data;
      })
      .addCase(reminderEmailsPermission.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getShopifyProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getShopifyProducts.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getShopifyProducts.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { customLogout, setRecordsPerPage } = userSlice.actions;

export default userSlice.reducer;
