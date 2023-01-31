import { Document } from "mongoose";
import { ICupcakeFlavor } from "./cupcakeFlavorType";
import { ICupcakeFrosting } from "./cupcakeFrostingType";

export interface ICupcakeFlavorMain extends Document {
    id: number;
    flavor: ICupcakeFlavor;
    frosting: ICupcakeFrosting;
    totalPrice: number;
}
