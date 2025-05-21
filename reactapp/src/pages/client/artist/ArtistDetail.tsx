import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { CheckCircle2, CheckIcon, Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const songs = [
  {
    title: "Intro",
    artist: "Obito, Shiki",
    album: "Đánh Đổi",
    addedDate: "4 tuần trước",
    duration: "0:58",
  },
  {
    title: "Cho Ngày Không Còn Nhau",
    artist: "T.R.I",
    album: "Cho Ngày Không Còn Nhau",
    addedDate: "24 thg 2, 2025",
    duration: "3:57",
  },
  {
    title: "trở thành quá khứ",
    artist: "T.R.I",
    album: "trở thành quá khứ",
    addedDate: "4 thg 2, 2025",
    duration: "4:24",
  },
  {
    title: "Giờ Thì",
    artist: "buitruonglinh",
    album: "Từng Ngày Như Mãi Mãi",
    addedDate: "4 thg 1, 2025",
    duration: "3:54",
  },
  {
    title: "NGỰA Ô",
    artist: "Dangranrto, TeuYungBoy, DONAL",
    album: "NGỰA Ô",
    addedDate: "23 thg 12, 2024",
    duration: "3:35",
  },
  {
    title: "Say Sống",
    artist: "Tăng Duy Tân, Drum7, 2pillz",
    album: "Khu Vườn Tình",
    addedDate: "21 thg 11, 2024",
    duration: "3:26",
  },
];

const ArtistDetail = () => {
  const { id } = useParams();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#121212] to-black text-white font-sans">
      {/* Header Section */}
      <div
        className="w-full h-[320px] object-cover bg-cover bg-center flex items-end px-6 py-8"
        style={{
          backgroundImage:
            "url('https://cdn-media.sforum.vn/storage/app/media/thanhhuyen/%E1%BA%A3nh%20s%C6%A1n%20t%C3%B9ng%20mtp/1/anh-son-tung-mtp-12.jpg')",
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-white text-sm font-normal">
            <CheckCircle2 className="text-blue-500 w-4 h-4" />
            <span>Nghệ sĩ được xác minh</span>
          </div>
          <h1 className="text-[88px] font-black leading-none">Sơn Tùng M-TP</h1>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 pt-6 flex items-center gap-4">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-100">
          <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />
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


      {/* Popular Section */}
      <div className="px-6 pt-10">
        <h2 className="text-2xl font-bold mb-6">Phổ biến</h2>
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-sm py-2 hover:bg-neutral-800 transition px-5 rounded-[6px]"
          >
            <div className="w-[2%] text-gray-400">{index + 1}</div>
            <div className={`w-[60%] group flex items-center gap-3 transition-all relative hover:bg-neutral-800`}>
              <button className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-20">
                {/* {songRedux?.id === song?.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-white text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-white text-[18px]' />} */}
              </button>
              <div className="relative">
                <img
                  src={``}
                  alt={song.title}
                  className="w-12 h-12 object-cover rounded-md transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-lg group-hover:bg-black/60"></div>
              </div>
              <div>
                <div className="text-[14px] font-semibold">{song.title}</div>
              </div>
            </div>
            <div className="w-[20%] text-white">{song.addedDate}</div>
            <div className="w-[18%] col-span-1 text-right text-white">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ArtistDetail;