import { Document } from "mongoose";

export interface ICupcakeFrosting extends Document {
    id: number;
    frosting: string;
    totalPrice: number;
}
