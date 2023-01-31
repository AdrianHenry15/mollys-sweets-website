import { Document } from "mongoose";

export interface ICookieFlavor extends Document {
    id: number;
    name: string;
    totalPrice: number;
}
