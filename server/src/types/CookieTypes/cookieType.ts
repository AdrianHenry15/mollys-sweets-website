import { Document } from "mongoose";
import { ICookieBase } from "./CookieBaseTypes/cookieBaseType";
import { ICookieFlavorMain } from "./CookieFlavorTypes/cookieFlavorMainType";

export interface ICookie extends Document {
    id: number;
    cookieBase: ICookieBase;
    cookieFlavor: ICookieFlavorMain;
    totalPrice: number;
}
