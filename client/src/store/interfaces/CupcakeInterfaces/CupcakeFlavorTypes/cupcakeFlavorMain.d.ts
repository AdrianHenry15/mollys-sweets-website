import { ICupcakeFlavor } from "./cupcakeFlavor";
import { ICupcakeFrosting } from "./cupcakeFrosting";

export interface ICupcakeFlavorMain {
    id: number;
    flavor: ICupcakeFlavor;
    frosting: ICupcakeFrosting;
    totalPrice: number;
}
