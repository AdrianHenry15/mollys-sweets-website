import { Document } from "mongoose";

export interface IOrder extends Document {
    id: number;
    product: string;
}
