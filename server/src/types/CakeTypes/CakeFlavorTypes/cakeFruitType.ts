import { Document } from "mongoose";

export interface ICakeFruit extends Document {
    id: number;
    hasFruit: boolean;
    fruitType: string;
    totalPrice: number;
}
