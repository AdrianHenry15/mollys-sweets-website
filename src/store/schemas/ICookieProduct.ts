import { ProductSizes } from "../constants/Enums";

export interface ICookieProduct {
    cookieCount: ICookieCount;
    cookieFlavors: ICookieFlavors;
    cookieCosts: ICookieCosts;
}

interface ICookieCount {
    size: ProductSizes;
    serves: string;
    quantity: string;
}

interface ICookieFlavors {
    flavor: string;
    frosting: string;
}

interface ICookieCosts {
    quantityCost: number;
    flavorsCost: number;
    frostingsCost: number;
}
