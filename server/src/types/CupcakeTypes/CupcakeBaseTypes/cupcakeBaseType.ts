import { Document } from "mongoose";

export interface ICupcakeBase extends Document {
    size: string;
    quantity: string;
    feeds: string;
    price: number;
}
