import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { createOrRetrieveCustomer } from "@/lib/supabaseAdmin";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export const POST = async () => {
    try {
        const supabase = createRouteHandlerClient({ cookies });

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) throw new Error('Could not get user');

        const customer = await createOrRetrieveCustomer({
            uuid: user.id || '',
            email: user.email || '',
        });

        if (!customer) throw new Error('Could not get customer');

        const { url } = await stripe.billingPortal.sessions.create({ customer });

        return NextResponse.json({ url });
    } catch (error: any) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
};