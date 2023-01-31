import { Document } from "mongoose";

export interface ISingleTier extends Document {
    id: number;
    isTier: boolean;
    totalPrice: number;
}
