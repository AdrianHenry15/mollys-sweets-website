import { Document } from "mongoose";

export interface ICakeFilling extends Document {
    filling: string;
    price: number;
}
