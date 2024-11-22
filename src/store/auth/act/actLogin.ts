import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TFormData = {
    username: string;
    password: string;
};

type TResponse = {
    user: {
        name: string;
        username: string;
        password: string;
    };
    accessToken: string;
};

const actLogin = createAsyncThunk(
    "auth/actLogin",
    async (formData: TFormData, thunk) => {
        const { rejectWithValue } = thunk;

        try {
            const res = await axios.post<TResponse>("login/", formData);
            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actLogin;
