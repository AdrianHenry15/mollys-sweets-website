import { Document } from "mongoose";
import { IOrder } from "./orderType";

export interface ICart extends Document {
    id: number;
    order: IOrder;
    quantity: number;
}
