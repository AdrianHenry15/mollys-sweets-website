import { ICookieQuantity } from "./CookieQuantityInterfaces/cookieQuantity";
import { ICookieSize } from "./CookieSizeInterfaces/cookieSize";

export interface ICookieBase {
    size: ICookieSize;
    quantity: ICookieQuantity;
    totalPrice: number;
}
