'use client';

import { ChildrenProps } from "@/types/nextjs";
import { Database } from "@/types/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const SupabaseProvider = ({ children }: ChildrenProps) => {
    const [supabaseClient] = useState(() => createClientComponentClient<Database>());

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
};

export { SupabaseProvider };