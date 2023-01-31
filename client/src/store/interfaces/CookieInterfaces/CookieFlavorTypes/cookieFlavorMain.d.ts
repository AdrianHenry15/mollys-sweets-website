import { ICookie } from "../cookies";
import { ICookieFrosting } from "./cookieFrosting";

export interface ICookieFlavor {
    id: number;
    flavor: ICookieFlavor;
    frosting: ICookieFrosting;
    totalPrice: number;
}
