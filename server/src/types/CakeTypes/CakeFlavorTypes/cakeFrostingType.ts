import { Document } from "mongoose";

export interface ICakeFrosting extends Document {
    id: number;
    name: string;
    totalPrice: number;
}
