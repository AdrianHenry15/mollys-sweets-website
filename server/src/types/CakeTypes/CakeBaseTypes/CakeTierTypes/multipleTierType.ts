import { Document } from "mongoose";

export interface IMultipleTier extends Document {
    id: number;
    isTier: boolean;
    totalPrice: number;
}
