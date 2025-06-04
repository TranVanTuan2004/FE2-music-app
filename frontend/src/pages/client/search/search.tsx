import React, { useEffect, useState } from 'react';
import CategoryCard from '../../../components/client/CategoryCard';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { search } from '../../../services/UserService';
import { BASE_URL } from '../../../../config';
import { MoreHorizontalIcon } from 'lucide-react';
import { usePlayerControl } from '../../../hook/usePlayerControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const categories = [
    { title: 'Nhạc', color: 'bg-pink-500', image: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb' },
    { title: 'Podcast', color: 'bg-emerald-700', image: 'https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa' },
    { title: 'Sự kiện trực tiếp', color: 'bg-purple-600', image: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg' },
    { title: 'Dành Cho Bạn', color: 'bg-blue-900', image: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe' },
    { title: 'Mới phát hành', color: 'bg-lime-600', image: 'https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64' },
    { title: 'Nhạc Việt', color: 'bg-purple-600', image: 'https://i.scdn.co/image/ab67fb8200005cafe3ace120cac714821f256c93' },
    { title: 'Pop', color: 'bg-emerald-700', image: 'https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825' },
    { title: 'K-Pop', color: 'bg-pink-500', image: 'https://i.scdn.co/image/ab67fb8200005caf4b42030ee01cf793663dbb73' },
    { title: 'Hip-Hop', color: 'bg-blue-900', image: 'https://i.scdn.co/image/ab67fb8200005caf3c7749936299ad94cce65d83' },

    // Thêm nhiều item khác...
];

const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const [data, setData] = useState<any>([]);
    const { songRedux, isPlaying, handlePlayMusic } = usePlayerControl();
    const shownArtists = new Set();


    useEffect(() => {
        const fetchSearch = async () => {
            const data = await search(String(keyword));
            setData(data.data)
        }
        fetchSearch();
    }, [keyword])
    console.log(data)
    if (data?.length === 0 && keyword !== null) {
        return <div className="bg-[#121212] text-white h-[60%] flex flex-col justify-end items-center px-4 pb-40">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-2">
                Không tìm thấy kết quả cho "{keyword}"
            </h2>
            <p className="text-zinc-400 text-sm md:text-base text-center max-w-md">
                Vui lòng đảm bảo bạn viết đúng chính tả, dùng ít từ khóa hơn hoặc thử từ khóa khác.
            </p>
        </div>
    }

    return (
        keyword !== null ? <div className="bg-[#121212] text-white min-h-screen p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {[
                    "Tất cả",
                    "Nghệ sĩ",
                    "Bài hát",
                    "Album",
                    "Playlist",
                    "Podcast và chương trình",
                    "Hồ sơ",
                    "Thể loại và tâm trạng",
                ].map((item) => (
                    <button
                        key={item}
                        className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-4 py-2 rounded-full transition"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Artist + Songs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Artist card */}
                <Link to={`/artist/${data[0]?.artists[0]?.id}`} className="bg-zinc-900 p-6 rounded-xl flex flex-col justify-center hover:bg-neutral-800 cursor-pointer">
                    <img
                        src={`${BASE_URL}/storage/${data[0]?.artists[0]?.image}`}
                        alt="Sơn Tùng M-TP"
                        className="w-32 h-32 rounded-full mr-4"
                    />
                    <div className='mt-4'>
                        <h2 className="text-4xl font-bold">{data[0]?.artists[0]?.name}</h2>
                        <p className="text-lg text-zinc-400 mt-2">Nghệ sĩ</p>
                    </div>
                </Link>

                {/* Song list */}
                <div className="md:col-span-2 bg-zinc-900 p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-4">Bài hát</h2>
                    <ul className="space-y-2">
                        {data?.slice(0, 4).map((song: any, index: number) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 text-sm hover:bg-neutral-800 transition px-2 py-1 rounded-[6px] ${songRedux.id === song.id ? 'text-green-500' : 'text-white'}hover:bg-neutral-800`}
                            >
                                <div className={`w-[60%] group flex items-center gap-3 transition-all relative hover:bg-neutral-800`}>
                                    <button onClick={() => handlePlayMusic(song.id)} className="absolute left-[15px] top-1/2 -translate-y-1/3 opacity-0 group-hover:opacity-100 z-20">
                                        {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-white text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-white text-[18px]' />}
                                    </button>
                                    <div className="relative">
                                        <img
                                            src={`${BASE_URL}/storage/${song?.image}`}
                                            alt={song?.title}
                                            className="w-10 h-10 object-cover rounded-md transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 rounded-lg group-hover:bg-black/60"></div>
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold">{song?.title}</div>
                                        <div className="text-[13px] font-normal text-[#b3b3b3]">{song?.artists[0]?.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Playlists */}
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Nghệ sỹ
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {data?.slice(0, 10)?.map((song: any, index: number) => {

                        const artistName = song?.artists?.[0]?.name;
                        if (artistName && !shownArtists.has(artistName)) {
                            shownArtists.add(artistName);

                            return (
                                <Link to={`/artist/${song?.artists[0]?.id}`}
                                    key={index}
                                    className="bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition"
                                >
                                    <img
                                        src={`${BASE_URL}/storage/${song?.artists[0]?.image}`}
                                        className="w-full h-40 object-cover"
                                        alt={artistName}
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-sm">{artistName}</h3>
                                        <p className="text-xs text-zinc-400">Của Spotify</p>
                                    </div>
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div> : <div className="bg-[#121212] min-h-screen p-8">
            <h1 className="text-white text-3xl font-bold mb-6">Duyệt tìm tất cả</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        title={category.title}
                        image={category.image}
                        color={category.color}
                    />
                ))}
            </div>
        </div>

    );
};

export default Search;