import { User } from "@supabase/auth-helpers-nextjs";
import { UserDetails } from "./users";
import { Subscription } from "./subscriptions";

export type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};