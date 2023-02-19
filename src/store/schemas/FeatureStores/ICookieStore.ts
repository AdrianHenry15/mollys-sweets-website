import { ProductSizes } from "../../constants/Enums";
import { ICategoryDetails } from "../../constants/Interfaces";

export interface ICookieStore {
    base: ICookieCount;
    flavors: ICookieFlavors;
    details: ICategoryDetails;
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

export interface IComputedCookieCosts {
    updateCookieFlavorTotalCost: () => void;
    updateTotalCookieCost: () => void;
}

// interface ICookieCosts {
//     quantityCost: number;
//     flavorsCost: number;
//     frostingsCost: number;
// }
