import { Document } from "mongoose";

export interface ICategory extends Document {
    id: number;
    category: string;
    quantity: number;
}
