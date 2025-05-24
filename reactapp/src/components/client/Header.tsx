import { AppBar, Toolbar, Typography } from "@mui/material";
import {
    Home,
    Bell,
    Download,
    Search,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Header() {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;

    return (
        <header className="w-full h-[10%] bg-black text-white px-10 py-2 grid grid-cols-3">
            <Link to={'/'} className="flex items-center gap-6">
                <img
                    src="../../../public/images/sportify.png"
                    alt="Spotify Logo"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </Link>
            <div className="flex gap-3 items-center justify-center">
                <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700">
                    <Home size={20} />
                </button>
                <div className="flex items-center bg-zinc-800 rounded-full px-4 py-1 w-[400px]">

                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Bạn muốn phát nội dung gì?"
                        className="bg-transparent outline-none text-sm text-white px-2 w-full placeholder:text-gray-400"
                    />
                    <button className="p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="text-gray-400"
                        >
                            <path d="M19.2929 4.70711L5.70711 18.2929L4.29289 16.8787L17.8787 3.29289L19.2929 4.70711Z" />
                        </svg>
                    </button>
                </div>
            </div>



            {/* Right: Buttons */}
            <div className="flex items-center justify-end gap-4 text-sm font-medium text-gray-300">
                <button className="flex items-center gap-1 hover:text-white">
                    <Download size={16} /> Cài đặt Ứng dụng
                </button>
                <button className="hover:text-white">
                    <Bell size={20} />
                </button>
                <UserMenu />
            </div>
        </header>
    );
}