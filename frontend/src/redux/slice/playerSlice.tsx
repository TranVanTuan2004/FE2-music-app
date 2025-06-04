// src/features/songs/songsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Playlist from '../../components/client/PlayList';
export interface Track {
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
    isLoading: boolean;
    currentTrack: Track | null;
    currentIndex: number;
    playlist: Track[];
    isRepeat: boolean;
}

const initialState: PlayerState = {
    isPlaying: false,
    isLoading: false,
    isRepeat: (() => {
        const value = localStorage.getItem('isRepeat');
        return value ? JSON.parse(value) : false
    })(),
    currentTrack: (() => {
        const track = localStorage.getItem('currentSong');
        return track ? JSON.parse(track) : null;
    })(),
    currentIndex: (() => {
        const index = localStorage.getItem('currentIndex');
        return index ? JSON.parse(index) : -1;
    })(),
    playlist: (() => {
        const playList = localStorage.getItem('playList');
        return playList ? JSON.parse(playList) : [];
    })(),
}

const setTrackLocal = (state: any) => {
    localStorage.setItem('currentSong', JSON.stringify(state.currentTrack));
    localStorage.setItem('currentIndex', JSON.stringify(state.currentIndex));
    localStorage.setItem('playList', JSON.stringify(state.playlist));
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        loading(state, action) {
            state.isLoading = action.payload;
        },
        play(state) {
            state.isPlaying = true;
        },
        pause(state) {
            state.isPlaying = false;
        },
        setTrack(state, action) {
            state.isPlaying = true;
            state.currentIndex = 0;
            state.currentTrack = action.payload[0] || null;
            state.playlist = action.payload;
            setTrackLocal(state);
        },
        setPlayList(state, action) {
            state.playlist = action.payload
            setTrackLocal(state);
        },

        repeatTrack(state) {
            state.isRepeat = !state.isRepeat
            localStorage.setItem('isRepeat', JSON.stringify(state.isRepeat));
        },

        playTrackAt(state, action) {
            console.log(action.payload)
            const index = action.payload.index;
            if (index >= 0 && index < state.playlist.length) {
                if (state.currentIndex !== index) {
                    state.isPlaying = true;
                } else {
                    state.isPlaying = action.payload.isPlaying;
                }
                state.currentIndex = index;
                state.currentTrack = state.playlist[index];
                setTrackLocal(state);
            }
        },

        nextTrack(state) {
            if (state.currentIndex + 1 < state.playlist.length) {
                state.currentIndex += 1;
                state.currentTrack = state.playlist[state.currentIndex];
                state.isPlaying = true;
                setTrackLocal(state);
            }
        },

        prevTrack(state) {
            if (state.currentIndex >= 0) {
                state.currentIndex -= 1;
                state.currentTrack = state.playlist[state.currentIndex];
                state.isPlaying = true;
                setTrackLocal(state);
            }
        }

    },
});
export const { loading, play, pause, setTrack, playTrackAt, nextTrack, prevTrack, repeatTrack, setPlayList } = playerSlice.actions

export default playerSlice.reducer;