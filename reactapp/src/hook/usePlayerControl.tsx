// hooks/usePlayerControl.ts
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { pause, play, setTrack } from "../redux/slice/playerSlice";
import { getSongById } from "../services/SongService";
import { toast } from "react-toastify";

// Custom hook quản lý play/pause
export const usePlayerControl = () => {
    const songRedux: any = useSelector((state: RootState) => state.player.currentTrack);
    const isPlaying: any = useSelector((state: RootState) => state.player.isPlaying);
    const dispatch = useDispatch();

    const handlePlayMusic = async (idSong: number) => {
        if (songRedux?.id === idSong) {
            isPlaying ? dispatch(pause()) : dispatch(play());
            return;
        }

        try {
            const data = await getSongById(idSong);
            dispatch(setTrack(data));
        } catch (error) {
            toast.error("Có vấn đề: " + error);
        }
    };

    return { songRedux, isPlaying, handlePlayMusic };
};
