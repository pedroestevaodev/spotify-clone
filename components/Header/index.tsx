'use client';

import { HeaderProps } from "@/types/components";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";

const Header = ({ children, className }: HeaderProps) => {
    const router = useRouter();

    // const handleLogout = () => {

    // }

    return (
        <div
            className={twMerge(
                "h-fit bg-gradient-to-b from-emerald-800 p-6",
                className,
            )}
        >
            <div className="flex items-center justify-between w-full mb-4">
                <div className="hidden md:flex items-center gap-x-2">
                    <button
                        type="button"
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft
                            size={35}
                            className="text-white"
                        />
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight
                            size={35}
                            className="text-white"
                        />
                    </button>
                </div>
                <div className="flex md:hidden items-center gap-x-2">
                    <button
                        type="button"
                        className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2"
                    >
                        <HiHome
                            size={20}
                            className="text-black"
                        />
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2"
                    >
                        <BiSearch
                            size={20}
                            className="text-black"
                        />
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <>
                        <div>
                            <Button
                                className="bg-transparent text-neutral-300 font-medium"
                                onClick={() => {}}
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="bg-white px-6 py-2"
                                onClick={() => {}}
                            >
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
};

export { Header };