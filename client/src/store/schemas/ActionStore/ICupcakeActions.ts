export interface ICupcakeActions {
    cupcakeCountActions: ICupcakeCountActions;
    cupcakeDetailsActions: ICupcakeDetailsActions;
}

export interface ICupcakeCountActions {
    handleCupcakeQuantityCost: (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    handleCupcakeFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCupcakeFrostingCost: (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    setCupcakeSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICupcakeDetailsActions {
    // change events
    handleCupcakeOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCupcakeRecipient: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePreferredCupcakeColors: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleCupcakePhotoExample: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCupcakeLinkExample: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleCupcakeAdditionalDetails: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}
