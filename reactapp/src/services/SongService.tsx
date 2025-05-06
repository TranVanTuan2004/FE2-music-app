import { SongListProps } from "../components/client/SongList";
import axiosInstance from "../configs/axios"

const getAllSongs = async (params?: SongListProps) => {
    const response = await axiosInstance.get('songs', { params: params });
    return response.data;
}

const getSongById = async (id: number) => {
    const response = await axiosInstance.get(`songs/${id}}`)
    return response.data;
}

const getPlayList = async (id: number) => {
    const response = await axiosInstance.get(`songs/${id}/playlist`)
    return response.data;
}

export { getAllSongs, getSongById, getPlayList }