import { DeliveryOption, Occasion } from "./Enums";

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

export interface IErrors {
    [key: string]: string[];
}

export interface IValues {
    [key: string]: any;
}
