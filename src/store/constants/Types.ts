import { ProductTypes } from "./Enums";

export type Products = {
    id: number;
    product: ProductTypes;
    productName: string;
    price: number;
    productSize?: string;
    productQuantity?: string;
    productServes?: string;
    cakeShape?: string;
    cakeTier?: string;
    imageURL?: string;
    description?: string;
}[];
