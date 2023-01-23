export interface ICakeProduct {
    cakeCosts: ICakeCosts;
    cakeBase: ICakeBase;
    cakeFlavors: ICakeFlavors;
    cakeDetails: ICakeDetails;
}

export interface ICakeCosts {
    tierCost: number;
    sizeCost: number;
    flavorsCost: number;
    frostingsCost: number;
    fillingsCost: number;
    fruitCost: number;
}

export interface ICakeBase {
    size: string;
    serves: string;
    shape: string;
    tier: string;
}

export interface ICakeFlavors {
    flavor: string;
    filling: string;
    frosting: string;
    fruit: string;
}

export interface ICakeDetails {
    cakeOccasion: string;
    cakeRecipient: string;
    preferredColors: string;
    cakeInscription: string;
    cakePhotoExample: string;
    cakeLinkExample: string;
    additionalDetails: string;
}
