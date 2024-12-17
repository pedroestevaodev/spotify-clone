import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createOrRetrieveCustomer } from "@/lib/supabaseAdmin";
import { stripe } from "@/lib/stripe";
import { getURL } from "@/lib/helpers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { price, quantity = 1, metadata = {} } = await req.json();

    try {
        const supabase = createRouteHandlerClient({
            cookies,
        });

        const { data: { user } } = await supabase.auth.getUser();

        const customer = await createOrRetrieveCustomer({
            uuid: user?.id || '',
            email: user?.email || '',
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            customer,
            line_items: [
                {
                    price: price.id,
                    quantity,
                },
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            subscription_data: {
                trial_period_days: metadata.trial_period_days,
                metadata,
            },
            success_url: `${getURL()}/account`,
            cancel_url: `${getURL()}`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error: any) {
        console.error(error);

        return new NextResponse('Internal Error', { status: 500 });
    }
};