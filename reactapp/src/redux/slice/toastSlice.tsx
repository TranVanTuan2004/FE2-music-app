import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type ToastType = 'success' | 'warning' | 'error' | null;

export interface ToastState {
    message: string
    type: ToastType
}

// Define the initial state using that type
const initialState: ToastState = {
    message: '',
    type: null
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToast: (state, action: PayloadAction<{ message: string, type: ToastType }>) => {
            state.message = action.payload.message
            state.type = action.payload.type
        },

        clearToast: (state) => {
            state.message = ''
            state.type = null
        }
    }

})

export const { setToast, clearToast } = toastSlice.actions

export default toastSlice.reducer