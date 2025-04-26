// src/features/songs/songsSlice.js
import { createSlice } from '@reduxjs/toolkit';
export interface Song {
    id: string;
    title: string;
    artist: string;
    genre: string;
    duration: number
    release_date: Date
    image: string;
    path: string;
}

interface PlayerState {
    isPlaying: boolean;
    currentTrack: Song | null;
}

const initialState: PlayerState = {
    isPlaying: false,
    currentTrack: null,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        play(state) {
            state.isPlaying = true;
        },
        pause(state) {
            state.isPlaying = false;
        },
        setTrack(state, action) {
            state.isPlaying = true;
            state.currentTrack = action.payload;
        }
    },
});
export const { play, pause, setTrack } = playerSlice.actions

export default playerSlice.reducer;