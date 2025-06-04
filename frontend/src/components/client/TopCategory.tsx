import React, { useState } from 'react';
import { getRecentItems } from '../../utils/localRecent';
import { BASE_URL } from '../../../config';
import { Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const playlists = [
    { title: 'Bài hát đã thích', image: '/liked-songs.png' },
    { title: 'Bạn Lòng', image: '/ban-long.jpg' },
    { title: 'Minh Tốc & Lam', image: '/minh-toc-lam.jpg' },
    { title: 'V-Pop Không Thể Thiếu', image: '/vpop-khong-the-thieu.jpg' },
    { title: 'Tình cờ yêu em', image: '/tinh-co-yeu-em.jpg' },
    { title: '50 bài hát hàng đầu tại Việt Nam', image: '/top50-vn.jpg' },
    { title: 'Vũ Cát Tường', image: '/vu-cat-tuong.jpg' },
    { title: 'Tất cả các bài hát của Sơn Tùng M-TP', image: '/son-tung.jpg' },
];

const TopCategory = () => {
    const playLists = getRecentItems();
    const navigate = useNavigate();

    const handleNavigate = (item: any) => {
        item?.name ? navigate(`artist/${item.id}`) : navigate(`track/${item.id}`)
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link to={'/favorite'} className="flex items-center gap-3 h-16 bg-neutral-800 rounded-[6px] overflow-hidden hover:bg-neutral-700 transition">
                <div className="w-16 h-full bg-gray-700 flex items-center justify-center rounded">
                    <Heart className="text-purple-500" />
                </div>
                <div>
                    <p className="text-[15px] font-medium">Bài hát đã thích</p>
                </div>
            </Link>
            {playLists.map((item: any, index) => (
                <div onClick={() => handleNavigate(item)} key={index} className="bg-neutral-800 rounded-[6px] cursor-pointer h-16 overflow-hidden flex items-center gap-4 hover:bg-neutral-700 transition">
                    <img src={`${BASE_URL}/storage/${item?.image}`} className="w-16 h-full rounded" />
                    <span className="text-white text-sm font-semibold">{item?.name ? item?.name.length > 15 ? item?.name.slice(0, 15) + '...' : item?.name : item?.title.length > 15 ? item?.title.slice(0, 15) + ' ...' : item?.title}</span>
                </div>
            ))}
        </div>
    );
}

export default TopCategory