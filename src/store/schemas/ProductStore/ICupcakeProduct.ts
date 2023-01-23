export interface ICupcakeProduct {
    cupcakeCount: ICupcakeCount;
    cupcakeFlavors: ICupcakeFlavors;
    cupcakeCosts: ICupcakeCosts;
}

interface ICupcakeCount {
    size: string;
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
