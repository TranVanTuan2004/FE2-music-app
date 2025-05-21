import { useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { CheckCircle2, CheckIcon, MoreHorizontalIcon, Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { getArtistInfo } from "../../../services/ArtistService";
import { BASE_URL } from "../../../../config";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { usePlayerControl } from "../../../hook/usePlayerControl";
import { pause, play, playTrackAt, setPlayList, setTrack } from "../../../redux/slice/playerSlice";
import { useDispatch } from "react-redux";

const gradients = [
  ['from-[#44A5B5FF]', 'to-[#003947FF]', '#01252e'],
  ['from-[#F27229FF]', 'to-[#650500FF]', '#4d0600'],
  ['from-[#535353FF]', 'to-[#353535FF]', '#252525'],
  ['from-[#929AA1FF]', 'to-[#30363CFF]', '#23282c'],
  ['from-[#A86058FF]', 'to-[#5E1D19FF]', '#421411'],
  ['from-[#F27229FF]', 'to-[#650500FF]', '#4d0600'],
  ['from-[#506828FF]', 'to-[#263B00FF]', '#1b2900'],
  ['from-[#082838FF]', 'to-[#082838FF]', '#061f2c'],
];

const ArtistDetail = () => {
  const { id } = useParams();
  const [gradient, setGradient] = useState(['from-[#44A5B5FF]', 'to-[#003947FF]', '#01252e']);

  const { songRedux, playList, isPlaying, handlePlayMusic } = usePlayerControl();
  const dispatch = useDispatch();

  useEffect(() => {
    const random = gradients[Math.floor(Math.random() * gradients.length)];
    setGradient(random);
  }, [])

  const { data, isFetching } = useQuery({ queryKey: ['todos'], queryFn: () => getArtistInfo(Number(id)) })
  console.log(data);

  const handlePlayMain = () => {
    const isCurrentTrackInPlaylist = data.songs?.some((song: any) => song?.id === songRedux.id);

    if (!isCurrentTrackInPlaylist) {
      dispatch(setPlayList(data?.songs));
      dispatch(playTrackAt({ index: 0, isPlaying: true }));
    } else {
      dispatch(isPlaying ? pause() : play());
    }
  };

  const handlePlayAtTrack = (index: number) => {
    dispatch(setPlayList(data?.songs));
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
    <div className="w-full bg-gradient-to-b from-[#121212] to-black text-white font-sans">
      {/* Header Section */}
      <div
        className={`w-full h-[320px] p-8 bg-center flex items-center gap-8 bg-gradient-to-b ${gradient[0]} ${gradient[1]}`}
      >
        <img className="w-[230px] h-[230px] rounded-2xl object-cover" src={`${BASE_URL}/storage/${data?.image}`} alt="" />
        <div className="flex flex-col justify-end gap-2">
          <div className="flex items-center gap-1 text-white text-sm font-normal">
            <CheckCircle2 className="text-blue-500 w-4 h-4" />
            <span>Nghệ sĩ được xác minh</span>
          </div>
          <h1 className="text-[88px] font-black leading-none">{data?.name}</h1>
        </div>
      </div>

      {/* Controls */}


      {/* Popular Section */}
      <div className={`p-8 bg-gradient-to-b from-[${gradient[2]}] to-35% to-[#121212]`}>
        <div className="flex items-center gap-4">
          <button onClick={handlePlayMain} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
            {(data.songs?.some((item: any) => item.id === songRedux.id) ?? false) && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}

          </button>
          <Button className="border border-white text-white font-semibold rounded-full px-4 py-1.5 text-sm hover:bg-white/10 hover:scale-105 transition-all">
            Theo dõi
          </Button>
          <div className="flex items-center justify-center gap-1 ml-2">
            <span className="w-1 h-1 bg-white/80 rounded-full"></span>
            <span className="w-1 h-1 bg-white/80 rounded-full"></span>
            <span className="w-1 h-1 bg-white/80 rounded-full"></span>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold mb-6">Phổ biến</h2>
        {data.songs?.slice(0, 10).map((song: any, index: number) => (
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
              </div>
            </div>
            <div className="w-[20%] text-white">{song.created_at.slice(0, 10)}</div>
            <div className="w-[18%] col-span-1 text-right text-white flex justify-end"><MoreHorizontalIcon /></div>
          </div>
        ))}
      </div>
    </div >
  );
}


export default ArtistDetail;