'use client';

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { LibraryProps } from "@/types/components";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { MediaItem } from "../MediaItem";
import { useOnPlay } from "@/hooks/useOnPlay";

const Library = ({ songs }: LibraryProps) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onPlay = useOnPlay(songs);

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        return uploadModal.onOpen();
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
                {songs.map((item) => (
                    <MediaItem
                        key={item.id}
                        data={item}
                        onClick={(id: string) => onPlay(id)}
                    />
                ))}
            </div>
        </div>
    );
};

export { Library };