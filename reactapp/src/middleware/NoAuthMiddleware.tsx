import { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { fetchUser } from '../services/AuthService';
import { setAuthLogin } from '../redux/slice/authSlice';
import { RootState } from '../redux/store';


type ProtectedRouteProps = PropsWithChildren;
const NoAuthMiddleware = ({ children }: ProtectedRouteProps) => {
    const [checkedAuth, setCheckedAuth] = useState<Boolean>(false);
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    const checkAuthenticate = async () => {
        const userData = await fetchUser();
        if (userData !== null) {
            navigate('/admin/dashboard');
        } else {
            setCheckedAuth(true);
        }
    }
    useEffect(() => {
        if (!isAuthenticated || user === null) {
            checkAuthenticate();
        } else {
            navigate('/admin/dashboard');
        }
    }, [isAuthenticated, user, navigate])

    return checkedAuth ? children : null;
}

export default NoAuthMiddleware