import { Document } from "mongoose";

export interface ICakeFlavor extends Document {
    name: string;
    price: number;
}
