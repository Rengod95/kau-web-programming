import { createAsyncThunk } from "@reduxjs/toolkit";
import { isRejectedWithValue, thunkAPI } from "@reduxjs/toolkit";
import REQUESTER from "../../API/REQUESTER";

const loginAction = createAsyncThunk(
  "Auth/login",
  async (loginUser, thunkAPI) => {
    try {
      const res = await REQUESTER.signInUser(loginUser);
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default loginAction;
