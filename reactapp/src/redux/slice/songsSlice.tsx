// src/features/songs/songsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    isPlaying: false,
    currentTrack: null,
  },
  reducers: {

  },
});

export default songsSlice.reducer;