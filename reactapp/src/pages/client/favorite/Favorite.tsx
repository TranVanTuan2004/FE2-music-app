// SpotifyPlaylist.js
import React from "react";
import { useEffect, useState } from "react";
import { getFavorites } from "../../../services/FavoriteService";

const songs = [
    {
        title: "Intro",
        artists: "Obito, Shiki",
        album: "Đánh Đổi",
        date: "3 tuần trước",
        duration: "0:58",
    },
    {
        title: "Cho Ngày Không Còn Nhau",
        artists: "T.R.I",
        album: "Cho Ngày Không Còn Nhau",
        date: "24 thg 2, 2025",
        duration: "3:57",
    },
    {
        title: "trở thành quá khứ",
        artists: "T.R.I",
        album: "trở thành quá khứ",
        date: "4 thg 2, 2025",
        duration: "4:24",
    },
    {
        title: "Giờ Thì",
        artists: "buitruonglinh",
        album: "Từng Ngày Như Mãi Mãi",
        date: "4 thg 1, 2025",
        duration: "3:54",
    },
    {
        title: "NGỰA Ô",
        artists: "Dangrangto, TeuYungBoy, DONAL",
        album: "NGỰA Ô",
        date: "23 thg 12, 2024",
        duration: "3:35",
    },
    {
        title: "Say Sống",
        artists: "Tiến Duy Tân, Drum7, 2pillz",
        album: "Khu Vườn Tình",
        date: "21 thg 11, 2024",
        duration: "3:26",
    },
];

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getFavorites();
            setFavorites(data.favorites);

        }
        fetchFavorites();
    }, []);
    console.log(favorites)

    return (
        <div className="bg-gradient-to-b from-purple-800 to-black min-h-screen text-white p-8">
            <div className="flex items-center gap-6 mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-green-300 rounded-lg flex items-center justify-center text-6xl font-bold">
                    ♡
                </div>
                <div>
                    <p className="uppercase text-sm font-semibold">Playlist</p>
                    <h1 className="text-6xl font-bold mt-2">Bài hát đã thích</h1>
                    <p className="mt-2 text-sm">Tuấn Trần · 39 bài hát</p>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <button className="bg-green-500 hover:bg-green-400 text-black p-4 rounded-full text-2xl">▶</button>
                <button className="text-white opacity-70 hover:opacity-100 text-xl">⬇</button>
            </div>

            <table className="w-full text-left text-sm mt-4">
                <thead className="border-b border-white/20 uppercase text-gray-400">
                    <tr>
                        <th className="py-2 px-4">#</th>
                        <th className="py-2 px-4">Tiêu đề</th>
                        <th className="py-2 px-4">Album</th>
                        <th className="py-2 px-4">Ngày thêm</th>
                        <th className="py-2 px-4 text-right">🕒</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites?.map((song, index) => (
                        <tr key={index} className="hover:bg-white/10">
                            {/* <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">
                                <div>
                                    <div className="font-medium">{song.title}</div>
                                    <div className="text-gray-400 text-xs">{song.artists}</div>
                                </div>
                            </td>
                            <td className="py-2 px-4">{song.album}</td>
                            <td className="py-2 px-4">{song.date}</td>
                            <td className="py-2 px-4 text-right">{song.duration}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Favorite