import { Document } from "mongoose";
import { IProduct } from "./productType";

export interface IOrder extends Document {
    products: IProduct;
    status: string;
}
