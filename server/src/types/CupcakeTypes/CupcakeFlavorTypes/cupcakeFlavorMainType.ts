import { Document } from "mongoose";
import { ICupcakeFlavor } from "./cupcakeFlavorType";
import { ICupcakeFrosting } from "./cupcakeFrostingType";

export interface ICupcakeFlavorMain extends Document {
    flavor: ICupcakeFlavor;
    frosting: ICupcakeFrosting;
}
