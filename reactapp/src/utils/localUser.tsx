import { IUser } from "../interfaces/IUser";

export const USER_INFO = "USER_INFO";


export const localUser = {
    get: () => {
        let dataJson = localStorage.getItem(USER_INFO);
        if (!dataJson) return null;
        return JSON.parse(dataJson);
    },

    set: (userInfo: IUser | null) => {
        let dataJson = JSON.stringify(userInfo);
        localStorage.setItem(USER_INFO, dataJson)
    },

    remove: () => {
        localStorage.removeItem(USER_INFO);
    },

}