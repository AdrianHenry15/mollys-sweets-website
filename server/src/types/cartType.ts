import { Document } from "mongoose";
import { IOrder } from "./orderType";

export interface ICart extends Document {
    order: IOrder;
    quantity: number;
}
