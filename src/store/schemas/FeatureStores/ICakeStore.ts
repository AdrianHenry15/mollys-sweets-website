import { CakeShapes, CakeTiers } from "../../constants/Enums";
import { ICategoryDetails, IErrors, IValues } from "../../constants/Interfaces";

export interface ICakeStore {
    base: ICakeBase;
    flavors: ICakeFlavors;
    details: ICategoryDetails;
    // form: ICakeForm;
    // computedCosts: IComputedCakeCosts;
}

// interface ICakeCosts {
//     tierCost: number;
//     sizeCost: number;
//     flavorsCost: number;
//     frostingsCost: number;
//     fillingsCost: number;
//     fruitCost: number;
// }

interface ICakeForm {
    errors: IErrors;
    values: IValues;
    setValues?: (fieldName: string, value: any) => void;
    validate?: (fieldName: string, value: any) => void;
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
