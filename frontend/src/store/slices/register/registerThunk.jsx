import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "../../../api/forms/formsApi";

export const registerUserThunk = createAsyncThunk(
    'registration/registerUser',
    async (registerData) => {
      const data = await registerUserApi(registerData)
      return data;
    }
  );