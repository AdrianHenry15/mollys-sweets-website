import { Document } from "mongoose";
import { IProduct } from "./productType";

export interface IOrder extends Document {
    id: number;
    products: IProduct;
    status: string;
}
