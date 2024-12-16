'use client';

import { ChildrenProps } from "@/types/nextjs";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

const Sidebar = ({ children }: ChildrenProps) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname === '/',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);
    
    return (
        <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;