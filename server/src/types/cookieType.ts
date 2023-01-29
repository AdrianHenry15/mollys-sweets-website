import { Document } from "mongoose";

export interface ICookie extends Document {
    cookieBase: {
        regular: boolean;
        mini: boolean;
        quantity: string;
        totalPrice: number;
    };
    cookieFlavor: {
        flavor: string;
        frosting: boolean;
        frostingType: string;
        totalPrice: number;
    };
}
