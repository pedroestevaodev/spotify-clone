import { Price } from "./subscriptions";

export interface PostDataProps {
    url: string;
    data?: {
        price: Price;
    };
};

export interface CreateOrRetrieveACustomerProps {
    email: string;
    uuid: string;
};