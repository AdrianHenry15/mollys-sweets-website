export interface ICookieProduct {
    cookieCount: ICookieCount;
    cookieFlavors: ICookieFlavors;
    cookieCosts: ICookieCosts;
    cookieDetails: ICookieDetails;
}

interface ICookieCount {
    size: string;
    serves: string;
    quantity: string;
}

interface ICookieFlavors {
    flavor: string;
    frosting: string;
}

interface ICookieCosts {
    quantityCost: number;
    flavorsCost: number;
    frostingsCost: number;
}

export interface ICookieDetails {
    cookieOccasion: string;
    cookieRecipient: string;
    preferredCookieColors: string;
    cookieInscription: string;
    cookiePhotoExample: string;
    cookieLinkExample: string;
    additionalCookieDetails: string;
}
