import { Document } from "mongoose";

export interface ICookieQuantity extends Document {
    id: number;
    quantity: string;
    feeds: string;
    totalPrice: number;
}
