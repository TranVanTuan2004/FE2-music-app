import { configureStore } from '@reduxjs/toolkit'
import toastReducer from './slice/toastSlice'
import authReducer from './slice/authSlice'
import playerReducer from './slice/playerSlice'


export const store = configureStore({
    reducer: {
        toast: toastReducer,
        auth: authReducer,
        player: playerReducer

    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch