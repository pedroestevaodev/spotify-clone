import { SidebarItemProps } from "@/types/components";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const SidebarItem = ({ 
    icon: Icon, 
    label, 
    active, 
    href
}: SidebarItemProps) => {
    return (
        <Link 
            href={href}
            className={twMerge(
                "flex flex-row items-center gap-x-4 h-auto w-full text-base text-neutral-400 hover:text-white font-medium cursor-pointer py-1 transition",
                active && "text-white",
            )}
        >
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    );
};

export { SidebarItem };