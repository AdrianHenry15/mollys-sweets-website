export interface ICupcakeProduct {
    cupcakeCount: ICupcakeCount;
    cupcakeFlavors: ICupcakeFlavors;
    cupcakeCosts: ICupcakeCosts;
    cupcakeDetails: ICupcakeDetails;
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

export interface ICupcakeDetails {
    cupcakeOccasion: string;
    cupcakeRecipient: string;
    preferredCupcakeColors: string;
    cupcakeInscription: string;
    cupcakePhotoExample: string;
    cupcakeLinkExample: string;
    additionalCupcakeDetails: string;
}
