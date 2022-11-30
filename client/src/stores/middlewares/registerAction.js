import { createAsyncThunk } from "@reduxjs/toolkit";
import REQUESTER from "../../API/REQUESTER";

const registerAction = createAsyncThunk(
  "Auth/register",
  async (user, thunkAPI) => {
    try {
      const res = await REQUESTER.signUpUser(user);
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default registerAction;
