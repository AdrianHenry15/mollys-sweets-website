import { Document } from "mongoose";

export interface ICupcakeFrosting extends Document {
    frosting: string;
    price: number;
}
