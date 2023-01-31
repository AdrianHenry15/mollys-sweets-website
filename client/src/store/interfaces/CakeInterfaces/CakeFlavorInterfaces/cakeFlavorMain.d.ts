import { ICakeFilling } from "./cakeFilling";
import { ICakeFlavor } from "./cakeFlavor";
import { ICakeFrosting } from "./cakeFrosting";
import { ICakeFruit } from "./cakeFruit";

export interface ICakeFlavorMain {
    flavor: ICakeFlavor;
    filling: ICakeFilling;
    frosting: ICakeFrosting;
    fruit: ICakeFruit;
    totalPrice: number;
}
