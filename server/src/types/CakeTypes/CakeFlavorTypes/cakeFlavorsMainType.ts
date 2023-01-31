import { Document } from "mongoose";
import { ICakeFilling } from "./cakeFillingType";
import { ICakeFlavor } from "./cakeFlavorType";
import { ICakeFrosting } from "./cakeFrostingType";
import { ICakeFruit } from "./cakeFruitType";

export interface ICakeFlavorsMain extends Document {
    id: number;
    flavor: ICakeFlavor;
    filling: ICakeFilling;
    frosting: ICakeFrosting;
    fruit: ICakeFruit;
    totalPrice: number;
}
