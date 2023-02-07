import {
    CakeShapes,
    CakeTiers,
    DeliveryOption,
    Occasion,
} from "../../constants/Enums";

export interface ICakeStore {
    cakeCosts: ICakeCosts;
    cakeBase: ICakeBase;
    cakeFlavors: ICakeFlavors;
}

interface ICakeCosts {
    tierCost: number;
    sizeCost: number;
    flavorsCost: number;
    frostingsCost: number;
    fillingsCost: number;
    fruitCost: number;
}

interface ICakeBase {
    size: string;
    serves: string;
    shape: CakeShapes;
    tier: CakeTiers;
}

interface ICakeFlavors {
    flavor: string;
    filling: string;
    frosting: string;
    fruit: string;
}
