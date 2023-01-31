import { Document } from "mongoose";
import { ICupcakeQuantity } from "./CupcakeQuantity/cupcakeQuantityType";
import { ICupcakeSize } from "./CupcakeSize/cupcakeSizeType";

export interface ICupcakeBase extends Document {
    id: number;
    size: ICupcakeSize;
    quantity: ICupcakeQuantity;
    totalPrice: number;
}
