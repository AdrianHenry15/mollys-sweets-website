export interface ICupcakeActions {
    cupcakeCountActions: ICupcakeCountActions;
}

export interface ICupcakeCountActions {
    handleCupcakeQuantity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    setCupcakeSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
