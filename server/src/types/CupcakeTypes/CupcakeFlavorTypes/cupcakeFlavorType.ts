import { Document } from "mongoose";

export interface ICupcakeFlavor extends Document {
    id: number;
    flavor: string;
    totalPrice: number;
}
