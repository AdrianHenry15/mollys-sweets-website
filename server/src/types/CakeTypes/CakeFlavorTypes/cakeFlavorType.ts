import { Document } from "mongoose";

export interface ICakeFlavor extends Document {
    id: number;
    name: string;
    totalPrice: number;
}
