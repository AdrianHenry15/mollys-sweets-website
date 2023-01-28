export interface ICupcakeComputeds {
    computedCosts: IComputedCupcakeCosts;
}

export interface IComputedCupcakeCosts {
    updateCupcakeFlavorTotalCost: () => void;
    updateTotalCupcakeCost: () => void;
}
