import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../../../services/SongService";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../config";
import { pause, play, Song } from "../../../redux/slice/playerSlice";
import { MoreHorizontal, Pause, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { usePlayerControl } from "../../../hook/usePlayerControl";

const Detail = () => {
    const { id } = useParams();
    const [song, setSong] = useState<Song | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    // xử lý khi onClick
    const { songRedux, isPlaying, handlePlayMusic } = usePlayerControl();  // Sử dụng hook xử lý play/pause

    // lần đầu load dữ liệu mới
    useEffect(() => {
        const getSong = async () => {
            try {
                const song = await getSongById(Number(id));
                setTimeout(() => {
                    setIsLoading(true);
                }, 1000)
                setSong(song);
            } catch (error) {
                toast.error('Failed to fetch song:' + error);
            } finally {
                setIsLoading(false);
            }
        }
        getSong();
    }, [id])
    console.log(song)




    const songs = [
        {
            title: "Chìm Sâu",
            artist: "RPT MCK, Trung Trần",
            plays: "58.952.500",
            duration: "2:36",
            image: "https://via.placeholder.com/40", // Bạn thay link ảnh phù hợp
        },
        {
            title: "Đã Lỡ Yêu Em Nhiều",
            artist: "JustaTee",
            plays: "19.531.607",
            duration: "4:21",
            image: "https://via.placeholder.com/40",
        },
        {
            title: "một đời",
            artist: "14 Casper, Bon Nghiêm, buitruonglinh",
            plays: "20.892.488",
            duration: "5:28",
            image: "https://via.placeholder.com/40",
        },
        {
            title: "Love is",
            artist: "Dangrangto",
            plays: "14.920.895",
            duration: "4:26",
            image: "https://via.placeholder.com/40",
        },
        {
            title: "Track 06",
            artist: "Tyronee, VSTRA, Obito",
            plays: "8.945.245",
            duration: "2:45",
            image: "https://via.placeholder.com/40",
        },
    ];
    return (
        <>
            {!isLoading ? "..Loading" : <div className="min-h-[100vh] p-8 bg-[linear-gradient(to_bottom,_#6d8e95,_#1a1a1a_27%,_#121212_100%)]">
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
                    {/* <div className="flex items-center gap-4 mt-10 max-w-5xl mx-auto">
                    <img
                        src={`${BASE_URL}/storage/${song?.image}`}
                        alt="Artist"
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <p className="text-sm text-gray-400">Nghệ sĩ</p>
                        <p className="text-lg font-bold">{song?.artist}</p>
                    </div>  
                </div> */}
                </div>
                <div className="flex gap-4 mt-6">
                    <button onClick={() => handlePlayMusic(Number(song?.id))} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
                        {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:border-white hover:scale-110 transition-all duration-100">
                        <Plus className="text-gray-400 hover:text-white w-5 h-5" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-all duration-100">
                        <MoreHorizontal className="text-gray-400 hover:text-white w-5 h-5" />
                    </button>
                </div>
                <div className="mt-10">
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
                </div>

                <div className="mt-10">
                    <h2 className="text-gray-400">Các bản nhạc thịnh hành của</h2>
                    <p className="text-2xl font-bold mt-2 mb-8">Vũ Cát Tường</p>
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
                </div>

            </div>}
        </>

    );
}


export default Detail;