import { Document } from "mongoose";

export interface ICakeBase extends Document {
    tier: string;
    shape: string;
    size: string;
    feeds: string;
    price: number;
}
