import { Document } from "mongoose";

export interface ICookieBase extends Document {
    size: string;
    quantity: string;
    feeds: string;
    price: number;
}
