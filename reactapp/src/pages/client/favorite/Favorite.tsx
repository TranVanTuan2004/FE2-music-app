import React, { useEffect, useState } from "react";
import { MoreHorizontal, MoreHorizontalIcon, Play, Plus, TimerIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { getFavoriteListSong } from "../../../services/UserService";
import { BASE_URL } from "../../../../config";
import { usePlayerControl } from "../../../hook/usePlayerControl";
import { useDispatch } from "react-redux";
import { pause, play, playTrackAt, setPlayList } from "../../../redux/slice/playerSlice";
import { useQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Favorite = () => {
    const { songRedux, isPlaying } = usePlayerControl();

    const { data, isFetching } = useQuery({ queryKey: ['favorite'], queryFn: () => getFavoriteListSong() })
    console.log(data);
    const dispatch = useDispatch();

    const handlePlayMain = () => {
        const isCurrentTrackInPlaylist = data.favorites?.some((song: any) => song?.id === songRedux.id);

        if (!isCurrentTrackInPlaylist) {
            dispatch(setPlayList(data.favorites));
            dispatch(playTrackAt({ index: 0, isPlaying: true }));
        } else {
            dispatch(isPlaying ? pause() : play());
        }
    };

    const handlePlayAtTrack = (index: number) => {
        dispatch(setPlayList(data.favorites));
        dispatch(playTrackAt({ index, isPlaying: !isPlaying }));
    };

    if (isFetching) {
        return <SkeletonTheme baseColor="#202020" highlightColor="#444444">
            <p>
                <Skeleton count={5} />
            </p>
        </SkeletonTheme>
    }



    return (
        <div className=" min-h-screen text-white pb-16">
            <div className="p-8 flex items-end gap-8 bg-gradient-to-b from-[#695aa0] to-[#3b2a72]">
                <div className=" bg-gradient-to-b from-purple-500 to-white/50 w-56 h-56 rounded shadow-lg flex items-center justify-center">
                    <div className="text-7xl">❤️</div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="uppercase text-sm font-medium">Playlist</span>
                    <h1 className="text-6xl font-bold leading-tight">Bài hát đã thích</h1>
                    <span className="text-sm text-gray-300">Tuấn Trần • 39 bài hát</span>
                </div>
            </div>
            <div className="px-8 bg-gradient-to-b from-[#2e2553] to-40% to-[#121212]">
                <div className=" pt-8">
                    <button onClick={handlePlayMain} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
                        {(data.favorites.some((item: any) => item.id === songRedux.id) ?? false) && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}
                    </button>
                </div>
                <div className="w-full">
                    <div className="flex items-center mb-4 mt-10 mb-2 text-sm text-gray-400  gap-4 border-b border-gray-700 px-5">
                        <div className="w-[2%]">#</div>
                        <div className="w-[60%]">Tiêu đề</div>
                        <div className="w-[20%]">Ngày thêm</div>
                        <div className="w-[18%] flex justify-end mb-3">
                            <TimerIcon className=" text-right" />
                        </div>
                    </div>

                    {/* Songs List */}
                    <div>
                        {data.favorites?.map((song: any, index: number) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 text-sm py-2 hover:bg-neutral-800 transition px-5 rounded-[6px] ${songRedux.id === song.id ? 'text-green-500' : 'text-white'}
                                                        hover:bg-neutral-800`}
                            >
                                <div className="w-[2%] text-gray-400">{index + 1}</div>
                                <div className={`w-[60%] group flex items-center gap-3 transition-all relative hover:bg-neutral-800`}>
                                    <button onClick={() => { handlePlayAtTrack(index) }} className="absolute left-5 top-1/2 -translate-y-1/3 opacity-0 group-hover:opacity-100 z-20">
                                        {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-white text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-white text-[18px]' />}
                                    </button>
                                    <div className="relative">
                                        <img
                                            src={`${BASE_URL}/storage/${song.image}`}
                                            alt={song.title}
                                            className="w-12 h-12 object-cover rounded-md transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 rounded-lg group-hover:bg-black/60"></div>
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold">{song.title}</div>
                                        <div className="text-[14px] font-semibold">{song.artists[0]?.name}</div>
                                    </div>
                                </div>
                                <div className="w-[20%] text-white">{song?.pivot.created_at.slice(0, 10)}</div>
                                <div className="w-[18%] col-span-1 text-right text-white flex justify-end"><MoreHorizontalIcon /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Favorite