import { Document } from "mongoose";
import { ICookieQuantity } from "./CookieQuantity/cookieQuantityType";
import { ICookieSize } from "./CookieSize/cookieSizeType";

export interface ICookieBase extends Document {
    id: number;
    size: ICookieSize;
    quantity: ICookieQuantity;
    totalPrice: number;
}
