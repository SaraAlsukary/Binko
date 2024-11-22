import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from '../../../utils/axiosErrorHandler';
import { useNavigate } from "react-router-dom";
type TFormData = {
    name: string;
    username: string;
    password: string;
    confirm_password: string;
};
const actCreateAccount = createAsyncThunk(
    "auth/actCreateAccount",
    async (formData: TFormData, thunk) => {
        const { rejectWithValue } = thunk;

        try {
            const res = await axios.post("create-user/", formData);
            if (res.data) {
                const navigate = useNavigate();
                navigate('/Binko/')
            }
            return res.data;


        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actCreateAccount;