'use client';

import { useLoadImage } from "@/hooks/useLoadImage";
import { SongItemProps } from "@/types/components";
import Image from "next/image";
import { PlayButton } from "../PlayButton";

const SongItem = ({ data, onClick }: SongItemProps) => {
    const imagePath = useLoadImage(data);

    return (
        <div 
            className="relative group flex flex-col items-center justify-center gap-x-4 rounded-md overflow-hidden bg-neutral-400/5 hover:bg-neutral-400/10 cursor-pointer p-3 transition"
            onClick={() => onClick(data.id)}
        >
            <div className="relative aspect-square size-full rounded-md overflow-hidden">
                <Image 
                    className="object-cover"
                    src={imagePath || '/imgs/liked.jpg'}
                    fill
                    alt="Image"
                />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">{data.title}</p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.author}</p>
            </div>
            <div className="absolute bottom-24 right-[15px]">
                <PlayButton />
            </div>
        </div>
    );
};

export { SongItem };