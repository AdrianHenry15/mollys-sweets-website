import { Document } from "mongoose";

export interface IMiniSize extends Document {
    id: number;
    isSize: boolean;
    feeds: string;
    totalPrice: number;
}
