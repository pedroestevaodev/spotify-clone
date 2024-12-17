'use client';

import { SubscribeModalProps } from "@/types/components";
import { Modal } from "../Modal";
import { Button } from "@/components/Button";
import { formatPrice, postData } from "@/lib/helpers";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { Price } from "@/types/subscriptions";
import toast from "react-hot-toast";
import { getStripe } from "@/lib/stripeClient";
import useSubscribeModal from "@/hooks/useSubscribeModal";

const SubscribeModal = ({ products }: SubscribeModalProps) => {
    const subscribeModal = useSubscribeModal();
    const { user, isLoading, subscription } = useUser();
    const [priceIdLoading, setPriceIdLoading] = useState<string | null>(null);

    const onChange = (open: boolean) => {
        if (!open) {
            subscribeModal.onClose();
        }
    };

    const handleCheckout = async (price: Price) => {
        setPriceIdLoading(price.id);

        if (!user) {
            setPriceIdLoading(null);
            return toast.error('Must be logged in.');
        }

        if (subscription) {
            setPriceIdLoading(null);
            return toast('Already subscribed.');
        }

        try {
            const { sessionId } = await postData({
                url: '/api/create-checkout-session',
                data: { price }
            });

            const stripe = await getStripe();
            stripe?.redirectToCheckout({ sessionId });
        } catch (error) {
            toast.error((error as Error)?.message);
        } finally {
            setPriceIdLoading(null);
        }
    };

    let content = (
        <div className="text-center">
            No products available.
        </div>
    );

    if (products.length) {
        content = (
            <div>
                {products.map((product) => {
                    if (!product.prices?.length) {
                        return (
                            <div key={product.id} className="text-center">
                                No prices available.
                            </div>
                        );
                    }

                    return product.prices.map((price) => {
                        return (
                            <Button 
                                key={price.id}
                                className="mb-4"
                                disabled={isLoading || price.id === priceIdLoading}
                                onClick={() => handleCheckout(price)}
                            >
                                {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
                            </Button>
                        );
                    });
                })}
            </div>
        );
    }

    if (subscription) {
        content = (
            <div className="text-center">
                Already subscribed.
            </div>
        )
    }

    return (
        <Modal
            title="Only for premium users"
            description="Listen to music with no ads and offline"
            isOpen={subscribeModal.isOpen}
            onChange={onChange}
        >
            {content}
        </Modal>
    );
};

export { SubscribeModal };