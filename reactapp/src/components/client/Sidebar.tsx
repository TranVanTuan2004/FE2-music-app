import { Link, useNavigate } from "react-router-dom";
import { Heart, Music, Plus, Search, X } from "lucide-react";
import { getAllArtistFavorite, getFavoriteListSong, toggleFollowArtist } from "../../services/UserService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";

const Sidebar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ['favorites'], queryFn: () => getAllArtistFavorite() })
  const { data: songsFavorite } = useQuery({ queryKey: ['favoriteSong'], queryFn: () => getFavoriteListSong() })
  const toggleFollow = async (e: any, id: number) => {
    e.stopPropagation();
    await toggleFollowArtist(Number(id));
    queryClient.invalidateQueries({ queryKey: ['favorites'] });
  }
  return (
    <div className="w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex overflow-y-auto no-scrollbar">
      <div className="bg-[#121212] h-[100%] rounded-lg p-3">
        <h2 className="text-xl font-semibold">Thư viện</h2>
        <div className="mt-3 group flex items-center gap-3 py-2 hover:bg-neutral-800 px-2 rounded cursor-pointer justify-between">
          <Link to={'/favorite'} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded">
              <Heart className="text-purple-500" />
            </div>
            <div>
              <p className="text-[15px] font-medium">Bài hát đã thích</p>
              <p className="text-[12px] text-gray-400">Danh sách phát · {songsFavorite?.favorites?.length} bài hát</p>
            </div>
          </Link>

          {/* Nút xoá hiện khi hover */}
          <button
            className="hidden group-hover:flex p-1 rounded hover:bg-red-500 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="scrollbar-thin scrollbar-thumb-gray-700 flex-1 mt-2 space-y-1">
          {data?.map((artist: any, index: number) => (
            <div
              onClick={() => navigate(`/artist/${artist.id}`)}
              key={index}
              className="group flex items-center gap-3 py-2 hover:bg-neutral-800   px-2 rounded cursor-pointer justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={`${BASE_URL}/storage/${artist.image}`} alt={artist.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-[15px] font-medium">{artist.name}</p>
                  <p className="text-xs text-gray-400">{artist.role === 'artist' ? 'Nghệ sĩ' : ''}</p>
                </div>
              </div>

              {/* Nút xoá hiện khi hover */}
              <button
                className="hidden group-hover:flex p-1 rounded hover:bg-red-500 hover:text-white"
              >
                <X onClick={(e) => toggleFollow(e, artist.id)} className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
