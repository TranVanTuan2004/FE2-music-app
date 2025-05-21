import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSongById, getSongsByArtist } from "../../../services/SongService";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../config";
import { pause, play, Track } from "../../../redux/slice/playerSlice";
import { CheckIcon, MoreHorizontal, Pause, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { usePlayerControl } from "../../../hook/usePlayerControl";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axiosInstance from "../../../configs/axios";
import { addFavorite } from "../../../services/FavoriteService";
import { localUser } from "../../../utils/localUser";
const Detail = () => {
    const { id } = useParams();
    const [song, setSong] = useState<any | Track | null>(null);
    const [songsArt, setSongsArt] = useState<any | null>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [favorite, setFavorite] = useState(localStorage.getItem(`favorite_${id}`) === 'true');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // xử lý khi onClick
    const { songRedux, isPlaying, handlePlayMusic } = usePlayerControl();  // Sử dụng hook xử lý play/pause

    // lần đầu load dữ liệu mới
    useEffect(() => {
        const getSong = async () => {
            try {
                setIsLoading(true);
                const song = await getSongById(Number(id));
                setSong(song);
            } catch (error) {
                toast.error('Failed to fetch song:' + error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300)
            }
        }
        getSong();
    }, [id])

    useEffect(() => {
        const fetchSongsByArtist = async () => {
            try {
                const artistId = song?.artists[0].id;
                const data = await getSongsByArtist(artistId, 10);
                setSongsArt(data);
            } catch (error) {
                toast.error('Failed to fetch song:' + error);
            }
        }
        fetchSongsByArtist()
    }, [song])

    const handleAddFavorite = async (songId: number) => {
        try {
            const data = await addFavorite(songId);
            console.log(data)
            if (data?.status == 'add') {
                setFavorite(true);
                localStorage.setItem(`favorite_${songId}`, 'true');
                toast.success('Thêm vào danh sách yêu thích thành công');
            } else if (data?.status == 'remove') {
                localStorage.setItem(`favorite_${songId}`, 'false');
                setFavorite(false);
                toast.info('Xóa yêu thích thành công');
            }
        } catch (error) {
            toast.error('Failed to add favorute:' + error);
        }
    }
    return (
        <>
            {isLoading ? <SkeletonTheme baseColor="#202020" highlightColor="#444444">
                <p>
                    <Skeleton count={5} />
                </p>
            </SkeletonTheme> : <div className="min-h-[100vh] p-8 bg-[linear-gradient(to_bottom,_#6d8e95,_#1a1a1a_27%,_#121212_100%)]">
                <div className="max-w-5xl text-white flex gap-x-8 ">
                    <div className="w-1/5">
                        <img
                            src={`${BASE_URL}/storage/${song?.image}`}
                            alt="Album cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Thông tin bài hát */}
                    <div className="flex flex-col justify-end">
                        <h2 className="text-sm font-bold uppercase mb-2">Bài hát</h2>
                        <h1 className="text-6xl font-bold mb-4">{song?.title}</h1>
                        <p className="text-sm font-bold text-gray-300">
                            {song?.artist} • {song?.title} • {song?.release_date.toString()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <button onClick={() => handlePlayMusic(Number(song?.id))} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
                        {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}
                    </button>
                    <button onClick={() => handleAddFavorite(song?.id)} className={`flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 hover:border-white hover:scale-110 transition-all duration-100 ${favorite ? 'bg-green-500 text-black' : 'bg-none'}`}>
                        {favorite ? <CheckIcon className="w-4 h-4 rounded-full" /> : <Plus className="text-gray-400 hover:text-white w-5 h-5" />}
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-all duration-100">
                        <MoreHorizontal className="text-gray-400 hover:text-white w-5 h-5" />
                    </button>
                </div>
                {/* <div className="mt-10">
                    <h2 className="text-2xl font-bold ">Đề xuất</h2>
                    <p className="text-gray-400 mt-2 mb-8">Dựa trên bài hát này</p>
                    <div className="space-y-6">
                        {songs.map((song, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={song.image} alt={song.title} className="w-12 h-12 rounded-md" />
                                    <div>
                                        <div className="font-semibold">{song.title}</div>
                                        <div className="text-gray-400 text-sm">{song.artist}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-400 text-sm">{song.plays}</div>
                                    <div className="text-gray-400 text-sm">{song.duration}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="mt-10">
                    <h2 className="text-gray-400">Các bản nhạc thịnh hành của</h2>
                    <p className="text-2xl font-bold mt-2 mb-8">{song?.artists[0].name}</p>
                    <div>
                        {songsArt?.map((song: any, index: number) => (
                            <div key={index}>
                                <div className={`group flex items-center gap-3 p-2 transition-all relative ${songRedux.id === song.id ? 'text-green-500' : 'text-white'}
                                                        hover:bg-neutral-800`}>
                                    <button onClick={() => handlePlayMusic(Number(song?.id))} className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-20">
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
                                        <div className="text-[15px] font-semibold">{song.title}</div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>}
        </>

    );
}


export default Detail;