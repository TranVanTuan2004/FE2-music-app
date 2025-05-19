import React, { useEffect, useState } from 'react'
import { set, SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, UseDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { Loader2 } from "lucide-react"
import { Dispatch } from '@reduxjs/toolkit';
import { setAuthLogin } from '../../redux/slice/authSlice';


type Inputs = {
    email: string;
    password: string;
};
const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch: Dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        setLoading(true)
        const auth = await login(payload);
        if (auth) {
            dispatch(setAuthLogin(auth));
            if (auth.role === "admin") {
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 1000)
            } else {
                setTimeout(() => {
                    navigate('/');
                }, 1000)
            }
            toast.success('Welcome ' + payload.email);
        } else {
            setTimeout(() => {
                navigate('/login');
                setLoading(false);
                toast.error('Tài khoản hoặc mật khẩu không chính xác');
            }, 1000)
        }

    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg flex w-full max-w-5xl">
                {/* Left Content */}
                <div className="w-1/2 pr-8">
                    <h1 className="text-2xl font-bold text-gray-500 mb-4">
                        Welcome to HT Version 1.0.0+
                    </h1>
                    <p className="text-gray-600 mb-3">
                        Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                    </p>
                    <p className="text-gray-600 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className="text-gray-600">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Login Form */}
                <div className="w-1/2 bg-white p-6 rounded-lg shadow">
                    <form onSubmit={handleSubmit(loginHandler)} className="space-y-4">
                        <input
                            {...register('email', { required: true })}
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && <p className='text-red-600'>Email is required.</p>}
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            name='password'
                            placeholder="Mật khẩu"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.password && <p className='text-red-600'>Password is required.</p>}
                        <Button type="submit" disabled={loading}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            {loading ? <Loader2 className="animate-spin" /> : null}
                            {loading ? "Đang xử lý..." : "Đăng nhập"}
                        </Button>
                        <div className="text-sm text-blue-500 hover:underline cursor-pointer mt-2">
                            Quên mật khẩu
                        </div>
                        <p className="text-sm text-gray-500">
                            Chào mừng bạn đến với hệ thống bất động sản version 1.0 của HT
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
