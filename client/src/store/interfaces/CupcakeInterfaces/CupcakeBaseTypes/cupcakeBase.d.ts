import { ICupcakeQuantity } from "./CupcakeQuantityInterfaces/cupcakeQuantity";
import { IMiniCupcake } from "./CupcakeSizeInterfaces/miniCupcake";
import { IRegularCupcake } from "./CupcakeSizeInterfaces/regularCupcake";

export interface ICupcakeBase {
    regular: IRegularCupcake;
    mini: IMiniCupcake;
    quantity: ICupcakeQuantity;
    totalPrice: number;
}
