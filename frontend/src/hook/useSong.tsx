// src/hooks/useSongs.ts
import { useQuery } from "@tanstack/react-query";
import { getAllSongs } from "../services/SongService";
import { SongListProps } from "../components/client/SongList";

const useSong = (params?: SongListProps) => {
    return useQuery({
        queryKey: ['songs', params],
        queryFn: () => getAllSongs(params),
    });
};

export default useSong;