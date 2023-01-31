import { ICookieBase } from "./CookieBaseTypes/cookieBase";
import { ICookieFlavor } from "./CookieFlavorTypes/cookieFlavorMain";

export interface ICookie {
    cookieBase: ICookieBase;
    cookieFlavor: ICookieFlavor;
    totalPrice: number;
}
