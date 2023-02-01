import { Document } from "mongoose";

export interface ICakeFrosting extends Document {
    name: string;
    price: number;
}
