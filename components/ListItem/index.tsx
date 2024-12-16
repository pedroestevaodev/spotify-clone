'use client';

import { ListItemProps } from "@/types/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ListItem = ({
    image,
    name,
    href
}: ListItemProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    };

    return (
        <button
            type="button"
            className="relative group flex items-center gap-x-4 rounded-md overflow-hidden bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
            onClick={onClick}
        >
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                    className="object-cover"
                    src={image}
                    alt="Image"
                    fill
                />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="absolute right-5 transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110">

            </div>
        </button>
    );
};

export { ListItem };