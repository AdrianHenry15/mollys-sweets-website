import { ProductSizes } from "../../constants/Enums";
import { ICategoryDetails } from "../../constants/Interfaces";

export interface ICupcakeStore {
    base: ICupcakeCount;
    flavors: ICupcakeFlavors;
    details: ICategoryDetails;
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

// interface ICupcakeCosts {
//     quantityCost: number;
//     flavorsCost: number;
//     frostingsCost: number;
// }
