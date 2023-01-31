import { Document } from "mongoose";

export interface ICakeSize extends Document {
    id: number;
    cakeSize: string;
    feeds: number;
    totalPrice: number;
}
