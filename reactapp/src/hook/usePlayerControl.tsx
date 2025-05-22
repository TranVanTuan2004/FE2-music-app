// hooks/usePlayerControl.ts
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { loading, pause, play, setTrack } from "../redux/slice/playerSlice";
import { getPlayList, getSongById } from "../services/SongService";
import { toast } from "react-toastify";
import { setOpenModel } from "../redux/slice/modelSlice";

// Custom hook quản lý play/pause
export const usePlayerControl = () => {
    const songRedux: any = useSelector((state: RootState) => state.player.currentTrack);
    const isLoading: any = useSelector((state: RootState) => state.player.isLoading);
    const isPlaying: any = useSelector((state: RootState) => state.player.isPlaying);
    const playList: any = useSelector((state: RootState) => state.player.playlist);
    const currentIndex: any = useSelector((state: RootState) => state.player.currentIndex);
    const isRepeat: any = useSelector((state: RootState) => state.player.isRepeat);


    const dispatch = useDispatch();


    const handlePlayMusic = async (idSong: number) => {
        if (songRedux?.id === idSong) {
            isPlaying ? dispatch(pause()) : dispatch(play());
            return;
        }
        try {
            dispatch(loading(true));
            dispatch(setOpenModel());
            const data = await getPlayList(idSong);
            dispatch(setTrack(data));
        } catch (error) {
            toast.error("Có vấn đề: " + error);
        } finally {
            setTimeout(() => {
                dispatch(loading(false));
            }, 500)
        }
    };

    return { songRedux, playList, isPlaying, isLoading, currentIndex, isRepeat, handlePlayMusic };
};
