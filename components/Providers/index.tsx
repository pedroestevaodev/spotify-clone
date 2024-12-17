import { ChildrenProps } from "@/types/nextjs";
import { SupabaseProvider } from "./SupabaseProvider";
import { UserProvider } from "./UserProvider";
import { ModalProvider } from "./ModalProvider";
import { ToasterProvider } from "./ToasterProvider.tsx";
import { getActiveProductsWithPrices } from "@/actions/getActiveProductsWithPrices";

const Providers = async ({ children }: ChildrenProps) => {
    const products = await getActiveProductsWithPrices();

    return (
        <SupabaseProvider>
            <UserProvider>
                <ToasterProvider />
                <ModalProvider products={products} />
                {children}
            </UserProvider>
        </SupabaseProvider>
    );
};

export default Providers;