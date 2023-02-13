import { CakeShapes, CakeTiers } from "../../constants/Enums";
import { ICategoryDetails } from "../../constants/Interfaces";

export interface ICakeStore {
    base: ICakeBase;
    flavors: ICakeFlavors;
    details: ICategoryDetails;
}

// interface ICakeCosts {
//     tierCost: number;
//     sizeCost: number;
//     flavorsCost: number;
//     frostingsCost: number;
//     fillingsCost: number;
//     fruitCost: number;
// }

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
