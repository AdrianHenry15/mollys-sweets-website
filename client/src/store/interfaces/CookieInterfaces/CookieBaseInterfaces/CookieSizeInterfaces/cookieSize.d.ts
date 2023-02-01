import { IMiniCookie } from "./miniCookie";
import { IRegularCookie } from "./regularCookie";

export interface ICookieSize {
    regular: IRegularCookie;
    mini: IMiniCookie;
    totalPrice: number;
}
