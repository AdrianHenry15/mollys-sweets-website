import { Document } from "mongoose";

export interface IOrder extends Document {
    id: number;
    products: string;
    status: string;
}
