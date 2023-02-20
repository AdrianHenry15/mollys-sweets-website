import { CakeShapes, CakeTiers } from "../../constants/Enums";
import { ICategoryDetails } from "../../constants/Interfaces";

export interface ICakeStore {
    base: ICakeBase;
    flavors: ICakeFlavors;
    details: ICategoryDetails;
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

export interface IComputedCakeCosts {
    updateCakeBaseCost: () => void;
    updateCakeFlavorsTotalCost: () => void;
    updateTotalCakeCost: () => void;
}
