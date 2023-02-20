import { ProductSizes } from "../../constants/Enums";
import { ICategoryDetails } from "../../constants/Interfaces";

export interface ICupcakeStore {
    base: ICupcakeCount;
    flavors: ICupcakeFlavors;
    details: ICategoryDetails;
    // computedCosts: IComputedCupcakeCosts;
}

interface ICupcakeCount {
    size: ProductSizes;
    serves: string;
    quantity: string;
}

interface ICupcakeFlavors {
    flavor: string;
    frosting: string;
}

export interface IComputedCupcakeCosts {
    updateCupcakeFlavorTotalCost: () => void;
    updateTotalCupcakeCost: () => void;
}

// interface ICupcakeCosts {
//     quantityCost: number;
//     flavorsCost: number;
//     frostingsCost: number;
// }
