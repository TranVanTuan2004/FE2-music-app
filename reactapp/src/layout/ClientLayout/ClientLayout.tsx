import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/client/Sidebar'
import Player from '../../components/client/Player'
import Header from '../../components/client/Header'
import Playlist from '../../components/client/PlayList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const ClientLayout = () => {


    return (
        <div className="h-screen overflow-hidden bg-black relative">
            <Header />
            <div className="h-[78%] flex">
                <Sidebar />
                <div className="w-[77%] overflow-y-scroll no-scrollbar overflow-x-clip m-2 rounded-lg bg-[#121212] text-white lg:ml-0">
                    <Outlet />
                </div>
                {/* {isPlayList ? <div className='visually-hidden'><Playlist /></div> : <div className='text-white' onClick={() => dispatch(setOpenModel())}>Open</div>} */}
                <Playlist />
            </div>
            <Player />
        </div>
    )
}
export default ClientLayout