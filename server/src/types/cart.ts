import { Document } from "mongoose";

export interface ICart extends Document {
    id: number;
    order: string;
    quantity: number;
}
