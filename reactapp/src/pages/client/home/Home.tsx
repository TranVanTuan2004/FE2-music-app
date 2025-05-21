import React, { useState } from 'react'
import SongList from '../../../components/client/SongList'
import ArtistList from '../../../components/client/ArtistList'
import Footer from '../../../components/client/Footer'


const Home = () => {
    return (
        <div className="min-w-full px-6 pt-4 rounded-lg whitespace-nowrap bg-[#121212] text-white lg:w-[75%] lg:ml-0">
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
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Nghệ sĩ phổ biến</h1>
                <ArtistList />
            </div>
        </div>
    )
}

export default Home