// components/Player.tsx
import { IconButton } from "@mui/material";
import clsx from "clsx";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Volume2,
  Pencil,
  ListMusic,
  MonitorSpeaker,
  Maximize2,

  LucideRepeat,
  VolumeOff,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../config";
import { nextTrack, pause, play, prevTrack, repeatTrack } from "../../redux/slice/playerSlice";
import { usePlayerControl } from "../../hook/usePlayerControl";

const Player = () => {
  // useRef dùng để tham chiếu tới DOM element hoặc là giữ giá trị khi component render
  const dispatch = useDispatch();
  const { playList, songRedux, isPlaying, currentIndex, isRepeat } = usePlayerControl();

  //useRef => truy vấn vào element Dom 
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rangeRef = useRef<HTMLInputElement | null>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState<number>(() => {
    const saved = localStorage.getItem("volume");
    const parsed = parseFloat(saved ?? "");
    return isNaN(parsed) ? 0.5 : parsed;
  });

  // lưu lại giá trị volume bằng useRef để làm chức năng handleMuteToggle
  const previousVolumeRef = useRef(volume);

  const handleMuteToggle = () => {
    if (volume > 0) {
      previousVolumeRef.current = volume;
      setVolume(0);
    } else {
      setVolume(previousVolumeRef.current || 0.5);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      localStorage.setItem('volume', JSON.stringify(volume));
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Hàm xử lý hover vào
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Hàm xử lý hover ra
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  // Cập nhật thời gian của bài hát khi metadata được load
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    audioRef.current?.addEventListener("loadeddata", handleLoadedMetadata)
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      audioRef.current?.removeEventListener("loadeddata", handleLoadedMetadata)
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setCurrentTime(currentTime);
    }
  };
  function handleSeek(e: any) {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  // xử lý khi bài hát kết thúc
  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current?.play();
    } else if (currentIndex < playList.length - 1) {
      dispatch(nextTrack());
    }
  }

  // xử lý back track
  const handlePrevTrack = () => {
    if (playList[currentIndex] !== playList[0]) {
      dispatch(prevTrack())
    }
  }

  // xử lý trrangj thái lặp lại bài hát
  const handleRepeat = () => {
    dispatch(repeatTrack());
  }


  // Cập nhật thanh trượt và màu khi phát nhạc
  useEffect(() => {
    if (rangeRef.current) {
      const percentage = (currentTime / duration) * 100;
      if (isHovered) {
        rangeRef.current.style.background = `linear-gradient(to right, #027402 ${percentage}%, #706a6a ${percentage}%)`;

      } else {
        rangeRef.current.style.background = `linear-gradient(to right, #fff ${percentage}%, #706a6a ${percentage}%)`;
      }
    }
  }, [currentTime, duration]);

  // xử lý next track
  const handleNextTrack = () => {
    dispatch(nextTrack())
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [songRedux, isPlaying])

  return (
    <div className='fixed h-[10%] bottom-0 left-0 right-0'>
      <div className="flex items-center justify-between h-full w-full bg-black text-white px-4 py-2 z-10">
        {/* Left: songRedux Info */}
        <div className="flex items-center gap-3 w-[30%]">
          <img
            src={`${BASE_URL}/storage/${songRedux?.image}`}
            alt="Album Cover"
            className="w-14 h-14 object-cover rounded"
          />
          <div>
            <p className="text-sm font-semibold">{songRedux?.title}</p>
            <p className="text-xs text-gray-400">{songRedux?.artist}</p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex flex-col items-center w-[40%]">
          {/* Control Buttons */}
          <div className="flex items-center gap-4 mb-1">
            <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />

            <SkipBack onClick={handlePrevTrack} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <audio
              ref={audioRef}
              src={`${BASE_URL}/api/v1/${songRedux?.path}`}
              onEnded={handleEnded}
              preload="metadata"
            />
            <IconButton
              onClick={togglePlay}
              className="!bg-white hover:!bg-gray-200 !text-black !rounded-full !p-2 shadow-md"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </IconButton>
            <SkipForward onClick={handleNextTrack} className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <LucideRepeat onClick={handleRepeat} className={`w-4 h-4   ${isRepeat ? 'text-green-600 hover:text-green-500' : 'text-gray-400 hover:hover:text-white'} cursor-pointer`} />
          </div>
          {/* Progress Bar */}
          <div className="flex items-center w-full text-xs text-gray-400 gap-2">
            <span className="select-none">{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            <div className="w-[90%]">
              <input type="range"
                ref={rangeRef}
                value={currentTime}
                className={`range-slider w-full h-[4px]`}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onChange={handleSeek}
                min={0}
                max={duration}
                step="any" />
            </div>
            <span className="select-none">{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, "0")}</span>
          </div>
        </div>

        {/* Right: Other Controls */}
        <div className="flex items-center gap-3 w-[30%] justify-end text-gray-400">
          <Pencil className="w-4 h-4 hover:text-white cursor-pointer" />
          <ListMusic className="w-4 h-4 hover:text-white cursor-pointer" />
          <MonitorSpeaker className="w-4 h-4 hover:text-white cursor-pointer" />
          <button onClick={handleMuteToggle}>
            {volume > 0 ? <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" /> : <VolumeOff className="w-4 h-4 hover:text-white cursor-pointer" />}
          </button>
          <div className="w-28 flex items-center">
            <input
              ref={volumeRef}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onInput={(e: any) => setVolume(parseFloat(e.target.value))}
              className={`range-slider w-full h-[4px]`}
              style={{
                background: `linear-gradient(to right, #069106 ${volume * 100}%, #706a6a ${volume * 100}%)`,
              }} />
          </div>
          <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>

  );
}

export default Player