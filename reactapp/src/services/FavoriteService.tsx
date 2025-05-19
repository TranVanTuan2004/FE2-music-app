import axiosInstance from "../configs/axios"

const getFavorites = async () => {
    const response = await axiosInstance.get(`favorite/getFavorites`)
    return response.data;
}

export { getFavorites };