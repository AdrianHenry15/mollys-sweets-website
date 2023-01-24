export interface ICakeComputeds {
    computedCosts: IComputedCakeCosts;
}

export interface IComputedCakeCosts {
    updateCakeBaseCost: () => void;
    updateCakeFlavorsTotalCost: () => void;
    updateTotalCakeCost: () => void;
}
