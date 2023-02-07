export interface ICakeActions {
    cakeCostActions: ICakeCostActions;
}

export interface ICakeCostActions {
    // change events
    handleCakeSizeCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFrostingCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFillingCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFruitCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
