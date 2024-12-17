'use client';

import { AuthModal } from "@/components/modals/AuthModal";
import { UploadModal } from "@/components/modals/UploadModal";
import { useEffect } from "react";
import { useState } from "react";

const ModalProvider = () => {
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
        </>
    );
};

export { ModalProvider };