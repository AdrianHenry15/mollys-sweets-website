import { Document } from "mongoose";
import { ICakeBase } from "./CakeBaseTypes/cakeBaseType";
import { ICakeFlavorsMain } from "./CakeFlavorTypes/cakeFlavorsMainType";

export interface ICake extends Document {
    cakeBase: ICakeBase;
    cakeFlavor: ICakeFlavorsMain;
}
