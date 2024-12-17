import { ModalProps } from "@/types/components";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

const Modal = ({
    isOpen,
    onChange,
    title,
    description,
    children
}: ModalProps) => {
    return (
        <Dialog
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm" />

                <DialogContent
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md border border-neutral-700 max-h-full size-full md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 p-[25px] focus:outline-none"
                >
                    <DialogClose className="absolute top-[10px] right-[10px] inline-flex items-center justify-center size-[25px] text-neutral-400 hover:text-white focus:outline-none">
                        <IoMdClose size={20} />
                    </DialogClose>
                    <DialogTitle className="text-xl text-center font-bold mb-4">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-normal text-center mb-5">
                        {description}
                    </DialogDescription>
                    <div>
                        {children}
                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
};

export { Modal };