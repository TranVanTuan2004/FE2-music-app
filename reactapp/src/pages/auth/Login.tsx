import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAuthLogin } from '../../redux/slice/authSlice';
import { login } from '../../services/AuthService';
import { Button } from '../../components/ui/button';
import { Loader2 } from 'lucide-react';

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        setLoading(true);
        const auth = await login(payload);
        if (auth) {
            dispatch(setAuthLogin(auth));
            toast.success('Welcome ' + payload.email);
            setTimeout(() => {
                navigate(auth.role === 'admin' ? '/admin/dashboard' : '/');
            }, 1000);
        } else {
            setLoading(false);
            toast.error('Tài khoản hoặc mật khẩu không chính xác');
        }
    };

    return (
        <div className="background min-h-screen flex items-center justify-center bg-gray-100">
            <div className="login-container p-8 rounded-lg shadow-md w-full max-w-md">
                <img
                    src="/public/images/Spotify_logo_with_text.svg"
                    alt="Spotify Logo"
                    className="logo mx-auto mb-6"
                />
                <h1 className="text-center text-2xl font-bold mb-6">Đăng nhập vào Spotify</h1>

                <form className="login-form space-y-4" onSubmit={handleSubmit(loginHandler)}>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email hoặc tên người dùng</label>
                        <input
                            type="text"
                            id="email"
                            {...register('email', { required: true })}
                            placeholder="Email hoặc tên người dùng"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Email là bắt buộc.</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: true })}
                            placeholder="Mật khẩu"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">Mật khẩu là bắt buộc.</p>}
                    </div>

                    <Button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        {loading ? <Loader2 className="animate-spin mr-2 inline-block" /> : 'Đăng nhập'}
                    </Button>

                    <div className="text-sm text-center">
                        <a href="/fogot" className="text-blue-500 hover:underline">Quên mật khẩu của bạn?</a>
                    </div>

                    <div className="text-sm text-center">
                        Bạn chưa có tài khoản? <a href="/signup" className="text-blue-500 hover:underline">Đăng ký Spotify</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
