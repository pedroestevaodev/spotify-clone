'use client';

import { useLoadImage } from "@/hooks/useLoadImage";
import { MediaItemProps } from "@/types/components";
import Image from "next/image";

const MediaItem = ({ data, onClick }: MediaItemProps) => {
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }
    };

    return (
        <div
            className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
            onClick={handleClick}
        >
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image 
                    className="object-cover"
                    src={imageUrl || '/imgs/liked.jpg'}
                    fill
                    alt="Media Item"
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">{data.title}</p>
                <p className="text-neutral-400 text-sm truncate">{data.author}</p>
            </div>
        </div>
    );
};

export { MediaItem };