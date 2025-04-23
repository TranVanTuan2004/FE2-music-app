import Dashboard from "../pages/admin/Dashboard";
import User from "../pages/admin/user/User";

const adminRoute = [
    {
        path: "/admin/dashboard", element: <Dashboard />
    },
    {
        path: "/admin/user/index", element: <User />
    }
]

export default adminRoute