import React from 'react'
import Navbar from '../../../components/client/Navbar'
import { useQuery } from '@tanstack/react-query'
import { getAllSongs } from '../../../services/SongService'
import SongItem from '../../../components/client/SongItem'
import SongList from '../../../components/client/SongList'

const Home = () => {

    return (
        <div className="min-w-full m-2 px-6 pt-4 rounded whitespace-nowrap bg-[#121212] text-white lg:w-[75%] lg:ml-0">
            {/* <Navbar /> */}
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex">
                    {/* {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))} */}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Được đề xuất hôm nay</h1>
                <SongList />
            </div>
        </div>
    )
}

export default Home