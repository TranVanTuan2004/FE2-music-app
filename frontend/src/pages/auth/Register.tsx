import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../components/ui/button';
import { Loader2 } from 'lucide-react';
import { registerUser } from '../../services/AuthService';


export type Inputs = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
};

const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<Inputs>();

    const signupHandler: SubmitHandler<Inputs> = async (payload) => {
        setLoading(true);
        const data = await registerUser(payload);
        if (data) {
            toast.success('Đăng ký thành công, vui lòng đăng nhập!');
            navigate('/auth/login');
        }
        setLoading(false);

    };

    return (
        <div className="background min-h-screen flex items-center justify-center bg-gray-100">
            <div className="login-container p-8 rounded-lg shadow-md w-full max-w-md">
                <img
                    src="/public/images/Spotify_logo_with_text.svg"
                    alt="Spotify Logo"
                    className="logo mx-auto mb-6"
                />
                <h1 className="text-center text-2xl font-bold mb-6">Đăng ký Spotify</h1>

                <form className="login-form space-y-4" onSubmit={handleSubmit(signupHandler)}>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Email là bắt buộc.</p>}
                    </div>

                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Tên người dùng</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            placeholder="Tên người dùng"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Tên người dùng là bắt buộc.</p>}
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

                    <div>
                        <label htmlFor="password_confirmation" className="block mb-1 font-medium">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            {...register('password_confirmation', {
                                required: true,
                                validate: value => value === watch('password') || 'Mật khẩu không khớp',
                            })}
                            placeholder="Xác nhận mật khẩu"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                        )}
                    </div>

                    <Button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        {loading ? <Loader2 className="animate-spin mr-2 inline-block" /> : 'Đăng ký'}
                    </Button>

                    <div className="text-sm text-center">
                        <span className='text-white'>Đã có tài khoản?</span> <Link to={'/auth/login'} className="text-blue-500 hover:underline">Đăng nhập</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
