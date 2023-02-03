import { DeliveryOption, Occasion, Recipient } from "../constants/Enums";

export interface IProductStore {
    category: string;
    totalCost: number;
    details: IProductDetails;
}

export interface IProductDetails {
    arrivalDate: string;
    ocassionDate: string;
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
