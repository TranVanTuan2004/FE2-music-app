import axiosInstance from "../configs/axios";

const pagination = async (page: number, perPage: number = 10) => {
    const response = await axiosInstance.get(`/users?page=${page}&perPage=${perPage}`);
    return response.data;
}

const updateStatus = async (id: number, publish: number) => {
    const reponse = await axiosInstance.put(`users/${id}/status`, { publish: publish });
    return reponse.data;
}

export { pagination, updateStatus };