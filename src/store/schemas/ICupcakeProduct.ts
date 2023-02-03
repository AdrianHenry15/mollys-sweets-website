import { ProductSizes } from "../constants/Enums";

export interface ICupcakeProduct {
    cupcakeCount: ICupcakeCount;
    cupcakeFlavors: ICupcakeFlavors;
    cupcakeCosts: ICupcakeCosts;
}

interface ICupcakeCount {
    size: ProductSizes;
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

// export interface ICupcakeDetails {
//     arrivalDate: Date;
//     ocassionDate: Date;
//     pickupOrDelivery: string;
//     cupcakeOccasion: string;
//     cupcakeRecipient: string;
//     preferredCupcakeColors: string;
//     cupcakeInscription: string;
//     cupcakePhotoExample: string;
//     cupcakeLinkExample: string;
//     additionalCupcakeDetails: string;
// }
