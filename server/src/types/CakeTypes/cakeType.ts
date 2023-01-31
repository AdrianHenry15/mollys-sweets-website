import { Document } from "mongoose";
import { ICakeBase } from "./CakeBaseTypes/cakeBaseType";
import { ICakeFlavor } from "./CakeFlavorTypes/cakeFlavorType";
import { ICakeFlavorsMain } from "./CakeFlavorTypes/cakeFlavorsMainType";

export interface ICake extends Document {
    id: number;
    cakeBase: ICakeBase;
    cakeFlavor: ICakeFlavorsMain;
    totalPrice: number;
}
