import { IUser } from "../interfaces/IUser";

export const USER_INFO = "USER_INFO";


export const localUser = {
    get: () => {
        let dataJson = localStorage.getItem('user');
        if (!dataJson) return null;
        return JSON.parse(dataJson);
    },

    set: (userInfo: IUser | null) => {
        let dataJson = JSON.stringify(userInfo);
        localStorage.setItem('user', dataJson)
    },

    remove: () => {
        localStorage.removeItem('user');
    },

}


