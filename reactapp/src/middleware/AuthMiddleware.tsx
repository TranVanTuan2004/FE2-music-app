import { PropsWithChildren, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setAuthLogin } from "../redux/slice/authSlice";
import { fetchUser } from "../services/AuthService";

type ProtectedRouteProps = PropsWithChildren
const AuthMiddleware = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    const fetchUserData = async () => {
        if (!isAuthenticated || user === null) {
            const userData = await fetchUser();
            if (userData) {
                dispatch(setAuthLogin(userData));
            } else {
                navigate('/login');
            }
        }
    }
    useEffect(() => {
        fetchUserData();
    }, [isAuthenticated, user, navigate])

    // nếu nó đúng thì return về children nếu k đúng thì sẽ k return về layout
    // dùng lệnh này để tránh render nội dung trang
    return isAuthenticated && user ? children : null;
    // return children;
}

export default AuthMiddleware