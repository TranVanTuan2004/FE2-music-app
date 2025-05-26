import React from "react";

const PlaylistCard = ({ url, title, description, subtitle }: any) => {
    return (
        <div className="min-h-[520px] bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors cursor-pointer">
            <div className="relative">
                <video
                    src={url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full min-h-[520px] object-cover rounded-lg"
                />
            </div>
            {/* <div className="p-4">
                <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
                <p className="text-zinc-400 text-sm">{subtitle}</p>
                <p className="text-zinc-300 text-sm mt-2 line-clamp-2">{description}</p>
            </div> */}
        </div>
    );
};

export default PlaylistCard;
