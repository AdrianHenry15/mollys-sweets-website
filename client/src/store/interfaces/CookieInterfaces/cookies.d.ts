import { ICookieBase } from "./CookieBaseInterfaces/cookieBase";
import { ICookieFlavorMain } from "./CookieFlavorTypes/cookieFlavorMain";

export interface ICookie {
    cookieBase: ICookieBase;
    cookieFlavor: ICookieFlavorMain;
    totalPrice: number;
}
