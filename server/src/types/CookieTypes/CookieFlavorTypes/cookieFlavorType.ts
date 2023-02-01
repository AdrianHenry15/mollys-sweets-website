import { Document } from "mongoose";

export interface ICookieFlavor extends Document {
    name: string;
    price: number;
}
