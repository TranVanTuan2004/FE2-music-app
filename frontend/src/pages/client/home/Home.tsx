import React, { useState } from 'react'
import SongList from '../../../components/client/SongList'
import ArtistList from '../../../components/client/ArtistList'
import Footer from '../../../components/client/Footer'
import TopCategory from '../../../components/client/TopCategory'
import SportifyList from '../../../components/client/SportifyList'
const tabs = ['Tất cả', 'Nhạc', 'Podcasts'];

const Home = () => {
    return (
        <div className="min-w-full px-6 pt-4 rounded-lg whitespace-nowrap bg-[#121212] text-white lg:w-[75%] lg:ml-0">
            <div>
                <div className="flex gap-2 py-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition bg-neutral-800 text-white hover:bg-neutral-700`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <TopCategory />
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Được đề xuất hôm nay</h1>
                <SongList params={{ limit: 20 }} />
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Những bản nhạc ballad</h1>
                <SongList params={{ limit: 20, genre: 2 }} />
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Nghệ sĩ phổ biến</h1>
                <ArtistList />
            </div>
            <div className="my-12">
                <h1 className="my-5 font-bold text-2xl">Khám phá Sportify</h1>
                <SportifyList />
            </div>
        </div>
    )
}

export default Home