import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser'
import { localUser } from '../../utils/localUser'


export interface AuthState {
    isAuthenticated: boolean,
    user: IUser | null
}

// Define the initial state using that type
const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLogin: (state, action: PayloadAction<IUser | null>) => {
            state.isAuthenticated = true;
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        setAuthLogout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    }

})

export const { setAuthLogin, setAuthLogout } = authSlice.actions

export default authSlice.reducer