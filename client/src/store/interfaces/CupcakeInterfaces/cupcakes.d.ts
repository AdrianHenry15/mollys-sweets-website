import { ICupcakeBase } from "./CupcakeBaseTypes/cupcakeBase";
import { ICupcakeFlavorMain } from "./CupcakeFlavorTypes/cupcakeFlavorMain";

export interface ICupcake {
    cupcakeBase: ICupcakeBase;
    cupcakeFlavor: ICupcakeFlavorMain;
    totalPrice: number;
}
