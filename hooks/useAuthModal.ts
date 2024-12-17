import { ModalStore } from "@/types/components";
import { create } from "zustand";

const useAuthModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false }))
}));

export default useAuthModal;