import { Document } from "mongoose";

export interface ICakeFruit extends Document {
    hasFruit: boolean;
    fruitType: string;
    price: number;
}
