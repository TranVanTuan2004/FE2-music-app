// src/features/songs/songsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const modelSlice = createSlice({
    name: 'model',
    initialState: {
        isClose: false
    },
    reducers: {
        setOpenModel(state) {
            state.isClose = false;
        },
        setCloseModel(state) {
            state.isClose = true;
        },

    },
});

export const { setOpenModel, setCloseModel } = modelSlice.actions;

export default modelSlice.reducer;