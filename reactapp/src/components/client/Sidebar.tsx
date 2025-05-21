import { useNavigate } from "react-router-dom";
import { Heart, Music, Plus, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getFavorites } from "../../services/FavoriteService";

const Sidebar = () => {
  const items = [
    { name: "Bài hát đã thích", icon: <Heart className="text-purple-500" />, subtitle: "Danh sách phát · 39 bài hát" },
    { name: "50 bài hát hàng đầu tại Vi...", icon: <Music className="text-red-500" />, subtitle: "Danh sách phát · Spotify" },
    { name: "Quang Hùng MasterD", type: "Nghệ sĩ", image: "/quanghung.jpg" },
    { name: "Dương Domic", type: "Nghệ sĩ", image: "/duongdomic.jpg" },
    { name: 'ANH TRAI "SAY HI"', type: "Nghệ sĩ", image: "/sayhi.jpg" },
  ];


  const navigate = useNavigate();

  return (
    <div className="w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex overflow-y-auto no-scrollbar">
      <div className="bg-[#121212] h-[100%] rounded-lg p-3">
        <h2 className="text-xl font-semibold">Thư viện</h2>
        <div className="scrollbar-thin scrollbar-thumb-gray-700 flex-1 mt-2 space-y-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 py-2 hover:bg-neutral-800   px-2 rounded cursor-pointer justify-between"
            >
              <div className="flex items-center gap-3">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded">
                    {item.icon}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.subtitle || item.type}</p>
                </div>
              </div>

              {/* Nút xoá hiện khi hover */}
              <button
                className="hidden group-hover:flex p-1 rounded hover:bg-red-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
