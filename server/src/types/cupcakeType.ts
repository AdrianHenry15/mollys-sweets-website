import { Document } from "mongoose";

export interface ICupcake extends Document {
    cupcakeBase: {
        regular: boolean;
        mini: boolean;
        quantity: string;
        totalPrice: number;
    };
    cupcakeFlavor: {
        flavor: string;
        frosting: string;
        totalPrice: number;
    };
}
