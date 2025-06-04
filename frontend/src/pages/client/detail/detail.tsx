import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSongById, getSongsByArtist } from "../../../services/SongService";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../config";
import { pause, play, Track } from "../../../redux/slice/playerSlice";
import { CheckIcon, MoreHorizontal, MoreHorizontalIcon, Pause, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { usePlayerControl } from "../../../hook/usePlayerControl";
import 'react-loading-skeleton/dist/skeleton.css'
import { getStatusFavoiteSong, toggleFavoriteSong } from "../../../services/UserService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useQueryClient } from "@tanstack/react-query";
const gradients = [
    ['from-[#44A5B5FF]', 'to-[#003947FF]', 'from-[#01252e]'],
    ['from-[#F27229FF]', 'to-[#650500FF]', 'from-[#4d0600]'],
    ['from-[#535353FF]', 'to-[#353535FF]', 'from-[#252525]'],
    ['from-[#929AA1FF]', 'to-[#30363CFF]', 'from-[#23282c]'],
    ['from-[#A86058FF]', 'to-[#5E1D19FF]', 'from-[#421411]'],
    ['from-[#F27229FF]', 'to-[#650500FF]', 'from-[#4d0600]'],
    ['from-[#506828FF]', 'to-[#263B00FF]', 'from-[#1b2900]'],
    ['from-[#082838FF]', 'to-[#082838FF]', 'from-[#061f2c]'],
];
const Detail = () => {
    const { id } = useParams();
    const [song, setSong] = useState<any | Track | null>(null);
    const [songsArt, setSongsArt] = useState<any | null>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [gradient, setGradient] = useState(['from-[#44A5B5FF]', 'to-[#003947FF]', '#01252e']);


    const queryClient = useQueryClient();

    // xử lý khi onClick
    const { songRedux, isPlaying, handlePlayMusic } = usePlayerControl();  // Sử dụng hook xử lý play/pause

    useEffect(() => {
        const random = gradients[Math.floor(Math.random() * gradients.length)];
        setGradient(random);
    }, [id])


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
        fetchSongsByArtist();

    }, [song])

    useEffect(() => {
        const fetchStatusFavoiteSong = async () => {
            const data = await getStatusFavoiteSong(Number(id));
            setFavorite(data?.isFavorite)

        }
        fetchStatusFavoiteSong();
    }, [id])

    const handleToggleFavoriteSong = async (songId: number) => {
        try {
            const data = await toggleFavoriteSong(songId);
            setFavorite(data?.isFavorite);
            queryClient.invalidateQueries({ queryKey: ['favoriteSong'] });

        } catch (error) {
            toast.error('Failed to add favorute:' + error);
        }
    }
    console.log(song)
    return (
        <>
            {isLoading ? <SkeletonTheme baseColor="#202020" highlightColor="#444444">
                <p>
                    <Skeleton count={5} />
                </p>
            </SkeletonTheme> : <div className="w-fulltext-white font-sans">
                <div className={`w-full h-[320px] px-8 bg-center flex items-center gap-8 bg-gradient-to-b ${gradient[0]} ${gradient[1]}`}>
                    <div className="w-1/4">
                        <img
                            src={`${BASE_URL}/storage/${song?.image}`}
                            alt="Album cover"
                            className="h-[240px] rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Thông tin bài hát */}
                    <div className="flex flex-col justify-end">
                        <h2 className="text-sm font-bold uppercase mb-2">Bài hát</h2>
                        <h1 className="text-6xl font-bold mb-4">{song?.title}</h1>
                        <p className="text-sm font-bold text-gray-300 flex items-center">
                            <img className="w-14 h-14 object-cover rounded-full" src={`${BASE_URL}/storage/${song?.artists[0].image}`} alt="" />
                            <div className="ml-4">{song?.artists[0].name} • {song?.created_at.slice(0, 4)}</div>
                        </p>
                    </div>
                </div>
                <div className={`p-8 w-full bg-gradient-to-b ${gradient[2]} to-15% to-[#121212]`}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => handlePlayMusic(Number(song?.id))} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
                            {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}
                        </button>
                        <button onClick={() => handleToggleFavoriteSong(song?.id)} className={`flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 hover:border-white hover:scale-110 transition-all duration-100 ${favorite ? 'bg-green-500 text-black' : 'bg-none'}`}>
                            {favorite ? <CheckIcon className="w-4 h-4 rounded-full" /> : <Plus className="text-gray-400 hover:text-white w-5 h-5" />}
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-all duration-100">
                            <MoreHorizontal className="text-gray-400 hover:text-white w-5 h-5" />
                        </button>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-gray-400">Các bản nhạc thịnh hành của</h2>
                        <p className="text-2xl font-bold mt-2 mb-8">{song?.artists[0].name}</p>
                        <div>
                            {songsArt?.map((song: any, index: number) => (
                                <div key={index}>
                                    <div className={`group flex items-center rounded-[6px] gap-3 p-2 transition-all relative ${songRedux.id === song.id ? 'text-green-500' : 'text-white'}
                                                        hover:bg-neutral-800`}>
                                        <button onClick={() => handlePlayMusic(Number(song?.id))} className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-20">
                                            {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-white text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-white text-[18px]' />}
                                        </button>
                                        <div className="relative w-[auto]">
                                            <img
                                                src={`${BASE_URL}/storage/${song.image}`}
                                                alt={song.title}
                                                className="w-12 h-12 object-cover rounded-md transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 rounded-lg group-hover:bg-black/60"></div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="text-[15px] font-semibold">{song.title}</div>
                                        </div>
                                        <div className="w-[35%] text-[15px] font-semibold">{song?.created_at.slice(0, 10)}</div>
                                        <div className="flex justify-end text-end text-[15px] font-semibold"><MoreHorizontalIcon /></div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>}
        </>

    );
}


export default Detail;