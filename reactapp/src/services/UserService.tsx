import { toast } from "react-toastify";
import axiosInstance from "../configs/axios";
import { setToast, toastSlice } from "../redux/slice/toastSlice";

const pagination = async (page: number, perPage: number = 10) => {
    const response = await axiosInstance.get(`/users?page=${page}&perPage=${perPage}`);
    return response.data;
}

const updateStatus = async (id: number, publish: number) => {
    const reponse = await axiosInstance.put(`users/${id}/status`, { publish: publish });
    return reponse.data;
}


// favorite artist

const toggleFollowArtist = async (artistId: number) => {
    try {
        const response = await axiosInstance.post(`favorite/${artistId}/artist`)
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            toast.error('Vui lòng đăng nhập');
        } else {
            toast.error('Đã có lỗi xảy ra');
        }
    }
}

const fetchFollowStatus = async (artistId: number) => {
    try {
        const response = await axiosInstance.get(`favorite/${artistId}/artist`)
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            return;
        }
    }
}

const getAllArtistFavorite = async () => {
    try {
        const response = await axiosInstance.get(`favorite/artists`)
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            return;
        }
    }
}






// favorite song
const getFavoriteListSong = async () => {
    try {
        const response = await axiosInstance.get(`favorite/songs`)
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            return;
        }
    }
}


const getStatusFavoiteSong = async (songId: number) => {
    const response = await axiosInstance.get(`favorite/${songId}/song`)
    return response.data;
}

const toggleFavoriteSong = async (songId: number) => {
    try {
        const response = await axiosInstance.post(`favorite/${songId}/song`);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            toast.error('Vui lòng đăng nhập để thêm yêu thích');
        } else {
            toast.error('Đã có lỗi xảy ra');
        }
    }
};

const search = async (keyword: string) => {
    const response = await axiosInstance.get('search', {
        params: {
            keyword: keyword
        }
    })
    return response.data;
}
export { pagination, updateStatus, toggleFollowArtist, fetchFollowStatus, getFavoriteListSong, getStatusFavoiteSong, toggleFavoriteSong, getAllArtistFavorite, search };