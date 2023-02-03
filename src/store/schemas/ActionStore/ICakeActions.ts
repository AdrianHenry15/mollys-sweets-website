export interface ICakeActions {
    cakeBaseActions: ICakeBaseActions;
    cakeCostActions: ICakeCostActions;
}

export interface ICakeBaseActions {
    updateTier: (tier: string) => void;
    updateShape: (shape: string) => void;
}

export interface ICakeCostActions {
    // change events
    handleCakeSizeCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFrostingCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFillingCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCakeFruitCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// export interface ICakeDetailsActions {
//     // change events
//     handleCakeOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//     handleCakeRecipient: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     handlePreferredCakeColors: (
//         e: React.ChangeEvent<HTMLTextAreaElement>
//     ) => void;
//     handleCakeInscription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//     handleCakePhotoExample: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     handleCakeLinkExample: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//     handleCakeAdditionalDetails: (
//         e: React.ChangeEvent<HTMLTextAreaElement>
//     ) => void;
// }
