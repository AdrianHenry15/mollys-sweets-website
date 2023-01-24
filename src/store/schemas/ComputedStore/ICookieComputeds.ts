export interface ICookieComputeds {
    computedCosts: IComputedCookieCosts;
}

export interface IComputedCookieCosts {
    updateCookieFlavorTotalCost: () => void;
    updateTotalCookieCost: () => void;
}
