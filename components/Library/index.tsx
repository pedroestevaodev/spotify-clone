'use client';

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
    const onClick = () => {

    };

    return (
        <div className="flex flex-col">
            <div
                className="flex items-center justify-between px-5 py-4"
            >
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-base">Your Library</p>
                </div>
                <AiOutlinePlus 
                    size={20} 
                    className="text-neutral-400 hover:text-white cursor-pointer transition"
                    onClick={onClick}    
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Song!
            </div>
        </div>
    );
};

export { Library };