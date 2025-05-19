import React from "react";
import { MoreHorizontal, Play, Plus, TimerIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const songs = [
    {
        title: "Intro",
        artist: "Obito, Shiki",
        album: "Đánh Đổi",
        addedDate: "4 tuần trước",
        duration: "0:58",
    },
    {
        title: "Cho Ngày Không Còn Nhau",
        artist: "T.R.I",
        album: "Cho Ngày Không Còn Nhau",
        addedDate: "24 thg 2, 2025",
        duration: "3:57",
    },
    {
        title: "trở thành quá khứ",
        artist: "T.R.I",
        album: "trở thành quá khứ",
        addedDate: "4 thg 2, 2025",
        duration: "4:24",
    },
    {
        title: "Giờ Thì",
        artist: "buitruonglinh",
        album: "Từng Ngày Như Mãi Mãi",
        addedDate: "4 thg 1, 2025",
        duration: "3:54",
    },
    {
        title: "NGỰA Ô",
        artist: "Dangranrto, TeuYungBoy, DONAL",
        album: "NGỰA Ô",
        addedDate: "23 thg 12, 2024",
        duration: "3:35",
    },
    {
        title: "Say Sống",
        artist: "Tăng Duy Tân, Drum7, 2pillz",
        album: "Khu Vườn Tình",
        addedDate: "21 thg 11, 2024",
        duration: "3:26",
    },
];

export default function Favorite() {
    return (
        <div className=" min-h-screen text-white pb-16">
            {/* Header */}
            <div className="flex items-end gap-8 bg-gradient-to-b from-purple-800 to-black p-12">
                <div className=" bg-gradient-to-b from-purple-500 to-white/50 w-56 h-56 rounded shadow-lg flex items-center justify-center">
                    <div className="text-7xl">❤️</div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="uppercase text-sm font-medium">Playlist</span>
                    <h1 className="text-6xl font-bold leading-tight">Bài hát đã thích</h1>
                    <span className="text-sm text-gray-300">Tuấn Trần • 39 bài hát</span>
                </div>
            </div>

            <div className="p-8">
                <div className="mt-10 mb-2 text-sm text-gray-400 grid grid-cols-12 gap-4 border-b border-gray-700 px-5">
                    <div className="col-span-1">#</div>
                    <div className="col-span-4">Tiêu đề</div>
                    <div className="col-span-3">Album</div>
                    <div className="col-span-3">Ngày thêm</div>
                    <div className="col-span-1 flex justify-end mb-3">
                        <TimerIcon className=" text-right" />
                    </div>
                </div>

                {/* Songs List */}
                <div>
                    {songs.map((song, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 gap-4 text-sm py-3 hover:bg-neutral-800 transition px-5 rounded-[6px]"
                        >
                            <div className="col-span-1 text-gray-400">{index + 1}</div>
                            <div className="col-span-4">
                                <div className="text-white font-medium leading-tight">{song.title}</div>
                                <div className="text-xs text-gray-400">{song.artist}</div>
                            </div>
                            <div className="col-span-3 text-white">{song.album}</div>
                            <div className="col-span-3 text-white">{song.addedDate}</div>
                            <div className="col-span-1 text-right text-white">{song.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}