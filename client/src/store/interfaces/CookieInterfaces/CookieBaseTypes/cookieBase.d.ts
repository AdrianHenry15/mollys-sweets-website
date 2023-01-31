import { ICookieQuantity } from "./cookieQuantity";
import { ICookieSize } from "./cookieSize";

export interface ICookieBase {
    id: number;
    size: ICookieSize;
    quantity: ICookieQuantity;
    totalPrice: number;
}
