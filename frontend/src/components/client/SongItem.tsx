import { BASE_URL } from "../../../config"
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SongItem = ({ song, songRedux, isPlaying, handlePlayMusicHome }: any,) => {
  return (
    <>
      <img src={`${BASE_URL}/storage/${song.image}`} alt="..." className="w-full h-[175px] object-fill rounded-lg" />
      <div className="pt-2 pl-1">
        <p className="text-white text-sm font-medium truncate">{song.title}</p>
        {song.artists?.map((artist: any) => {
          return <p className="text-gray-400 text-xs truncate">{artist.name}</p>
        })}
        <button
          onClick={(e) => handlePlayMusicHome(e, song.id)}
          className={`w-13 h-13 rounded-full bg-green-600 hover:bg-green-400 pointer-events: none absolute bottom-16 right-5 flex items-center justify-center 
                translate-y-2 opacity-0 group-hover/song:-translate-y-0 group-hover/song:opacity-100 shadow-xl transition-all duration-400 
                `}
        >
          {songRedux?.id === song.id && isPlaying ? <FontAwesomeIcon icon={faPause} className='text-black text-[18px]' /> : <FontAwesomeIcon icon={faPlay} className='text-black text-[18px]' />}
        </button>
      </div>
    </>
  )
}

export default SongItem