import { Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../configs/axios";
import { IUser } from "../interfaces/IUser";
import { Inputs } from "../pages/auth/Register";
import { toast } from "react-toastify";

type loginPayload = {
    email: string,
    password: string
}
const login = async (payload: loginPayload): Promise<IUser | null> => {
    try {
        const response = await axiosInstance.post('auth/login', {
            'email': payload.email,
            'password': payload.password
        });
        return response.data.user;
    } catch (error) {
        return null;
    }
}

const logout = async () => {
    try {
        const response = await axiosInstance.post('auth/logout');
        return response.data;
    } catch (error) {
        return null;
    }
}

const registerUser = async (payload: Inputs) => {
    try {
        const response = await axiosInstance.post('auth/register', {
            'email': payload.email,
            'name': payload.name,
            'password': payload.password,
            'password_confirmation': payload.password_confirmation
        });
        return response.data;
    } catch (error: any) {
        if (error.response?.status == 422) {
            toast.error('Email đã sử dụng');
            return;
        }
    }
}

const fetchUser = async (): Promise<IUser | null> => {
    try {
        const response = await axiosInstance.get('auth/me');
        return response.data.user;
    } catch (error) {
        return null;
    }
}




export { login, fetchUser, logout, registerUser };