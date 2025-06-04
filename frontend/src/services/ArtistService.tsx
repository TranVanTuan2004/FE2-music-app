import { toast } from "react-toastify";
import axiosInstance from "../configs/axios"

const getArtistSuggested = async () => {
    const response = await axiosInstance.get(`artists/suggested`)
    return response.data;
}

const getArtistInfo = async (id: number) => {
    const response = await axiosInstance.get(`artists/${id}`)
    return response.data;
}








export { getArtistSuggested, getArtistInfo };