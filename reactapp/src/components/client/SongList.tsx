import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import useSong from '../../hook/useSong';
import { BASE_URL } from '../../../config';
import { getSongById } from '../../services/SongService';
import { useDispatch, useSelector } from 'react-redux';
import { pause, play, setTrack } from '../../redux/slice/playerSlice';
import { RootState } from '../../redux/store';
import SongItem from './SongItem';
import { toast } from 'react-toastify';
import { Route, useNavigate } from 'react-router-dom';
import { usePlayerControl } from '../../hook/usePlayerControl';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { saveRecentItem } from '../../utils/localRecent';

export type SongListProps = {
  genre?: string;
  search?: string;
  artist?: string;
  recommend?: string;
  limit: number;
};
const SongList = ({ params }: any) => {
  console.log(params)
  const { data, isLoading, error } = useSong(params);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigate = useNavigate();

  const { songRedux, isPlaying, handlePlayMusic } = usePlayerControl();  // Sử dụng hook xử lý play/pause

  const handlePlayMusicHome = (e: React.MouseEvent, idSong: number) => {
    e.stopPropagation();
    handlePlayMusic(idSong)
  }


  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }

  const handleShowSongDetail = (song: any) => {
    navigate(`/track/${song.id}`)
    saveRecentItem(song);
  }

  if (isLoading) {
    return <SkeletonTheme baseColor="#202020" highlightColor="#444444">
      <Skeleton count={5} />
    </SkeletonTheme>
  }

  return (
    <>
      <Swiper
        className="group"
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={20}
        slidesPerGroup={3}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        direction="horizontal"
        onSwiper={(swiper) => {
          if (data) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }
        }}
        speed={600}
        slidesPerView='auto'>
        {data?.map((song: any) => {
          return <SwiperSlide onClick={() => handleShowSongDetail(song)} key={song.id} className="group/song relative h-[auto] !w-[180px] shrink-0 hover:bg-neutral-800 rounded-lg overflow-hidden p-3 cursor-pointer">
            <SongItem song={song} songRedux={songRedux} isPlaying={isPlaying} handlePlayMusicHome={handlePlayMusicHome} />
          </SwiperSlide>
        })}

        <div className={`swiper-button-prev-custom custom-nav-btn left-2 invisible group-hover:visible ${isBeginning ? 'opacity-0' : 'opacity-100'}`}>
          <span className="arrow">&#10094;</span>
        </div>

        <div className={`swiper-button-next-custom custom-nav-btn right-2 invisible group-hover:visible transition-opacity duration-300 ${isEnd ? 'opacity-0' : 'opacity-100'}`}>
          <span className="arrow">&#10095;</span>
        </div>
      </Swiper >
    </>
  )
}

export default SongList