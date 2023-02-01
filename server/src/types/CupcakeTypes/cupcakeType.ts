import { Document } from "mongoose";
import { ICupcakeBase } from "./CupcakeBaseTypes/cupcakeBaseType";
import { ICupcakeFlavorMain } from "./CupcakeFlavorTypes/cupcakeFlavorMainType";

export interface ICupcake extends Document {
    cupcakeBase: ICupcakeBase;
    cupcakeFlavor: ICupcakeFlavorMain;
}
