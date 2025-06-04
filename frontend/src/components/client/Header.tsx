import { AppBar, Toolbar, Typography } from "@mui/material";
import {
    Home,
    Bell,
    Download,
    Search,
} from "lucide-react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState<string>('');
    const navigate = useNavigate();

    const handleOnChange = (e: InputEvent | any) => {
        const keyword = e.target.value;
        setSearch(keyword);
        const params = createSearchParams({ keyword: keyword });
        navigate({ pathname: '/search', search: params.toString() });
        if (keyword === '') {
            navigate('/search');
        }
    }

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
                <Link to={'/'} className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700">
                    <Home size={20} />
                </Link>
                <div className="flex items-center bg-zinc-800 rounded-full px-4 py-[10px] w-[400px]">

                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        onChange={(e) => handleOnChange(e)} name="search" value={search}
                        placeholder="Bạn muốn phát nội dung gì?"
                        className="bg-transparent outline-none text-sm text-white px-2 w-full placeholder:text-gray-400"
                    />
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