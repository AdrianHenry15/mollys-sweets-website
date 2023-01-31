import { Document } from "mongoose";

export interface ICakeFilling extends Document {
    id: number;
    filling: string;
    totalPrice: number;
}
