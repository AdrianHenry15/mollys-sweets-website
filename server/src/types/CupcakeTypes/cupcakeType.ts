import { Document } from "mongoose";
import { ICupcakeBase } from "./CupcakeBaseTypes/cupcakeBaseType";
import { ICupcakeFlavorMain } from "./CupcakeFlavorTypes/cupcakeFlavorMainType";

export interface ICupcake extends Document {
    id: number;
    cupcakeBase: ICupcakeBase;
    cupcakeFlavor: ICupcakeFlavorMain;
    totalPrice: number;
}
