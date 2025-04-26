import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/client/Sidebar'
import Player from '../../components/client/Player'
import Header from '../../components/client/Header'

const ClientLayout = () => {
    return (
        <div className="h-screen overflow-hidden bg-black relative">
            <Header />
            <div className="h-[78%] flex">
                <Sidebar />
                <div className="w-[82%] overflow-y-scroll overflow-x-clip m-2 rounded bg-[#121212] text-white lg:ml-0">
                    <Outlet />
                </div>
            </div>
            <Player />
        </div>
    )
}
export default ClientLayout