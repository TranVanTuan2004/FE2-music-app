import Dashboard from "../pages/admin/Dashboard";
import Song from "../pages/admin/song/Song";
import User from "../pages/admin/user/User";

const adminRoute = [
    {
        path: "/admin/dashboard", element: <Dashboard />
    },
    {
        path: "/admin/user/index", element: <User />
    },
    {
        path: "/admin/song/index", element: <Song />
    }
]

export default adminRoute