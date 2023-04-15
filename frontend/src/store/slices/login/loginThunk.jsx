import { createAsyncThunk } from "@reduxjs/toolkit";
import {loginUserApi} from "../../../api/forms/formsApi";

export const loginUserThunk = createAsyncThunk(
    'login/loginUser',
    async (loginData) => {
        const data = await loginUserApi(loginData)
        return data;
        }
    );