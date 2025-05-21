import React from 'react';

const ArtistItem = ({ name, imageUrl }: any) => {
    return (
        <div className="flex flex-col items-center text-white w-36">
            <div className="w-36 h-36 rounded-full overflow-hidden border border-gray-700">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="mt-2 text-sm text-center">{name}</p>
        </div>
    );
};

export default ArtistItem;