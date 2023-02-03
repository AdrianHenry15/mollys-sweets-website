import { CakeShapes, CakeTiers } from "../constants/Enums";

export interface ICakeProduct {
    cakeCosts: ICakeCosts;
    cakeBase: ICakeBase;
    cakeFlavors: ICakeFlavors;
}

export interface ICakeCosts {
    tierCost: number;
    sizeCost: number;
    flavorsCost: number;
    frostingsCost: number;
    fillingsCost: number;
    fruitCost: number;
}

export interface ICakeBase {
    size: string;
    serves: string;
    shape: CakeShapes;
    tier: CakeTiers;
}

export interface ICakeFlavors {
    flavor: string;
    filling: string;
    frosting: string;
    fruit: string;
}
