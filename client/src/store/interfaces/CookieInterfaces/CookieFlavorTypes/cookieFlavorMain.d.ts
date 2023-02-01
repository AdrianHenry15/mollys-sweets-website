import { ICookie } from "../cookies";
import { ICookieFlavor } from "./cookieFlavor";
import { ICookieFrosting } from "./cookieFrosting";

export interface ICookieFlavorMain {
    flavor: ICookieFlavor;
    frosting: ICookieFrosting;
    totalPrice: number;
}
