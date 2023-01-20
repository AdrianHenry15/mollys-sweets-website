import { CakeShapes, CakeTiers, ProductSizes } from "../constants/Enums";
import { Products } from "../constants/Types";

export interface IProductStore {
    cake: ICakeProduct;
    cupcake: ICupcakeProduct;
    cookie: ICookieProduct;
    totalCost: number;
}

export interface ICakeProduct {
    flavor: string;
    filling: string;
    frosting: string;
    fruit: string;
    size: string;
    serves: string;
    shape: string;
    tier: string;
    sizeCost: number;
    flavorsCost: number;
    cakeBaseCost: number;
}
export interface ICupcakeProduct {
    flavor: string;
    frosting: string;
    size: string;
    serves: string;
    quantity: string;
    flavorsCost: number;
    quantityCost: number;
}
export interface ICookieProduct {
    flavor: string;
    frosting: string;
    size: string;
    serves: string;
    quantity: string;
    flavorsCost: number;
    quantityCost: number;
}
