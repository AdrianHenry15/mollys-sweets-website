import { Document } from "mongoose";

export interface ICupcakeFlavor extends Document {
    flavor: string;
    price: number;
}
