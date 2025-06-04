import { PropsWithChildren, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setAuthLogin } from "../redux/slice/authSlice";
import { fetchUser } from "../services/AuthService";

type ProtectedRouteProps = PropsWithChildren
const AuthMiddleware = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    const fetchUserData = async () => {
        if (!isAuthenticated || user === null) {
            const userData = await fetchUser();
            if (userData) {
                dispatch(setAuthLogin(userData));
                // Check role sau khi fetch
                if (userData.role !== 'admin') navigate('/');
            } else {
                navigate('/login');
            }
        } else {
            // Nếu đã login rồi nhưng không phải admin
            if (user.role !== 'admin') navigate('/');
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [isAuthenticated, user]);

    return isAuthenticated && user?.role === 'admin' ? children : null;
};

export default AuthMiddleware;