'use client';

import { MyUserContextProvider } from "@/hooks/useUser";
import { ChildrenProps } from "@/types/nextjs";

const UserProvider = ({ children }: ChildrenProps) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
};

export { UserProvider };