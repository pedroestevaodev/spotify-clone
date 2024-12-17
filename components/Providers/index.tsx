import { ChildrenProps } from "@/types/nextjs";
import { SupabaseProvider } from "./SupabaseProvider";
import { UserProvider } from "./UserProvider";
import { ModalProvider } from "./ModalProvider";
import { ToasterProvider } from "./ToasterProvider.tsx";

const Providers = ({ children }: ChildrenProps) => {
    return (
        <SupabaseProvider>
            <UserProvider>
                <ToasterProvider />
                <ModalProvider />
                {children}
            </UserProvider>
        </SupabaseProvider>
    );
};

export default Providers;