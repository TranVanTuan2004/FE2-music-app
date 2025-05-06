import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpLeftFromSquareIcon, DoorClosed, EyeClosed, MarsStrokeIcon } from "lucide-react";
import { useState } from "react";
import { usePlayerControl } from "../../hook/usePlayerControl";
import { playTrackAt, Track } from "../../redux/slice/playerSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BASE_URL } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModel, setOpenModel } from "../../redux/slice/modelSlice";
import { RootState } from "../../redux/store";

const Playlist = () => {
    const isPlayList = useSelector((state: RootState) => state.model.isClose)
    const dispatch = useDispatch();

    const { playList, songRedux, isLoading, currentIndex } = usePlayerControl();
    return (
        <div className={`bg-[#121212] text-white m-2 ml-0 rounded-lg overflow-y-scroll no-scrollbar transition-all duration-500 ${isPlayList ? 'w-[60px]' : 'w-[380px]'}`}>
            <div className="sticky top-0 z-10 h-[60px] bg-[#121212] p-4 border-b border-b-amber-50 flex items-center justify-between">
                <h2 className={` text-[17px] font-bold transition-all duration-500 ${isPlayList ? '-ml-60' : 'ml-0'}`}>Danh sách chờ</h2>
                <ArrowUpLeftFromSquareIcon
                    onClick={() => dispatch(setOpenModel())}
                    className={`transition-transform duration-300 hover:scale-110 cursor-pointer ${isPlayList ? 'visible' : 'invisible'}`}
                />
                <FontAwesomeIcon icon={faXmark} className={`text-white text-[24px]  ${isPlayList ? '-ml-36 invisible' : 'ml-0 visible'} `} onClick={() => dispatch(setCloseModel())} />
            </div>

            <div className={`transition-all duration-500 ${isPlayList ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                {isLoading ? (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444444">
                        <Skeleton count={5} />
                    </SkeletonTheme>
                ) : (
                    playList?.map((song: any, index: number) => (
                        <div key={index}>
                            {currentIndex === index && (
                                <div className="mt-4 mb-2 px-4 font-bold text-green-400 transition-all">Đang phát</div>
                            )}
                            {currentIndex <= index ? <div className={`group flex items-center gap-3 p-4 transition-all relative ${songRedux.id === song.id ? 'text-green-500' : 'text-white'}
                            hover:bg-neutral-800`}>
                                <button onClick={() => dispatch(playTrackAt(index))} className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-20">
                                    <FontAwesomeIcon icon={faPlay} className='text-white text-[20px]' />
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
                                    <div className="text-[15px] font-semibold">{song.title}</div>
                                    <div className="text-sm text-[#b3b3b3] group-hover:text-white group-hover:font-normal transition-all duration-300">{song.artist}</div>
                                </div>
                            </div> : ''}

                        </div>
                    ))
                )}
            </div>
        </div >
    );
}


export default Playlist