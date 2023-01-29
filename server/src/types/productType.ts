import { Document } from "mongoose";

export interface IProduct extends Document {
    id: number;
    category: string;
    cakeBase?: {
        singleTier: boolean;
        multipleTier: boolean;
        roundCake: boolean;
        sheetCake: boolean;
        cakeSize: string;
        totalPrice: number;
    };
    cupcakeBase?: {
        regular: boolean;
        mini: boolean;
        quantity: string;
        totalPrice: number;
    };
    cookieBase?: {
        regular: boolean;
        mini: boolean;
        quantity: string;
        totalPrice: number;
    };
    cakeFlavor?: {
        flavor: string;
        filling: string;
        frosting: string;
        fruit: boolean;
        fruitType?: string;
        totalPrice: number;
    };
    cupcakeFlavor?: {
        flavor: string;
        frosting: string;
        totalPrice: number;
    };
    cookieFlavor?: {
        flavor: string;
        frosting: boolean;
        frostingType?: string;
        totalPrice: number;
    };
    dateOfEvent: Date;
    pickUpOrDelivery: boolean;
    arrivalTime: Date;
    occasion: string;
    recipient: string;
    preferredColors: string;
    additionalDetails: string;
    totalPrice: number;
    linkExample?: string;
    imageURL?: string;
    description?: string;
}
