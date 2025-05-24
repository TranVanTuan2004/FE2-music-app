import { Avatar, Button, Dialog, DialogContent, DialogTitle, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import { CheckCircle, Edit2, Edit3Icon, MoreHorizontalIcon, MoreVerticalIcon } from "lucide-react";
import React, { useState } from "react";

const artists = [
    { name: "Vũ Cát Tường", image: "https://link-to-image/vucat.jpg" },
    { name: "buitruonglinh", image: "https://link-to-image/buitruonglinh.jpg" },
    { name: "T.R.I", image: "https://link-to-image/tri.jpg" },
    { name: "Tuấn Hưng", image: "https://link-to-image/tuanhung.jpg" },
    { name: "Obito", image: "https://link-to-image/obito.jpg" },
    { name: "Chillies", image: "https://link-to-image/chillies.jpg" },
];

const topSongs = [
    {
        id: 1,
        title: "trở thành quá khứ",
        artist: "T.R.I",
        album: "trở thành quá khứ",
        duration: "4:24",
        playing: false,
        img: "https://i.scdn.co/image/ab67616d00001e02c401ba2dcd1aef3fa0387f1b",
    },
    {
        id: 2,
        title: "Phép Màu - Đàn Cá Gỗ Original Soundtrack",
        artist: "MAYDAYs, Minh Tốc & Lam",
        album: "Phép Màu (Đàn Cá Gỗ OST)",
        duration: "4:26",
        playing: true,
        img: "https://i.scdn.co/image/ab67616d00001e02a7c61be73192f0c7f0fbc6d5",
    },
    {
        id: 3,
        title: "Mơ",
        artist: "Vũ Cát Tường",
        album: "Mơ",
        duration: "4:22",
        playing: false,
        img: "https://i.scdn.co/image/ab67616d00001e02aa9d02b3e302eef0ddee85f3",
    },
    {
        id: 4,
        title: "Vết Mưa",
        artist: "Vũ Cát Tường",
        album: "Giải Mã",
        duration: "3:30",
        playing: false,
        img: "https://i.scdn.co/image/ab67616d00001e0271790f1530bbd50c8ac851ce",
    },
];

export default function Profile() {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    const [name, setName] = useState(user?.name || "");

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 py-18 px-6">
                <div className="flex items-center gap-4">
                    <div className="w-30 h-30 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5.121 17.804A9 9 0 0112 3a9 9 0 016.879 14.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-gray-300">Hồ sơ</div>
                        <h1 className="text-4xl font-bold">{user?.name}</h1>
                        <p className="text-sm text-gray-400 mt-1">• 2 đang theo dõi</p>
                    </div>

                </div>
            </div>
            <div className="px-6 py-8">
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <MoreHorizontalIcon className="text-gray-500" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    PaperProps={{
                        sx: {
                            bgcolor: '#282828',
                            color: 'white',
                            minWidth: 120
                        }
                    }}
                >
                    <MenuItem onClick={() => { setOpenDialog(true); setAnchorEl(null); }} >
                        <Edit2 />
                        <div className="ml-2">
                            Chỉnh sửa hồ sơ
                        </div>
                    </MenuItem>
                </Menu>
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle sx={{ bgcolor: "#121212", color: "white" }}>
                        Chi tiết hồ sơ
                    </DialogTitle>
                    <DialogContent sx={{ bgcolor: "#121212", color: "white" }}>
                        <div className="flex items-center justify-around gap-6 py-6">
                            <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center">
                                <svg className="w-12 h-12 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M5.121 17.804A9 9 0 0112 3a9 9 0 016.879 14.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="w-full ">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={name}
                                    placeholder="Your name"
                                    onChange={(e) => setName(e.target.value)}
                                    InputProps={{
                                        style: { backgroundColor: "#2a2a2a", color: "white" }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        // Save logic (ví dụ cập nhật localStorage nếu muốn)
                                        localStorage.setItem("user", JSON.stringify({ ...user, name }));
                                        setOpenDialog(false);
                                    }}
                                    sx={{
                                        borderRadius: "999px",
                                        px: 4,
                                        py: 1,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        bgcolor: "white",
                                        color: "black",
                                        marginTop: '12px',
                                        "&:hover": {
                                            bgcolor: "#e5e5e5"
                                        }
                                    }}
                                >
                                    Lưu
                                </Button>
                            </div>


                        </div>

                        <p className="text-xs text-neutral-400 text-center mt-2">
                            Bằng cách tiếp tục, bạn đồng ý cho phép Spotify truy cập vào hình ảnh bạn đã chọn để tải lên.
                            Vui lòng đảm bảo bạn có quyền tải lên hình ảnh.
                        </p>
                    </DialogContent>
                </Dialog>

            </div>

            {/* Danh sách nghệ sĩ */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Nghệ sĩ hàng đầu tháng này</h2>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                    {artists.map((artist, index) => (
                        <div key={index} className="min-w-[120px] text-center">
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-2 bg-zinc-700">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="object-cover w-full h-full"
                                // onError={(e) => (e.target.src = "https://via.placeholder.com/112")}
                                />
                            </div>
                            <div className="text-sm font-medium">{artist.name}</div>
                            <div className="text-xs text-gray-400">Nghệ sĩ</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 text-white">
                <h2 className="text-2xl font-bold mb-2">Bản nhạc hàng đầu tháng này</h2>
                <p className="text-sm text-neutral-400 mb-4">Chỉ hiển thị với bạn</p>
                <div className="grid grid-cols-2 gap-6">
                    {/* Left side: Song list */}
                    <div className="space-y-3">
                        {topSongs.map((song, i) => (
                            <div key={song.id} className="flex items-center gap-3">
                                <div className="w-6 text-right text-sm">{i + 1}</div>
                                <img
                                    src={song.img}
                                    alt={song.title}
                                    className="w-10 h-10 rounded object-cover"
                                />
                                <div>
                                    <div className="text-xs text-neutral-400">{song.artist}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Details */}
                    <div className="text-sm space-y-4">
                        {topSongs.map((song) => (
                            <div key={song.id} className="flex justify-between items-center">
                                <span>{song.album}</span>
                                <div className="flex items-center gap-2">
                                    {song.playing && <CheckCircle className="w-4 h-4 text-green-500" />}
                                    <span>{song.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
}
