import { Date, Document } from "mongoose";
import { ICategory } from "./categoryType";

export interface IProduct extends Document {
    category: ICategory;
    dateOfEvent: Date;
    pickUpOrDelivery: string;
    arrivalTime: Date;
    occasion: string;
    recipient: string;
    preferredColors: string;
    additionalDetails: string;
    totalPrice: number;
    linkExample?: string;
    imageURL?: string;
    description?: string;
}
