import { toast } from "react-toastify";
import axiosInstance from "../configs/axios"

const getFavorites = async () => {
    const response = await axiosInstance.get(`favorite/getFavorites`)
    return response.data;
}

const addFavorite = async (songId: number) => {
    try {
        const response = await axiosInstance.post('favorite/toggle', { songId });
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            toast.error('Vui lòng đăng nhập để thêm yêu thích');
        } else {
            toast.error('Đã có lỗi xảy ra');
        }
    }
};

const toggleFavoriteArtist = async (artistId: number) => {
    try {
        const response = await axiosInstance.post('/artists/favorite', { artistId });
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            toast.error('Vui lòng đăng nhập để thêm yêu thích');
        } else {
            toast.error('Đã có lỗi xảy ra');
        }
    }
};


export { getFavorites, addFavorite, toggleFavoriteArtist };