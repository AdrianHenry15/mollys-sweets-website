import { ProductSizes } from "../../constants/Enums";

export interface ICupcakeStore {
    cupcakeCount: ICupcakeCount;
    cupcakeFlavors: ICupcakeFlavors;
    cupcakeCosts: ICupcakeCosts;
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

interface ICupcakeCosts {
    quantityCost: number;
    flavorsCost: number;
    frostingsCost: number;
}
