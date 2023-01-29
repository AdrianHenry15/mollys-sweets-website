import { Document } from "mongoose";

export interface ICake extends Document {
    cakeBase: {
        singlerTier: boolean;
        multipleTier: boolean;
        roundCake: boolean;
        sheetCake: boolean;
        cakeSize: string;
    };
    cakeFlavor: {
        flavor: string;
        filling: string;
        frosting: string;
        fruit: boolean;
        fruitType: string;
        totalPrice: number;
    };
}
