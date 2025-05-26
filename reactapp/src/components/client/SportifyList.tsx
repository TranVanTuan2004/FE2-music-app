import React from "react";
import PlaylistCard from "./PlayListCard";

const playlists = [
    {
        url: "https://cdn.pixabay.com/video/2015/12/11/1651-148614472_medium.mp4",
        title: "Cà Phê Quán Quen",
        subtitle: "Danh sách phát • Spotify",
        description: "Quán vắng, một mình, ca khúc quen và cảm giác lạ.",
    },
    {
        url: "https://media.istockphoto.com/id/1457472452/vi/video/t%C3%ACnh-y%C3%AAu-l%E1%BB%85-h%E1%BB%99i.mp4?s=mp4-640x640-is&k=20&c=yvEzQqH1vojSjLmjCz9jx0yAITWhbTfmJsDqvljhZY8=",
        title: "This Is RHYDER",
        subtitle: "Danh sách phát • Spotify",
        description: "This is RHYDER. Các bản nhạc bạn nên nghe, tất cả trong một danh sách phát.",
    },
    {
        url: "https://cdn.pixabay.com/video/2015/11/07/1275-145116912_medium.mp4",
        title: "Anh Muốn Nhìn Thấy Em",
        subtitle: "Đĩa đơn • The Wind, Dangrangto",
        description: "",
    },
    {
        url: "https://cdn.pixabay.com/video/2017/03/20/8453-209292199_large.mp4",
        title: "V-Pop",
        subtitle: "Đĩa đơn • The Wind, Dangrangto",
        description: "",
    },
    {
        url: "https://cdn.pixabay.com/video/2018/01/14/13785-254542762_large.mp4",
        title: "Anh Muốn Nhìn Thấy Em",
        subtitle: "Đĩa đơn • The Wind, Dangrangto",
        description: "",
    },
    {
        url: "https://cdn.pixabay.com/video/2020/07/02/43638-436237669_large.mp4",
        title: "Anh Muốn Nhìn Thấy Em",
        subtitle: "Đĩa đơn • The Wind, Dangrangto",
        description: "",
    },
];

const SportifyList = () => {
    return (
        <div className="min-h-screen text-white mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-10">
                {playlists.map((pl, idx) => (
                    <PlaylistCard key={idx} {...pl} />
                ))}
            </div>
        </div>
    );
};

export default SportifyList;
