'use client';

import { AuthModal } from "@/components/modals/AuthModal";
import { SubscribeModal } from "@/components/modals/SubscribeModal";
import { UploadModal } from "@/components/modals/UploadModal";
import { ModalProviderProps } from "@/types/components";
import { useEffect } from "react";
import { useState } from "react";

const ModalProvider = ({ products }: ModalProviderProps) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);

        return () => setIsMounted(false);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    );
};

export { ModalProvider };