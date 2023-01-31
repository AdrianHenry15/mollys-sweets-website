import { Document } from "mongoose";

export interface IRegularSize extends Document {
    id: number;
    isSize: boolean;
    feeds: string;
    totalPrice: number;
}
