export interface IProductStore {
    cake: ICakeProduct;
    cupcake: ICupcakeProduct;
    cookie: ICookieProduct;
    totalCost: number;
}

export interface ICakeProduct {
    // cake base
    size: string;
    serves: string;
    shape: string;
    tier: string;
    // base cost
    tierCost: number;
    sizeCost: number;

    // cake flavors
    flavor: string;
    filling: string;
    frosting: string;
    fruit: string;
    //flavors cost
    flavorsCost: number;
    frostingsCost: number;
    fillingsCost: number;
    fruitCost: number;

    // cake details
    cakeOccasion: string;
    cakeRecipient: string;
    preferredColors: string;
    cakeInscription: string;
    cakePhotoExample: string;
    cakeLinkExample: string;
    additionalDetails: string;
}
export interface ICupcakeProduct {
    //cupcake count
    size: string;
    serves: string;
    quantity: string;

    //cupcake flavor
    flavor: string;
    frosting: string;

    //cupcake details
    flavorsCost: number;
    frostingsCost: number;
    quantityCost: number;
}
export interface ICookieProduct {
    //cookie count
    size: string;
    serves: string;
    quantity: string;

    //cookie flavor
    flavor: string;
    frosting: string;

    //cookie details
    flavorsCost: number;
    frostingsCost: number;
    quantityCost: number;
}
