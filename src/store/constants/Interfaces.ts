import { DeliveryOption, Occasion } from "./Enums";

// FOR FEATURE STORES
export interface ICategoryDetails {
    arrivalDate: string;
    deliveryOption: DeliveryOption;
    occasion: Occasion;
    recipient: string;
    checkedState: boolean;
    preferredColors: string;
    inscription?: string;
    photoExample: string;
    linkExample: string;
    additionalDetails: string;
}
