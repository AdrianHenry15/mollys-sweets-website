import { IMiniCupcake } from "./miniCupcake";
import { IRegularCupcake } from "./regularCupcake";

export interface ICupcakeSize {
    regular: IRegularCupcake;
    mini: IMiniCupcake;
    totalPrice: number;
}
