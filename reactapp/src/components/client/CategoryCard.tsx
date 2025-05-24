import React from 'react';

interface CategoryCardProps {
    title: string;
    image: string;
    color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, color }) => {
    return (
        <div className={`relative h-40 p-4 rounded-lg overflow-hidden ${color} cursor-pointer hover:scale-105 transition-transform`}>
            <h2 className="text-white text-xl font-bold z-10 relative">{title}</h2>
            <img
                src={image}
                alt={title}
                className="absolute bottom-0 right-0 w-32 object-cover rotate-[25deg] translate-x-3 translate-y-3 z-0"
            />
        </div>
    );
};

export default CategoryCard;