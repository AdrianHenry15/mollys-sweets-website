export interface IProduct {
    id: number;
    category: any;
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
