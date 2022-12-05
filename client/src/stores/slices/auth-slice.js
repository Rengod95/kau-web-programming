import { createSlice } from "@reduxjs/toolkit";
import registerAction from "../middlewares/registerAction";
import User from "../../CONSTANTS/models/User";
import loginAction from "../middlewares/loginAction";

const authInitialState = { user: new User(), toastMessage: undefined };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
    },
    changeToastMessage: (state, action) => {
      state.toastMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.rejected, (state, action) => {
      console.log("에러 로그 : ", action.payload);
      state.toastMessage = action.payload;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      console.log("에러 로그 : ", action.payload);
      state.toastMessage = String(action.payload);
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
  },
});

export const authReducer = AuthSlice.reducer;
export const authActions = AuthSlice.actions;
