import { Document } from "mongoose";

export interface ICupcakeQuantity extends Document {
    id: number;
    quantity: string;
    totalPrice: number;
}
