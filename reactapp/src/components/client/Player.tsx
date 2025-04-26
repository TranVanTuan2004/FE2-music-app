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
  MessageCircleMore,
  Pencil,
  ListMusic,
  MonitorSpeaker,
  Maximize2,
  PauseIcon,
  PauseOctagon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BASE_URL } from "../../../config";
import { pause, play } from "../../redux/slice/playerSlice";

const Player = () => {
  // useRef dùng để tham chiếu tới DOM element hoặc là giữ giá trị khi component render
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const song: any = useSelector((state: RootState) => { return state.player.currentTrack })
  const isPlaying: any = useSelector((state: RootState) => { return state.player.isPlaying })

  const togglePlay = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [song, isPlaying])


  return (
    <div className='fixed h-[12%] bottom-0 left-0 right-0'>
      <div className="flex items-center justify-between h-full w-full bg-black text-white px-4 py-2 z-10">
        {/* Left: Song Info */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <img
            src={`${BASE_URL}/storage/${song?.image}`} // bạn thay ảnh đúng vào nhé
            alt="Album Cover"
            className="w-14 h-14 object-cover rounded"
          />
          <div>
            <p className="text-sm font-semibold">{song?.title}</p>
            <p className="text-xs text-gray-400">{song?.artist}</p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex flex-col items-center w-[40%]">
          {/* Control Buttons */}
          <div className="flex items-center gap-4 mb-1">
            <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <audio
              ref={audioRef}
              src={`${BASE_URL}/storage/${song?.path}`}
            />
            <IconButton
              onClick={togglePlay}
              className="!bg-white hover:!bg-gray-200 !text-black !rounded-full !p-2 shadow-md"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </IconButton>
            <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <MessageCircleMore className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center w-full text-xs text-gray-400 gap-2">
            <span>1:11</span>
            <div className="w-full h-1 bg-gray-700 rounded overflow-hidden">
              <div className="h-full bg-white w-[40%]"></div>
            </div>
            <span>3:26</span>
          </div>
        </div>

        {/* Right: Other Controls */}
        <div className="flex items-center gap-3 min-w-[200px] justify-end text-gray-400">
          <Pencil className="w-4 h-4 hover:text-white cursor-pointer" />
          <ListMusic className="w-4 h-4 hover:text-white cursor-pointer" />
          <MonitorSpeaker className="w-4 h-4 hover:text-white cursor-pointer" />
          <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
          <div className="w-20 h-1 bg-gray-700 rounded overflow-hidden">
            <div className="h-full bg-white w-[40%]"></div>
          </div>
          <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>

  );
}

export default Player